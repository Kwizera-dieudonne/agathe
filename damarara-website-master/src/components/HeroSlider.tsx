import { useState, useEffect } from 'react';

const slides = [
  {
    image: `${import.meta.env.BASE_URL}images/hero-1.jpg`,
    title: 'From the Northern Hills of Rwanda',
    subtitle: 'To your teacup — Discover your new home with Damarara'
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero-2.jpg`,
    title: 'Premium Coffee Beans',
    subtitle: 'Sustainably sourced from Rwanda\'s finest farms'
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero-3.jpg`,
    title: 'Exceptional Tea Selection',
    subtitle: 'Hand-picked leaves for the perfect brew'
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero-4.jpg`,
    title: 'Crafted with Care',
    subtitle: 'Every cup tells a story of quality and tradition'
  }
];

  // no stats in the simplified hero

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // slides rotate automatically; manual arrow controls removed

  const currentSlideData = slides[currentSlide];

//   return (
//     <div id="hero" className="relative overflow-hidden group">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-stretch md:items-center">
//           {/* Left: motto */}
//           <div className="md:w-1/3 flex items-center py-8 md:py-12">
//             <div>
//               <h2 className="text-2xl md:text-4xl font-light text-white italic leading-tight">
//                 From the Northern hills of Rwanda to your teacup — Damarara
//               </h2>
//             </div>
//           </div>

//           {/* Right: slides */}
//           <div className="md:w-2/3 relative py-6 md:py-12">
//             <div className="relative h-64 md:h-[420px] lg:h-[520px]">
//               {slides.map((slide, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
//                   <div className="h-full flex items-center justify-center">
//                     <div className="w-full md:w-[90%] lg:w-[85%] h-full rounded-xl overflow-hidden shadow-2xl mx-auto">
//                       <img src={slide.image} alt={`slide-${index}`} className="w-full h-full object-cover" />
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Arrows */}
//               <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gold-500/30 hover:bg-gold-500/50 text-white p-2 rounded-full transition-all backdrop-blur-sm">
//                 <ChevronLeft className="h-5 w-5" />
//               </button>
//               <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold-500/30 hover:bg-gold-500/50 text-white p-2 rounded-full transition-all backdrop-blur-sm">
//                 <ChevronRight className="h-5 w-5" />
//               </button>

//               {/* Dots */}
//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//                 {slides.map((_, index) => (
//                   <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? 'bg-gold-400 w-6' : 'bg-white/40 w-2'}`} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            {/* Tagline */}
            {/* <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
                From Rwanda's Northern Hills
              </span>
            </div> */}

            {/* Main heading */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {currentSlideData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {currentSlideData.subtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  const productsSection = document.getElementById('products');
                  productsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Explore Products
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows removed as requested */}

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-12' 
                : 'bg-white/30 w-8 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </div>
  );}