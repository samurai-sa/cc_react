export const Content = (props) => {
  return (
    <>
      <li style={{color : props.contentColor, borderLeft : 'solid 10px ' + props.contentColor}}>{props.text}</li>
    </>
  );
};
