import { useState } from 'react';
import ProductCarousel from '../components/ProductCarousel';
import Button from '../components/Button';
import products from '../data/products.json';

export default function Products() {
  const [showAll, setShowAll] = useState({
    tea: false,
    coffee: false,
    herbal: false,
    instant: false,
  });

  const getVisibleProducts = (category: keyof typeof products, limit = 4) => {
    return showAll[category]
      ? products[category]
      : products[category].slice(0, limit);
  };

  return (
    <>
      <section
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-700/70" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-xl text-white/90">
              Discover our carefully curated collection
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCarousel
            title="Tea Collection"
            products={getVisibleProducts('tea')}
          />
          {!showAll.tea && products.tea.length > 4 && (
            <div className="text-center mb-16">
              <Button
                variant="outline"
                onClick={() => setShowAll({ ...showAll, tea: true })}
              >
                Load More Teas
              </Button>
            </div>
          )}

          <ProductCarousel
            title="Coffee Collection"
            products={getVisibleProducts('coffee')}
          />
          {!showAll.coffee && products.coffee.length > 4 && (
            <div className="text-center mb-16">
              <Button
                variant="outline"
                onClick={() => setShowAll({ ...showAll, coffee: true })}
              >
                Load More Coffees
              </Button>
            </div>
          )}

          <ProductCarousel
            title="Herbal Blends"
            products={getVisibleProducts('herbal')}
          />
          {!showAll.herbal && products.herbal.length > 4 && (
            <div className="text-center mb-16">
              <Button
                variant="outline"
                onClick={() => setShowAll({ ...showAll, herbal: true })}
              >
                Load More Herbal Blends
              </Button>
            </div>
          )}

          <ProductCarousel
            title="Instant Coffee"
            products={getVisibleProducts('instant')}
          />
          {!showAll.instant && products.instant.length > 4 && (
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setShowAll({ ...showAll, instant: true })}
              >
                Load More Instant Coffee
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
