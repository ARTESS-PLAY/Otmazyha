import React from 'react';
import Wrapper from '../components/Wrapper';

const RulsPage = () =>{
  return(
    <Wrapper>
      <div className='textRuls'>
        <h1>Правила игры</h1>
        <p>Игроки тянут карточку(одна на всех).
         После этого каждый придумывает отмазку(нельзя повторяться!).</p>
         <p>У кого, по мнению игроков, самый наихудший ответ - тот выбывает</p>
      </div>
    </Wrapper>
  );
}

export default RulsPage;
