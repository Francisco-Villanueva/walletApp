import React, { useEffect, useState } from "react";
import { GASTOS, TYPES, TORTA } from "./data";
import "./Home.css";
import { Pie, Doughnut } from "react-chartjs-2";
import Gastos from "./Gastos/Gastos";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpents } from "../../redux/actions";
import NewSpent from "./Gastos/NewSpent/NewSpent";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

export default function Home({ typesSpents }) {
  const allSpents = useSelector((s) => s.spents);

  var total = allSpents.reduce((a, b) => a + b.amount, 0);

  let colorOrder = typesSpents.sort((a, b) => b.mount - a.mount);
  const DATA = {
    labels: colorOrder.map((t) => t.name),
    datasets: [
      {
        label: "Gastos por tipo",
        data: typesSpents.map((t) => t.mount),
        backgroundColor: colorOrder.map((t) => t.color),
        hoverBackgroundColor: ["#cecece"],
        color: "white",
        borderWidht: 0,
      },
    ],
  };

  // console.log("gastos hechos: ", gastosPorType, "\nsuma: ", total);

  return (
    <div className="home-main focus-in-expand">
      <section className="top">
        <h1>Abril</h1>
        <h3>$ {total.toLocaleString("de-DE")}</h3>
      </section>
      <section className="mid">
        <div className="numbersInputs">
          <NewSpent />
        </div>
        <div className="grafico-cont">
          {/* <Pie data={DATA} options={true} redraw={false} /> */}
          <Doughnut data={DATA} options={false} redraw={false} />
        </div>
        <div className="labels-container">
          <Gastos gastos={typesSpents} />
        </div>
      </section>
    </div>
  );
}
