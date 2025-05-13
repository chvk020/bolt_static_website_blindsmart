import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  imgSrc: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imgSrc }) => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgSrc} 
          alt="Elegant window treatments" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900 bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-cream-50 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="secondary" size="lg">
                Explore Products
              </Button>
              <Button variant="outline" size="lg" className="border-cream-100 text-cream-100 hover:bg-purple-800 hover:bg-opacity-30">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;