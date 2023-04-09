import Navbar from "./components/Navbar"
import Services from "./pages/Services"
import Product from "./pages/Product"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import { FooterContainer } from "./pages/footer"
// import Footer from "./components/footer/index"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
      <FooterContainer/>
      
     
    </>
  )
}

export default App
