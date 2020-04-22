import React from 'react';
import './index.scss'


const Navbar = () =>{

    return(
        <div>
            <ul className="list">
            <li>Comprar</li>
                <li>vender</li>
                <li>Serviços</li>
                <li><a href="#">Ajuda</a></li>
                <li>Entrar</li>
                <i class="far fa-heart"></i>
                <i class="far fa-comments"></i>
                <i class="far fa-bell"></i>
            </ul>
        </div>
    )
}

export default Navbar;