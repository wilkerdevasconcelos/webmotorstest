import React from 'react';
import Slider from 'infinite-react-carousel';
import'./index.scss';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.css">


const carousel = () => {
    return(
  <Slider >
    <div>
      <h3><img className="bn" src={require('../assets/banner.jpeg')} /></h3>
    </div>
    <div>
      <h3><img className="bn" src={require('../assets/banner1.jpeg')} /></h3>
    </div>
    <div>
      <h3><img className="bn" src={require('../assets/banner2.jpeg')} /></h3>
    </div>
    <div>
      <h3><img className="bn" src={require('../assets/banner3.jpeg')} /></h3>
    </div>
    
  </Slider>

);
    }
export default carousel;
export { Slider };