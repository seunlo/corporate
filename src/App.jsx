import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
