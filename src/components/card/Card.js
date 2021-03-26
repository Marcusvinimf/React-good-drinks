import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="cardTmg" />
      <h3 className="cardNome">{props.nome}</h3>
      <p className="cardDescri">{props.descri}</p>
    </div>
  );
};

export default Card;