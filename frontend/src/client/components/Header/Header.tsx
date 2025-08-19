import { FaBars, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-[var(--primary-green)] text-[var(--light-text)] p-4 flex justify-between items-center">
      <div>
        <button>
          <FaBars className="h-6 w-6" />
        </button>
      </div>
      <div>
        <Link to="/login">
          <FaUser className="h-6 w-6" />
        </Link>
      </div>
    </header>
  );
}
