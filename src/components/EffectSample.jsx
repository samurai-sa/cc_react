import { useState, useEffect } from "react";

export const EffectSample = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const countUpA = () => {
    if (countA < 100 ) {
      setCountA(countA + 1);
    }
  };
  const countDownA = () => {
    if (countA < 100 ) {
      setCountA(countA - 1);
    }
  };
  const countUpB = () => {
    if (countB < 100 ) {
      setCountB(countB + 1);
    }
  };
  const countDownB = () => {
    if (countB < 100 ) {
      setCountB(countB - 1);
    }
  };
  const buttonStyle = {
    width : '30px',
    height : '30px',
    marginLeft : '5px',
    marginRight : '5px'
  };

  // useEffect: 特定の値が変わったときのみ、設定した関数を実行する hooks
  useEffect(() => {
    console.log('countB が更新されました');
  }, [countB]);

  return (
    <>
      <p>
        <button onClick={countDownA} style={buttonStyle}>-</button>
          カウントA: {countA}
        <button onClick={countUpA} style={buttonStyle} >+</button>
      </p>
      <p>
        <button onClick={countDownB} style={buttonStyle}>-</button>
          カウントB: {countB}
        <button onClick={countUpB} style={buttonStyle} >+</button>
      </p>
    </>
  );
}
