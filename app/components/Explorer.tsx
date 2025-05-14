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
            isClickable: true,
          },
          {
            type: 'file',
            name: 'page.tsx',
            path: '/',
            isClickable: true,
          },
          {
            type: 'file',
            name: 'ContactMe.tsx',
            path: '#contactme',
            isClickable: true,
          },
          {
            type: 'folder',
            name: 'projects',
            children: [
              {
                type: 'file',
                name: 'page.tsx',
                path: '/projects',
              },
            ],
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
              {
                type: 'file',
                name: 'README.md',
                path: '/passwordgame/README',
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <aside className="w-64 bg-gray-100 border-r border-gray-300 p-2 text-sm overflow-y-auto">
      <h2 className="text-sm font-semibold text-gray-600 mb-2">EXPLORER</h2>
      <TreeNode node={tree} />
    </aside>
  );
}
