import React from 'react';
import './NossoTime.css';
import imgDoPai from '../../assets/imgs/img4.png';
import ale1 from '../../assets/imgs/pessoaAleatoria1.jpg';
import ale2 from '../../assets/imgs/pessoaAleatoria2.jpg';
import ale3 from '../../assets/imgs/pessoaAleatoria3.jpg';

const NossoTime = () => {
  return (
    <div className='nossoTime'>

      <h2 className='nossoTimeTitulo'>
        Nosso Time
      </h2>

      <div className='nossoTimeCard'>
        <img className='nossoTimeCardImg' src={imgDoPai}></img>
        <div>
          <h3 className='nossoTimeCardNome'>Marcus Vinicius</h3>
          <p className='nossoTimeCardDescricao'><br></br>Desenvolvedor desse site de Bons Drinks.<br></br><br></br> Desenvolvedor full Stack, apesar de ter desenvolvido esse site, mostando seu excelente trabalho com front, sua maior vantagem é com desenvolvimento em back-end.</p>
        </div>
      </div>

      <div className='nossoTimeCard'>
        <img className='nossoTimeCardImg' src={ale1}></img>
        <div>
          <h3 className='nossoTimeCardNome'>Carolina Aoki</h3>
          <p className='nossoTimeCardDescricao'><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit.</p>
        </div>
      </div>

      <div className='nossoTimeCard'>
        <img className='nossoTimeCardImg' src={ale2}></img>
        <div>
          <h3 className='nossoTimeCardNome'>Marina Lima</h3>
          <p className='nossoTimeCardDescricao'><br></br>Augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo.</p>
        </div>
      </div>

      <div className='nossoTimeCard'>
        <img className='nossoTimeCardImg' src={ale3}></img>
        <div>
          <h3 className='nossoTimeCardNome'>Thiago Santos</h3>
          <p className='nossoTimeCardDescricao'><br></br>Integer nec felis sodales, sagittis dolor non, congue libero. Morbi nec fringilla ipsum, ac finibus ligula. Praesent quis iaculis mi, a iaculis odio. Cras quis.</p>
        </div>
      </div>

    </div>
  )
}

export default NossoTime
