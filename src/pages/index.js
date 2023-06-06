import NavBar from "../components/NavBar"
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import About from "./about"
import ContactUs from "./contact"
import Content from "./content"
const Main = () => {
    return(
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/"  element={<Content />}/>
                    <Route path="/about" element={<About/>} /> 
                    <Route path="/Contact" element={<ContactUs/>} />
                </Routes>
            </BrowserRouter>
           
                
               
                
            
            
            
           
        </div>
    )
}
export default Main