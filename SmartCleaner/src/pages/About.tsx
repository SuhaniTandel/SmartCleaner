import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Heart, CheckCircle, Clock, Sparkles } from 'lucide-react';

const About = () => {
  

  const values = [
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'We build lasting relationships through consistent, dependable service that you can count on every time.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Care & Compassion',
      description: 'We treat every home and office as if it were our own, with genuine care and attention to detail.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Sparkles,
      title: 'Excellence & Innovation',
      description: 'We continuously improve our methods and adopt the latest eco-friendly cleaning technologies.',
      gradient: 'from-purple-500 to-indigo-500'
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">CleanerSite</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been transforming spaces and exceeding expectations with our professional cleaning services.
          </p>
        </div>
      </section>

      

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2009 by Sofia Martinez, CleanerSite began as a small family business with a simple mission: 
                  to provide exceptional cleaning services that make a real difference in people's lives.
                </p>
                <p>
                  What started as a one-person operation has grown into a trusted team of over 50 professional cleaners, 
                  serving thousands of satisfied customers across the region. Our success is built on three core principles: 
                  quality, reliability, and genuine care for our customers.
                </p>
                <p>
                  Today, we're proud to be the leading cleaning service provider in our area, known for our eco-friendly 
                  approach, attention to detail, and commitment to customer satisfaction. Every member of our team shares 
                  our passion for creating clean, healthy, and beautiful spaces.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/team"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg"
                alt="Our cleaning team at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg" alt="Team member" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg" alt="Team member" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg" alt="Team member" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">50+ Team Members</div>
                    <div className="text-xs text-slate-600">Ready to serve you</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do and make us who we are.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-slate-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            To provide exceptional cleaning services that enhance the quality of life for our customers while 
            maintaining the highest standards of professionalism, environmental responsibility, and customer satisfaction. 
            We believe that a clean space is the foundation for a healthy, productive, and happy life.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Quality Assurance</h3>
              <p className="text-slate-600 text-sm">Every service is backed by our satisfaction guarantee</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Reliable Service</h3>
              <p className="text-slate-600 text-sm">On-time, consistent service you can depend on</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Customer Care</h3>
              <p className="text-slate-600 text-sm">Personalized service tailored to your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the <span className="text-yellow-300">CleanerSite</span> Difference?
          </h2>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            Join thousands of satisfied customers who trust us with their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Your Service
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;