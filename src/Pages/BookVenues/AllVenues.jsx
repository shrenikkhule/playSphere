import { FaStar } from "react-icons/fa";
import { MdLocationOn, MdSportsCricket } from "react-icons/md";
import { motion } from "framer-motion";

function AllVenues() {
  return (
    <>
      <motion.div
        className="mt-12 max-w-md bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 mx-auto"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://playo.gumlet.io/NAWUSPORTSCLUB20231117073811203577/NawuSportsClub1700288203817.jpg?mode=crop&crop=smart&h=200&width=450&q=75"
          alt="Nawu Sports Club"
          className="w-full h-52 object-cover"
        />
        <div className="p-6 space-y-2">
          <h2 className="text-xl font-bold text-gray-900">Nawu Sports Club</h2>

          <div className="flex items-center space-x-1 text-yellow-500">
            <FaStar className="text-yellow-500" />
            <span className="text-sm font-semibold text-gray-800">3.67</span>
            <span className="text-sm text-gray-500">(3)</span>
          </div>

          <div className="flex items-center text-gray-600">
            <MdLocationOn className="mr-2 text-blue-600" />
            <span>Gahunje (~24.7 km)</span>
          </div>

          <div className="flex items-center text-gray-600">
            <MdSportsCricket className="mr-2 text-green-600" />
            <span>Box Cricket</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AllVenues;
