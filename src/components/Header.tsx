//children props

import React from 'react';
type Props = {
  children: string;
};
export const Header = (props: Props) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};
