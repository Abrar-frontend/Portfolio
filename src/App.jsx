import { Route , Routes } from "react-router-dom"
import Footer from "./Component/Footer/Footer"
import Hero from "./Component/HerroSection/About/Hero"
import Resume from "./Component/HerroSection/Resume/Resume"
import Navbar from "./Component/Navbar/Navbar"
import Contact from "./Component/HerroSection/Contant/Contact"
import Project from "./Component/HerroSection/Project/Project"



function App() {


  return (
    <>
   
      <Navbar />
      <Routes>
      <Route path = '/' element = {<Hero />} />
      <Route path = '/resume' element = {  <Resume />} />
      <Route path = '/contact' element = {  <Contact />} />
      <Route path = '/project' element = {  <Project />} />
      </Routes>

      <Footer />
    
    </>
  )
}

export default App
