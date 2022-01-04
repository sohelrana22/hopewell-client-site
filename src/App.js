import "./App.css";

import Home from "./components/Pages/Home/Home";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Login/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard";

// // AOS Animation Init
// AOS.init();

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
