import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export default function ProductCarousel({ title, products }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const hasLeft = container.scrollLeft > 0;
      const hasRight = container.scrollLeft < container.scrollWidth - container.clientWidth - 10;
      
      setCanScrollLeft(hasLeft);
      setCanScrollRight(hasRight);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  useEffect(() => {
    checkScroll();
    const onResize = () => checkScroll();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gold-400">{title}</h2>
        {/* Navigation arrows at top right */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`p-2 rounded-full transition-all ${
              canScrollLeft 
                ? 'bg-gray-500/40 backdrop-blur-md text-gold-400 hover:bg-gray-500/60' 
                : 'bg-gray-500/20 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`p-2 rounded-full transition-all ${
              canScrollRight 
                ? 'bg-gray-500/40 backdrop-blur-md text-gold-400 hover:bg-gray-500/60' 
                : 'bg-gray-500/20 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
        {products.map((product) => (
          <div key={product.id} className="flex-none w-80">
            <ProductCard
              name={product.name}
              description={product.description}
              image={product.image}
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

