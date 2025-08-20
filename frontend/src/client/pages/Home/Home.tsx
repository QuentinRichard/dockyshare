import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';

export default function Home() {
  const cards = [
    { title: 'Card 1', description: 'Description 1', link: '/detail/1' },
    { title: 'Card 2', description: 'Description 2', link: '/detail/2' },
    { title: 'Card 3', description: 'Description 3', link: '/detail/3' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={false} toggleMenu={() => { }} />
      <main className="flex-grow p-4 flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
