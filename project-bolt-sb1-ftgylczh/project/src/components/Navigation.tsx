import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white' : 'text-gray-300 hover:text-white';
  };

  return (
    <nav className="mt-4">
      <ul className="flex gap-8 font-light tracking-wider">
        <li>
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={isActive('/portfolio')}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className={isActive('/contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}