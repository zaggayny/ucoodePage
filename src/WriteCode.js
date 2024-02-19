import React, { useState } from 'react';
import './WriteCode.css'; 
import { RiBarcodeLine } from "react-icons/ri";
import { IoCheckmarkCircleOutline  } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";



const WriteCode = () => {
  const [searchCode, setSearchCode] = useState('');
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchResult, setSearchResult] = useState();

  const products = [
    {
      "id": 1,
      "name": "MOCHILA FROZEN",
      "description": "mochila / carita lentejuelas / lauti te quiero ",
      "price":"$ 20000",
      "codProd": "ABC123"
    },
    {
      "id": 2,
      "name": "fasito",
      "description": "fasito / fly / lauti te quiero ",
      "price":"$ 50000",
      "codProd": "DEF456"
    },
    {
      "id": 3,
      "name": "picador",
      "description": "picador / qsy / lauti te quiero ",
      "price":"$ 70000",
      "codProd": "GHI789"
    },
    {
      "id": 4,
      "name": "santa julia blanco",
      "description": "santa julia blanco / para palmarla / lauti te quiero ",
      "price":"$ 60000",
      "codProd": "JKL012"
    },
    {
      "id": 5,
      "name": "guiso de papa",
      "description": "guiso de papa / ricazo mal/ lauti te quiero ",
      "price":"$ 90000",
      "codProd": "MNO345"
    }
  ];

  const searchPrice = () => {
    const result = products.find(product => product.codProd == searchCode);
    setSearchResult(result);
    setSearchFlag(result != null);
  };

  

  return (
    <div className='divVerga'>
      <div className='container'>
        <div className="textAndIcon">
          <RiBarcodeLine className="codeIcon" />
          <p>Copia los números del código</p>
        </div>




        <div className="search">
          <input
            type="text"
            placeholder='Escribir código'
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
          />
          <button className="prize" onClick={searchPrice} data-bs-toggle="modal" data-bs-target="#exampleModal">Ver precio</button>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                { (searchFlag) ? (
                        //todo lo ok
                        <div className='containerOK'>
                        <IoCheckmarkCircleOutline size="12rem"className='checkok'/>
                        <h1>{searchResult.name}</h1>
                        <p>{searchResult.description}</p>
                        <h2> {searchResult.price}</h2>
                        </div>
                        ) : (
                            //todo lo no ok
                            <div className='containerOK'>
                        <FaRegCircleXmark size="12rem" className='error' />
                        <h1>CÓDIGO INEXISTENTE</h1>
                        <p>Vuelve a escribir el código <br/>correctamente </p>
                        </div>
                            )
                    } 
                </div>
                </div>
            </div>
            </div>
      
      </div>
    </div>
  );
};

export default WriteCode;