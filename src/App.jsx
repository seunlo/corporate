import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import FooterPage from "./components/FooterPage";
import Footer2 from "./components/Footer2";
import Register from "./pages/Register";
import StartUp from "./pages/StartUp";
import { ToastContainer } from "react-toastify";
//import SignUp from "./pages/SignUp";
//import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startup" element={<StartUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route> */}
        {/* <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
      {/* <FooterPage /> */}
      <ToastContainer theme="dark" />
      <Footer2 />
    </BrowserRouter>
  );
}
