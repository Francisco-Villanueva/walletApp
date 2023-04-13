import React, { useState } from "react";
import walletimg from "../../img/wallet.png";
import "./Register.css";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [exit, setExit] = useState(false);
  const [data, setData] = useState({
    userName: "",
    userEmail: "",
    userPw: "",
  });
  const navigate = useNavigate();
  const handleExit = () => {};
  const handleRegisterClick = () => {
    setExit(exit === true ? false : true);
    setTimeout(() => navigate("/"), 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  function verificarPassword(password) {
    // expresión regular para verificar la presencia de al menos una letra mayúscula y un número
    var regex = /^(?=.*[A-Z])(?=.*\d)/;

    // comprobar si la contraseña cumple con la expresión regular
    if (regex.test(password)) {
      console.log("La contraseña es válida.");
      return true;
    } else {
      console.log(
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
      // verificarPassword(e.target.value);

      if (verificarPassword(e.target.value)) {
        setClassPw(true);
      } else {
        setClassPw(false);
      }
    }

    if ([e.target.name == "userPw2"]) {
      if (e.target.value == data.userPw && e.target.value != "") {
        setPwCoinciden(true);
      } else {
        setPwCoinciden(false);
      }
    }
  };
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
            name="userName"
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
          <input
            name="userPw2"
            type="password"
            className={pwCoinciden ? "pwCumple" : "pwNoCumple"}
            placeholder="Confirm Password"
            onChange={handleInputChange}
          />
          {/* <span className={validPw ? "pwIncorrect" : "pwCorrect"}>
            Incorrect password
          </span> */}
        </div>
        <button onClick={handleExit}>Sign In</button>
        <span className="register-option">
          ¿Ya tienes cuenta? <b onClick={handleRegisterClick}>Log In</b>
        </span>
      </div>
    </div>
  );
}
