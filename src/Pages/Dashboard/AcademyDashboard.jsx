import { motion } from "framer-motion";
import { FaUserGraduate, FaCalendarCheck, FaChartBar } from "react-icons/fa";
import { useDarkMode } from "./Components/DarkModeProvider";

const features = [
  {
    title: "Manage Students",
    description: "Add, view, and update student profiles & achievements.",
    icon: (
      <FaUserGraduate className="text-3xl text-blue-600 dark:text-blue-400" />
    ),
  },
  {
    title: "Host Events",
    description: "Organize matches, workshops, and training events.",
    icon: (
      <FaCalendarCheck className="text-3xl text-green-600 dark:text-green-400" />
    ),
  },
  {
    title: "Track Progress",
    description: "Monitor student growth with performance analytics.",
    icon: (
      <FaChartBar className="text-3xl text-purple-600 dark:text-purple-400" />
    ),
  },
];

const AcademyDashboard = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen py-10 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mb-14"
      >
        <div className="lg:w-1/2 space-y-3 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to Your Academy Hub
          </h1>
          <p className="text-lg ">
            Streamline student growth, manage events, and lead your academy to
            excellence.
          </p>
        </div>
        <img
          src="https://pushsports.in/wp-content/uploads/2024/01/homepage-image-2.webp"
          alt="Academy Illustration"
          title="Academy Management"
          className="w-52 md:w-72 drop-shadow"
        />
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-center gap-4 mb-3">
              {feature.icon}
              <h3 className="text-xl text-gray-600 dark:text-gray-300 font-semibold">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AcademyDashboard;
