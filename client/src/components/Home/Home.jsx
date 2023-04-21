import React, { useEffect, useState } from "react";
import "./Home.css";
import { Pie, Doughnut } from "react-chartjs-2";
import Gastos from "./Gastos/Gastos";
import { useSelector, useDispatch } from "react-redux";
import NewSpent from "./Gastos/NewSpent/NewSpent";
import { Chart, ArcElement } from "chart.js";
import NavBar from "../Navbar/NavBar";
import { useLocation, useParams } from "react-router-dom";

Chart.register(ArcElement);

export default function Home({ typesSpents }) {
  const allSpents = useSelector((s) => s.spents);
  const userActual = useSelector((s) => s.actualUser);

  console.log("userActual", userActual);

  var total = allSpents.reduce((a, b) => a + b.amount, 0);

  let colorOrder = typesSpents.sort((a, b) => b.mount - a.mount);
  const DATA = {
    labels: colorOrder.map((t) => t.name),
    color: "white",
    datasets: [
      {
        label: "Gastos por tipo",
        data: typesSpents.map((t) => t.mount),
        backgroundColor: colorOrder.map((t) => t.color),
        hoverBackgroundColor: ["#fff"],
        borderWidht: 0,
        border: "none",
      },
    ],
  };

  // console.log("gastos hechos: ", gastosPorType, "\nsuma: ", total);

  return (
    <div className="home-main">
      <div className="navBar-container">
        <NavBar userName={userActual} />
      </div>
      <div className="home-body">
        <div className="newSpent-main-container">
          <NewSpent />
        </div>
        <div className="mounth-total-container">
          <h1>Abril</h1>
          <h3>$ {total.toLocaleString("de-DE")}</h3>
        </div>
        {allSpents.length === 0 ? (
          <div style={{ display: "grid", placeItems: "center" }}>
            <h2>No hay gastos</h2>
          </div>
        ) : (
          <div className="mid">
            <div className="grafico-cont">
              {/* <Pie data={DATA} options={true} redraw={false} /> */}
              <Doughnut data={DATA} options={false} redraw={false} />
            </div>
            <div className="labels-container">
              <Gastos gastos={typesSpents} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
