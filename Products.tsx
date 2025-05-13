import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

// Product type definition
interface Product {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  category: 'Blinds' | 'Shades';
  type: 'Residential' | 'Commercial' | 'Both';
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    title: 'Roller Blinds',
    description: 'Minimalist and modern design with smooth operation.',
    imgSrc: 'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Blinds',
    type: 'Both'
  },
  {
    id: 2,
    title: 'Venetian Blinds',
    description: 'Classic horizontal slats for adjustable light control.',
    imgSrc: 'https://images.pexels.com/photos/4050421/pexels-photo-4050421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Blinds',
    type: 'Both'
  },
  {
    id: 3,
    title: 'Vertical Blinds',
    description: 'Perfect for large windows and sliding doors.',
    imgSrc: 'https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Blinds',
    type: 'Both'
  },
  {
    id: 4,
    title: 'Wooden Blinds',
    description: 'Natural wood slats for a warm, elegant aesthetic.',
    imgSrc: 'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Blinds',
    type: 'Residential'
  },
  {
    id: 5,
    title: 'Roman Shades',
    description: 'Soft fabric folds for an elegant, sophisticated look.',
    imgSrc: 'https://images.pexels.com/photos/6032283/pexels-photo-6032283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Shades',
    type: 'Residential'
  },
  {
    id: 6,
    title: 'Honeycomb Shades',
    description: 'Energy-efficient cellular design for better insulation.',
    imgSrc: 'https://images.pexels.com/photos/6444268/pexels-photo-6444268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Shades',
    type: 'Both'
  },
  {
    id: 7,
    title: 'Solar Shades',
    description: 'Reduce glare while maintaining views and natural light.',
    imgSrc: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Shades',
    type: 'Both'
  },
  {
    id: 8,
    title: 'Blackout Shades',
    description: 'Complete darkness for bedrooms and media rooms.',
    imgSrc: 'https://images.pexels.com/photos/6444266/pexels-photo-6444266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Shades',
    type: 'Both'
  }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Blinds' | 'Shades'>('All');
  const [selectedType, setSelectedType] = useState<'All' | 'Residential' | 'Commercial'>('All');

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesType = selectedType === 'All' || product.type === selectedType || product.type === 'Both';
    return matchesCategory && matchesType;
  });

  return (
    <div className="pt-20 pb-16 bg-cream-50">
      {/* Header */}
      <div className="bg-purple-800 py-16 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-cream-100 text-center">
            Our Products
          </h1>
          <p className="text-center text-lavender-200 mt-4 max-w-2xl mx-auto text-lg">
            Discover our premium selection of blinds and shades for both residential and commercial spaces.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-cream-100 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-purple-900 mb-4">Filter Products</h2>
          <div className="flex flex-wrap gap-4">
            <div>
              <p className="text-purple-800 mb-2">Product Type:</p>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === 'All' 
                      ? 'bg-purple-700 text-cream-100' 
                      : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                  }`}
                >
                  All
                </button>
                <button 
                  onClick={() => setSelectedCategory('Blinds')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === 'Blinds' 
                      ? 'bg-purple-700 text-cream-100' 
                      : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                  }`}
                >
                  Blinds
                </button>
                <button 
                  onClick={() => setSelectedCategory('Shades')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === 'Shades' 
                      ? 'bg-purple-700 text-cream-100' 
                      : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                  }`}
                >
                  Shades
                </button>
              </div>
            </div>
            
            <div>
              <p className="text-purple-800 mb-2">Usage:</p>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setSelectedType('All')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedType === 'All' 
                      ? 'bg-purple-700 text-cream-100' 
                      : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                  }`}
                >
                  All
                </button>
                <button 
                  onClick={() => setSelectedType('Residential')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedType === 'Residential' 
                      ? 'bg-purple-700 text-cream-100' 
                      : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                  }`}
                >
                  Residential
                </button>
                <button 
                  onClick={() => setSelectedType('Commercial')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedType === 'Commercial' 
                      ? 'bg-purple-700 text-cream-100' 
                      : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                  }`}
                >
                  Commercial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imgSrc={product.imgSrc}
              category={product.category}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-purple-800">No products match your selected filters.</p>
            <Button 
              variant="primary"
              className="mt-4" 
              onClick={() => {
                setSelectedCategory('All');
                setSelectedType('All');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Additional features section */}
      <div className="bg-lavender-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Customization Options
            </h2>
            <p className="text-lg text-purple-800 max-w-2xl mx-auto">
              Make your window treatments uniquely yours with our range of customization options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Materials & Fabrics</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• Premium wood and faux wood</li>
                <li>• Light-filtering fabrics</li>
                <li>• Room-darkening options</li>
                <li>• Moisture-resistant materials</li>
                <li>• Eco-friendly selections</li>
              </ul>
            </div>
            
            <div className="bg-cream-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Colors & Patterns</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• Wide color spectrum</li>
                <li>• Neutral and bold options</li>
                <li>• Custom color matching</li>
                <li>• Textured finishes</li>
                <li>• Designer patterns</li>
              </ul>
            </div>
            
            <div className="bg-cream-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Smart Features</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• Motorized operation</li>
                <li>• Smart home integration</li>
                <li>• Remote control options</li>
                <li>• Programmable settings</li>
                <li>• Voice control compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-purple-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-cream-100 mb-4">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-lg text-lavender-200 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and quote. Our experts will help you select the perfect window treatments for your space.
          </p>
          <Button variant="secondary" size="lg">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;