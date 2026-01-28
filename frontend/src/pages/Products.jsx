import { useState } from 'react';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Smartphone XL',
      price: '150,000 FCFA',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      description: 'Smartphone haut de gamme avec caméra 48MP'
    },
    {
      id: 2,
      name: 'Montre connectée',
      price: '75,000 FCFA',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      description: 'Montre intelligente avec suivi d\'activité'
    },
    {
      id: 3,
      name: 'Écouteurs sans fil',
      price: '45,000 FCFA',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      description: 'Audio de qualité premium avec réduction de bruit'
    },
    {
      id: 4,
      name: 'Sac à dos Premium',
      price: '35,000 FCFA',
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      description: 'Sac à dos élégant et fonctionnel'
    },
    {
      id: 5,
      name: 'Chaussures Sport',
      price: '55,000 FCFA',
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      description: 'Confort et style pour vos activités'
    },
    {
      id: 6,
      name: 'Veste en cuir',
      price: '120,000 FCFA',
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
      description: 'Veste en cuir véritable de haute qualité'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'electronics', name: 'Électronique' },
    { id: 'fashion', name: 'Mode' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Nos Produits
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">
                    {product.price}
                  </span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
