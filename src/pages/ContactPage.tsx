import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-12 bg-white border-b border-[#ebebeb]">
        <div className="container-main text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-[#082777] mb-3">
            Contact Us
          </h1>
          <p className="text-[#464646] text-base max-w-xl mx-auto">
            Have a question, suggestion, or found an error? We would love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 md:py-16">
        <div className="container-main max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-5">
              <div className="bg-white rounded-xl border border-[#ebebeb] p-6 card-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#d4e2ff] flex items-center justify-center mb-3">
                  <Mail size={18} className="text-[#082777]" />
                </div>
                <h4 className="font-semibold text-sm text-[#242424] mb-1">Email</h4>
                <p className="text-sm text-[#6c6c6c]">support@cbsemathsolutions.com</p>
              </div>
              <div className="bg-white rounded-xl border border-[#ebebeb] p-6 card-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#d9f6f2] flex items-center justify-center mb-3">
                  <Phone size={18} className="text-[#0aad93]" />
                </div>
                <h4 className="font-semibold text-sm text-[#242424] mb-1">Phone</h4>
                <p className="text-sm text-[#6c6c6c]">+91 98765 43210</p>
              </div>
              <div className="bg-white rounded-xl border border-[#ebebeb] p-6 card-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#fef3c7] flex items-center justify-center mb-3">
                  <MapPin size={18} className="text-amber-600" />
                </div>
                <h4 className="font-semibold text-sm text-[#242424] mb-1">Location</h4>
                <p className="text-sm text-[#6c6c6c]">New Delhi, India</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-[#ebebeb] p-6 md:p-8 card-shadow">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#d9f6f2] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-[#0aad93]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#082777] mb-2">Message Sent!</h3>
                    <p className="text-[#6c6c6c] text-sm">
                      Thank you for reaching out. We will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#242424] mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#ebebeb] text-sm outline-none focus:border-[#0aad93] focus:ring-2 focus:ring-[#0aad93]/20 transition-all bg-[#f4f6f8]"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#242424] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#ebebeb] text-sm outline-none focus:border-[#0aad93] focus:ring-2 focus:ring-[#0aad93]/20 transition-all bg-[#f4f6f8]"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#242424] mb-2">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#ebebeb] text-sm outline-none focus:border-[#0aad93] focus:ring-2 focus:ring-[#0aad93]/20 transition-all bg-[#f4f6f8]"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="error">Solution Error</option>
                        <option value="request">Syllabus Request</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#242424] mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#ebebeb] text-sm outline-none focus:border-[#0aad93] focus:ring-2 focus:ring-[#0aad93]/20 transition-all bg-[#f4f6f8] resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-primary gap-2 py-3.5"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
