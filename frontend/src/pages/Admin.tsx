import { useEffect, useState } from 'react';
import AdminTree from '../components/AdminTree';

export default function Admin() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const response = await fetch('http://localhost:3001/admin/tree');
    const data = await response.json();
    setProperties(data);
  };

  const handleAdd = async (parentId: number | null) => {
    const name = prompt('Nom de la nouvelle propriété :');
    if (!name) return;
    const response = await fetch('http://localhost:3001/admin/property', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, parentId }),
    });
    if (response.ok) fetchProperties();
  };

  const handleEdit = async (property: any) => {
    const name = prompt('Nouveau nom :', property.name);
    const content = prompt('Nouveau contenu :', property.content);
    if (name === null) return;
    const response = await fetch(`http://localhost:3001/admin/property/${property.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, content }),
    });
    if (response.ok) fetchProperties();
  };

  const handleDelete = async (id: number) => {
    if (confirm('Voulez-vous vraiment supprimer cette propriété ?')) {
      const response = await fetch(`http://localhost:3001/admin/property/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) fetchProperties();
    }
  };

  return (
    <main className="admin">
      <h2>Administration</h2>
      <AdminTree
        data={properties}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </main>
  );
}
