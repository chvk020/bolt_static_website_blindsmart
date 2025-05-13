import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 bg-cream-50 min-h-screen">
      {/* Header */}
      <div className="bg-purple-800 py-16 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-cream-100 text-center">
            Contact Us
          </h1>
          <p className="text-center text-lavender-200 mt-4 max-w-2xl mx-auto text-lg">
            We'd love to hear from you! Reach out with any questions about our products or services.
          </p>
        </div>
      </div>

      {/* Contact content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-900 mb-6">Get In Touch</h2>
            
            <div className="bg-cream-100 rounded-lg shadow-md p-6 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-purple-900">Email</h3>
                    <p className="text-purple-800">contact@blindsmart.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-purple-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-purple-900">Phone</h3>
                    <p className="text-purple-800">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-purple-900">Address</h3>
                    <p className="text-purple-800">123 Window Way</p>
                    <p className="text-purple-800">Shadeville, ST 98765</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-purple-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-purple-900">Business Hours</h3>
                    <p className="text-purple-800">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-purple-800">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-purple-800">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="rounded-lg overflow-hidden shadow-md h-80 bg-lavender-200 flex items-center justify-center">
              <p className="text-purple-800 text-center px-4">
                Interactive map would be displayed here.<br />
                (Requires Google Maps API integration)
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-900 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-lavender-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-cream-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                How do I schedule a consultation?
              </h3>
              <p className="text-purple-800">
                You can schedule a consultation by filling out our contact form, calling our office directly, or sending us an email. One of our team members will get back to you within 24 hours to arrange a convenient time.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Are in-home measurements free?
              </h3>
              <p className="text-purple-800">
                Yes, we offer complimentary in-home measurements as part of our service. Our expert will visit your location, take precise measurements, and discuss options that best suit your space and needs.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                What is the typical lead time for installation?
              </h3>
              <p className="text-purple-800">
                After you approve your order, standard window treatments typically take 2-3 weeks for delivery and installation. Custom orders may require 3-5 weeks. We'll provide you with a specific timeline during your consultation.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Do you offer warranties on your products?
              </h3>
              <p className="text-purple-800">
                Yes, all our products come with a manufacturer's warranty, typically ranging from 5-7 years depending on the product. Additionally, we offer a 1-year warranty on installation services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;