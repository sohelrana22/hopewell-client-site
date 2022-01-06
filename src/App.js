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
<<<<<<< HEAD
=======
=======
import AuthContext from "./context/AuthContext";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Login/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import AddServices from "./components/Dashboard/AddServices/AddServices";
import ManageAppoinment from "./components/Dashboard/ManageAppointMents/ManageAppoinment";
import Payments from "./components/Dashboard/Payments/Payments";
import MyCarts from "./components/Dashboard/MyCarts/MyCarts";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          {/* dashboard route  */}
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="makeadmin" element={<MakeAdmin />} />
            <Route path="addservices" element={<AddServices />} />
            <Route path="manageappoinment" element={<ManageAppoinment />} />
            <Route path="payments" element={<Payments />} />
            <Route path="mycarts" element={<MyCarts />} />
          </Route>
          {/* dashboard route ends  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
>>>>>>> 81faef4b8f47eff9c4d845b32667b71a8d92403b
>>>>>>> 8a9949866a6195786efe019f2b5ff518643b5c16
  );
}

export default App;
