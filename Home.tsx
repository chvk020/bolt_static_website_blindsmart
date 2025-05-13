import React from 'react';
import { Shield, Ruler, Sun, Leaf } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Blinds & Shades for Every Space"
        subtitle="Enhance comfort, privacy, and style with our premium window treatments for homes and offices."
        imgSrc="https://images.pexels.com/photos/6489100/pexels-photo-6489100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">Welcome to BlindSmart</h2>
            <p className="text-lg text-purple-800 mb-8 leading-relaxed">
              We offer a wide range of blinds and shades designed to elevate your living and working environments. 
              Whether you're decorating your home or outfitting a commercial office, we have solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center text-purple-700">
                <span className="text-2xl mr-2">🪟</span>
                <span className="font-medium">Residential</span>
              </div>
              <div className="flex items-center text-purple-700">
                <span className="text-2xl mr-2">🏢</span>
                <span className="font-medium">Commercial</span>
              </div>
              <div className="flex items-center text-purple-700">
                <span className="text-2xl mr-2">🛠️</span>
                <span className="font-medium">Custom Installations</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="primary" size="lg">
                Explore Products
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-lavender-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Why Choose BlindSmart?</h2>
            <p className="text-lg text-purple-800 max-w-2xl mx-auto">
              Our premium window treatments combine functionality, style, and durability to enhance any space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Shield}
              title="Quality Guaranteed"
              description="All our products come with a 5-year warranty and are built to last."
            />
            <FeatureCard 
              icon={Ruler}
              title="Custom Sizing"
              description="Perfect fit for any window with our precise measurement service."
            />
            <FeatureCard 
              icon={Sun}
              title="Light Control"
              description="Adjustable options to manage natural light for optimal comfort."
            />
            <FeatureCard 
              icon={Leaf}
              title="Eco-Friendly"
              description="Sustainable materials and energy-efficient designs for your home."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-900 text-cream-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-lg mb-8 text-lavender-300">
              Book a free consultation with our window treatment experts today. We'll help you find the perfect solution for your home or office.
            </p>
            <Button variant="secondary" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;