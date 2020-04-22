import React, { Component } from "react";
import Slider from 'infinite-react-carousel';
import './index.scss';

const gallery= () => {
  return(
<Slider >
  <div>
    <h1>Categorias</h1>
    <h3><img className="bn" src={require('../assets/categoria.jpeg')} /></h3>
  </div>
  <div>
    <h3><img className="bn" src={require('../assets/categoria2.jpeg')} /></h3>
  </div>
  <div>
    <h3><img className="bn" src={require('../assets/categoria3.jpeg')} /></h3>
  </div>
  <div>
    <h3><img className="bn" src={require('../assets/categoria4.jpeg')} /></h3>
  </div>
  <div>
    <h3><img className="bn" src={require('../assets/categoria5.jpeg')} /></h3>
  </div>
  <div>
    <h3><img className="bn" src={require('../assets/categoria6.jpeg')} /></h3>
  </div>
  <div>
    <h3><img className="bn" src={require('../assets/categoria7.jpeg')} /></h3>
  </div>
</Slider>

);
  }
export default gallery;
export { Slider };