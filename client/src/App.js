import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllSpents } from "./redux/actions";

function App() {
  const allSpents = useSelector((state) => state.spents);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSpents());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home spents={allSpents} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
