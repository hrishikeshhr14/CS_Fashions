import Carousel from "../components/carousel"
import Contact from "./Contact"
import Product from "./Product"
import Services from "./Services"
import BorderExample from "../components/cards"
import { FooterContainer } from "./footer"
// import Footer from "../react-footer/Footer"

export default function Home() {
  return <div>
    <Carousel/>
    <></>
    <BorderExample/>
    <Product/>
    <Services/>
    <Contact/>
    <FooterContainer/>
  </div>
  
}


