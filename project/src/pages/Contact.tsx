import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-black text-white py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-light tracking-wide mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light tracking-wide max-w-3xl"
          >
            Connect with our luxury real estate specialists to begin your journey to exceptional coastal living.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 tracking-wide">
                Name
              </label>
              <input
                type="text"
                required
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
                className="mt-1 block w-full rounded-none border-gray-200 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 tracking-wide">
                Message
              </label>
              <textarea
                rows={6}
                required
                className="mt-1 block w-full rounded-none border-gray-200 shadow-sm focus:border-black focus:ring-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-4 tracking-wide hover:bg-gray-900 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}