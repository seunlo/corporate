import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import FooterPage from "./components/FooterPage";
import FoundersHub from "./pages/FoundersHub";
import Footer2 from "./components/Footer2";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founders" element={<FoundersHub />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <FooterPage /> */}
      <Footer2/>
    </BrowserRouter>
  );
}
