import React from 'react';
import './Input.css'

const Input = (props) => {

  const [estado, setEstado] = React.useState(0)

  const change = (valor) => {
    setEstado(valor.target.value.length)
    console.log(valor.target.value)
  }

  return (
    <div>
      <label id={props.id} htmlFor={props.nome} className="inputLabel">{props.children}</label>
      <input type={props.tipo} name={props.nome} onChange={change} className="inputText" />
      {/* <p>Quantidade de caracteres {estado}</p> */}
    </div>
  )
}

export default Input