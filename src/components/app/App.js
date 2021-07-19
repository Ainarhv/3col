import sedlogo from '../../icon-sedans.svg';
import suvlogo from '../../icon-suvs.svg'
import luxlogo from '../../icon-luxury.svg'
import './App.css';
import React from 'react';
import {Card}  from '../card/Card.js';

const sedans = {
  title: 'SEDANS',
  logo: sedlogo,
  text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
  bg: 'hsl(31, 77%, 52%)'
}
const suvs = {
  title:'SUVS',
  logo: suvlogo,
  text: 'Take an SUV for its spacious interior, power, and versatility.Perfect for your next family vacation and off-road adventures.',
  bg: 'hsl(184, 100%, 22%)'

}
const luxury = {
  title: 'LUXURY',
  logo: luxlogo,
  text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
  bg: 'hsl(179, 100%, 13%)'
}

const cards = [sedans,suvs,luxury]

class App extends React.Component{
  render(){
    return (
    <div className="App">
        <Card cards={cards}/>
    </div>
  )};
}

export default App;
