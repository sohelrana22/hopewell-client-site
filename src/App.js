import "./App.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Login/Register";

// // AOS Animation Init
// AOS.init();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
