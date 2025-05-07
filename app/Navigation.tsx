'use client';

import { useState } from 'react';
import Explorer from './components/Explorer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function Navigation() {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  return (
    <>
      <Navbar
        isExplorerOpen={isExplorerOpen}
        setIsExplorerOpen={setIsExplorerOpen}
      />
      <div className="flex flex-1">
        <Sidebar />
        <Explorer isExplorerOpen={isExplorerOpen} />
      </div>
    </>
  );
}
