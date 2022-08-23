import { memo } from 'react';

export const ChildSample = memo((props) => {
  console.log('Child');
  const { count } = props;
  return (
    <>
      <p>子コンポーネント</p>
      <p>{count}</p>
    </>
  )
});
