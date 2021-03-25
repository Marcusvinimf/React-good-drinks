import React, { useState, useEffect } from 'react'

const useLocalStorage = (link) => {

  const [estadoLocal, setEstadoLocal] = useState([])

  const url = async (link) =>{
    const response = await fetch(link)
    const dados = await response.json();
    const nomeDrink = dados.drinks[0].strDrink
    return setEstadoLocal(nomeDrink)
  }

  useEffect(() => url(link) , [link])

  return estadoLocal;
}

export default useLocalStorage;