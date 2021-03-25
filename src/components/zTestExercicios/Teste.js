import React, { Component, useState } from 'react'

const Teste = () => {

  const [productId, setStri] = useState('');
  const [productName, setStri2] = useState('');
  const [linkText, setStri3] = useState('');
  const [productClusters, setStri4] = useState([]);
  const [items, setStri5] = useState([]);

  const [escolhido, setEscolhido] = useState([]);
  console.log("escolhido", escolhido)

  const [final, setFinal] = useState([])

  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId: productId, productName: productName, linkText: linkText, productClusters: productClusters, items: items  })
  };

  const params = "605ab593ff78550015faff8f"
  
  const drinksAle = async () => {
    const response = await fetch(`https://whish-list-back-end.herokuapp.com/produtos/${params}`, requestOptions)
    const dados = await response.json()
    setEscolhido(dados);
  }

  const stri = (valor) => {
    setStri(valor.target.value);
  }
  const stri2 = (valor) => {
    setStri2(valor.target.value);
  }
  const stri3 = (valor) => {
    setStri3(valor.target.value);
  }
  const stri4 = (valor) => {
    setStri4(valor.target.value);
  }
  const stri5 = (valor) => {
    setStri5(valor.target.value);
  }

  const click = () => {
    setEscolhido([ productId ,  productName , linkText , [ productClusters ], [ items] ])
    for (let i = 0; i < escolhido.length; i++) {
      escolhido.map((teste, index) => setFinal(<p key={index}>{teste[i]}</p>))
    }
  }

  return (
    <div style={{ margin: 'auto', width: '300px', padding: '60px 0' }}>
      <label>productId </label>
      <input onChange={stri}></input><br></br><br></br><br></br>

      <label>productName </label>
      <input onChange={stri2}></input><br></br><br></br><br></br>

      <label>linkText </label>
      <input onChange={stri3}></input><br></br><br></br><br></br>

      <label>productClusters </label>
      <input onChange={stri4}></input><br></br><br></br><br></br>

      <label>items </label>
      <input onChange={stri5}></input><br></br><br></br><br></br>

      <button onClick={click}>ADICIONA AO ARRAY</button>
      <button onClick={drinksAle}>ADICIONA AO BANCO</button>

      {final}
    </div>
  )
}

export default Teste
