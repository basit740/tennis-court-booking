import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

// pages
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Booking from "./pages/Booking.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Court-Booking" element={<Booking />} />
      </Routes>

      <Footer />
    </div>
  );
}

//hold on.

export default App;
