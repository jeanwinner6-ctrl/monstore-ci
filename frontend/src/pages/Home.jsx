import { Link } from 'react-router-dom';

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Produit Premium 1',
      price: '25,000 FCFA',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      description: 'Un produit de qualité supérieure'
    },
    {
      id: 2,
      name: 'Produit Premium 2',
      price: '35,000 FCFA',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      description: 'Design moderne et élégant'
    },
    {
      id: 3,
      name: 'Produit Premium 3',
      price: '45,000 FCFA',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      description: 'Technologie de pointe'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenue sur MonStore.CI
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Votre destination pour des produits de qualité
          </p>
          <Link
            to="/products"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Découvrir nos produits
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Produits en vedette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-600">
                      {product.price}
                    </span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualité garantie</h3>
              <p className="text-gray-600">
                Tous nos produits sont soigneusement sélectionnés
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Meilleurs prix</h3>
              <p className="text-gray-600">
                Prix compétitifs et offres exceptionnelles
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Paiement sécurisé</h3>
              <p className="text-gray-600">
                Transactions 100% sécurisées et fiables
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
