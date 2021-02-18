import './App.css';
import Rodape from './componentes/rodape/Rodape';
import Corpo from './componentes/corpo/Corpo';
import Cabecalho from './componentes/cabeca/Cabecalho';

function App() {
  return (
    <div className="nossoApp">
      <Cabecalho/>
      <Corpo/>
      <Rodape/>
    </div>
  );
}

export default App;