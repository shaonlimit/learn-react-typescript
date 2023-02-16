//CSS style props

import React from 'react';
type ButtonProps = {
  btnStyle: React.CSSProperties;
};

const StyleComponent = ({ btnStyle }: ButtonProps) => {
  return <button style={btnStyle}>STYLE BUTTON</button>;
};

export default StyleComponent;
