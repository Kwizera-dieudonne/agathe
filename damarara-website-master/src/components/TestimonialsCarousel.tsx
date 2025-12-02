import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import testimonials from '../data/testimonials.json';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-brown-800 mb-12">
          What Our Customers Say
        </h2>

        <div className="relative">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <Quote className="h-12 w-12 text-gold-400 mb-6" />

            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0 p-8 md:p-12'
                }`}
              >
                <p className="text-xl text-brown-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-800">{testimonial.name}</h4>
                    <p className="text-brown-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prev}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-primary-600" />
            </button>
            <button
              onClick={next}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all"
            >
              <ChevronRight className="h-6 w-6 text-primary-600" />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary-600 w-8' : 'bg-brown-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
