import React from 'react';
import cl from './RoundButton.module.css';

const RoundButton = ({children, callback}) =>{
  return(
    <button className = {cl.btn}
            onClick   = {()=>callback()}>
      {children}
    </button>
  );
}

export default RoundButton;
