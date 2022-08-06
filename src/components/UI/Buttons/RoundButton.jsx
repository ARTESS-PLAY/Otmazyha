import React from 'react';
import cl from './RoundButton.module.css';

const RoundButton = ({children}) =>{
  return(
    <button className = {cl.btn}
            >
      {children}
    </button>
  );
}

export default RoundButton;
