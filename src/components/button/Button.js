import React, { Component } from "react";
import "./Button.css";

const Button = (props) => {

  const [estado, setEstado] = React.useState(false)
  const [aviso, setAviso] = React.useState('')

  const click = () => {
    setEstado(true);
    setAviso('aguarde...')
    setTimeout(() => setEstado(false), 3000)
    setTimeout(() => {setAviso('')}, 3000)
  }

  return (
    <>
      <button disabled={estado} onClick={click} className="btn">
        {props.children}
      </button>
      <p className='avisoDoButton'>{aviso}</p>
    </>
  )
};

export default Button;