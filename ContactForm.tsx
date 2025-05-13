import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // Here you would typically submit the form to a backend
      alert('Form submitted successfully! We will contact you soon.');
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-cream-50 p-6 md:p-8 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-semibold text-purple-900 mb-6">Send us a message</h3>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-purple-800 font-medium mb-1">
          Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 rounded-md border ${
            errors.name ? 'border-red-500' : 'border-purple-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />
        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-purple-800 font-medium mb-1">
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 rounded-md border ${
            errors.email ? 'border-red-500' : 'border-purple-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />
        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-purple-800 font-medium mb-1">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-purple-800 font-medium mb-1">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-3 py-2 rounded-md border ${
            errors.message ? 'border-red-500' : 'border-purple-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />
        {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
      </div>
      
      <div>
        <Button type="submit" variant="secondary" size="lg" className="w-full">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;