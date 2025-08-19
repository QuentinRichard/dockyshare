import { useState } from 'react';
import { FaEdit, FaCog, FaChevronDown, FaChevronRight, FaTrash, FaPlus } from 'react-icons/fa';

interface Property {
  id: number;
  name: string;
  parentId: number | null;
  content?: string;
  children?: Property[];
}

interface AdminTreeProps {
  data: Property[];
  onAdd: (parentId: number | null) => void;
  onEdit: (property: Property) => void;
  onDelete: (id: number) => void;
}

export default function AdminTree({ data, onAdd, onEdit, onDelete }: AdminTreeProps) {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [selected, setSelected] = useState<Property | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };

  const selectProperty = (property: Property) => {
    setSelected(property);
  };

  const renderTree = (nodes: Property[]) => (
    <ul className="admin-tree">
      {nodes.map((node) => (
        <li key={node.id}>
          <div className="tree-node">
            {node.children?.length > 0 && (
              <span onClick={() => toggleExpand(node.id)}>
                {expanded[node.id] ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            )}
            <span onClick={() => selectProperty(node)}>{node.name}</span>
            <div className="tree-actions">
              <FaEdit onClick={() => onEdit(node)} className="edit-icon" />
              <FaCog className="admin-icon" />
              <FaTrash onClick={() => onDelete(node.id)} className="delete-icon" />
              <FaPlus onClick={() => onAdd(node.id)} className="add-icon" />
            </div>
          </div>
          {expanded[node.id] && node.children && renderTree(node.children)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="admin-container">
      <button onClick={() => onAdd(null)} className="add-property">
        Ajouter une propriété
      </button>
      {renderTree(data)}
      {selected && (
        <div className="property-content">
          <h3>{selected.name}</h3>
          <p>{selected.content || 'Aucun contenu'}</p>
        </div>
      )}
    </div>
  );
}
