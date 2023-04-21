import React, { useState } from "react";
import "./Wallet.css";
import NavBar from "../Navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faWallet } from "@fortawesome/free-solid-svg-icons";
import CardSpent from "../Home/Gastos/AllSpents/spentCard/CardSpent";
import { useDispatch } from "react-redux";
import { deleteSpent, getAllSpents } from "../../redux/actions";

export default function Wallet({ spents }) {
  const dispatch = useDispatch();
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      setSelectedCards([...selectedCards, id]);
    } else {
      setSelectedCards(selectedCards.filter((selectedId) => selectedId !== id));
    }
  };
  const handleDeleteSpent = (id) => {
    dispatch(deleteSpent(id));
    dispatch(getAllSpents());
    // dispatch(deleteSpent(id));
  };

  const handleDeleteSelected = () => {
    selectedCards.forEach((id) => handleDeleteSpent(id));
    // deleteCard(selectedCards);
    setSelectedCards([]);
  };

  return (
    <div className="navBar-main">
      <section className="wallet-navbar-container">
        <NavBar />
      </section>

      <section className="wallet-body">
        <div className="wallet-body__div wallet-body__money">
          <div>
            <span>Dinero disponible</span>
            <h3 style={{ margin: 0, fontSize: "2.8rem" }}>$15.678</h3>
          </div>
          <div
            style={{
              textAlign: "end",
            }}
          >
            <button className="ingresarMoney-btn">Ingresar dinero</button>
          </div>
        </div>

        <div className="wallet-body__div wallet-body__actions">
          <div className="wallet-body__actions__div">
            <FontAwesomeIcon icon={faWallet} />
            <span>action</span>
          </div>
          <div className="wallet-body__actions__div">
            <FontAwesomeIcon icon={faWallet} />
            <span>action</span>
          </div>
          <div className="wallet-body__actions__div">
            <FontAwesomeIcon icon={faWallet} />
            <span>action</span>
          </div>
        </div>
        <div className="wallet-body__div wallet-body__activity">
          <div className="activity_header">
            <div>
              <h2 style={{ margin: 0 }}>Actividad</h2>
            </div>
            <div>
              {selectedCards.length > 0 ? (
                <button
                  onClick={handleDeleteSelected}
                  className={`btn-multipleDelete focus-in-expand  }`}
                >
                  {" "}
                  Eliminar seleccionados
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="activity_buscador">
            <FontAwesomeIcon icon={faSearch} />
            <input
              className="activity_buscador__input"
              type="text"
              placeholder="Buscar"
              name=""
              id=""
            />
          </div>
          <div className="activities-container">
            {spents.map((s) => (
              <div
                key={s.id}
                style={{ display: "grid", gridTemplateColumns: ".2fr 7fr" }}
              >
                <input
                  className="allSpents-Cards-Container__checkbox"
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, s.id)}
                />

                <CardSpent spent={s} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
