'use client';

import { useEffect, useState } from 'react';
import AnimatedName from './AnimatedName';

const roles = ['Frontend', 'Backend', 'Fullstack'];

export default function AboutMe() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-black font-mono text-lg">
      Lukas Prochazka
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
      </span>
      <span>
        Currently open for{' '}
        <span className="inline-block transition-opacity duration-700 ease-in-out animate-fade">
          {roles[index]}
        </span>{' '}
        roles
      </span>
    </div>
  );
}
