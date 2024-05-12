import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import FooterPage from "./components/FooterPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FooterPage/>
    </BrowserRouter>
  );
}
