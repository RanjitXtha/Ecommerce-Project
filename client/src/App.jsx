import './App.css'
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import LogIn from './Pages/Login';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Orders from './Pages/Orders';
import PlaceOrder from './Pages/PlaceOrder';
import Cart from './Pages/Cart';
import AdminHome from './Pages/AdminHome';
import { ToastContainer, toast } from 'react-toastify'; 
import HomeRoute from './ProtectedRoute/HomeRoute';
import AdminLogin from './Pages/AdminLogin';
import AddProduct from './Pages/AddProduct';
import AdminRoute from './ProtectedRoute/AdminRoute';
import AdminOrders from './Pages/AdminOrders';
import { AdminAuthContext } from './Context/AdminAuthContext';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { ShopContextProvider } from './Context/ShopContext.jsx';

function App() {
  const {admin} = useContext(AdminAuthContext);
  const {user} = useContext(AuthContext);
  return (
    <div className='flex flex-col min-h-[100vh]'>

        <Router>
        <ShopContextProvider>
        <ToastContainer />

        <Header />
        <div className='flex-1'>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route  path="/shop" element={<Shop />} />
            <Route  path="/login" element={<HomeRoute><LogIn /></HomeRoute>} />
            <Route  path="/signup" element={<HomeRoute><SignUp /></HomeRoute>} />
            <Route  path="/about" element={<About/>} />
            <Route  path="/contact" element={<Contact/>} />
            <Route  path="/product/:productId" element={<Product />} />
            <Route  path="/place-order" element={user?<PlaceOrder/>:<LogIn />} />
            <Route  path="/orders" element={<Orders/>} />
            <Route  path="/cart" element={<Cart />} />

            <Route  path="/admin/home" element={<AdminRoute><AdminHome /></AdminRoute> } />
            <Route  path="/admin/orders" element={<AdminRoute><AdminOrders /></AdminRoute> } />
            <Route  path="/admin/login" element={admin?<AdminHome/>:<AdminLogin />} />
            <Route  path="/admin/add-product" element={<AdminRoute><AddProduct /></AdminRoute>} />
          </Routes>
        </div>

        <Footer />
        </ShopContextProvider>
        </Router>
    </div>   
  )
}

export default App
