import React from'react';
import './index.scss';


const Box =() =>{
    return(
        <div className="box-draw">
            <ul className="box">
            <li>Comprar Carros</li>
                <li>Comprar Motos</li>
                <li>Quero Vender</li>
                
                <i class="fas fa-search"></i>
                <input type="search" placeholder="Digite marca ou modelo do carro"/>
                <button>Ver Ofertas (418.341)</button>
            </ul>
        </div>
    )
}

export default Box;
    