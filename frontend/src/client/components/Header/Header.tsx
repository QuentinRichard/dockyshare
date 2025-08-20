import { FaBars, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header(props: any) { //{ isMenuOpen: boolean, toggleMenu }
  return (
        <nav className="navbar">
            <div className="container flex justify-between items-center">
                <a href="#" className="navbar-brand">MonSite</a>
                <button onClick={props.toggleMenu} className="menu-toggle">
                    <svg className="menu-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div className={`navbar-menu ${props.isMenuOpen ? 'active' : ''}`}>
                    <a href="#" className="navbar-link">Accueil</a>
                    <a href="#" className="navbar-link">Services</a>
                    <a href="#" className="navbar-link">Contact</a>
                </div>
            </div>
        </nav>
  );
}
