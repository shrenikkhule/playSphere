import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaChartLine, FaUserFriends } from "react-icons/fa";
import { useDarkMode } from "./Components/DarkModeProvider";

const cardData = [
  {
    title: "Manage Sessions",
    icon: <FaCalendarAlt className="text-3xl text-white" />,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Track Earnings",
    icon: <FaChartLine className="text-3xl text-white" />,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Bookings & Clients",
    icon: <FaUserFriends className="text-3xl text-white" />,
    color: "from-pink-500 to-rose-600",
  },
];

const CoachDashboard = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen  py-10 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-14"
      >
        <div className="md:w-1/2 text-center md:text-left space-y-3">
          <span className="inline-block px-4 py-1 text-sm font-semibold bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white rounded-full shadow">
            Today’s Overview
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Shape Tomorrow’s Champions
          </h1>
          <p className="text-lg">
            Plan sessions, track your growth, and lead your players to success.
          </p>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp007mWUXnUjbJ_n2BshGnmzkJdLFSEyDWTw&s"
          alt="Coach Illustration"
          title="Motivational coaching"
          className="w-48 md:w-60 drop-shadow-md"
        />
      </motion.div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2 * index,
              type: "spring",
              stiffness: 150,
            }}
            className={`rounded-2xl shadow-xl p-6 text-white bg-gradient-to-br ${card.color} cursor-pointer transform transition-all duration-300 hover:shadow-2xl`}
          >
            <div className="flex items-center justify-between">
              {card.icon}
              <h2 className="text-lg font-semibold">{card.title}</h2>
            </div>
            <p className="text-sm mt-4 opacity-90">
              Click to manage {card.title.toLowerCase()}.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoachDashboard;
