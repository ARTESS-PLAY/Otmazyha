import React, {useState} from 'react';
import Card from '../components/Card';
import MainCard from '../components/MainCard';
import {TransitionGroup, CSSTransition} from 'react-transition-group';


const CardArr = ({cardArr, removeCard, isMobile})=>{
  const [activeAdded, setActiveAdded] = useState(false)
  return(
    <div className="cardAr">
    <TransitionGroup>
    {cardArr.map((item, index)=>{
      if(index==cardArr.length -1){
        return(
          <CSSTransition
          key={item.id}
          timeout={500}
          className='item'
          onEntered={()=>{
            setActiveAdded(true);
          }}
          onExit={()=>{
            setActiveAdded(false);
          }}
          >
          <MainCard
          cardText={item.content}
          removeCard={removeCard}
          id={item.id}
          added={activeAdded}
          isMobile={isMobile}
          />
          </CSSTransition>
        );
      }
      else{
        return(
          <Card
          cardText={item.content}
          key={item.id}
          />
        );

      }

    })}
    </TransitionGroup>
    </div>
  );
}

export default CardArr;
