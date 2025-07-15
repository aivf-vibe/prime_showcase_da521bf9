import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfaf6]">
      <Head>
        <title>Serenity Tea House - Premium Tea Experience</title>
        <meta name="description" content="Discover our premium tea collection and immerse yourself in the art of tea drinking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-3xl font-playfair text-emerald-900 font-semibold tracking-tight">
            Serenity Tea
          </div>
          <div className="hidden md:flex space-x-12">
            <a href="#menu" className="text-gray-700 hover:text-emerald-800 font-poppins transition-colors duration-300">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-800 font-poppins transition-colors duration-300">About</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-800 font-poppins transition-colors duration-300">Contact</a>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-emerald-800 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-3">
              <a href="#menu" className="block text-gray-700 hover:text-emerald-800 font-poppins">Menu</a>
              <a href="#about" className="block text-gray-700 hover:text-emerald-800 font-poppins">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-emerald-800 font-poppins">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        <section className="relative min-h-[90vh] flex items-center hero-pattern overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-5xl sm:text-7xl font-playfair text-emerald-900 mb-8 leading-tight">
              Discover the Art of
              <span className="block mt-2 text-emerald-800">Fine Tea</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed">
              Experience our carefully curated selection of premium teas, sourced from the finest gardens around the world
            </p>
            <button className="bg-emerald-800 text-white px-10 py-4 rounded-full text-lg font-poppins hover:bg-emerald-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Our Collection
            </button>
          </div>
          <div className="absolute -bottom-2 left-0 right-0 h-32 bg-gradient-to-t from-[#fdfaf6] to-transparent"></div>
        </section>

        <section id="menu" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-playfair text-center text-emerald-900 mb-16">Our Premium Teas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  name: 'Emerald Green',
                  description: 'Light and refreshing with delicate floral notes and a smooth finish',
                  price: '$4.50',
                  image: '/green-tea.jpg'
                },
                {
                  name: 'Royal Earl Grey',
                  description: 'Premium black tea with fragrant bergamot and subtle citrus undertones',
                  price: '$4.75',
                  image: '/earl-grey.jpg'
                },
                {
                  name: 'Imperial Jasmine',
                  description: 'Hand-rolled pearls of green tea scented with night-blooming jasmine',
                  price: '$5.50',
                  image: '/jasmine.jpg'
                }
              ].map((tea, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-emerald-50 rounded-xl mb-6 overflow-hidden">
                    {/* Placeholder for tea images */}
                    <div className="w-full h-full bg-emerald-100/50 flex items-center justify-center">
                      <span className="text-emerald-700/30 text-5xl font-playfair">☕</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-playfair text-emerald-900 mb-3">{tea.name}</h3>
                  <p className="text-gray-600 mb-6 font-poppins leading-relaxed">{tea.description}</p>
                  <p className="text-emerald-800 font-semibold font-poppins">{tea.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-emerald-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-playfair text-emerald-900 mb-8">Our Story</h2>
              <div className="prose prose-lg prose-emerald mx-auto">
                <p className="text-gray-700 font-poppins leading-relaxed mb-6">
                  Founded in 2020, Serenity Tea House was born from a passion for exceptional tea and a desire to create moments of tranquility in our busy world.
                </p>
                <p className="text-gray-700 font-poppins leading-relaxed">
                  We source our teas directly from sustainable farms and artisanal tea makers around the world, ensuring each cup tells a story of tradition, craftsmanship, and care for our planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-emerald-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-playfair text-center text-emerald-900 mb-16">Visit Us</h2>
              <div className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="text-center space-y-4 font-poppins">
                  <p className="text-gray-700 text-lg">123 Tea Garden Street</p>
                  <p className="text-gray-700 text-lg">Tea Valley, TV 12345</p>
                  <p className="text-gray-700 text-lg">Tel: (555) 123-4567</p>
                  <div className="h-px bg-emerald-100 my-8"></div>
                  <div className="text-emerald-800 font-semibold text-xl">
                    Open Daily
                    <p className="text-emerald-700 mt-2 font-normal">9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="font-playfair text-2xl mb-4">Serenity Tea</h3>
              <p className="text-emerald-100/80 font-poppins">Crafting moments of tranquility, one cup at a time.</p>
            </div>
            <div>
              <h4 className="font-playfair text-lg mb-4">Connect With Us</h4>
              <div className="space-y-2 font-poppins">
                <a href="#" className="block text-emerald-100/80 hover:text-white transition-colors duration-300">Facebook</a>
                <a href="#" className="block text-emerald-100/80 hover:text-white transition-colors duration-300">Instagram</a>
                <a href="#" className="block text-emerald-100/80 hover:text-white transition-colors duration-300">Twitter</a>
              </div>
            </div>
            <div>
              <h4 className="font-playfair text-lg mb-4">Newsletter</h4>
              <p className="text-emerald-100/80 mb-4 font-poppins">Stay updated with our latest offerings</p>
              <div className="flex max-w-xs mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                />
                <button className="bg-emerald-700 px-4 py-2 rounded-r-lg hover:bg-emerald-600 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-emerald-800 text-center">
            <p className="text-emerald-100/80 font-poppins">© 2025 Serenity Tea House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}