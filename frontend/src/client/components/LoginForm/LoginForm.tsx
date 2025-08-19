import { Link } from 'react-router-dom';

export default function LoginForm() {
  return (
    <form className="flex flex-col items-center p-4 bg-[var(--light-text)] rounded-lg shadow-md w-full sm:w-80">
      <input
        type="text"
        placeholder="Identifiant"
        className="p-2 m-2 w-full border rounded"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        className="p-2 m-2 w-full border rounded"
      />
      <div className="flex justify-between w-full p-2">
        <Link to="/cgu" className="text-[var(--primary-green)] hover:underline">
          CGU
        </Link>
      </div>
      <button
        type="submit"
        className="bg-[var(--primary-green)] text-[var(--light-text)] p-2 rounded w-full hover:bg-[var(--secondary-green)]"
      >
        Login
      </button>
      <Link
        to="/mot-de-passe-oublie"
        className="text-[var(--secondary-green)] hover:underline mt-2"
      >
        Mot de passe oublié ?
      </Link>
    </form>
  );
}
