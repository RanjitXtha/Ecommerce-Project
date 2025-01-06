const orderSchema = require('../Schema/orderSchema');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

const addOrder = async(req,res) =>{
    console.log("req recieved");
    const {userId ,items ,amount , address,status , paymentMethod , payment } = req.body;
    const cartItems = JSON.parse(items);
    console.log(cartItems);
    console.log(userId + amount+ address+status +paymentMethod + payment)

    try{
        const order = new orderSchema({
            userId,
            items:cartItems,
            amount,
            address,
            status,
            paymentMethod,
            payment,
        })

        if (paymentMethod === 'eSewa') {
            const eSewaUrl = 'https://rc-epay.esewa.com.np/api/epay/main/v2/form '; 
            const transactionUuid = uuidv4(); // Generate a random UUID
            console.log(transactionUuid);
            const successUrl = 'http://localhost:5173/about-us'; // Success URL
            const failureUrl = 'http://localhost:5173/contact'; // Failure URL
        
            const totalAmount = parseFloat(amount) ; // Example total amount including tax
        
            // Construct the data to be hashed for the signature
            const dataToHash = `total_amount=${totalAmount},transaction_uuid=${transactionUuid},product_code=EPAYTEST`;
        
            // Secret key for hashing (you should replace 'your_secret_key' with your actual secret key)
            const secretKey = '8gBm/:&EnhH.1/q';
        
            // Generate the sha256 hash using the crypto package
            const signature = crypto.createHmac('sha256', secretKey)
                                   .update(dataToHash)
                                   .digest('base64');
        
            // Construct the payment request parameters
            const params = {
              amount: amount,
              failure_url: failureUrl,
              product_delivery_charge: "0",
              product_service_charge: "0",
              product_code: "EPAYTEST",
              signature: signature,
              signed_field_names: "total_amount,transaction_uuid,product_code",
              success_url: successUrl,
              tax_amount: "0", // Example tax amount
              total_amount: totalAmount,
              transaction_uuid: transactionUuid,
            };
        
            try {
              // Redirect user to eSewa payment page with parameters
              console.log("runningg")
              
            //   res.redirect(`${eSewaUrl}?${new URLSearchParams(params).toString()}`);
                res.redirect('/about')
            } catch (error) {
              console.log(error);
              res.json({ success: false, message: error });
            }
          } else {
            console.log("payment not esewa")
            // If payment method is not eSewa, handle other payment methods or save order directly
            saveOrder({ userId, cartItems, amount, address, status, paymentMethod, res });
          }
        // order.save();

        // res.json({success:true,message:'Order added successully'});
        // console.log('successfully added order')
    }catch(error){
        console.log(error);
        res.json({success:false,message:error})
    }
    

}

const getAllOrder = () =>{

}

const getUserOrder = ()=>{

}

module.exports = {addOrder , getAllOrder , getUserOrder};