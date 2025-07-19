import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SportsComplexesPage from "./SportsComplexesPage";
function BookVenues() {
  return (
    <>
      <div className="bg-gray-100 p-8 m-6 rounded-2xl shadow-lg">
        <motion.div
          className="w-full px-6 py-10 bg-white/70 backdrop-blur-md shadow-lg rounded-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-8 flex flex-col md:flex-row justify-between  gap-8">
            {/* Left: Heading */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Sports Venues in Pune
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Discover and book top-rated venues around you
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-64">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search venues..."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <select className="w-full sm:w-48 bg-white border border-gray-300 rounded-lg py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Sports</option>
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
                <option value="badminton">Badminton</option>
                <option value="tennis">Tennis</option>
                <option value="basketball">Basketball</option>
              </select>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-8 flex justify-center md:justify-start mx-4 sm:mx-8 gap-3 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Link to="/book-venues/all">
            <button className="group px-6 py-2 sm:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-indigo-300 uppercase tracking-wide">
              Venues{" "}
              <span className="text-sm ml-1 group-hover:scale-110 transition">
                (608)
              </span>
            </button>
          </Link>

          <Link to="/book-venues/events">
            <button className="group px-6 py-2 sm:px-8 bg-white border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 shadow-sm transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-gray-200 uppercase tracking-wide">
              Events{" "}
              <span className="text-sm ml-1 group-hover:scale-110 transition">
                (1)
              </span>
            </button>
          </Link>

          <Link to="/book-venues/deals">
            <button className="group px-6 py-2 sm:px-8 bg-white border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 shadow-sm transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-gray-200 uppercase tracking-wide">
              Deals{" "}
              <span className="text-sm ml-1 group-hover:scale-110 transition">
                (2)
              </span>
            </button>
          </Link>
        </motion.div>
          <Outlet />
      </div>
      <SportsComplexesPage></SportsComplexesPage>
    </>
  );
}

export default BookVenues;
