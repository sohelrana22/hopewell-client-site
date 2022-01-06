import "./App.css";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Login/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Pages/Contact/Contact";
import NotFound from "./components/Pages/NotFound/NotFound";
import About from "./components/Pages/About/About";
import Appointment from "./components/Pages/Appointment/Appointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
