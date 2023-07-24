import NavBar from "../components/NavBar"
import Footer from "../components/FooterBar"
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import About from "./about"
import ContactUs from "./contact"
import Content from "./content"
import Project from "./project"
// import NotFound from "./notFound"
const NotFound = () => {
    return <h1>404 - Page Not Found</h1>;
  };
const Main = () => {
   
    return(
        <div>
            <BrowserRouter>
                <NavBar />
                <Footer />
                <Routes>
                    <Route path="/"  element={<Content />}/>
                    <Route path="/about" element={<About/>} /> 
                    <Route path="/contact" element={<ContactUs/>} />
                    <Route path="/project/:id" element={<Project/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        
           
            {/* <Project/>   */}
            {/* <Content /> */}
                
            
            
            
           
        </div>
    )
}
export default Main