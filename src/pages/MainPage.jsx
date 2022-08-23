import React from 'react';
import RoundButton from '../components/UI/Buttons/RoundButton';
import Wrapper from '../components/Wrapper';
import {useNavigate} from 'react-router-dom';

const MainPage = () =>{
  const navigate = useNavigate();
  return(
      <Wrapper>
        <h1>Отмазуха</h1>
        <div className='btns'>
          <RoundButton
          callback={()=>{
            navigate('/game');
          }}>
            Играть
          </RoundButton>
          <RoundButton
          callback={()=>{
            navigate('/ruls');
          }}
          >
            Правила
          </RoundButton>
        </div>
      </Wrapper>
  );
}

export default MainPage;
