'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const name = 'Lukas Prochazka';

export default function AnimatedName() {
  return (
    <motion.div
      className="flex gap-[1px] text-2xl font-bold cursor-pointer group"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Link href="/" className="flex gap-[1px]">
        {name.split('').map((char, index) => (
          <motion.span
            key={`char-${char}`}
            variants={{
              rest: { color: '#000000', y: 0 },
              hover: {
                color: '#6366f1',
                y: -4,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: index * 0.03,
                },
              },
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
