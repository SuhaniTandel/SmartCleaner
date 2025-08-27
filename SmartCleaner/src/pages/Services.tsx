import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Building, Briefcase, Sparkles, Clock, CheckCircle, ArrowRight, Drum as Vacuum, Droplets, Wind, Zap } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: HomeIcon,
      title: 'Home Cleaning',
      description: 'Expert home cleaning, designed around your lifestyle.',
      image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg',
      features: ['Kitchen Cleaning', 'Wahroom-Toilet Cleaning', 'Hall Cleaning'],
      startingPrice: '₹450',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Building,
      title: 'Commercial Cleaning',
      description: 'Comprehensive office and commercial space cleaning to maintain a professional environment.',
      image: 'https://images.pexels.com/photos/7876656/pexels-photo-7876656.jpeg',
      features: ['Daily office cleaning', 'Medical facility cleaning', 'Industrial cleaning'],
      startingPrice: '₹590',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Briefcase,
      title: 'Specialized Services',
      description: 'Expert cleaning solutions for unique needs and challenging situations.',
      image: 'https://images.pexels.com/photos/6197116/pexels-photo-6197116.jpeg',
      features: ['Carpet & upholstery cleaning', 'Window washing', 'Post-construction cleanup', 'Event cleanup'],
      startingPrice: 'Custom',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  const additionalServices = [
    { icon: Vacuum, title: 'Deep Carpet Cleaning', description: 'Professional steam cleaning for carpets and rugs.' },
    { icon: Droplets, title: 'Window Washing', description: 'Crystal clear windows inside and out.' },
    { icon: Wind, title: 'Air Duct Cleaning', description: 'Improve air quality with thorough duct cleaning.' },
    { icon: Zap, title: 'Pressure Washing', description: 'Exterior cleaning for driveways, patios, and siding.' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6195651/pexels-photo-6195651.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Cleaning Services</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive cleaning solutions designed to meet every need, from residential homes to commercial spaces.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Core <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our range of professional cleaning services, each tailored to deliver exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`p-3 bg-gradient-to-br ${service.color} rounded-xl shadow-lg`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-800 font-bold text-lg">
                      Starting at {service.startingPrice}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/booking"
                    className={`group inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${service.color} text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300`}
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Additional <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized cleaning services to address your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 group text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple, efficient, and designed around your convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Book Online', description: 'Choose your service and preferred time slot through our easy booking system.' },
              { step: '02', title: 'We Arrive', description: 'Our professional team arrives on time with all necessary equipment and supplies.' },
              { step: '03', title: 'We Clean', description: 'We perform a thorough cleaning using eco-friendly products and proven techniques.' },
              { step: '04', title: 'You Enjoy', description: 'Relax and enjoy your spotless, fresh-smelling space. Satisfaction guaranteed!' },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{process.title}</h3>
                <p className="text-slate-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience <span className="text-yellow-300">Professional Cleaning?</span>
          </h2>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            Book your service today and discover why thousands of customers trust CleanerSite for their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Your Service Now
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

export default Services;