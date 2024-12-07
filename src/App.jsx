import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PastWork from "./components/PastWork";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white h-full md:max-w-[80%] md:mx-auto">
   <Header/>
   <BrowserRouter >
   <Navbar/>
   <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/pastwork" element={<PastWork/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/Testimonials" element={<Testimonials/>}/>
    <Route path="/ContactUs" element={<ContactUs/>}/>
   </Routes>

   <Footer/>
   </BrowserRouter>
   
   </div>
  );
}

export default App;
