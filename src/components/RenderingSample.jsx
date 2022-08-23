import { useState } from "react";
import {ChildSample} from './ChildSample.jsx';

export const RenderingSample = () => {
  const [ count, setCount] = useState(0);
  const displayCount = () => {
    setCount(Number(document.getElementById('number').value));
  }
  console.log('Rendring');
  const doSomething = () => {
    console.log("something");
  }
  return (
    <>
      <input id="number" type="number" defaultValue="0" />
      <button onClick={displayCount}>更新</button>
      <p>カウント：{count}</p>
      <ChildSample count={3} doSomething={doSomething}/>
    </>
  )
}
