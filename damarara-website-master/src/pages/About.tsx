import { Leaf, Heart, Award, Truck, Globe, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '1500+', label: 'Farming Families', icon: Users },
    { number: '2M+', label: 'Cups Served Worldwide', icon: Globe },
    { number: '10+', label: 'Years of Excellence', icon: Award },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'Hand-selected, premium processing with natural freshness.',
      icon: Award,
      color: 'from-gold-500 to-gold-600'
    },
    {
      title: 'Sustainability',
      description: 'Environmentally responsible farming practices.',
      icon: Leaf,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Community Care',
      description: 'Fair wages and long-term partnerships with farmers.',
      icon: Heart,
      color: 'from-red-500 to-red-600'
    },
  ];

  return (
    <>
      {/* Bold Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gold-400 mb-6">Who We Are</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Damarara brings Rwanda's finest tea and coffee from the Northern highlands directly to your cup. We're more than a business—we're a bridge connecting passionate farmers with discerning tea and coffee lovers worldwide.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Mission Section - Text Left, Image Right */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Mission Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gold-400 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We believe exceptional tea and coffee start with exceptional people. Our mission is to create a sustainable supply chain where farmers thrive, quality never compromises, and every cup tells a story of care, tradition, and dedication.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through direct partnerships with over 1,500 farming families in Rwanda's Northern highlands, we ensure fair compensation, invest in communities, and maintain the highest agricultural standards. This is how Damarara builds trust—one cup at a time.
              </p>
            </div>

            {/* Right - Image */}
            <div className="h-96 md:h-[480px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/farmers.jpg"
                alt="Rwandan tea farmers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Image Left, Text Right */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="h-96 md:h-[480px] rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img
                src="/images/about-tea.jpg"
                alt="Premium tea leaves"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Values Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gold-400 mb-8">Our Core Values</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                The principles that guide everything we do and how we serve you
              </p>
              <div className="space-y-6">
                {values.map((value, idx) => {
                  const Icon = value.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className={`bg-gradient-to-br ${value.color} p-3 rounded-full flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gold-400 mb-2">{value.title}</h3>
                        <p className="text-gray-300">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics with Icons */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gold-400 mb-4">Our Impact by Numbers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-xl p-8 border border-gold-500/30 hover:border-gold-400/60 transition-all">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-8 w-8 text-gold-400" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-gold-400 mb-3">{stat.number}</div>
                  <div className="text-lg text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Services - Text Left, Image Right */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-gold-500/20 rounded-full">
                  <Truck className="h-6 w-6 text-gold-400" />
                </div>
                <span className="text-gold-400 font-semibold text-lg">Delivery Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Delivered Fresh to Your Door</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We understand that convenience matters. That's why Damarara offers reliable, fast delivery services across Rwanda and beyond. Whether you're ordering premium loose-leaf tea or specialty coffee beans, we ensure your products arrive fresh and perfectly packaged.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <span className="text-gold-400 font-bold text-lg mt-1">✓</span>
                  <span className="text-gray-300 text-lg">Fast, reliable nationwide delivery</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gold-400 font-bold text-lg mt-1">✓</span>
                  <span className="text-gray-300 text-lg">Eco-friendly, premium packaging</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gold-400 font-bold text-lg mt-1">✓</span>
                  <span className="text-gray-300 text-lg">Real-time order tracking</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gold-400 font-bold text-lg mt-1">✓</span>
                  <span className="text-gray-300 text-lg">Freshness guarantee or your money back</span>
                </li>
              </ul>
              <button className="px-8 py-4 bg-gold-500 text-black font-semibold rounded-lg hover:bg-gold-600 transition-all">
                Order Now
              </button>
            </div>

            {/* Right - Image */}
            <div className="h-96 md:h-[520px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-coffee.jpg"
                alt="Delivery ready packages"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section - Image Left, Text Right */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="h-96 md:h-[480px] rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img
                src="/images/coffee-1.jpg"
                alt="Premium coffee processing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Text */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gold-400 mb-8">Crafted with Care</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Every cup of Damarara tea or coffee represents hours of careful cultivation, meticulous processing, and rigorous quality control. Our commitment to excellence starts in the fields of Rwanda and continues through every step of production.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We blend traditional farming methods with modern processing technology to preserve the natural flavors and aromas that make Rwandan tea and coffee globally renowned. Your satisfaction is our guarantee.
              </p>
              <div className="flex gap-4">
                <div className="text-gold-400 text-4xl font-bold">100%</div>
                <div>
                  <p className="text-gray-300 text-lg font-semibold">Natural & Pure</p>
                  <p className="text-gray-400">No additives, no compromises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Tagline */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-4xl font-light text-gold-400 leading-relaxed italic">
            "From the Northern hills of Rwanda to your teacup — Discover your new home with Damarara."
          </p>
        </div>
      </section>
    </>
  );
}
