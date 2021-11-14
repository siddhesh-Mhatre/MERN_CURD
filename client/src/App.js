import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import About from "./components/About";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/Admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
