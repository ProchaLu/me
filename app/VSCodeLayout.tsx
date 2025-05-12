'use client';

import { useState } from 'react';
import Sidebar from './components/ActivityBar';
import Explorer from './components/Explorer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';

export default function VSCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeExplorerTab, setActiveExplorerTab] = useState<
    'explorer' | 'search' | 'git' | 'debug' | 'extensions' | 'user' | 'settings'
  >('explorer');

  console.log('Active Explorer Tab:', activeExplorerTab);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <Navbar
          isExplorerOpen={isExplorerOpen}
          setIsExplorerOpen={setIsExplorerOpen}
          isTerminalOpen={isTerminalOpen}
          setIsTerminalOpen={setIsTerminalOpen}
        />
      </div>
      <div className="flex flex-1">
        <Sidebar setActiveExplorerTab={setActiveExplorerTab} />
        {isExplorerOpen && <Explorer />}
        <main className="flex-1 overflow-auto bg-white p-4 min-w-0">
          {children}
        </main>
      </div>
      {isTerminalOpen && <Terminal />}
      <Footer />
    </div>
  );
}
