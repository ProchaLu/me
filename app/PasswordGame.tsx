'use client';

import { useState } from 'react';

export default function PasswordGame() {
  const [password, setPassword] = useState('');

  return (
    <>
      <h1 className="text-2xl font-bold">Password Game</h1>
      <div className="flex flex-col gap-4">
        Enter the password and press enter...
      </div>
      <div className="flex flex-col gap-4">
        password length: {password.length}
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          className="px-4 py-2 rounded-xl border border-gray-300 shadow-[0_4px_14px_rgba(0,0,0,0.15)] focus:shadow-[0_4px_20px_rgba(0,0,0,0.25)] focus:outline-none transition-shadow"
          value={password}
          onChange={(event) => {
            setPassword(event.currentTarget.value);
          }}
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] active:scale-95 transition-all">
          Submit
        </button>
      </form>
    </>
  );
}
