import React from 'react';
type Props = {
  children: React.ReactNode;
};

export const Oscar = (props: Props) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};
