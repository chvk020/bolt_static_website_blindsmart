import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle navigation based on URL hash
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      
      // Scroll to top when changing pages
      window.scrollTo(0, 0);
      
      // Update document title based on current page
      const titles = {
        home: 'BlindSmart | Premium Window Treatments',
        about: 'About Us | BlindSmart',
        products: 'Products | BlindSmart',
        contact: 'Contact Us | BlindSmart'
      };
      
      document.title = titles[hash as keyof typeof titles] || 'BlindSmart';
    };
    
    // Initial page load
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Render current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;