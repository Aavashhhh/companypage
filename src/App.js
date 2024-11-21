import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex justify-center py-8"> {/* Centering the Cards component */}
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default App;
