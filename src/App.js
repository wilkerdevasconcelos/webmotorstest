import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from'./Header';
import Models from'./Models';
import News from './news';
import Slide from './Slide';
import Place from './place';
import Selecty from './selecty';
import Footer from'./footer';
import Grid from'./grid';


function App() {
  return (
    <React.Fragment>
    <Header />
    <Slide />
    <Place/>
    <Models/>
    <News />
    <Selecty/>
    <Grid />
    <Footer/>
    </React.Fragment>
  );
}

export default App;
