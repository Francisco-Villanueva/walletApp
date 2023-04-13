import React from "react";
import "./Gastos.css";
import GastoCard from "./GastoCard";
export default function Gastos({ gastos }) {
  console.log("GASTOS: ", gastos);
  gastos.sort((a, b) => b.mount - a.mount);

  return (
    <div className="gastos-container">
      {gastos.map((m) => (
        <GastoCard name={m.name} mount={m.mount} color={m.color} />
      ))}
    </div>
  );
}
