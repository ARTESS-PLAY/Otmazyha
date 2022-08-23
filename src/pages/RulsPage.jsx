import React from 'react';
import Wrapper from '../components/Wrapper';
import BackUrl from '../components/UI/BackUrl/BackUrl';

const RulsPage = () =>{
  return(
    <Wrapper>
    <BackUrl>Назад</BackUrl>
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
