"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '@/components/Footer';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);

      emailjs
        .send(
          'service_xrfxi5n', 
          'template_0647fby', 
          {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
          },
          'aGp_ldt94_65TG_mr' 
        )
        .then(() => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        })
        .catch(() => {
          alert('There was an error sending your message. Please try again.');
          setIsSubmitting(false);
        });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="contact"
        className="relative flex-grow bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 py-20 px-4 flex flex-col justify-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
            <div className="flex-1 text-white">
              <h2 className="text-4xl font-bold mb-4 text-yellow-300">Get in Touch</h2>
              <p className="text-gray-300 text-lg">
                Have a project in mind? Let’s work together! Feel free to reach out with the
                form below.
              </p>
            </div>
            <div className="flex-1 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
              {isSubmitted ? (
                <p className="text-lg text-green-400">Thank you for your message! I will get back to you soon.</p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
