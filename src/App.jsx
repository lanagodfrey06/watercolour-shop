import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Artwork from "./pages/Artwork";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";

function App() {
    return (
    
     <BrowserRouter>
    

       <Navbar />

       <Routes>

         <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/collections" element={<Collections />} />

        <Route path="/contact" element={<Contact />} />

         <Route
           path="/artwork/:id"
           element={<Artwork />}
         />

         <Route path="/about" element={<About />} />
       </Routes>

       <Footer />

     </BrowserRouter>
        );
 }
export default App;

