'use client';

import { motion } from 'motion/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import TagCloudWrapper to prevent server-side rendering
const TagCloudWrapper = dynamic(() => import('./TagCloudWrapper'), {
  ssr: false,
  loading: () => null,
});

const roles = ['Fullstack', 'Frontend', 'Backend'];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (roles[index] && subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full h-screen relative overflow-hidden"
    >
      <TagCloudWrapper />

      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <h1
          id="hero"
          className="relative inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-400 -mt-20"
        >
          Lukas Prochazka
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-md bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-400 blur-xl opacity-50"
          />
        </h1>
        <div className="flex items-center justify-center gap-2 text-lg font-medium text-gray-800 mt-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
          </span>
          <span>
            Open for{' '}
            <span className="font-mono">
              {roles[index]?.slice(0, subIndex)}
              <span className="inline-block w-[1ch]">{blink ? '|' : ' '}</span>
            </span>
            roles
          </span>
        </div>
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <div className="animate-bounce text-black drop-shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </motion.section>
  );
}
