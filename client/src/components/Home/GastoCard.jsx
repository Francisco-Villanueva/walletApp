import React from "react";
import "./GastoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
export default function GastoCard({ name, mount, color, date, type }) {
  return (
    <div className="gastoCard-cont">
      <div>
        <b style={{ color: color }}>
          {" "}
          <FontAwesomeIcon icon={faWallet} />{" "}
        </b>
        <b>{name}</b>
      </div>
      <b>$ {mount.toLocaleString("de-DE")}</b>
    </div>
  );
}
