'use client';

import TreeNode, { type TreeNodeType } from './TreeNode';

export default function Explorer() {
  const tree: TreeNodeType = {
    type: 'folder',
    name: 'ME',
    children: [
      {
        type: 'folder',
        name: '.next',
        isClickable: false,
        isIgnored: true,
      },
      {
        type: 'folder',
        name: '.vscode',
        isClickable: false,
        isIgnored: true,
      },
      {
        type: 'folder',
        name: 'app',
        isClickable: true,
        children: [
          {
            type: 'file',
            name: 'layout.tsx',
            path: '/layout',
            isClickable: false,
          },
          {
            type: 'file',
            name: 'page.tsx',
            path: '/',
            isClickable: true,
          },
          {
            type: 'file',
            name: 'HeroSection.tsx',
            path: '/#hero',
            isClickable: true,
          },
          {
            type: 'file',
            name: 'AboutMe.tsx',
            path: '/#about-me',
            isClickable: true,
          },
          {
            type: 'file',
            name: 'Skills.tsx',
            path: '/#skills',
            isClickable: true,
          },
          {
            type: 'file',
            name: 'OpenSource.tsx',
            path: '/#open-source',
            isClickable: true,
          },
          {
            type: 'file',
            name: 'ContactMe.tsx',
            path: '/#contact',
            isClickable: true,
          },
          {
            type: 'folder',
            name: 'passwordgame',
            children: [
              {
                type: 'file',
                name: 'page.tsx',
                path: '/passwordgame',
              },
            ],
          },
          {
            type: 'folder',
            name: 'blackjackgame',
            children: [
              {
                type: 'file',
                name: 'page.tsx',
                path: '/blackjackgame',
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <aside className="w-64 min-w-0 bg-gray-100 border-r border-gray-300 p-2 text-sm overflow-y-auto overflow-x-hidden">
      <h2 className="text-sm font-semibold text-gray-600 mb-2">EXPLORER</h2>
      <TreeNode node={tree} />
    </aside>
  );
}
