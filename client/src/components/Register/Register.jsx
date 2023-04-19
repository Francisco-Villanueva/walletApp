import React, { useState } from "react";
import { useDispatch } from "react-redux";
import walletimg from "../../img/wallet.png";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/actions";
export default function Register() {
  const dispatch = useDispatch();
  const [exit, setExit] = useState(false);
  const [pwMsj, setPwMsj] = useState(
    "La contraseña debe contener al menos una letra mayúscula y un número."
  );
  const [data, setData] = useState({
    userName: "",
    userEmail: "",
    userPw: "",
  });

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    setExit(exit === true ? false : true);
    setTimeout(() => navigate("/"), 800);
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: data.userName,
      email: data.userEmail,
      pw: data.userPw,
    };
    console.log("New User : ", newUser);
    if (newUser.name !== "" && newUser.email !== "" && newUser.pw !== "") {
      dispatch(createUser(newUser));
    }

    setExit(exit === true ? false : true);
    setTimeout(() => navigate("/"), 500);
  };

  function verificarPassword(password) {
    // expresión regular para verificar la presencia de al menos una letra mayúscula y un número
    var regex = /^(?=.*[A-Z])(?=.*\d)/;

    // comprobar si la contraseña cumple con la expresión regular
    let msj = "";
    if (regex.test(password)) {
      msj = "La contraseña es válida.";
      setPwMsj(msj);
      return true;
    } else {
      setPwMsj(
        "La contraseña debe contener al menos una letra mayúscula y un número."
      );
      return false;
    }
  }

  const [calsePw, setClassPw] = useState(false);
  const [pwCoinciden, setPwCoinciden] = useState(false);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if ([e.target.name] == "userPw") {
      if (verificarPassword(e.target.value)) {
        setClassPw(true);
      } else {
        setClassPw(false);
      }
    }

    if ([e.target.name === "userPw2"]) {
      if (e.target.value == data.userPw && e.target.value != "") {
        setPwCoinciden(true);
      } else {
        setPwCoinciden(false);
      }
    }
  };

  const handleDisable =
    data.userEmail && data.userName && calsePw ? false : true;

  return (
    <div
      className={`login-main-container ${exit ? "slide-out-fwd-center" : ""}`}
    >
      <div className={`login-top focus-in-expand `}>
        <p className="title  ">
          Wallet <b>App</b>
        </p>
        <img className="heartbeat" src={walletimg} alt="walletPNG" />
      </div>
      <div className="login-bottom slide-in-top">
        <div className="login-input">
          <input
            name="userName"
            type="text"
            placeholder="User name"
            onChange={handleInputChange}
          />
          <input
            name="userEmail"
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <input
            name="userPw"
            type="password"
            placeholder="Password"
            className={calsePw ? "pwCumple" : "pwNoCumple"}
            onChange={handleInputChange}
          />
          <span
            className="pwMsj"
            style={calsePw ? { display: "none" } : { visibility: "visible" }}
          >
            {" "}
            {pwMsj}
          </span>
          <input
            name="userPw2"
            type="password"
            className={pwCoinciden ? "pwCumple" : "pwNoCumple"}
            placeholder="Confirm Password"
            onChange={handleInputChange}
          />
        </div>
        <button
          className="register-btn"
          disabled={handleDisable}
          onClick={handleSubmitUser}
        >
          Sign In
        </button>
        <span className="register-option">
          ¿Ya tienes cuenta? <b onClick={handleRegisterClick}>Log In</b>
        </span>
      </div>
    </div>
  );
}
