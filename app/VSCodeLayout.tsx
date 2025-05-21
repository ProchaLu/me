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

  console.log('needs fixing', activeExplorerTab);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar
        isExplorerOpen={isExplorerOpen}
        setIsExplorerOpen={setIsExplorerOpen}
        isTerminalOpen={isTerminalOpen}
        setIsTerminalOpen={setIsTerminalOpen}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar setActiveExplorerTab={setActiveExplorerTab} />
        {isExplorerOpen && <Explorer />}

        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>

      {isTerminalOpen && <Terminal />}
      <Footer />
    </div>
  );
}
