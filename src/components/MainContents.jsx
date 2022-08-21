export const MainContents = () => {
  const alertMessage = () => {
    alert('ボタンが押されました。');
  };
  return (
    <main>
      <h2>本格的な構造</h2>
      <p>複数の要素です</p>
      <button onClick={alertMessage}>アラートが出ます。</button>
    </main>
  )
}
