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
    descripcion: "",
    paymentProof: null,
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
      descripcion: "",
      paymentProof: null,
    });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setNewGsato((prevFormData) => ({
      ...prevFormData,
      paymentProof: file,
    }));
  };
  return (
    <div className="newSpent-container">
      <h2>Cargar Gasto</h2>
      <div className="form-newspent">
        <div className="form-newSpent-section">
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
        </div>
        <div className="form-newSpent-section form-newSpent-section-mid">
          <div className="newSpent-input-container">
            <label for="Destinatario" className="label-newSpent">
              Destinatario
            </label>
            <input
              name="place"
              onChange={handleInputChange}
              className="newSpent-input"
              type="text"
              placeholder="Destinatario"
              value={newGasto.place}
              id="miInput"
            />
          </div>
          <div className="newSpent-input-container">
            <label for="amount" className="label-newSpent">
              $
            </label>
            <input
              name="amount"
              onChange={handleInputChange}
              className="newSpent-input "
              type="numer"
              placeholder="$"
              value={newGasto.amount}
              id="miInput"
            />
          </div>
          <div className="newSpent-input-container">
            <label for="descripcion" className="label-newSpent">
              Descripcion
            </label>
            <input
              id="miInput"
              name="descripcion"
              onChange={handleInputChange}
              className="newSpent-input descripcion"
              type="numer"
              placeholder="Descripcion"
              value={newGasto.descripcion}
            />
          </div>
          <div className="newSpent-input-container">
            <label for="descripcion" className="label-newSpent">
              Comprobante
            </label>
            <label htmlFor="" className="input-file">
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                style={{ width: "20%", margin: "0" }}
              />
            </label>
          </div>
        </div>
      </div>
      <button className="newSpent-btn" onClick={handleSubmitNewSpent}>
        Submit
      </button>
    </div>
  );
}
