import { motion } from "framer-motion";
import {
  AwardIcon,
  EditIcon,
  LockIcon,
  LogOutIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slice/UserSlice";
import axios from "axios";

const memberSince = "January 2022";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children by 0.1 seconds
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function ProfilePage() {
  let { loggedInUser } = useSelector((state) => state.user);

  loggedInUser = {
    name: loggedInUser.name,
    address: loggedInUser.address,
    email: loggedInUser.email,
    phone: loggedInUser.phone,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  //  const handleSave = async (id) => {
  //   if (!editedData.phone || !editedData.address || !editedData.role) {
  //     toast.error("All fields must be filled!");
  //     return;
  //   }
  //   try {
  //     await axios.put(`http://localhost:5000/api/users/${id}`, editedData);
  //     toast.success("User updated");
  //     setEditingUserId(null);
  //     fetchUsers();
  //   } catch (err) {
  //     toast.error("Update failed");
  //   }
  // };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen font-sans relative overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-[-10%] left-[-10%] w-1/3 h-1/3 bg-gradient-to-tr from-purple-300 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-1"
      ></motion.div>
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 0.5,
        }}
        className="absolute bottom-[-10%] right-[-10%] w-2/5 h-2/5 bg-gradient-to-tl from-pink-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-2"
      ></motion.div>

      <style>{`
        @keyframes blob-1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20%, -10%) scale(1.1); }
          66% { transform: translate(-10%, 15%) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-15%, 20%) scale(0.95); }
          66% { transform: translate(10%, -10%) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob-1 { animation: blob-1 10s infinite ease-in-out; }
        .animate-blob-2 { animation: blob-2 12s infinite ease-in-out; }
      `}</style>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
        {/* Main Profile Card */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            y: -5,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 transition-all duration-300"
        >
          {/* Header Banner for the profile card */}
          <div className="h-28 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-end -mt-20 sm:-mt-16 space-y-4 sm:space-y-0 sm:space-x-6">
            {/* User Avatar */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }} // Spring transition for natural feel
              className="w-32 h-32 rounded-full bg-violet-600 text-white font-bold text-5xl flex items-center justify-center border-4 border-white shadow-lg"
            >
              {loggedInUser.name.charAt(0).toUpperCase()}
            </motion.div>
            {/* User Name and Address */}
            <div className="text-center sm:text-left flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                {loggedInUser.name}
              </h1>
              <div className="flex items-center justify-center sm:justify-start mt-2">
                <MapPinIcon className="h-5 w-5 text-gray-500 mr-2" />
                <p className="text-md text-gray-600">{loggedInUser.address}</p>
              </div>
            </div>
            {/* Edit Profile Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(99, 102, 241, 0.4)",
              }} // Added subtle shadow on hover
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-2 border border-transparent rounded-full text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-all duration-200"
            >
              <EditIcon className="h-5 w-5 mr-2" />
              Edit Profile
            </motion.button>
          </div>
        </motion.div>

        {/* Grid for Left and Right Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 flex flex-col gap-8"
          >
            {/* Contact Information Card */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -3,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }} // Subtle lift and shadow on hover
              className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-gray-200 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-indigo-200 pb-3 mb-4">
                Contact Information
              </h2>
              <ul className="space-y-4 text-gray-700">
                {/* Mail Icon and Link */}
                <motion.li
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, color: "#6366F1" }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  >
                    <MailIcon className="h-5 w-5 text-indigo-500 mr-4" />
                  </motion.div>
                  <a
                    href={`mailto:${loggedInUser.email}`}
                    className="hover:text-indigo-600 break-all transition-colors duration-200"
                  >
                    {loggedInUser.email}
                  </a>
                </motion.li>
                {/* Phone Icon and Link */}
                <motion.li
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, color: "#6366F1" }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  >
                    <PhoneIcon className="h-5 w-5 text-indigo-500 mr-4" />
                  </motion.div>
                  <a
                    href={`tel:${loggedInUser.phone}`}
                    className="hover:text-indigo-600 transition-colors duration-200"
                  >
                    {loggedInUser.phone}
                  </a>
                </motion.li>
                {/* Member Since Information */}
                <motion.li
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, color: "#6366F1" }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  >
                    <AwardIcon className="h-5 w-5 text-indigo-500 mr-4" />
                  </motion.div>
                  <span>Member since {memberSince}</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Account Actions Card */}
            <motion.div
              whileHover={{
                y: -3,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }} // Subtle lift and shadow on hover
              className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-gray-200 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-indigo-200 pb-3 mb-4">
                Account
              </h2>
              <div className="space-y-3">
                {/* Change Password Button */}
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#F3F4F6" }} // Slightly darker background on hover
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white/50 hover:bg-gray-100 transition-all duration-200"
                >
                  <LockIcon className="h-5 w-5 mr-3 text-gray-500" />
                  Change Password
                </motion.button>
                {/* Logout Button */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(239, 68, 68, 0.4)",
                  }}
                  onClick={handleLogout}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center px-4 py-3 border border-transparent rounded-lg text-white bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 transition-all duration-200"
                >
                  <LogOutIcon className="h-5 w-5 mr-3" />
                  Logout
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (Placeholder for additional content) */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Example: Add a "Recent Activity" or "Preferences" section */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-indigo-200 pb-3 mb-4">
                Recent Activity
              </h2>
              <p className="text-gray-600">No recent activity to display.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-indigo-200 pb-3 mb-4">
                Preferences
              </h2>
              <p className="text-gray-600">Theme: Light</p>
              <p className="text-gray-600">Notifications: Enabled</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfilePage;
