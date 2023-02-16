import React from 'react';
type GreetProps = {
  name: string;
  count: number;
};

export const GreetUser = (props: GreetProps) => {
  return (
    <div>
      <h1>Hello {props.name}, Welcome to TypeScript!</h1>
      <h2>The completed course is: {props.count}</h2>
    </div>
  );
};
