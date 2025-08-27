import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Clean',
      icon: Star,
      price: 450,
      period: 'per visit',
      description: 'Perfect for regular maintenance cleaning',
      features: [
        'General cleaning of all rooms',
        'Bathroom sanitization',
        'Kitchen cleaning',
        'Dusting and vacuuming',
        'Trash removal',
        'Basic organization'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Deep Clean',
      icon: Crown,
      price: 590,
      period: 'per visit',
      description: 'Comprehensive cleaning for a spotless home',
      features: [
        'Everything in Basic Clean',
        'Inside appliance cleaning',
        'Baseboards and window sills',
        'Light fixture cleaning',
        'Cabinet front cleaning',
        'Detailed bathroom scrubbing',
        'Carpet spot treatment'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Premium Service',
      icon: Zap,
      price: 750,
      period: 'per visit',
      description: 'Ultimate cleaning experience with extras',
      features: [
        'Everything in Deep Clean',
        'Inside oven cleaning',
        'Inside refrigerator cleaning',
        'Window cleaning (interior)',
        'Garage organization',
        'Laundry service',
        'Plant watering',
        'Priority scheduling'
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false
    }
  ];

  const addOns = [
    { name: 'Window Cleaning (Exterior)', price: 60 },
    { name: 'Carpet Deep Clean', price: 120 },
    { name: 'Garage Cleaning', price: 50 },
    { name: 'Basement Cleaning', price: 110 },
    { name: 'Post-Party Cleanup', price: 190 }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4239140/pexels-photo-4239140.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Choose the perfect cleaning plan for your needs.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Choose Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              All plans include our satisfaction guarantee and eco-friendly cleaning products.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl mb-4`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                    <p className="text-slate-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-slate-800">₹{plan.price}</span>
                      <span className="text-slate-600 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/booking"
                    className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 ${plan.popular ? 'ring-2 ring-purple-200' : ''}`}
                  >
                    Choose {plan.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Add-On <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Customize your cleaning service with these additional options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-800">{addon.name}</h3>
                  <span className="text-2xl font-bold text-indigo-600">₹{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How often should I schedule cleaning services?',
                answer: 'Most customers prefer weekly or bi-weekly cleaning. We recommend weekly for busy households and bi-weekly for regular maintenance.'
              },
              {
                question: 'Do you bring your own cleaning supplies?',
                answer: 'Yes! We bring all necessary cleaning supplies and equipment. All our products are eco-friendly and safe for your family and pets.'
              },
              {
                question: 'What if I\'m not satisfied with the service?',
                answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with our service, we\'ll return within 24 hours to make it right at no extra charge.'
              },
              {
                question: 'Are your cleaners insured and bonded?',
                answer: 'Absolutely! All our team members are fully insured and bonded for your peace of mind and protection.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get <span className="text-yellow-300">Started?</span>
          </h2>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            Book your first cleaning service today and experience the CleanerSite difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;