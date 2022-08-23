import { Content } from './Content.jsx';
import { CardContent } from './CardContent.jsx';

export const PropsSample = () => {
  return (
    <>
      <CardContent cardColor={'lightblue'} cardPadding={'20px'}>
        <ul>
            <Content contentColor={'blue'} text={'コンテンツ1'} />
            <Content contentColor={'red'} text={'コンテンツ2'} />
            <Content contentColor={'green'} text={'コンテンツ3'} />
            <Content contentColor={'blue'} text={'コンテンツ4'} />
        </ul>
      </CardContent>
      <CardContent cardColor={'tomato'} cardPadding={'50px'}>
        カード型のコンポーネントです。
      </CardContent>
    </>
  );
};
