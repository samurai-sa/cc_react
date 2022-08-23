import { useState } from "react";

export const StateSample = () => {
  const [message, setMessage] = useState('msg の初期値');

  const changeMessage = () => {
    setMessage('msg を書き換えました。');
  };
  return (
    <>
      <p>{ message }</p>
      <button onClick={changeMessage}> 書き換え</button>
    </>
  )
}
