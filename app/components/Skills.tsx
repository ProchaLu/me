'use client';

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../util/cn';
import { techCategories } from '../util/techStack';
import IconHeaderSection from './IconHeaderSection';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    techCategories[0]?.name || 'All',
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({
          width: rect.width,
          height: Math.min(rect.width * 0.8, 500),
        });
        setIsMobile(window.innerWidth < 768);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const displayItems =
    techCategories
      .find((c) => c.name === activeCategory)
      ?.items.map((item) => ({
        ...item,
        category: activeCategory as string,
        categoryColor:
          techCategories.find((c) => c.name === activeCategory)?.color || '',
        categoryBgColor:
          techCategories.find((c) => c.name === activeCategory)?.bgColor || '',
      })) || [];

  return (
    <>
      <IconHeaderSection props={{ id: 'skills' }}>
        <span className="relative mr-3 flex h-10 w-10 items-center justify-center">
          <span className="absolute -inset-2 rounded-full bg-green-500 blur-[16px] opacity-70" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-square-terminal-icon lucide-square-terminal"
          >
            <path d="m7 11 2-2-2-2" />
            <path d="M11 13h4" />
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          </svg>
        </span>
        Skills
      </IconHeaderSection>

      <div className="flex flex-wrap justify-center gap-3">
        {techCategories.map((category) => (
          <button
            key={`category-${category.name}`}
            onClick={() => setActiveCategory(category.name)}
            className={cn(
              'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
              activeCategory === category.name
                ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50',
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {isMobile ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {displayItems.map((tech) => (
            <motion.div
              key={`${tech.name}-${tech.category}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col items-center justify-center"
            >
              <div className="relative w-12 h-12 mb-2">{tech.icon}</div>
              <span className="text-xs font-medium text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative mx-auto"
          style={{ height: containerSize.height }}
        >
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'reverse',
              }}
              className={cn(
                'rounded-full w-32 h-32 flex items-center justify-center',
                'bg-gradient-to-r shadow-lg',
                activeCategory === 'All'
                  ? 'from-gray-800 to-gray-900'
                  : techCategories.find((c) => c.name === activeCategory)
                      ?.color || '',
              )}
            >
              <span className="text-white text-center font-medium px-4">
                {activeCategory || 'Tech Stack'}
              </span>
            </motion.div>
          </div>

          {containerSize.width > 0 &&
            displayItems.map((tech, index) => {
              const totalItems = displayItems.length;
              const angle = (index * (2 * Math.PI)) / totalItems;

              const centerX = containerSize.width / 2;
              const centerY = containerSize.height / 2;
              const radius = Math.min(centerX, centerY) * 0.7;

              const x = Math.cos(angle) * radius + centerX;
              const y = Math.sin(angle) * radius + centerY;

              return (
                <motion.div
                  key={`${tech.name}-${tech.category}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: x,
                    y: y,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    duration: 0.5,
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: 0, top: 0 }}
                >
                  <div
                    className={cn(
                      'rounded-full flex flex-col items-center justify-center p-2 shadow-md',
                      'transition-all duration-300 border-2',
                      'border-white bg-white',
                      'w-24 h-24',
                    )}
                  >
                    <div className="relative w-10 h-10 mb-1">{tech.icon}</div>
                    <span className="text-xs font-medium text-center">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
        </div>
      )}
    </>
  );
}
