import { useState } from 'react';
import { FaEdit, FaCog } from 'react-icons/fa';

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

interface AdminTreeProps {
  data: TreeNode[];
}

export default function AdminTree({ data }: AdminTreeProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (id: string) => {
    const newSet = new Set(expandedNodes);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedNodes(newSet);
  };

  const renderNode = (node: TreeNode, depth = 0) => (
    <div key={node.id} style={{ marginLeft: `${depth * 20}px` }}>
      <div
        className="flex items-center p-2 bg-[var(--sand)] rounded cursor-pointer"
        onClick={() => toggleNode(node.id)}
      >
        <span>{node.name}</span>
        <div className="ml-auto flex gap-2">
          <button>
            <FaEdit className="h-4 w-4 text-[var(--primary-green)]" />
          </button>
          <button>
            <FaCog className="h-4 w-4 text-[var(--primary-green)]" />
          </button>
        </div>
      </div>
      {expandedNodes.has(node.id) && node.children && (
        <div>
          {node.children.map((child) => renderNode(child, depth + 1))}
        </div>
      )}
    </div>
  );

  return <div>{data.map((node) => renderNode(node))}</div>;
}
