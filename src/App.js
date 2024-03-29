import Navbar from "./components/navbar/Navbar"
import Services from "./pages/Services"
import Product from "./pages/Product"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import { FooterContainer } from "./pages/footer"
import "./styles.css"
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
      <br></br>
      <FooterContainer/>
      
     
    </>
  )
}

export default App
// import Navbar from "./components/navbar/Navbar";
// import Services from "./pages/Services";
// import Product from "./pages/Product";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import { Route, Routes } from "react-router-dom";
// import Contact from "./pages/Contact";
// import { FooterContainer } from "./pages/footer";


// function App() {
//   const pageStyle = {
   
//     background: "linear-gradient(to bottom, #e9ecef,#f8f9fa,#f8f9fa,#dee2e6)",
//   };

//   return (
//     <div style={pageStyle}>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//       <br></br>
//       <FooterContainer />
//     </div>
//   );
// }

// export default App;
