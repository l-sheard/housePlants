import React, { useState } from 'react';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your login logic, e.g., sending data to a server
    console.log('Username:', username);
    console.log('Password:', password);
    // After handling login, you can redirect the user or update state accordingly
  };

  return (
    <div className='border-solid border-2 border-brown font-sans rounded-md p-3 bg-lightGreen'>
    <h2 className='text-brown font-bold'>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center p-3'>
          <label className='text-brown mr-4' htmlFor="username">Username:</label>
          <input
            className='border-2 p-2 border-brown rounded-md text-brown h-10'
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className='flex justify-between items-center p-3'>
          <label className='text-brown mr-4' htmlFor="password">Password:</label>
          <input
            className='border-2 p-2 border-brown rounded-md text-brown h-10'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-brown p-2 rounded-md" type="submit">Login</button>
        </div>
      </div>
    </form>
  </div>
);
};