import React from 'react'
import ReactDOM from 'react-dom/client'
import Componente from './Componente';
import WriteCode from './WriteCode';
import { BrowserRouter , Route,Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'))    
root.render(
<>  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Componente/>}/>
      <Route path='/writecode' element={<WriteCode/>}/>
    </Routes>

    
  </BrowserRouter>
</>
  );

