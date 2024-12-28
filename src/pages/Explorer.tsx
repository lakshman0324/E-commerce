import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Loader } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/Button';
import { useProducts } from '../hooks/useProducts';

const categories = ['all', 'men\'s clothing', 'women\'s clothing', 'jewelery', 'electronics'];
const priceRanges = [
  { min: 0, max: 25, label: 'Under $25' },
  { min: 25, max: 50, label: '$25 - $50' },
  { min: 50, max: 100, label: '$50 - $100' },
  { min: 100, max: Infinity, label: 'Over $100' },
];

export const Explorer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category')?.toLowerCase();
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<number[]>([0, Infinity]);
  const [showFilters, setShowFilters] = useState(false);

  const { products, loading, error } = useProducts(
    selectedCategory === 'all' ? undefined : selectedCategory
  );

  const filteredProducts = products.filter(
    (product) =>
      product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]
  );

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Explore Products</h1>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="sm:hidden"
        >
          <Filter className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-8">
        {/* Filters */}
        <div
          className={`${
            showFilters ? 'block' : 'hidden'
          } sm:block w-full sm:w-64 space-y-6`}
        >
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-3 py-2 rounded-md ${
                    selectedCategory === category
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => setSelectedPriceRange([range.min, range.max])}
                  className={`block w-full text-left px-3 py-2 rounded-md ${
                    selectedPriceRange[0] === range.min &&
                    selectedPriceRange[1] === range.max
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};