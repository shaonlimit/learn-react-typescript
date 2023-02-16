//Form event type

import React, { useState } from 'react';
type User = {
  name: string;
  email: string;
};
const FormEventHandler = () => {
  const [user, setUser] = useState<User>({} as User);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Enter name'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Enter email'
          onChange={handleChange}
        />
        <button type='submit'>Create User</button>
      </form>
    </div>
  );
};

export default FormEventHandler;
