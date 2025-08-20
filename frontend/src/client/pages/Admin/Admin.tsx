import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AdminTree from '../../components/AdminTree/AdminTree';

const treeData = [
  {
    id: '1',
    name: 'Propriété 1',
    children: [
      { id: '1-1', name: 'Sous-propriété 1' },
      { id: '1-2', name: 'Sous-propriété 2' },
    ],
  },
  {
    id: '2',
    name: 'Propriété 2',
    children: [
      {
        id: '2-1',
        name: 'Sous-propriété 1',
        children: [{ id: '2-1-1', name: 'Sous-sous-propriété 1' }],
      },
    ],
  },
];

export default function Admin() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow p-4">
        <AdminTree data={treeData} />
      </main>
      <Footer />
    </div>
  );
}
