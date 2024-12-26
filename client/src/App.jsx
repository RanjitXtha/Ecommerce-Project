import './App.css'
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Sections/Header';
import Footer from './Sections/Footer';

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
          </Routes>
        </div>
        <Footer />
        </Router>
    </div>   
  )
}

export default App
