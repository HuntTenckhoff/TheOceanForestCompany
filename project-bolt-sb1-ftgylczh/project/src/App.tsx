import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-8"
        >
          <div className="container mx-auto px-4">
            <Link to="/">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-light tracking-wide"
              >
                The Ocean Forest Company
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-2 font-light tracking-wider"
              >
                Exclusive Luxury Real Estate • Myrtle Beach, SC
              </motion.p>
            </Link>
            <Navigation />
          </div>
        </motion.header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-black text-white py-12 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2 font-light tracking-widest">THE OCEAN FOREST COMPANY</p>
            <p className="text-gray-400 tracking-wide">Luxury Real Estate • Myrtle Beach, SC</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;