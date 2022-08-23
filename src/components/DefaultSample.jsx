export const DefaultSample = (props) => {
  const { name, isFirst } = props;
  return (
    <>
      <p>お名前: <input type="text" defaultValue={name} /></p>
      <p>初回訪問: <input type="checkbox" defaultChecked={isFirst} /></p>
    </>
  );
};
