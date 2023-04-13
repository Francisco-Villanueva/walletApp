import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
