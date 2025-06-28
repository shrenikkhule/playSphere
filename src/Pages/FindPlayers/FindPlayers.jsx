import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaCalendarAlt,
  FaClock,
  FaFilter,
  FaFutbol,
  FaGooglePlay,
  FaMapMarkerAlt,
  FaPlayCircle,
  FaRegClock,
  FaRunning,
} from "react-icons/fa";

function FindPlayers() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const cardData = [
    {
      id: 1,
      userName: "Niraj",
      karma: 85,
      status: "Regular",
      going: "1 Going",
      date: "Sun, 15 Jun 2025",
      time: "04:00 PM - 05:00 PM",
      clubName: "Laxmi Krida Mandir Badminton Hall",
      address: "Laxmi Krida Mandir B...",
      distance: "2.81 Kms",
      sportLevel: "Beginner - Professional",
      profilePic:
        "https://www.shutterstock.com/shutterstock/photos/1422647345/display_1500/stock-vector-soccer-player-with-arms-crossed-profile-cartoon-vector-illustration-graphic-design-1422647345.jpg",
    },
    {
      id: 2,
      userName: "Dinesh",
      karma: 157,
      status: "Regular",
      going: "1 Going",
      date: "Sun, 15 Jun 2025",
      time: "Evening",
      clubName: "Revenue Colony",
      address: "Revenue Colony",
      distance: "3.37 Kms",
      sportLevel: "Beginner - Professional",
      extra: "Doubles",
      profilePic:
        "https://i.pinimg.com/736x/43/69/3e/43693e09ff113f15f71db2c2bb5c1420.jpg",
    },
    {
      id: 3,
      userName: "Shantanu",
      karma: 517,
      status: "Regular",
      going: "🚀 Only 2 Slots",
      date: "Sun, 15 Jun 2025",
      time: "07:00 PM - 09:00 PM",
      clubName: "Town Hall Committee",
      address: "Town Hall Committee,...",
      distance: "3.48 Kms",
      sportLevel: "Intermediate - Professional",
      extra: "MH",
      profilePic:
        "https://i.pinimg.com/736x/43/69/3e/43693e09ff113f15f71db2c2bb5c1420.jpg",
    },
    {
      id: 4,
      userName: "Yogiraj",
      karma: 555,
      status: "Regular",
      going: "3/6 Going",
      date: "Sat, 21 Jun 2025",
      time: "11:00 AM - 01:00 PM",
      clubName: "Sanas Badminton Court",
      address: "Sanas Badminton Cour...",
      distance: "3.67 Kms",
      sportLevel: "Amateur - Advance",
      profilePic:
        "https://i.pinimg.com/736x/43/69/3e/43693e09ff113f15f71db2c2bb5c1420.jpg",
    },
    {
      id: 5,
      userName: "Yogiraj",
      karma: 555,
      status: "Regular",
      going: "3/6 Going",
      date: "Sun, 22 Jun 2025",
      time: "11:00 AM - 01:00 PM",
      clubName: "Sanas Badminton Court",
      address: "Sanas Badminton Cour...",
      distance: "3.67 Kms",
      sportLevel: "Amateur - Advance",
      extra: "Doubles",
      profilePic:
        "https://i.pinimg.com/736x/43/69/3e/43693e09ff113f15f71db2c2bb5c1420.jpg",
    },
    {
      id: 6,
      userName: "Prashant Singh",
      karma: 430,
      status: "Regular",
      going: "🚀 Only 1 Slots",
      date: "Sun, 15 Jun 2025",
      time: "08:00 PM - 09:00 PM",
      clubName: "ShuttleMasters Badminton Hall, Hadapsar",
      address: "ShuttleMasters Badmi...",
      distance: "4.10 Kms",
      sportLevel: "Intermediate - Professional",
      extra: "MH",
      booking: "BOOKED",
      profilePic:
        "https://i.pinimg.com/736x/43/69/3e/43693e09ff113f15f71db2c2bb5c1420.jpg",
    },
    {
      id: 7,
      userName: "sailesh",
      karma: 1293,
      status: "Regular",
      going: "1 Going",
      date: "Sat, 21 Jun 2025",
      time: "09:00 AM - 10:00 AM",
      clubName: "SRPF Group 1 Badminton Court, Hadapsar",
      address: "SRPF Group 1 Badmint...",
      distance: "4.09 Kms",
      sportLevel: "Beginner - Professional",
      booking: "BOOKED",
      profilePic:
        "https://i.pinimg.com/736x/43/69/3e/43693e09ff113f15f71db2c2bb5c1420.jpg",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 p-8 m-6 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Games in Pune
          </h2>

          {/* Right Play Store Download */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700 flex items-center justify-center gap-2">
              <FaGooglePlay className="text-green-600 text-2xl" />
              Download App from Play Store
            </h3>
          </div>
        </div>

        {/* Button Row - Centered */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button className="flex items-center gap-2 bg-gray-200 text-gray-800 px-5 py-2 rounded-full shadow hover:bg-gray-300 transition">
            <FaClock /> Game Time by PlaySphere
          </button>

          <button className="flex items-center gap-2 bg-gray-200 text-gray-800 px-5 py-2 rounded-full shadow hover:bg-gray-300 transition">
            <FaFilter /> Filter
          </button>

          {/* Sport Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 bg-gray-200 text-gray-800 px-5 py-2 rounded-full shadow hover:bg-gray-300 transition"
            >
              <FaFutbol /> Sport
            </button>

            {showDropdown && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow rounded-lg z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Football
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Cricket
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Tennis
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button className="flex items-center gap-2 bg-gray-200 text-gray-800 px-5 py-2 rounded-full shadow hover:bg-gray-300 transition">
            <FaCalendarAlt /> Date
          </button>

          <button className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full shadow hover:bg-green-600 transition">
            <FaPlayCircle /> Play & Join Game
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-5 rounded-2xl shadow-lg w-full"
            >
              {/* Top Row */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.profilePic}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-gray-800">
                        {item.userName}
                      </h3>
                      <span className="flex items-center gap-1 text-sm text-yellow-600">
                        <FaBolt /> {item.karma} Karma
                      </span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">
                      {item.going} Going
                    </p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-semibold">
                  {item.status}
                </span>
              </div>

              {/* Date & Time */}
              <div className="text-sm text-gray-600 mb-4 space-y-1">
                <p className="flex items-center gap-2">
                  <FaCalendarAlt /> {item.date}
                </p>
                <p className="flex items-center gap-2">
                  <FaRegClock /> {item.time}
                </p>
              </div>

              {/* Club & Distance */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  {item.clubName}
                </h4>
                <p className="text-sm text-gray-500 pl-6">~{item.distance}</p>
              </div>

              {/* Sport Info */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                  <FaRunning className="text-green-600" />
                  {item.sportLevel}
                </div>

                <button className="text-sm bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-green-600 transition">
                  Join Game
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FindPlayers;
