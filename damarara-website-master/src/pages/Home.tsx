import { useState } from 'react';
import { Leaf, Heart, Award, Globe, MapPin, Phone, Mail, Clock, Truck, Users } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ProductCarousel from '../components/ProductCarousel';
import Button from '../components/Button';
import Card from '../components/Card';
import products from '../data/products.json';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <HeroSlider />

      <section id="products" className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gold-400 mb-4">Our Products</h2>
            <p className="text-xl text-gray-300">Carefully curated selections from Rwanda's finest farms</p>
          </div>

          <ProductCarousel title="All Products" products={products.all} />
        </div>
      </section>

      <section id="about" className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Section - Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Mission Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gold-400 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We believe exceptional tea and coffee start with exceptional people. Our mission is to create a sustainable supply chain where farmers thrive, quality never compromises, and every cup tells a story of care, tradition, and dedication.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through direct partnerships with over 1,500 farming families in Rwanda's Northern highlands, we ensure fair compensation, invest in communities, and maintain the highest agricultural standards.
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

          {/* Core Values - Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
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
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-gradient-to-br from-gold-500 to-gold-600 p-3 rounded-full flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gold-400 mb-2">Quality First</h3>
                    <p className="text-gray-300">Hand-selected, premium processing with natural freshness.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-full flex-shrink-0">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gold-400 mb-2">Sustainability</h3>
                    <p className="text-gray-300">Environmentally responsible farming practices.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-full flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gold-400 mb-2">Community Care</h3>
                    <p className="text-gray-300">Fair wages and long-term partnerships with farmers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-xl p-8 border border-gold-500/30 hover:border-gold-400/60 transition-all">
              <div className="flex justify-center mb-4">
                <Users className="h-8 w-8 text-gold-400" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-gold-400 mb-3">1500+</div>
              <div className="text-lg text-gray-300">Farming Families</div>
            </div>

            <div className="text-center bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-xl p-8 border border-gold-500/30 hover:border-gold-400/60 transition-all">
              <div className="flex justify-center mb-4">
                <Globe className="h-8 w-8 text-gold-400" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-gold-400 mb-3">2M+</div>
              <div className="text-lg text-gray-300">Cups Served Worldwide</div>
            </div>

            <div className="text-center bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-xl p-8 border border-gold-500/30 hover:border-gold-400/60 transition-all">
              <div className="flex justify-center mb-4">
                <Award className="h-8 w-8 text-gold-400" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-gold-400 mb-3">10+</div>
              <div className="text-lg text-gray-300">Years of Excellence</div>
            </div>
          </div>

          {/* Delivery Services - Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-b from-gray-900/50 to-gray-800/50 rounded-xl p-8 md:p-12">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-gold-500/20 rounded-full">
                  <Truck className="h-6 w-6 text-gold-400" />
                </div>
                <span className="text-gold-400 font-semibold text-lg">Delivery Services</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Delivered Fresh to Your Door</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We offer reliable, fast delivery services across Rwanda and beyond. Your products arrive fresh and perfectly packaged.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold-400 font-bold text-lg mt-1">✓</span>
                  <span className="text-gray-300 text-lg">Fast, reliable nationwide delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-400 font-bold text-lg mt-1">✓</span>
                  <span className="text-gray-300 text-lg">Eco-friendly, premium packaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-400 font-bold text-lg mt-1">✓</span>
                  <span className="text-gray-300 text-lg">Real-time order tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-400 font-bold text-lg mt-1">✓</span>
                  <span className="text-gray-300 text-lg">Freshness guarantee or your money back</span>
                </li>
              </ul>
            </div>

            {/* Right - Image */}
            <div className="h-96 md:h-[450px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-coffee.jpg"
                alt="Delivery ready packages"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gold-400 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300">We'd love to hear from you</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gold-400 mb-6">Send us a Message</h3>

              <Card className="p-8 bg-white/5 border border-gold-500/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gold-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-500/30 text-white placeholder-gray-500 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gold-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-500/30 text-white placeholder-gray-500 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gold-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-500/30 text-white placeholder-gray-500 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" variant="secondary">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gold-400 mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                <Card className="p-6 bg-white/5 border border-gold-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold-500/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gold-400 mb-1">Address</h4>
                      <p className="text-gray-300">
                        Northern Province<br />
                        Kigali, Rwanda
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/5 border border-gold-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold-500/20 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gold-400 mb-1">Phone</h4>
                      <p className="text-gray-300">+250 788 123 456</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/5 border border-gold-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold-500/20 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gold-400 mb-1">Email</h4>
                      <p className="text-gray-300">info@damarara.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/5 border border-gold-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold-500/20 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gold-400 mb-1">Business Hours</h4>
                      <p className="text-gray-300">
                        Mon - Fri: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="overflow-hidden border border-gold-500/20">
                <div className="h-64 bg-brown-800">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.56356059478!2d29.95736!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xe9b7e68d8e8f9c5c!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Damarara Location"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
