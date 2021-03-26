import React, { Component } from "react";
import "./Button.css";

const Button = (props) => {

  const [estado, setEstado] = React.useState(false)
  const [aviso, setAviso] = React.useState('')

  const click = () => {
    setEstado(true);
    setAviso('enviando...')
    setTimeout(() => setEstado(false), 3000)
    setTimeout(() => setAviso('ENVIADO'), 2000)
    setTimeout(() => window.location.reload(), 3000)
  }

  return (
    <>
      <button disabled={estado} type="button" onClick={click} className="btn">
        {props.children}
      </button>
      <p className='avisoDoButton'>{aviso}</p>
    </>
  )
};

export default Button;