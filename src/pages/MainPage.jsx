import React from 'react';
import RoundButton from '../components/UI/Buttons/RoundButton';
import Wrapper from '../components/Wrapper';
import {useNavigate} from 'react-router-dom';

const MainPage = () =>{
  const navigate = useNavigate();
  return(
      <Wrapper>
        <h1>Отмазуха</h1>
        <div>
          <RoundButton
          callback={()=>{
            navigate('/game');
          }}>
            Начать
          </RoundButton>
        </div>
      </Wrapper>
  );
}

export default MainPage;
