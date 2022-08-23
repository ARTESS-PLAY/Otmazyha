import React from 'react';
import RoundButton from '../Buttons/RoundButton';
import {useNavigate} from 'react-router-dom';
import cl from './BackUrl.module.css';

const BackUrl = ({children}) =>{
  const nav = useNavigate();
  return(
    <div className={cl.backUrl_wrapper}>
    <RoundButton
      callback = {()=>{
        console.log('1212');
        nav('/');
      }}>
      {children}
    </RoundButton>
    </div>
  );
}

export default BackUrl;
