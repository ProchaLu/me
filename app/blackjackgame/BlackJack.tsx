'use client';

import { useState } from 'react';
import Game from './Game';

export default function BlackjackPage() {
  const [balance, setBalance] = useState(1000);

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8 px-4">
          <h1 className="text-4xl font-bold text-gray-800">Blackjack</h1>
          <div className="text-2xl font-semibold text-gray-700">
            Balance: ${balance}
          </div>
        </div>
        <Game balance={balance} setBalance={setBalance} />
      </div>
    </main>
  );
}
