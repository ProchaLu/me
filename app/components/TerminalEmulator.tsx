'use client';

import { useEffect, useRef, useState } from 'react';
import type { TerminalResponsePost } from '../api/terminal/route';

export default function JsTerminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  async function runTerminalCommand() {
    if (!input.trim()) return;

    const response = await fetch('/api/terminal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: input }),
    });

    const responseBody: TerminalResponsePost = await response.json();

    if ('error' in responseBody) {
      setOutput((prev) => [...prev, `➜  ~ ${input}`, responseBody.error]);
      setInput('');
      return;
    }

    setOutput((prev) => [...prev, `➜  ~ ${input}`, responseBody.code]);
    setInput('');
  }

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
  }, [output]);

  return (
    <div className="bg-[#1e1e1e] text-white font-mono text-sm p-4 h-96 overflow-y-auto rounded-md border border-dark_border shadow-inner">
      {output.map((line) => (
        <div
          key={`line-${line} ${Math.random()}`}
          className="whitespace-pre-wrap text-green-400"
        >
          {line}
        </div>
      ))}

      <div className="flex items-center text-green-400">
        <span className="pr-2">➜ ~</span>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            runTerminalCommand().catch((error) => {
              console.error('Error running terminal command:', error);
            });
          }}
        >
          <input
            value={input}
            onChange={(event) => setInput(event.currentTarget.value)}
            className="flex-1 bg-transparent outline-none text-green-400"
          />
        </form>
      </div>
    </div>
  );
}
