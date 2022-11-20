import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EstilosGlobais from './componentes/globalStyles';
import Bemvindo from './paginas/home';
import Medidas from './paginas/medidas';
import Mensagens from './paginas/mensagens';
import AdminPage from './componentes/administracao';
import Menu from './componentes/menu';
import DetalhesDevice from './componentes/detalhesDevice';

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
          <Route path='/administracao' element = {<AdminPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
