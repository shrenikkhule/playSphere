import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { CalendarDaysIcon, MapPinIcon, UsersIcon } from "lucide-react";

const PlayerDashboard = () => {
  return (
    <div className="min-h-screen p-6  transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 bg-gray-50 dark:bg-gray-800"
      >
        <img
          src="https://www.shutterstock.com/image-vector/summer-sports-set-players-baseball-600nw-644077798.jpg"
          alt="Player"
          className="w-40 h-40 object-contain"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Let’s gear up and own the game today!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Explore matches, book venues, and level up your sports journey.
          </p>
        </div>
      </motion.div>

      {/* Dashboard Action Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Card: Find Players */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition"
        >
          <div className="flex items-center gap-3">
            <UsersIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Hire Coaches
            </h3>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Connect with other players in your city.
          </p>
        </motion.div>

        {/* Card: Book Turfs */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition"
        >
          <div className="flex items-center gap-3">
            <MapPinIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Book Venues
            </h3>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Browse available venues and book your slots.
          </p>
        </motion.div>

        {/* Card: Join Events */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition"
        >
          <div className="flex items-center gap-3">
            <CalendarDaysIcon className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Join Events
            </h3>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Participate in city-wide tournaments and events.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PlayerDashboard;
