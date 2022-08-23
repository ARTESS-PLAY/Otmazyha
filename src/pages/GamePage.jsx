import React, {useState, useEffect} from 'react';
import Wrapper from '../components/Wrapper';
import BackUrl from '../components/UI/BackUrl/BackUrl';
import CardArr from '../components/CardArr';
import {Server} from '../API/Server';


const GamePage = ()=>{
  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
      .test(navigator.userAgent)) {
        setIsMobile(true);
    }
  }, []);

  const [cardArr, setCardArr] = useState([])
  const [needGenerate, setNeedGenerate] = useState(false)

  function generateCards(){
    let cards = Server.getCards(2);
    setCardArr([...cardArr, ...cards]);
  }
  useEffect(()=>{
    generateCards();
    setNeedGenerate(false)
  }, [needGenerate]);

  function removeCard(cardId){
    setCardArr(cardArr.filter(cardItArr => cardItArr.id !== cardId));
    if(cardArr.length==2){
      setNeedGenerate(true);
    }
  }

  return(
    <Wrapper>
      <BackUrl>Назад</BackUrl>
      <div className="content_game">
        <CardArr
          cardArr={cardArr}
          removeCard={removeCard}
          isMobile={isMobile}
        />
      </div>
    </Wrapper>
  );
}

export default GamePage;
