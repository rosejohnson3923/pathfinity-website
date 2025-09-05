import React, { useState } from 'react';
import { MarketingLayout } from '../../components/marketing/MarketingLayout';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email subject based on inquiry type
    let subject = 'Contact Form Inquiry';
    switch(formData.inquiryType) {
      case 'demo':
        subject = 'Demo Request';
        break;
      case 'partnership':
        subject = 'Partnership Inquiry';
        break;
      case 'support':
        subject = 'Support Request';
        break;
      case 'pricing':
        subject = 'Pricing Information Request';
        break;
      case 'implementation':
        subject = 'Implementation Inquiry';
        break;
      default:
        subject = 'General Inquiry';
    }
    subject += ` - ${formData.name}`;

    // Create email body
    const emailBody = `
Contact Information:
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}

Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}

---
This message was sent from the Pathfinity.ai contact form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@pathfinity.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    alert('Your email client should now open with your message. Thank you for contacting Pathfinity.ai!');

    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      phone: '',
      inquiryType: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  return (
    <MarketingLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section id="get-in-touch" className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Pathfinity.ai
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform education through AI-powered learning? Let's discuss how Pathfinity.ai can revolutionize your educational experience.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Whether you're interested in a demo, have questions about implementation, or want to explore partnership opportunities, we're here to help.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Email</h3>
                        <p className="text-gray-300">info@pathfinity.ai</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🌐</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Website</h3>
                        <p className="text-gray-300">pathfinity.ai</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Powered by</h3>
                        <p className="text-gray-300">Esposure, Inc. - 15+ Years EdTech Experience</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                    <h3 className="text-white font-semibold mb-2">Why Choose Pathfinity.ai?</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• AI-powered adaptive learning experiences</li>
                      <li>• Three distinct learning modes (Learn, Experience, Discover)</li>
                      <li>• Comprehensive assessment and analytics</li>
                      <li>• Proven educational technology infrastructure</li>
                    </ul>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-white mb-2">
                        Organization/School
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                        placeholder="Enter your organization or school"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-white mb-2">
                        Type of Inquiry *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                      >
                        <option value="" className="bg-slate-800">Select inquiry type...</option>
                        <option value="demo" className="bg-slate-800">Request Demo</option>
                        <option value="implementation" className="bg-slate-800">Implementation Support</option>
                        <option value="partnership" className="bg-slate-800">Partnership Opportunity</option>
                        <option value="pricing" className="bg-slate-800">Pricing Information</option>
                        <option value="support" className="bg-slate-800">Technical Support</option>
                        <option value="general" className="bg-slate-800">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 resize-vertical"
                        placeholder="Tell us about your needs, goals, or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300">Quick answers to common questions about Pathfinity.ai</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3">How does Pathfinity.ai work?</h3>
                <p className="text-gray-300 text-sm">
                  Pathfinity.ai uses three distinct learning modes - Learn, Experience, and Discover - to provide adaptive, AI-powered educational experiences tailored to each student's needs.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3">What makes it different?</h3>
                <p className="text-gray-300 text-sm">
                  Our platform combines 15+ years of EdTech expertise with cutting-edge AI to create immersive learning experiences that adapt to individual learning styles and preferences.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3">Who can use Pathfinity.ai?</h3>
                <p className="text-gray-300 text-sm">
                  Pathfinity.ai is designed for students, parents, teachers, and administrators looking to enhance educational outcomes through innovative AI-powered learning.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3">How do I get started?</h3>
                <p className="text-gray-300 text-sm">
                  Contact us through this form to schedule a demo, discuss implementation, or learn more about how Pathfinity.ai can transform your educational experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
};