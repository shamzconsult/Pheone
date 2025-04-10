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
      <h2 className="text-2xl font-bold text-[#2c7bbd] mb-10">Get In Touch With Us</h2>
      
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

      <div className='max-w-screen-lg mx-auto'>
        <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <h2 className='text-2xl font-bold text-[#2c7bbd] mb-6'>Get In Touch</h2>
                  
          <div className='space-y-4 md:flex md:gap-20'>
            <div className='flex items-start'>
              <div className='bg-[#2c7bbd] p-3 rounded-full text-white mr-4'>
                <FaPhone className='text-lg' />
              </div>
              <div>
                <h3 className='font-semibold text-gray-800'>Phone</h3>
                <a href="tel:+234123456789" className='text-gray-600 hover:text-[#2c7bbd] transition-colors'>
                  +234 123 456 789
                </a>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='bg-[#2c7bbd] p-3 rounded-full text-white mr-4'>
                <FaEnvelope className='text-lg' />
              </div>
              <div>
                <h3 className='font-semibold text-gray-800'>Email</h3>
                <a href="mailto:info@phebeansupport.org" className='text-gray-600 hover:text-[#2c7bbd] transition-colors'>
                  info@phebeansupport.org
                </a>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='bg-[#2c7bbd] p-3 rounded-full text-white mr-4'>
                <FaMapMarkerAlt className='text-lg' />
              </div>
              <div>
                <h3 className='font-semibold text-gray-800'>Address</h3>
                <p className='text-gray-600'>
                  123 Mokola Road, Ibadan, Oyo State, Nigeria
                </p>
              </div>
            </div>
          </div>
      
          {/* Social Media Links */}
          <div className='mt-8 max-w-sm mx-auto'>
            <h3 className='font-semibold text-gray-800 mb-4'>Follow Us</h3>
            <div className='flex space-x-4 justify-between'>
              <a href="#" className='bg-gray-100 p-3 rounded-full text-[#2c7bbd] hover:bg-[#2c7bbd] hover:text-white transition-colors'>
                <FaFacebook className='text-xl' />
              </a>
              <a href="#" className='bg-gray-100 p-3 rounded-full text-[#2c7bbd] hover:bg-[#2c7bbd] hover:text-white transition-colors'>
                <FaTwitter className='text-xl' />
              </a>
              <a href="#" className='bg-gray-100 p-3 rounded-full text-[#2c7bbd] hover:bg-[#2c7bbd] hover:text-white transition-colors'>
                <FaInstagram className='text-xl' />
              </a>
              <a href="#" className='bg-gray-100 p-3 rounded-full text-[#2c7bbd] hover:bg-[#2c7bbd] hover:text-white transition-colors'>
                <FaLinkedin className='text-xl' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;