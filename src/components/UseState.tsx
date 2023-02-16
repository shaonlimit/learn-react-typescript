import React, { useState } from 'react';
type User = {
  name: string;
  age: number;
};
type AllUser = {
  name: string;
  id: number;
}[];
const UseState = () => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const [user, setUser] = useState<User>({} as User);
  const addUser = () => {
    setUser({ name: 'Shaon', age: 30 });
  };

  const [allUser, setAllUser] = useState([] as AllUser);
  const addAllUser = () => {
    setAllUser([...allUser, { name: 'Shima', id: 1 }]);
  };
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increase</button>
      <h2>Name:{user.name}</h2>
      <button onClick={addUser}>add user</button>
      {allUser.map((user, index) => (
        <h3 key={index}>{user.name}</h3>
      ))}
      <button onClick={addAllUser}>All User</button>
    </>
  );
};

export default UseState;
