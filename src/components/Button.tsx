//event handler is passed as props

import React from 'react';
type Props = {
  handleClick: () => void;
};

const Button = ({ handleClick }: Props) => {
  return <button onClick={handleClick}>Click</button>;
};

export default Button;
