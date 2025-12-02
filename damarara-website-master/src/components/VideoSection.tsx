import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brown-800 to-brown-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Story
          </h2>
          <p className="text-xl text-brown-200">
            Watch how we bring the finest tea and coffee from Rwanda to the world
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-2xl group">
          <div
            className="aspect-video bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/4505168/pexels-photo-4505168.jpeg?auto=compress&cs=tinysrgb&w=1200)'
            }}
          >
              <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-800/30 transition-colors" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 hover:bg-white text-primary-600 rounded-full p-6 transition-all transform group-hover:scale-110 shadow-2xl">
                <Play className="h-12 w-12 fill-current" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Sustainable</h3>
            <p className="text-brown-200">Eco-friendly farming practices</p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Fair Trade</h3>
            <p className="text-brown-200">Supporting local communities</p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Quality First</h3>
            <p className="text-brown-200">Premium selection process</p>
          </div>
        </div>
      </div>
    </section>
  );
}
