import axios from "axios";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useEffect, useState } from "react";

function Trainer() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchAllTrainers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/trainers/getall"
      );
      setTrainers(response.data);
    } catch (err) {
      console.error("Failed to fetch trainers:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllTrainers();
  }, []);
 

  return (
    <>
      <LoadingSpinner loading={loading} />
      <div className="w-full max-w-7xl mx-auto my-7 px-4 py-10 ">
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

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {trainers.map((trainer, index) => (
            <motion.div
              className="w-[320px] h-[460px] rounded-2xl bg-white/90 backdrop-blur-md border border-indigo-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() =>
                navigate(`/trainer-details/${trainer._id}`, {
                  state: { trainer: trainer },
                })
              }
            >
              <div className="relative">
                <img
                  src={
                    trainer.images && trainer.images.length > 0
                      ? `http://localhost:5000/${trainer.images[0].replace(
                          /\\/g,
                          "/"
                        )}`
                      : "https://via.placeholder.com/320x240?text=No+Image"
                  }
                  alt={trainer.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <span className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full shadow font-semibold uppercase tracking-wide">
                  Trainer
                </span>
              </div>
              <div className="p-5 text-center space-y-2">
                <h2 className="text-2xl font-extrabold text-gray-800">
                  {trainer.name}
                </h2>
                <p className="text-sm text-gray-500 italic">
                  {trainer.address}
                </p>
                <p className="text-sm font-medium text-indigo-500">
                  {trainer.classesFor}
                </p>
                <div className="flex justify-center items-center text-yellow-500 mt-2">
                  <FaStar className="mr-1" />
                  <span className="text-base font-semibold text-gray-800">
                    {trainer.rating || "4.8"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trainer;
