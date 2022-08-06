import React from 'react';
import cl from './MainPage.module.css';
import RoundButton from '../components/UI/Buttons/RoundButton'

const MainPage = () =>{
  return(
    <div className={cl.main}>
      <div className={cl.main__contant}>
        <h1>Отмазуха</h1>

        <div>
          <RoundButton>Начать</RoundButton>
        </div>

      </div>
    </div>
  );
}

export default MainPage;
