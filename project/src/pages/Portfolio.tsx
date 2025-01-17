import { motion } from 'framer-motion';

const properties = [
  {
    id: 1,
    name: "The Grand Atlantic Estate",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    description: "A magnificent 8,500 sq ft oceanfront mansion featuring panoramic views, private beach access, and resort-style amenities.",
  },
  {
    id: 2,
    name: "Coastal Elegance Villa",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Modern architectural masterpiece with 6 bedrooms, infinity pool, and direct ocean views from every major room.",
  },
  {
    id: 3,
    name: "The Peninsula Residence",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    description: "Exclusive waterfront property featuring a private dock, guest house, and state-of-the-art smart home technology.",
  },
  {
    id: 4,
    name: "Golf Course Manor",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Prestigious 6,200 sq ft estate overlooking the 18th hole with a private putting green and entertainment pavilion.",
  },
  {
    id: 5,
    name: "Azure Bay Penthouse",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Luxurious top-floor residence with 360-degree views, private elevator, and exclusive rooftop terrace.",
  },
  {
    id: 6,
    name: "The Lighthouse Estate",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Historic property reimagined with modern luxury, featuring private beach path and spectacular sunrise views.",
  },
  {
    id: 7,
    name: "Palmetto Paradise",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Mediterranean-inspired villa with courtyard, wine cellar, and outdoor kitchen perfect for entertaining.",
  },
  {
    id: 8,
    name: "Coastal Crown Estate",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Ultra-luxury beachfront compound with helicopter pad, spa facility, and private security quarters.",
  },
  {
    id: 9,
    name: "The Marina Mansion",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Waterfront masterpiece with private yacht dock, guest apartments, and panoramic harbor views.",
  },
  {
    id: 10,
    name: "Sunset Cove Retreat",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Contemporary coastal estate featuring infinity edge pool, private beach, and award-winning architectural design.",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Portfolio Hero */}
      <div className="relative bg-black text-white py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-light tracking-wide mb-6"
          >
            Luxury Property Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light tracking-wide max-w-3xl"
          >
            Discover our curated collection of Myrtle Beach's most prestigious properties, each representing the pinnacle of coastal luxury living.
          </motion.p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white shadow-xl"
            >
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light tracking-wide text-gray-900 mb-4">
                  {property.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
                <button className="mt-6 bg-black text-white px-8 py-3 tracking-wider hover:bg-gray-900 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}