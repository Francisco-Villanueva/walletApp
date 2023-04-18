import React from "react";
import "./Allsents.css";
import { useParams } from "react-router-dom";
import CardSpent from "./spentCard/CardSpent";
export default function Allspents({ spents }) {
  const params = useParams();
  const { type } = params;

  const spents_filter = spents.filter((s) => s.type === type);

  const total = spents_filter.reduce((acc, s) => acc + s.amount, 0);
  // console.log(type, spents_filter);
  return (
    <div className="allSpents-contianer">
      <section className="allSpents-header">
        <div>
          <h1 style={{ margin: 0 }} className="allSpents-contianer__title">
            {type}
          </h1>
          <span>Abril</span>
        </div>
        <div>
          <h1> $ {total.toLocaleString()}</h1>
        </div>
      </section>
      <section className="allSpents-body">
        <h3 className="allSpents-contianer__title">Gastos</h3>
        <div className="allSpents-Cards-Container">
          {spents_filter.map((s) => (
            <CardSpent spent={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
