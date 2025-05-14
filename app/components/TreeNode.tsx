'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export type TreeNodeType = {
  type: 'folder' | 'file';
  name: string;
  children?: TreeNodeType[];
  path?: string;
  isClickable?: boolean;
  isIgnored?: boolean;
};

type Props = {
  node: TreeNodeType;
  level?: number;
  parentPath?: string;
};

export default function TreeNode({ node, level = 0, parentPath = '' }: Props) {
  const pathname = usePathname();
  const isFolder = node.type === 'folder';
  const key = parentPath ? `${parentPath}/${node.name}` : node.name;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`explorer-${key}`);
    if (saved === 'true') {
      setIsOpen(true);
    }
  }, [key]);

  function handleClick() {
    if (isFolder && node.isClickable !== false) {
      const next = !isOpen;
      setIsOpen(next);
      localStorage.setItem(`explorer-${key}`, String(next));
    }
  }

  const isActive = node.path === pathname;
  const isClickable = node.isClickable !== false;
  const isIgnored = node.isIgnored === true;

  const textColor = isIgnored
    ? 'text-gray-400'
    : isActive
      ? 'bg-blue-100 text-blue-700 font-medium'
      : 'text-gray-700';

  return (
    <div>
      <button
        className={`flex items-center w-full text-left text-sm select-none mb-1 ${textColor} ${
          isClickable ? 'cursor-pointer' : 'cursor-default'
        }`}
        style={{ paddingLeft: level * 12 }}
        onClick={handleClick}
      >
        <span className="mr-1">
          {isFolder ? (
            isOpen ? (
              <span>▼</span>
            ) : (
              <span>▶</span>
            )
          ) : (
            <span className="w-4 inline-block" />
          )}
        </span>
        <span className="mr-2">{isFolder ? '📁' : '📄'}</span>
        {isClickable && node.path ? (
          <Link href={node.path}>
            <span>{node.name}</span>
          </Link>
        ) : (
          <span>{node.name}</span>
        )}
      </button>

      {isFolder && isOpen && (
        <div className="transition-all duration-200 ease-in-out overflow-hidden">
          {node.children?.map((child) => (
            <TreeNode
              key={`child-${child.name}`}
              node={child}
              level={level + 1}
              parentPath={key}
            />
          ))}
        </div>
      )}
    </div>
  );
}
