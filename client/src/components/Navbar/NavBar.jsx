import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserCircle,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import walletimg from "../../img/wallet.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar({ userName }) {
  return (
    <div className="navbar-main">
      <div className="navbar-logo">
        <FontAwesomeIcon icon={faWallet} />
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".25rem",
          }}
        >
          <b>Wallet</b>
          <span style={{ fontSize: ".75rem" }}>app</span>
        </span>
      </div>

      <div className="navbar-links">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <div className="navbar-user">
        <FontAwesomeIcon
          icon={faUserCircle}
          style={{
            fontSize: "2rem",
          }}
        />
        <span style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: ".75rem", fontWeight: "bolder" }}>
            {userName}
          </span>
          <span style={{ fontSize: ".75rem", color: "#fff" }}>$12.450</span>
        </span>
      </div>
    </div>
  );
}
