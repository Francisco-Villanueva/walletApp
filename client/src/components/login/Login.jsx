import React, { useState } from "react";
import "./Login.css";
import walletimg from "../../img/wallet.png";

export default function Login() {
  const [exit, setExit] = useState(false);
  const handleExit = () => {
    setExit(true);
  };
  return (
    <div className="login-main-container">
      <div
        className={`login-top focus-in-expand ${
          exit ? "slide-out-fwd-center" : ""
        }`}
      >
        <p className="title  ">
          Wallet <b>App</b>
        </p>
        <img className="heartbeat" src={walletimg} alt="walletPNG" />
      </div>
      <div className="login-bottom slide-in-top">
        <div className="login-input">
          <input type="text" placeholder="User name" />
          <input type="password" placeholder="Password" />
        </div>
        <button onClick={handleExit}>Login</button>
      </div>
    </div>
  );
}
