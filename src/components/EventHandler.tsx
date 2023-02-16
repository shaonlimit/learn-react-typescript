//Even type

import React, { useState } from 'react';

const EventHandler = () => {
  const [name, setName] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const showName = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(name);
  };
  return (
    <div>
      <h1>{name}</h1>
      <input
        type='text'
        placeholder='Enter your name'
        onChange={handleChange}
      />

      <button onClick={showName}>Show Name</button>
    </div>
  );
};

export default EventHandler;
