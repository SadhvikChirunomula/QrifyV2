import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QrCode, MapPin, Truck, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Transform Your Address Into a Smart QR Code
              </h1>
              <p className="text-xl mb-8">
                Create custom QR codes for your address that make navigation seamless. Perfect for businesses, events, and personal use.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/generator"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&w=800&q=80"
                alt="QR Code Example"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Qrify?</h2>
            <p className="text-xl text-gray-600">Simple, powerful, and reliable QR code solutions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <QrCode className="h-12 w-12 text-blue-600" />,
                title: "Custom QR Codes",
                description: "Generate unique QR codes with your address details in seconds"
              },
              {
                icon: <MapPin className="h-12 w-12 text-blue-600" />,
                title: "Precise Navigation",
                description: "Direct people exactly where they need to go with accurate GPS coordinates"
              },
              {
                icon: <Truck className="h-12 w-12 text-blue-600" />,
                title: "Print & Deliver",
                description: "Get professional quality printed QR codes delivered to your door"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Business Owner",
                content: "Qrify has revolutionized how customers find our store. The QR codes are professional and the service is outstanding."
              },
              {
                name: "Michael Chen",
                role: "Event Planner",
                content: "Perfect for events! The QR codes make it super easy for attendees to find the venue. Highly recommended!"
              },
              {
                name: "Emma Davis",
                role: "Real Estate Agent",
                content: "Game-changer for property viewings. Clients can navigate directly to listings without any confusion."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Create your first QR code today and experience the difference.</p>
          <Link
            to="/generator"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Generate QR Code <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;