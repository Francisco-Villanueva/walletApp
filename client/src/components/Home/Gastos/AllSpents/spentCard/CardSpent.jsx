import React from "react";
import "./CardSpent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faArrowLeftLongToLine,
} from "@fortawesome/free-solid-svg-icons";

export default function CardSpent({ spent }) {
  const handleDate = (date) => {
    const fecha = new Date(date);

    const day = fecha.getUTCDate();
    const nombresMeses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const month = nombresMeses[fecha.getUTCMonth()];
    return `${day}, ${month}`;
  };

  console.log(spent.date);

  return (
    <div className="cardSpent-contianer">
      <div className="receptor">
        <FontAwesomeIcon icon={faChartPie} />
        <div lassName="cardSpent-contianer__title">
          <h3 className="destinatario">{spent.name}</h3>
          <span>a {spent.place}</span>
        </div>
      </div>
      <div className="cardSpent-contianer__body">
        <div className="cardSpent-contianer__body__mount">
          <h4>$ {spent.amount.toLocaleString("de-DE")}</h4>
          <span>{handleDate(spent.date)}</span>
        </div>
      </div>
    </div>
  );
}
