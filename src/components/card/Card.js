import React from 'react'

const Card = (props) => {
  return (
    <div>
      <img className="asDezBebidas" src={props.imagem} />
      <p>{props.nome}</p>
    </div>
  )
}

export default Card
