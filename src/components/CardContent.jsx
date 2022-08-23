export const CardContent = (props) => {
  const { cardColor, cardPadding, children } = props;
  const styleObject = {
    borderTop : `solid 1px ${cardColor}`,
    borderRight : `solid 1px ${cardColor}`,
    borderBottom : `solid 3px ${cardColor}`,
    borderLeft : `solid 1px ${cardColor}`,
    borderRadius: '3px',
    padding : cardPadding,
    margin : '10px 0',
  }
  return (
      <>
        <div style={styleObject}>{children}</div>
      </>
  );
};
