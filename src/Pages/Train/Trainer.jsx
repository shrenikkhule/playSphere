import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

function Trainer() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-10">
        {/* Motion Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sports Trainers in <span className="text-blue-600">Pune</span>
        </motion.h1>

        {/* Motion Subtext (Optional) */}
        <motion.p
          className="text-center text-gray-600 mt-2 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Find the best trainers near you for every sport and skill level
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div className="relative w-full max-w-3xl">
            <input
              type="text"
              placeholder="Search for trainers, sports, or locations..."
              className="w-full pl-5 pr-14 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-600 hover:text-blue-800">
              <FaSearch className="text-lg" />
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Trainer;
