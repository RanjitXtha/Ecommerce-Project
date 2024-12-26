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

function App() {
  return (
    <div className='flex flex-col min-h-[100vh]'>

        <Router>
        <Header />
        <div className='flex-1'>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route  path="/shop" element={<Shop />} />
            <Route  path="/login" element={<LogIn />} />
            <Route  path="/signup" element={<SignUp />} />
            <Route  path="/about" element={<About/>} />
            <Route  path="/contact" element={<Contact/>} />
            <Route  path="/product/:productId" element={<Product />} />
            <Route  path="/place-order" element={<PlaceOrder/>} />
            <Route  path="/orders" element={<Orders/>} />
            <Route  path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
        </Router>
    </div>   
  )
}

export default App
