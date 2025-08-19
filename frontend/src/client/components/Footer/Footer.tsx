import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-sand)] text-[var(--text-color)] p-4 text-center">
      <p>© 2025 Mon Projet. Tous droits réservés.</p>
      <Link to="/mentions-legales" className="text-[var(--primary-green)] hover:underline">
        Mentions légales
      </Link>
    </footer>
  );
}
