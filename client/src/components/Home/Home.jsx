import React, { useState } from "react";
import { GASTOS, TYPES, TORTA } from "./data";
import "./Home.css";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Gastos from "./Gastos";
Chart.register(ArcElement);
export default function Home() {
  const [num, setNum] = useState({
    num1: 1,
    num3: 1,
    num2: 1,
  });

  const handleInputChange = (e) => {
    setNum({ ...num, [e.target.name]: e.target.value });
  };

  for (var i = 0; i < TYPES.length; i++) {
    for (var j = 0; j < GASTOS.length; j++) {
      if (GASTOS[j].type === TYPES[i].name) {
        TYPES[i].mount += GASTOS[j].spent;
      }
    }
  }

  let gastosPorType = TYPES.filter((t) => t.mount > 0);

  var total = gastosPorType.reduce((a, b) => a + b.mount, 0);
  let colorOrder = TYPES.sort((a, b) => b.mount - a.mount);
  const DATA = {
    labels: ["Pear", "Papa", "manzana", "remolacha"],
    datasets: [
      {
        data: TYPES.map((t) => t.mount),
        backgroundColor: colorOrder.map((t) => t.color),
        hoverBackgroundColor: ["#cecece"],
      },
    ],
  };

  console.log("gastos hechos: ", gastosPorType, "suma: ", total);
  return (
    <div className="home-main focus-in-expand">
      <section className="top">
        <h1>Abril</h1>
        <h3>$ {total}</h3>
      </section>
      <section className="mid">
        <div className="numbersInputs">
          <input name="num1" type="number" onChange={handleInputChange} />
          <input name="num2" type="number" onChange={handleInputChange} />
          <input name="num3" type="number" onChange={handleInputChange} />
        </div>
        <div className="grafico-cont">
          <Pie data={DATA} options={true} redraw={false} />
        </div>
        <div className="labels-container">
          <Gastos gastos={gastosPorType} />
        </div>
      </section>
      <section className="bottom">BOTTOM</section>
    </div>
  );
}
