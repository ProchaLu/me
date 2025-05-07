'use client';

import { useState } from 'react';
import Explorer from './components/Explorer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function VSCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <Navbar
          isExplorerOpen={isExplorerOpen}
          setIsExplorerOpen={setIsExplorerOpen}
        />
      </div>
      <div className="flex flex-1">
        <Sidebar />
        {isExplorerOpen && <Explorer isExplorerOpen={isExplorerOpen} />}
        <main className="flex-1 overflow-auto bg-white p-4 min-w-0">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
