import React from 'react';

const Wrapper = ({children}) =>{
  return(
    <div className='wr__main'>
      <div className='wr__main__contant'>
        {children}
      </div>
    </div>
  );
}

export default  Wrapper;
