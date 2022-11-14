import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Main from "./components/Main/Main"
import Products from "./components/Products/Products"
import Footer from "./components/Footer/Footer"

export default function App(){
  return(
    <div>
     
      <Navbar/>
      <Hero/>
      <Main/>
      <Products/>
      <Footer/>
    </div>
  )
}