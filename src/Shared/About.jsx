import Header from '@/components/Header';
import React from 'react';

function About() {

  return (
<>
    <Header />
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">Calescence</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-10">
          Your one-stop destination to <span className="font-semibold text-gray-800">buy and sell cars</span> with ease. 
          Whether you're looking to own your first vehicle or sell your old one, we offer a seamless experience that puts you in control.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Buy & Sell Effortlessly</h3>
            <p className="text-gray-600">
              Browse a wide selection of cars and post your own listings in minutes with our user-friendly interface.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Monthly Payment Calculator</h3>
            <p className="text-gray-600">
              Plan smartly! Use our financial calculator to estimate your monthly payments and make informed decisions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Reliable User Experience</h3>
            <p className="text-gray-600">
              We prioritize performance, responsiveness, and user satisfaction across all devices and platforms.
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-12">
          Join thousands of happy customers who trust <span className="text-blue-600 font-semibold">Car Marketplace</span> for their car buying and selling needs.
        </p>
      </div>
    </section>
    </>
  );
}

export default About;
