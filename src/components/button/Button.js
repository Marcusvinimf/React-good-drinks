import React, { Component } from "react";
import "./Button.css";

const Button = (props) => {

  const [estado, setEstado] = React.useState(false)

  const click = (event) => {
      console.log("Espere 3 segundos para apertar o botão novamente!")
      setEstado(true);
      setTimeout(() => setEstado(false), 3000)
      setTimeout(() => console.log("Vai, pode apertar agora!"), 3000)
  }

  return <button disabled={estado} onClick={click} className="btn">
    {props.children}
  </button>;
};

export default Button;