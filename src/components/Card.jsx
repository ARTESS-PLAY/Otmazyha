import React from 'react';
import bg from '../img/card-bg.jpg';


const Card = ({cardText})=>{
  return(
    <div
      className='card'>
      <div className="front"><img src={bg} alt=""/></div>
    </div>
  );
}

export default Card;
