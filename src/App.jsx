import About from "./componentes/About/About"
import Banner from "./componentes/Banner/Banner"
import Contact from "./componentes/Contact/Contact"
import Education from "./componentes/Education/Education"
import Footer from "./componentes/Footer/Footer"
import Navbar from "./componentes/Navbar/Navbar"
import Skills from "./componentes/Skills/Skills"




function App() {
 

  return (
    <>
      <Navbar></Navbar>
       <Banner></Banner>
      <div className="max-w-screen-xl mx-auto px-5">
         <About></About>
         <Education></Education>
         <Skills></Skills>
          
          <Contact></Contact>
      </div>
      <Footer></Footer>
      
    </>
  )
}

export default App
