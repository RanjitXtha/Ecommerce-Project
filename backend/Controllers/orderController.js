const orderSchema = require('../Schema/orderSchema');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

const esewaConfig = {
  merchantId: "EPAYTEST", // Replace with your eSewa Merchant ID
  successUrl: "http://localhost:5173/payment-success", //Replace with front-end success route page
  failureUrl: "http://localhost:5173/payment-failure", //Replace with front-end failure route page
  esewaPaymentUrl: "https://rc-epay.esewa.com.np/api/epay/main/v2/form",
  secret: "8gBm/:&EnhH.1/q",
};

const addOrder = async (req, res) => {
  console.log("req received");
  const { userId, items, amount, address, status, paymentMethod, payment } = req.body;
  const cartItems = JSON.parse(items);
  console.log(cartItems);
  console.log(`${userId} ${amount} ${address} ${status} ${paymentMethod} ${payment}`);

  try {
    const order = new orderSchema({
      userId,
      items: cartItems,
      amount,
      address,
      status,
      paymentMethod,
      payment,
    });

    if (paymentMethod === 'eSewa') {
      const transactionUuid = uuidv4(); // Generate a random UUID
      console.log(transactionUuid);
      const parsedAmount = parseFloat(amount);
      const totalAmount = parsedAmount + 100;

      const dataToHash = `total_amount=${totalAmount},transaction_uuid=${transactionUuid},product_code=${esewaConfig.merchantId}`;
      const secretKey = esewaConfig.secret;
      const signature = crypto.createHmac('sha256', secretKey).update(dataToHash).digest('base64');


      // Prepare payment data
    let paymentData = {
      amount: parsedAmount,
      failure_url: esewaConfig.failureUrl,
      product_delivery_charge: "100",
      product_service_charge: "0",
      product_code: esewaConfig.merchantId,
      signature,
      signed_field_names: "total_amount,transaction_uuid,product_code",
      success_url: esewaConfig.successUrl,
      tax_amount: "0",
      total_amount: totalAmount,
      transaction_uuid: transactionUuid,
      
    };

      try {
        const paymentResponse = await fetch(`${esewaConfig.esewaPaymentUrl}?${new URLSearchParams(paymentData)}`, {
          method: 'POST',
        });

        if (paymentResponse.ok) {
          console.log( paymentResponse.url);
          await order.save();
          return res.json({
            success: true,
            orderId: order._id,
            transactionUuid,
            secretKey,
            signature,
            url: paymentResponse.url, // This is the payment URL
          });
        } else {
          console.log("error")
          throw new Error('Payment request failed');
        }
      } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error.message });
        
      }
    } else {
      await order.save();
      return res.json({ success: true, message: 'Order added successfully', orderId: order._id });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};


const getAllOrder = async(req,res) =>{
  try{
  const orders = await orderSchema.find({});
  console.log(orders);
  if(orders){
  res.json({success:true,orders})
  }
  }catch(err){
    console.log(err);
    res.json({success:false,message:err});
  }

}

const getUserOrder = async(req,res)=>{
 const {userId} = req.params;
 console.log(userId);
 const userOrders = await orderSchema.find({userId});
 console.log(userOrders);

}

module.exports = {addOrder , getAllOrder , getUserOrder};