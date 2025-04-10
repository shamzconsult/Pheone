'use client'

import React, { useState } from 'react';
import axios from 'axios'; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('/api/send-email', formData);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#2c7bbd] mb-10">Send Us a Message</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
          Message sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          Failed to send message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className='md:flex gap-20'>
            <div className='md:w-1/2 '>
                <label htmlFor="name" className="block text-2xl font-medium text-gray-700 mb-1">
                    Enter Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full  py-2 border-b border-b-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please enter your full name"
                />
            </div>

            {/* Email Field */}
            <div className='md:w-1/2 mt-6 md:mt-0'>
                <label htmlFor="email" className="block text-2xl font-medium text-gray-700 mb-1">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full  py-2 border-b border-b-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                />
            </div>
        </div>

        <div className='md:flex gap-20 mt-10'>
            {/* Phone Field */}
            <div className='md:w-1/2 mt-6 md:mt-0'>
                <label htmlFor="phone" className="block text-2xl font-medium text-gray-700 mb-1">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full  py-2 border-b border-b-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                />
            </div>

            {/* Subject Field */}
            <div className='md:w-1/2 mt-6 md:mt-0'>
                <label htmlFor="subject" className="block text-2xl font-medium text-gray-700 mb-1">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full py-2 border-b border-b-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Add subject here"
                />
            </div>
        </div>

        {/* Message Field */}
        <div className='mt-10'>
          <label htmlFor="message" className="block text-2xl font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full  py-2 border-b border-b-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe your message here"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2c7bbd] text-white py-2 px-40 rounded-full hover:bg-blue-700 transition duration-300 disabled:opacity-50 mx-auto inline-block"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            </div>
      </form>

      <div className='max-w-screen-lg mx-auto px-4 sm:px-6 mt-10'>
        <div className='bg-white p-8 sm:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
          <h2 className='text-3xl font-bold text-[#2c7bbd] mb-8 text-center'>Get In Touch</h2>
          
          {/* Contact Information Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-10'>
            {/* Phone */}
            <div 
              className='flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:bg-[#f0f7ff] transition-colors duration-300 group'
            >
              <div className='bg-[#2c7bbd] p-4 rounded-full text-white mb-4 group-hover:scale-110 transition-transform'>
                <FaPhone className='text-xl' />
              </div>
              <h3 className='font-semibold text-gray-800 text-lg mb-2'>Phone</h3>
              <a 
                href="tel:+234123456789" 
                className='text-gray-600 hover:text-[#2c7bbd] transition-colors text-md font-medium'
              >
                +234 123 456 789
              </a>
            </div>

            {/* Email */}
            <div 
              className='flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:bg-[#f0f7ff] transition-colors duration-300 group'
            >
              <div className='bg-[#2c7bbd] p-4 rounded-full text-white mb-4 group-hover:scale-110 transition-transform'>
                <FaEnvelope className='text-xl' />
              </div>
              <h3 className='font-semibold text-gray-800 text-lg mb-2'>Email</h3>
              <a 
                href="mailto:info@phebeansupport.org" 
                className='text-gray-600 hover:text-[#2c7bbd] transition-colors text-md font-medium break-all'
              >
                info@phebeansupport.org
              </a>
            </div>

            {/* Address */}
            <div 
              className='flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:bg-[#f0f7ff] transition-colors duration-300 group'
            >
              <div className='bg-[#2c7bbd] p-4 rounded-full text-white mb-4 group-hover:scale-110 transition-transform'>
                <FaMapMarkerAlt className='text-xl' />
              </div>
              <h3 className='font-semibold text-gray-800 text-lg mb-2'>Address</h3>
              <p className='text-gray-600 text-md font-medium'>
                123 Mokola Road<br />
                Ibadan, Oyo State<br />
                Nigeria
              </p>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className='text-center'>
            <h3 className='font-semibold text-gray-800 text-xl mb-6'>Connect With Us</h3>
            <div className='flex justify-center space-x-6'>
              <a 
                href="#" 
                className='bg-gray-100 p-4 rounded-full text-[#2c7bbd] hover:bg-[#2c7bbd] hover:text-white transition-all duration-300 transform hover:-translate-y-1'
                aria-label="Facebook"
              >
                <FaFacebook className='text-2xl' />
              </a>
              <a 
                href="#" 
                className='bg-gray-100 p-4 rounded-full text-[#2c7bbd] hover:bg-[#2c7bbd] hover:text-white transition-all duration-300 transform hover:-translate-y-1'
                aria-label="Twitter"
              >
                <FaTwitter className='text-2xl' />
              </a>
              <a 
                href="#" 
                className='bg-gray-100 p-4 rounded-full text-[#2c7bbd] hover:bg-[#2c7bbd] hover:text-white transition-all duration-300 transform hover:-translate-y-1'
                aria-label="Instagram"
              >
                <FaInstagram className='text-2xl' />
              </a>
              <a 
                href="#" 
                className='bg-gray-100 p-4 rounded-full text-[#2c7bbd] hover:bg-[#2c7bbd] hover:text-white transition-all duration-300 transform hover:-translate-y-1'
                aria-label="LinkedIn"
              >
                <FaLinkedin className='text-2xl' />
              </a>
            </div>
          </div>

          {/* Call-to-action */}
          <div className='mt-12 text-center'>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              Have questions? We&apos;re available 24/7 to assist you with any inquiries.
            </p>
            {/* <button className='bg-[#2c7bbd] text-white px-8 py-3 rounded-lg hover:bg-[#1e5a8a] transition-colors font-semibold text-lg shadow-md hover:shadow-lg'>
              Contact Support
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;