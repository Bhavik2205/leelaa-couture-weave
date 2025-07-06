
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    city: '',
    whatsapp: '',
    enquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-ivory font-montserrat">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-ivory via-blush/20 to-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl text-maroon mb-6">
              Contact Us
            </h1>
            <div className="w-32 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-maroon/70 leading-relaxed">
              Begin your journey with LEELAA. Let us create something beautiful together.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-blush/10 to-ivory rounded-lg p-8">
                <h2 className="font-playfair text-3xl text-maroon mb-6">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-montserrat text-maroon mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-maroon/20 rounded-lg focus:outline-none focus:border-gold bg-ivory"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-montserrat text-maroon mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-maroon/20 rounded-lg focus:outline-none focus:border-gold bg-ivory"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block font-montserrat text-maroon mb-2">Country</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-maroon/20 rounded-lg focus:outline-none focus:border-gold bg-ivory"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block font-montserrat text-maroon mb-2">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-maroon/20 rounded-lg focus:outline-none focus:border-gold bg-ivory"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block font-montserrat text-maroon mb-2">WhatsApp Number</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-maroon/20 rounded-lg focus:outline-none focus:border-gold bg-ivory"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiryType" className="block font-montserrat text-maroon mb-2">Type of Enquiry *</label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-maroon/20 rounded-lg focus:outline-none focus:border-gold bg-ivory appearance-none relative z-10"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23600f2f' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option value="">Select Enquiry Type</option>
                      <option value="bridal">Bridal Consultation</option>
                      <option value="collection">Collection Enquiry</option>
                      <option value="jewelry">Jewelry Design</option>
                      <option value="custom">Custom Design</option>
                      <option value="appointment">Appointment Booking</option>
                      <option value="press">Press & Media</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-montserrat text-maroon mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-maroon/20 rounded-lg focus:outline-none focus:border-gold bg-ivory resize-vertical"
                      placeholder="Tell us about your vision, occasion, or any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex items-center px-8 py-4 border-2 border-gold text-maroon font-montserrat font-medium tracking-wide hover:text-ivory transition-colors duration-300 overflow-hidden w-full justify-center"
                  >
                    <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative">Send Message</span>
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-maroon/10 to-gold/10 rounded-lg p-8">
                  <h3 className="font-playfair text-2xl text-maroon mb-6">Visit Our Studio</h3>
                  <div className="space-y-4">
                    <p className="font-montserrat text-maroon/80">
                      <strong>Coming Soon</strong><br />
                      Our flagship studio will be opening in 2026.<br />
                      Currently accepting appointments for virtual consultations.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gold/10 to-blush/10 rounded-lg p-8">
                  <h3 className="font-playfair text-2xl text-maroon mb-6">Business Hours</h3>
                  <div className="space-y-2 font-montserrat text-maroon/80">
                    <p><strong>Monday - Friday:</strong> 10:00 AM - 7:00 PM</p>
                    <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
                    <p><strong>Sunday:</strong> By Appointment Only</p>
                    <p className="text-sm mt-4 text-gold">*Virtual consultations available worldwide</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blush/20 to-ivory rounded-lg p-8">
                  <h3 className="font-playfair text-2xl text-maroon mb-6">Connect With Us</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-montserrat font-semibold text-maroon mb-2">General Enquiries</h4>
                      <p className="font-montserrat text-maroon/70">hello@leelaa.com</p>
                      <p className="font-montserrat text-maroon/70">+91 98765 43210</p>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-maroon mb-2">Bridal Consultations</h4>
                      <p className="font-montserrat text-maroon/70">bridal@leelaa.com</p>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-maroon mb-2">Follow Us</h4>
                      <a 
                        href="https://www.instagram.com/leelaa.couture/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-montserrat text-gold hover:text-maroon transition-colors duration-300"
                      >
                        @leelaa.couture
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
