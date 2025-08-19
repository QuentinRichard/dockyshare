import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

export default function Card({ title, description, link }: CardProps) {
  return (
    <div className="bg-[var(--light-text)] rounded-lg shadow-md p-4 m-2 w-full sm:w-64">
      <h3 className="text-[var(--primary-green)]">{title}</h3>
      <p>{description}</p>
      <Link to={link} className="text-[var(--secondary-green)] hover:underline">
        Voir plus
      </Link>
    </div>
  );
}
