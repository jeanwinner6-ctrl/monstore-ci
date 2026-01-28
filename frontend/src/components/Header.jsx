import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-indigo-600">
              MonStore.CI
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
              Accueil
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600 transition">
              Produits
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-indigo-600 transition">
              Panier
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <svg
                className="w-6 h-6 text-gray-700 hover:text-indigo-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
