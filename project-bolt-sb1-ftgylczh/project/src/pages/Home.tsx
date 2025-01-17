import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Message {
  text: string;
  sender: 'user' | 'agent';
}

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Welcome to The Ocean Forest Company. We're here to help you find your perfect property in Myrtle Beach. How can we assist you today?",
      sender: 'agent'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessages = [...messages, { text: inputText, sender: 'user' as const }];
    setMessages(newMessages);
    setInputText('');

    setTimeout(() => {
      const userMessage = inputText.toLowerCase();
      let response = '';

      if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('worth')) {
        response = "Property values in Myrtle Beach vary based on location, amenities, and market conditions. To provide you with accurate pricing information for your specific needs, we'd love to connect with you personally. Would you mind sharing your contact information?";
      } else if (userMessage.includes('area') || userMessage.includes('location') || userMessage.includes('neighborhood')) {
        response = "Myrtle Beach offers diverse neighborhoods, each with unique characteristics and investment potential. From oceanfront condos to family-friendly suburban communities, we can help you find the perfect location. To better understand your preferences, could we get your contact details?";
      } else if (userMessage.includes('buy') || userMessage.includes('purchase')) {
        response = "That's excellent that you're interested in purchasing property in Myrtle Beach. Our team has extensive experience helping buyers find their ideal homes. To better assist you with your search, could we get your contact information?";
      } else if (userMessage.includes('sell')) {
        response = "We specialize in maximizing value for our sellers in the Myrtle Beach market. Our marketing strategies and local expertise can help you achieve the best possible outcome. Would you like to discuss your property in detail? Please share your contact information.";
      } else {
        response = "Thank you for your message. To better assist you with your real estate needs in Myrtle Beach, we'd love to connect with you personally. Would you mind sharing your contact information?";
      }

      setMessages([...newMessages, { text: response, sender: 'agent' }]);
      setShowContactForm(true);
    }, 1000);
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        text: "Thank you for providing your information. One of our experienced agents will contact you shortly to discuss your real estate needs in Myrtle Beach.",
        sender: 'agent'
      }
    ]);
    setShowContactForm(false);
    setContactInfo({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-black text-white py-16 sm:py-24 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide mb-6 sm:mb-8"
            >
              Curating Exceptional Coastal Estates
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl font-light tracking-wide mb-8 sm:mb-12 leading-relaxed"
            >
              Discover an unparalleled collection of prestigious oceanfront properties and exclusive golf course estates, meticulously selected for the most discerning buyers.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Link
                to="/portfolio"
                className="bg-white bg-opacity-10 backdrop-blur-md text-white px-6 sm:px-10 py-4 rounded-none border border-white/20 hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-center"
              >
                View Portfolio
              </Link>
              <Link
                to="/contact"
                className="bg-white text-black px-6 sm:px-10 py-4 rounded-none hover:bg-opacity-90 transition-all duration-300 tracking-wider text-center"
              >
                Private Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Why Choose Us Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gray-900 text-white p-6 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-8 text-center">Why Choose The Ocean Forest Company</h2>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl sm:text-2xl font-light mb-4">Unparalleled Market Knowledge</h3>
                  <p className="text-gray-300">With decades of experience in Myrtle Beach real estate, we possess an intimate understanding of the local market dynamics, ensuring our clients make informed investment decisions.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl sm:text-2xl font-light mb-4">Exclusive Access</h3>
                  <p className="text-gray-300">Our extensive network provides access to off-market properties and exclusive listings not available to the general public.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-xl sm:text-2xl font-light mb-4">Concierge Service</h3>
                  <p className="text-gray-300">Every client receives personalized attention from our senior agents, ensuring a seamless and confidential real estate experience.</p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 bg-blue-900 text-white p-6 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-12 text-center">Client Testimonials</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 p-6 sm:p-8"
              >
                <p className="text-gray-200 mb-4">"The Ocean Forest Company's expertise in the Myrtle Beach luxury market is unmatched. They found us our dream oceanfront property and handled everything with the utmost professionalism."</p>
                <p className="text-sm text-gray-400">- James & Sarah Thompson</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 p-6 sm:p-8"
              >
                <p className="text-gray-200 mb-4">"Their attention to detail and market knowledge helped us secure an exceptional investment property. The entire process was seamless and professional."</p>
                <p className="text-sm text-gray-400">- Robert Anderson</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-gray-800 p-8 text-white">
              <h3 className="text-xl font-light tracking-wide mb-4">Curated Portfolio</h3>
              <p className="text-gray-400 leading-relaxed">
                Access to the most prestigious properties in the Myrtle Beach luxury market
              </p>
            </div>
            <div className="bg-gray-800 p-8 text-white">
              <h3 className="text-xl font-light tracking-wide mb-4">Bespoke Service</h3>
              <p className="text-gray-400 leading-relaxed">
                Personalized attention and discretion for our distinguished clientele
              </p>
            </div>
            <div className="bg-gray-800 p-8 text-white">
              <h3 className="text-xl font-light tracking-wide mb-4">Market Authority</h3>
              <p className="text-gray-400 leading-relaxed">
                Unparalleled expertise in luxury coastal real estate investments
              </p>
            </div>
          </motion.section>

          {/* Chat Interface */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-none shadow-2xl p-4 sm:p-8"
          >
            <div className="space-y-4 h-96 overflow-y-auto mb-6">
              {messages.map((message, index) => (
                <motion.div
                  initial={{ opacity: 0, x: message.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`rounded-none px-4 sm:px-6 py-3 max-w-[90%] sm:max-w-[80%] ${
                      message.sender === 'user'
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {!showContactForm ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message here..."
                  className="flex-1 rounded-none border-gray-200 focus:ring-black focus:border-black"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-black text-white px-8 py-3 rounded-none hover:bg-gray-900 transition-colors"
                >
                  Send
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitContact} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo.name}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, name: e.target.value })
                    }
                    className="mt-1 block w-full rounded-none border-gray-200 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={contactInfo.email}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, email: e.target.value })
                    }
                    className="mt-1 block w-full rounded-none border-gray-200 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 tracking-wide">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactInfo.phone}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, phone: e.target.value })
                    }
                    className="mt-1 block w-full rounded-none border-gray-200 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 tracking-wide">
                    Message (Optional)
                  </label>
                  <textarea
                    value={contactInfo.message}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, message: e.target.value })
                    }
                    rows={4}
                    className="mt-1 block w-full rounded-none border-gray-200 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 rounded-none hover:bg-gray-900 transition-colors tracking-wide"
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>
    </>
  );
}