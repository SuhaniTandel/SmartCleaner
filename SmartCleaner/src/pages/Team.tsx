import React from 'react';
import { Mail, Phone, Award, Users, Heart } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sofia Martinez',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      bio: 'With over 7 years in the cleaning industry, Sofia founded CleanerSite to revolutionize professional cleaning services.',
      email: 'sofia@cleanersite.com',
      phone: '91 9774154514',
      specialties: ['Team Leadership', 'Quality Assurance', 'Customer Relations'],
      experience: '7+ years'
    },
    {
      name: 'Marcus Johnson',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg',
      bio: 'Marcus ensures our operations run smoothly and our team delivers exceptional service every time.',
      email: 'marcus@cleanersite.com',
      phone: '91 9924563188',
      specialties: ['Operations Management', 'Staff Training', 'Process Optimization'],
      experience: '5+ years'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Senior Cleaning Specialist',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg',
      bio: 'Elena is our most experienced cleaner, specializing in luxury homes and commercial spaces.',
      email: 'elena@cleanersite.com',
      phone: '91 9634668890',
      specialties: ['Deep Cleaning', 'Eco-Friendly Solutions', 'Commercial Spaces'],
      experience: '4+ years'
    },
    {
      name: 'David Thompson',
      role: 'Quality Control Manager',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      bio: 'David maintains our high standards by conducting quality inspections and customer satisfaction surveys.',
      email: 'david@cleanersite.com',
      phone: '91 9313254681',
      specialties: ['Quality Assurance', 'Customer Satisfaction', 'Team Training'],
      experience: '2+ years'
    },
    {
      name: 'Ashley Chen',
      role: 'Customer Success Manager',
      image: 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg',
      bio: 'Ashley ensures every customer has an amazing experience from booking to completion.',
      email: 'ashley@cleanersite.com',
      phone: '91 8782125499',
      specialties: ['Customer Support', 'Booking Management', 'Service Coordination'],
      experience: '1.5+ years'
    },
    {
      name: 'Michael Brown',
      role: 'Specialized Services Lead',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg',
      bio: 'Michael leads our specialized cleaning services including carpet cleaning and post-construction cleanup.',
      email: 'michael@cleanersite.com',
      phone: '91 6628873441',
      specialties: ['Carpet Cleaning', 'Window Washing', 'Post-Construction'],
      experience: '3+ years'
    },
  ];


  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7876454/pexels-photo-7876454.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Expert Team</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Our dedicated professionals bring years of experience and passion to deliver exceptional cleaning services that exceed your expectations.
          </p>
        </div>
      </section>


      {/* Team Members */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Professional <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each team member is carefully selected, thoroughly trained, and committed to delivering outstanding results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">{member.name}</h3>
                    <p className="text-indigo-600 font-semibold text-lg">{member.role}</p>
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-600 text-sm font-medium rounded-full mt-2">
                      {member.experience} experience
                    </div>
                  </div>

                  <p className="text-slate-600 text-center mb-6 leading-relaxed">{member.bio}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex items-center space-x-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 transition-colors duration-300"
                        >
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">Email</span>
                        </a>
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 transition-colors duration-300"
                        >
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">Call</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            {[
              {
                title: 'Excellence',
                description: 'We strive for perfection in every cleaning task, no matter how big or small.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Integrity',
                description: 'Honest, transparent communication and reliable service you can always count on.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Innovation',
                description: 'Continuously improving our methods and adopting the latest eco-friendly solutions.',
                gradient: 'from-green-500 to-emerald-500'
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-block p-6 bg-gradient-to-br ${value.gradient} rounded-2xl mb-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-yellow-300">Growing Family</span>
          </h2>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            We're always looking for dedicated professionals to join our team. If you're passionate about cleaning and customer service, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@cleanersite.com"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;