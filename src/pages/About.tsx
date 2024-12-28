import React from 'react';
import { Store, Truck, Shield, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80"
            alt="Team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Shopy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're on a mission to revolutionize online shopping by providing
              high-quality products and exceptional customer service.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="mt-4 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-lg bg-gray-50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2024, ShopHub began with a simple idea: make quality
                  shopping accessible to everyone. What started as a small online
                  store has grown into a global marketplace.
                </p>
                <p>
                  We believe in the power of technology to transform the retail
                  experience, making it more personalized, convenient, and
                  enjoyable for our customers.
                </p>
                <p>
                  Today, we serve millions of customers worldwide, offering a
                  carefully curated selection of products across multiple
                  categories.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80"
                alt="Our Story"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const values = [
  {
    title: 'Quality First',
    description: 'We ensure every product meets our high standards',
    icon: <Store className="w-6 h-6" />,
  },
  {
    title: 'Fast Delivery',
    description: 'Quick and reliable shipping worldwide',
    icon: <Truck className="w-6 h-6" />,
  },
  {
    title: 'Secure Shopping',
    description: 'Your security is our top priority',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Customer Focus',
    description: 'Dedicated support for all your needs',
    icon: <Users className="w-6 h-6" />,
  },
];