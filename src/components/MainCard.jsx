import React, {useRef, useState, useEffect} from 'react';
import {useSwipeable} from 'react-swipeable';
import bg from '../img/card-bg.jpg';


const MainCard = ({cardText, removeCard, id, added, isMobile})=>{

  let flagTrueSwipe = false;
  const handlers = useSwipeable({
    onSwiped: (e) => {
      if(e.absX>200 || e.absY > 200){
        removeCard(id);
        flagTrueSwipe = true;
      }
      else{
        return 0;
      }

    },
    onSwiping: (e) => {
      refCard.current.style.left = e.deltaX + 'px';
      refCard.current.style.top = e.deltaY + 'px';
    },
    onTouchEndOrOnMouseUp: (e) =>{
      if(flagTrueSwipe){
        return 0;
      }
      refCard.current.style.left = 0 + 'px';
      refCard.current.style.top = 0 + 'px';
    },
    onTap: (e) => {setCardActive(prev=>!prev); console.log('ooops')},
    trackMouse: !isMobile,
    trackTouch: isMobile,
  });

  const [cardActive, setCardActive] = useState(false);

  //привязка реф к обработчику свайпов
  const refCard = useRef(null);
  const refPassthrough = (el) => {
    handlers.ref(el);
    refCard.current = el;
  }


  useEffect(()=>{
    refCard.current.style.left = 0 + 'px';
    refCard.current.style.top = 0 + 'px';
    console.log('hehe');
  }, [])

  return(
    <div
    {...handlers}
    ref={refPassthrough}
      className={`card MainCard ${cardActive? 'card-active' : 'card-disactive'} ${added?'enter-done' :''}`}>
      <div className="front"><img src={bg} alt=""/></div>
      <div className="back">{cardText}</div>
    </div>
  );
}

export default MainCard;
