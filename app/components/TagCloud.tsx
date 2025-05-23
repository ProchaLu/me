'use client';

import { useEffect, useRef } from 'react';
import { logos } from '../util/logos';

export default function TagCloud({
  radius = 400,
  maxSpeed = 2,
  initSpeed = 40,
  direction = 135,
  keep = true,
}: {
  radius?: number;
  maxSpeed?: number;
  initSpeed?: number;
  direction?: number;
  keep?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const positions = useRef<
    { x: number; y: number; z: number; scale: number }[]
  >([]);

  const size = 1.5 * radius;
  const depth = 2 * radius;

  function getTransformStyles(
    x: number,
    y: number,
    el: HTMLSpanElement,
    scale: number,
  ) {
    const left = (x - el.offsetWidth / 2).toFixed(2);
    const top = (y - el.offsetHeight / 2).toFixed(2);
    const alpha = Math.min(1, scale * scale - 0.25);
    return {
      transform: `translate3d(${left}px, ${top}px, 0) scale(${scale.toFixed(3)})`,
      opacity: (alpha * 0.5).toFixed(3),
      zIndex: Math.floor(scale * 1000).toString(),
      userSelect: 'none',
      pointerEvents: 'none',
    };
  }

  useEffect(() => {
    const position = [];

    for (let i = 0; i < logos.length; i++) {
      const phi = Math.acos(-1 + (2 * i + 1) / logos.length);
      const theta = Math.sqrt((logos.length + 1) * Math.PI) * phi;
      position.push({
        x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
        y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
        z: (size * Math.cos(phi)) / 2,
        scale: 1,
      });
    }
    positions.current = position;
  }, [size]);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = containerElement.getBoundingClientRect();
      mouse.current.x = (e.clientX - (rect.left + rect.width / 2)) / 5;
      mouse.current.y = (e.clientY - (rect.top + rect.height / 2)) / 5;
    };

    const onMouseOver = () => {
      mouse.current.active = true;
    };
    const onMouseOut = () => {
      mouse.current.active = false;
    };

    containerElement.addEventListener('mousemove', onMouseMove);
    containerElement.addEventListener('mouseover', onMouseOver);
    containerElement.addEventListener('mouseout', onMouseOut);

    return () => {
      containerElement.removeEventListener('mousemove', onMouseMove);
      containerElement.removeEventListener('mouseover', onMouseOver);
      containerElement.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  useEffect(() => {
    const l = Math.PI / 180;
    const mouseX0 = initSpeed * Math.sin(direction * l);
    const mouseY0 = -initSpeed * Math.cos(direction * l);

    mouse.current.x = mouseX0;
    mouse.current.y = mouseY0;

    const animate = () => {
      const mx = mouse.current.x;
      const my = mouse.current.y;

      const a = -(Math.min(Math.max(-my, -size), size) / radius) * maxSpeed;
      const b = (Math.min(Math.max(-mx, -size), size) / radius) * maxSpeed;

      if (!keep && !mouse.current.active) {
        mouse.current.x =
          Math.abs(mx - mouseX0) < 1 ? mouseX0 : (mx + mouseX0) / 2;
        mouse.current.y =
          Math.abs(my - mouseY0) < 1 ? mouseY0 : (my + mouseY0) / 2;
      }

      const angleBasedCoordinates = [
        Math.sin(a * l),
        Math.cos(a * l),
        Math.sin(b * l),
        Math.cos(b * l),
      ];

      positions.current = positions.current.map(({ x, y, z }) => {
        const rx1 = x;
        const ry1 =
          y * angleBasedCoordinates[1] + z * -angleBasedCoordinates[0];
        const rz1 = y * angleBasedCoordinates[0] + z * angleBasedCoordinates[1];

        const rx2 =
          rx1 * angleBasedCoordinates[3] + rz1 * angleBasedCoordinates[2];
        const ry2 = ry1;
        const rz2 =
          rz1 * angleBasedCoordinates[3] - rx1 * angleBasedCoordinates[2];

        const scale = (2 * depth) / (2 * depth + rz2);

        return { x: rx2, y: ry2, z: rz2, scale };
      });

      positions.current.forEach(({ x, y, scale }, i) => {
        const el = itemsRef.current[i];
        if (!el) return;
        const alpha = Math.min(1, scale * scale - 0.25);
        console.log(
          `logo ${i}: scale=${scale.toFixed(2)} opacity=${(alpha * 0.5).toFixed(2)}`,
        );
        Object.assign(el.style, getTransformStyles(x, y, el, scale));
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };
  }, [radius, maxSpeed, initSpeed, direction, keep, size, depth]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 2 * radius,
        height: 2 * radius,
        marginLeft: -radius,
        marginTop: -radius - 60,
        userSelect: 'none',
        pointerEvents: 'none',
        overflow: 'visible',
        zIndex: 0,
      }}
    >
      {logos.map((icon, index) => (
        <span
          key={`logo-${icon.key}`}
          ref={(element) => {
            itemsRef.current[index] = element;
          }}
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate3d(-50%, -50%, 0) scale(1)',
            opacity: 1,
            willChange: 'transform, opacity',
            pointerEvents: 'none',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </span>
      ))}
    </div>
  );
}
