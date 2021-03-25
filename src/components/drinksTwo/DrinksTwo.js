import React, { Component, useEffect, useRef } from 'react';
import {numberContext} from '../zTestExercicios/Contexto';
import useLocalStorage from '../hooks/UseLocalStorage';

const DrinksTwo = () => {
  
  const mudaText = useRef();

  const estadoLocal = useLocalStorage('https://www.thecocktaildb.com/api/json/v1/1/random.php')

  console.log(estadoLocal)
  mudaText.current.textContent = estadoLocal

    // function mudaTextClick() {
  //   fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  //     .then(response => response.json())
  //     .then(data => { mudaText.current.textContent = data})
  // }

  return (
    <div style={{ margin: 'auto', width: '800px' }}>
      <h1 >Aqui</h1>

      <numberContext.Consumer>
        
        {(value)=> <button style={{backgroundColor: `${value}`}}>MUDA AGORA</button>}

      </numberContext.Consumer>

      <h1 ref={mudaText} >aqui que a magica vai acontecer</h1>
    </div>
  )
}

export default DrinksTwo