import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "../Components/DarkModeProvider";

const OwnerDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.user);
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen px-4 py-6 md:px-10 lg:px-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Main Card */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
        {/* Text Section */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full"
        >
          {loggedInUser && (
            <p className="text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400 mb-1">
              👋 Hello,{" "}
              <span className="font-semibold">{loggedInUser.name}</span>
            </p>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug mb-4">
            Let’s Get Your Turf Game On!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            Seamlessly manage your turf availability, bookings, and performance.
            Keep your venue efficient and players satisfied — all from one
            place.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="flex-1 w-full max-w-sm"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVY8gutacs0D1wHlxOmNwaz2rrOgQ1Yuj51Q&s"
            alt="Turf Illustration"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
