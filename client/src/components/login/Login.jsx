import React, { useState } from "react";
import "./Login.css";
import walletimg from "../../img/wallet.png";
import { useNavigate } from "react-router-dom";
import { USERS } from "./data";
import Swal from "sweetalert2";
export default function Login() {
  const [exit, setExit] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    userPw: "",
  });
  const [validPw, setValidPw] = useState(false);
  const navigate = useNavigate();

  const checkUser = (allUsers, userToCheck) => {
    const aux = allUsers.filter((e) => e.userName === userToCheck.userName);

    if (aux.length != 0) {
      if (aux[0].userPw === userToCheck.userPw) {
        setExit(exit === true ? false : true);
        setTimeout(() => navigate("/home"), 1000);
      } else {
        setValidPw(true);
        // alert(`Pw INCO ${aux.userPw}  !=  ${userToCheck.userPW}`);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "User not found!",
        text: "Check username submited",
      });
    }
  };

  const handleExit = () => {
    checkUser(USERS, user);
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegisterClick = () => {
    setExit(exit === true ? false : true);
    setTimeout(() => navigate("/register"), 500);
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
            name="userPw"
            type="password"
            className={validPw ? "pwIncorrect" : "pwCorrect"}
            placeholder="Password"
            onChange={handleInputChange}
          />
          {/* <span className={validPw ? "pwIncorrect" : "pwCorrect"}>
            Incorrect password
          </span> */}
        </div>
        <button onClick={handleExit}>Log In</button>
        <span className="register-option">
          ¿No tienes cuenta? <b onClick={handleRegisterClick}>Sign In</b>
        </span>
      </div>
    </div>
  );
}
