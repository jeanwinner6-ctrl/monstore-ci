import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MonStore.CI</h3>
            <p className="text-gray-300">
              Votre plateforme e-commerce de confiance pour tous vos besoins.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white transition">
                  Panier
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: contact@monstore.ci<br />
              Téléphone: +225 XX XX XX XX
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; 2026 MonStore.CI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
