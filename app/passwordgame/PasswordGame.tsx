'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PasswordGame() {
  const [password, setPassword] = useState('');
  const [level, setLevel] = useState(1);

  const router = useRouter();

  const rules = [
    {
      id: 1,
      description: 'Must be at least 5 characters',
      isValid: (pw: string) => pw.length >= 5,
    },
    {
      id: 2,
      description: 'Must include a number',
      isValid: (pw: string) => /\d/.test(pw),
    },
    {
      id: 3,
      description: 'Must include an uppercase letter',
      isValid: (pw: string) => /[A-Z]/.test(pw),
    },
    {
      id: 4,
      description: 'Must include a special character (!@#$%^&*)',
      isValid: (pw: string) => /[!@#$%^&*]/.test(pw),
    },
    {
      id: 5,
      description:
        'The sum of all numbers in the password must be a multiple of 10',
      isValid: (pw: string) => {
        const sum = pw.split('').reduce((acc, char) => {
          if (/\d/.test(char)) {
            acc += parseInt(char, 10);
          }
          return acc;
        }, 0);
        return sum % 10 === 0;
      },
    },
  ];

  useEffect(() => {
    const storedLevel = localStorage.getItem('level');
    const storedPassword = localStorage.getItem('password');

    if (storedLevel) {
      setLevel(Number(storedLevel));
    }

    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);

  const firstFailingIndex = rules.findIndex((r) => !r.isValid(password));
  const unlockedLevel =
    firstFailingIndex === -1 ? rules.length : firstFailingIndex + 1;

  useEffect(() => {
    if (unlockedLevel > level) {
      setLevel(unlockedLevel);
      localStorage.setItem('level', unlockedLevel.toString());
    }
  }, [unlockedLevel, level]);

  useEffect(() => {
    localStorage.setItem('password', password);
  }, [password]);

  const unlockedRules = rules.slice(0, level);
  const ordered = [
    ...unlockedRules.filter((r) => !r.isValid(password)),
    ...unlockedRules.filter((r) => r.isValid(password)),
  ];

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 sm:p-8 flex flex-col gap-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-center">Password Game</h1>
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
        <ul className="space-y-2">
          <AnimatePresence>
            {ordered.map((rule) => {
              const passed = rule.isValid(password);
              return (
                <motion.li
                  key={`rules-${rule.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    passed
                      ? 'bg-green-50 text-green-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {passed ? '✅' : '❌'} {rule.description}
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
        <button
          onClick={() => {
            localStorage.setItem('password', '');
            localStorage.setItem('level', '1');
            router.refresh();
          }}
          className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] active:scale-95 transition-all"
        >
          Clear
        </button>
      </form>
    </div>
  );
}
