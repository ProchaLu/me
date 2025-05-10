'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const name = 'Lukas Prochazka';

export default function AnimatedName() {
  return (
    <motion.div className="flex gap-[1px] text-2xl font-bold cursor-pointer">
      <Link href="/" className="flex gap-[1px]">
        {name.split('').map((char, index) => (
          <motion.span
            key={`char-${char}-${Math.random()}`}
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1,
              duration: 1.5,
              delay: index * 0.1,
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Link>
    </motion.div>
  );
}
