import React, { useState } from 'react';
import { Calendar, Clock, Home, CheckCircle, CreditCard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    frequency: 'one-time',
    address: '',
    phone: '',
    notes: ''
  });

  const services = [
    { id: 'basic', name: 'Basic Clean', price: 450, description: 'Regular cleaning for maintenance' },
    { id: 'deep', name: 'Deep Clean', price: 590, description: 'Comprehensive deep cleaning' },
    { id: 'premium', name: 'Premium Service', price: 790, description: 'Ultimate cleaning experience' }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process booking
      console.log('Booking submitted:', bookingData);
      navigate('/dashboard');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Please Sign In</h2>
          <p className="text-slate-600 mb-6">You need to be logged in to book a service.</p>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-slate-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-8">
            <span className={`text-sm ${step >= 1 ? 'text-indigo-600 font-semibold' : 'text-slate-600'}`}>
              Service
            </span>
            <span className={`text-sm ${step >= 2 ? 'text-indigo-600 font-semibold' : 'text-slate-600'}`}>
              Schedule
            </span>
            <span className={`text-sm ${step >= 3 ? 'text-indigo-600 font-semibold' : 'text-slate-600'}`}>
              Confirm
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
                  Choose Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Service</span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                        bookingData.service === service.id
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-slate-200 hover:border-indigo-300'
                      }`}
                      onClick={() => setBookingData({ ...bookingData, service: service.id })}
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{service.name}</h3>
                        <p className="text-slate-600 mb-4">{service.description}</p>
                        <div className="text-3xl font-bold text-indigo-600">₹{service.price}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Frequency
                  </label>
                  <select
                    name="frequency"
                    value={bookingData.frequency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="one-time">One-time</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Schedule */}
            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
                  Schedule Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Cleaning</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={bookingData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      required
                      value={bookingData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Home className="inline h-4 w-4 mr-1" />
                    Service Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={bookingData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full address"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={bookingData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={bookingData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Any special instructions or areas of focus..."
                  ></textarea>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
                  Confirm Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Booking</span>
                </h2>

                <div className="bg-slate-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Booking Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Service:</span>
                      <span className="font-semibold text-slate-800">
                        {services.find(s => s.id === bookingData.service)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Date:</span>
                      <span className="font-semibold text-slate-800">{bookingData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Time:</span>
                      <span className="font-semibold text-slate-800">{bookingData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Frequency:</span>
                      <span className="font-semibold text-slate-800 capitalize">{bookingData.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Address:</span>
                      <span className="font-semibold text-slate-800">{bookingData.address}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="text-lg font-semibold text-slate-800">Total:</span>
                      <span className="text-2xl font-bold text-indigo-600">
                        ₹{services.find(s => s.id === bookingData.service)?.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-blue-800 font-medium">Payment will be collected after service completion</span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300"
                >
                  Back
                </button>
              )}
              
              <button
                type="submit"
                disabled={step === 1 && !bookingData.service}
                className="ml-auto px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {step === 3 ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Confirm Booking
                  </>
                ) : (
                  'Continue'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;