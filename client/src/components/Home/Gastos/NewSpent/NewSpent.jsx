import React from "react";
import "./NewSpent.css";
import { TYPES } from "../../../Home/data";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createSpent, getAllSpents } from "../../../../redux/actions";
export default function NewSpent() {
  const [newGasto, setNewGsato] = useState({
    name: "",
    type: "",
    place: "",
    amount: "",
  });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setNewGsato({ ...newGasto, [e.target.name]: e.target.value });
  };

  const handleSubmitNewSpent = () => {
    dispatch(createSpent(newGasto));
    dispatch(getAllSpents());

    setNewGsato({
      name: "",
      type: "",
      place: "",
      amount: "",
    });
  };
  return (
    <div className="newSpent-container">
      <h2>Cargar Gasto</h2>
      <div className="form-newspent">
        <select
          onChange={handleInputChange}
          className="selectSty"
          name="name"
          id=""
        >
          <option
            style={{
              fontWeight: "900",
              letterSpacing: "5px",
              color: "#fff",
              backgroundColor: "#3c5ba5",
            }}
            value=""
            selected
            disabled
          >
            PAGO
          </option>
          <option value="Pago con QR">Pago con QR</option>
          <option value="Transferencia">Transferencia</option>
          <option value="Efectivo">Efectivo</option>
        </select>
        <select
          onChange={handleInputChange}
          className="selectSty"
          name="type"
          id=""
        >
          <option
            style={{
              fontWeight: "900",
              letterSpacing: "5px",
              color: "#fff",
              backgroundColor: "#3c5ba5",
            }}
            value=""
            selected
            disabled
          >
            TYPE
          </option>
          {TYPES.map((t) => (
            <option value={t.name}>{t.name}</option>
          ))}
        </select>
        <input
          name="place"
          onChange={handleInputChange}
          className="selectSty"
          type="text"
          placeholder="Destinatario"
          value={newGasto.place}
        />

        <input
          name="amount"
          onChange={handleInputChange}
          className="selectSty amount"
          type="numer"
          placeholder="$"
          value={newGasto.amount}
        />
      </div>
      <button className="newSpent-btn" onClick={handleSubmitNewSpent}>
        Submit
      </button>
    </div>
  );
}
