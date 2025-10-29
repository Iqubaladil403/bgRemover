import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import Pricing from "./component/Pricing";

import Navbar from "./Navbar";
import Services from "./Services";
import BgRemove from "./component/BgRemove";
import Gallery from "./component/Gallery";
import Home from "./component/Home";




function App() {
  const [files, setFiles] = useState([]);

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-base-200">
        <Navbar />
        {/* <Carousel/>
        <Services/> */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/BgRemover" element={<BgRemove />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
