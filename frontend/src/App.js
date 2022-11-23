import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EstilosGlobais from './componentes/globalStyles';
import Bemvindo from './paginas/home';
import Medidas from './paginas/medidas';
import Mensagens from './paginas/mensagens';
import Menu from './componentes/menu';
import DetalhesDevice from './componentes/detalhesDevice';
import Admin from './paginas/Admin';


function App() {
  return (
   <Router>
      <EstilosGlobais />
      <Menu />
      <Routes>
          <Route path='/' element = {<Bemvindo />} />
          <Route path='/medidas' element = {<Medidas />} />
          <Route path='/medidas/:id' element = {<DetalhesDevice />} />
          <Route path='/mensagens' element = {<Mensagens />} />
          <Route path='/admin' element = {<Admin />} />
      </Routes>
      
    </Router>
  );
}

export default App;
