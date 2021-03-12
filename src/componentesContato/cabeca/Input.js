import React from 'react';

const Input = (props) => {

  const [estado, setEstado] = React.useState(0)

  const change = (valor) =>{
    setEstado(valor.target.value.length)
    console.log(valor.target.value)
  }

  return (
    <div>
      <label id={props.identifica} htmlFor={props.nome}>{props.children}</label>
      <input type={props.tipo} onChange={change}/>
      <p>Quantidade de caracteres {estado}</p>
    </div>
  )
}

export default Input