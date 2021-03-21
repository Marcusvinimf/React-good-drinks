import React, { Component, useEffect, useRef } from 'react';

const DrinksTwo = () => {
  const mudaText = useRef();

  function mudaTextClick(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {mudaText.current.textContent=data.drinks[0].strDrink})
  }

  return (
    <div>
        <button onClick={mudaTextClick}>MUDA AGORA</button>
        <h1 >olha aqui embixo</h1>
        <h1 ref={mudaText} >aqui que a magica vai acontecer</h1>
    </div>
  )
}

export default DrinksTwo
