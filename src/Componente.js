import React from 'react';
import './style.css'
import { LuPencilLine } from "react-icons/lu";
import { CiBarcode } from "react-icons/ci";
import { Link } from 'react-router-dom';

 const Componente = () => {
return (<>
<div className='content'>         
        <div class="ContainerTitle">
          <h1>Scan View</h1>
          <p>Descubre al instante<br/>con ScanView</p>
        </div> 
     
   
    <div class="contenedorBotones">
        <div class="scan">
            <CiBarcode className="barcode-icon" size="7rem"/>
          <p>Escanear Codigo</p>
        </div>

   
     <Link    to="/writecode" class="links" >
        <div class="write">
            <LuPencilLine className="pencil-icon" size='5rem'/> 
             <p>Escribir Codigo</p>
        </div>
      </Link>
    </div>
</div> 
   
   <div class="FondoAbajo"></div>
  
   
   </>
)};

export default Componente;