import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    if(count < 100){
      setCount(count + 1);
    }
  };
  const countDown = () => {
    if(count > 0){
      setCount(count - 1);
    }
  };
  const buttonStyle = {
    width : '30px',
    height : '30px',
    marginLeft : '5px',
    marginRight : '5px'
  };
  return (
    <>
      <p>
        <button onClick={countDown} style={buttonStyle}>-</button>
          カウント: {count}
        <button onClick={countUp} style={buttonStyle} >+</button>
      </p>
    </>
  );
};
