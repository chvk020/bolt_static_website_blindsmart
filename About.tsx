import React from 'react';
import { UserCheck, Heart, Clock, BadgeCheck } from 'lucide-react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div>
      {/* Header section with image */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[50vh]">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" 
             style={{
               backgroundImage: "url('https://images.pexels.com/photos/6444260/pexels-photo-6444260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
             }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-purple-900"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-cream-100 font-bold text-4xl md:text-5xl mb-4">
                  About Us
                </h1>
                <p className="text-lavender-200 text-lg md:text-xl">
                  A family-run business committed to quality and customer satisfaction since 2009.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company story */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-purple-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-purple-100">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-3xl mb-5 font-semibold text-purple-900">Our Story</h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-purple-800">
                We are a family-run business with over 15 years of experience providing quality blinds and shades for residential and commercial properties. Our journey began in 2009 with a simple mission: to deliver modern, functional, and stylish window coverings that meet our clients' privacy and lighting needs.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-8 text-purple-800">
                What started as a small showroom has grown into a trusted name in window treatments, serving thousands of satisfied customers throughout the region. Our commitment to quality craftsmanship and exceptional service remains at the heart of everything we do.
              </p>
              <Button variant="primary">
                Learn more about our approach
              </Button>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-16 md:mt-0">
              <div className="relative flex flex-col min-w-0 break-words bg-cream-100 w-full mb-6 shadow-lg rounded-lg">
                <img
                  alt="Team of window treatment specialists"
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-cream-100 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-purple-900">
                    Our Team
                  </h4>
                  <p className="text-md font-light mt-2 text-purple-800">
                    Our dedicated team of designers, installers, and customer service specialists work collaboratively to ensure each project is completed to the highest standards. We treat every home and office as if it were our own.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us section */}
      <section className="py-16 md:py-24 bg-lavender-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-purple-800 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the window treatment industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex p-4">
              <div className="mr-4">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-100">
                  <UserCheck className="w-6 h-6 text-purple-700" />
                </div>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-purple-900 mb-2">Expert Design Advice</h5>
                <p className="text-purple-800">
                  Our team includes skilled designers who understand the interplay between light, space, and functionality. We provide personalized recommendations based on your specific needs and aesthetic preferences.
                </p>
              </div>
            </div>
            
            <div className="flex p-4">
              <div className="mr-4">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-100">
                  <Clock className="w-6 h-6 text-purple-700" />
                </div>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-purple-900 mb-2">Custom Fitting and Installation</h5>
                <p className="text-purple-800">
                  Every window is unique. Our expert measurers ensure precise dimensions, and our installation teams work with meticulous attention to detail for a flawless finish and operation.
                </p>
              </div>
            </div>
            
            <div className="flex p-4">
              <div className="mr-4">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-100">
                  <BadgeCheck className="w-6 h-6 text-purple-700" />
                </div>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-purple-900 mb-2">Durable Materials</h5>
                <p className="text-purple-800">
                  We source high-quality, eco-friendly materials designed to withstand daily use and maintain their appearance for years to come. Our products are built to last.
                </p>
              </div>
            </div>
            
            <div className="flex p-4">
              <div className="mr-4">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-100">
                  <Heart className="w-6 h-6 text-purple-700" />
                </div>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-purple-900 mb-2">Trusted Reputation</h5>
                <p className="text-purple-800">
                  With thousands of successful installations and a strong base of repeat clients, our reputation speaks for itself. We're proud to have earned the trust of homeowners and businesses alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-purple-800 text-cream-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Windows?</h2>
            <p className="text-lg mb-8 text-lavender-200 max-w-2xl mx-auto">
              Our team works closely with clients to understand their space and deliver tailored window solutions that last. Let's create something beautiful together.
            </p>
            <Button variant="secondary" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;