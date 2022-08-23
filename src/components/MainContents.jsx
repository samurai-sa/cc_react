import { PropsSample } from './PropsSample.jsx';
import { StateSample } from './StateSample.jsx';
import { Counter } from './Counter.jsx';
import { EffectSample } from './EffectSample.jsx';

export const MainContents = () => {
  const alertMessage = () => {
    alert('ボタンが押されました。');
  };
  return (
    <main>
      <h2>本格的な構造</h2>
      <p>複数の要素です。</p>
      <button onClick={alertMessage}>アラートが出ます。</button>
      <PropsSample />
      <StateSample />
      <Counter />
      <EffectSample />
  </main>
  );
};
