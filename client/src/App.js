import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllSpents, getSpentsByTypes } from "./redux/actions";
import Allspents from "./components/Home/Gastos/AllSpents/Allspents";

function App() {
  const allSpents = useSelector((state) => state.spents);
  const spentsByType = useSelector((state) => state.spentsByTypes);

  const spentsByType_filter = spentsByType.filter((s) => s.mount > 0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpentsByTypes());
    dispatch(getAllSpents());
  }, [allSpents.length, 1]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<Home typesSpents={spentsByType_filter} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/allSpents/:type"
          element={<Allspents spents={allSpents} />}
        />
      </Routes>
    </div>
  );
}

export default App;
