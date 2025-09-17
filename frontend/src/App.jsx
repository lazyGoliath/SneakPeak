import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import './App.css'
import Header from './components/header'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Registration'
import Footer from './components/footer'
import Contact from './Pages/Contact/index.jsx'
import About from './Pages/About/index.jsx'
import Services from './Pages/Services/index.jsx'
import ProductDetail from './Pages/ProductDetail/index.jsx'
import Cart from './Pages/Cart';
import Navbar from './components/Navbar';

function App() {

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      <Footer />
      </Router>
    </CartProvider>
    // </>
  )
}

export default App
