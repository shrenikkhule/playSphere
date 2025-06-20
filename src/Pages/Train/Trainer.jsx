import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Trainer() {
  const trainers = [
    {
      id: 1,
      name: "Sanket Kamble",
      location: "Pune, Maharashtra, India",
      type: "Adults",
      rating: "4.8",
      image:
        "https://playo.co/_next/image?url=https%3A%2F%2Fplayov2.gumlet.io%2Fprofiles%2F1743006993348-profilePic.jpg&w=1920&q=75",
    },
    {
      id: 2,
      name: "Aditi Sharma",
      location: "Pune, Maharashtra, India",
      type: "Teens & Adults",
      rating: "4.9",
      image:
        "https://www.healthfitnessindia.in/wp-content/uploads/2016/11/LUVFITNESS-by-Personal-Fitness-Trainer-Manisha-Singh-Exercise-Nutrition-Beauty-Health-Fitness-Wellness-India-34.jpg",
    },
    {
      id: 3,
      name: "Aditi Sharma",
      location: "Pune, Maharashtra, India",
      type: "Teens & Adults",
      rating: "4.9",
      image:
        "https://playo.co/_next/image?url=https%3A%2F%2Fplayov2.gumlet.io%2Fprofiles%2F1749040695924-profilePic.jpg&w=1920&q=75",
    },
    {
      id: 4,
      name: "Rohan Mehta",
      location: "Pune, Maharashtra, India",
      type: "Kids & Adults",
      rating: "4.7",
      image:
        "https://playo.co/_next/image?url=https%3A%2F%2Fplayov2.gumlet.io%2Fprofiles%2F1748309041080-profilePic.jpg&w=1920&q=75",
    },
  ];

  return (
    <>
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
            <Link to={`trainer-details/${trainer.id}`}>
              <motion.div
                key={index}
                className="bg-white w-[320px] h-[440px] rounded-2xl shadow-lg overflow-hidden relative border hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow font-bold uppercase tracking-wide">
                    Trainer
                  </span>
                </div>
                <div className="p-5 text-center space-y-2">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {trainer.name}
                  </h2>
                  <p className="text-sm text-gray-500">{trainer.location}</p>
                  <p className="text-sm text-gray-500">{trainer.type}</p>
                  <div className="flex justify-center items-center text-yellow-500 mt-2">
                    <FaStar className="mr-1" />
                    <span className="text-base font-medium text-gray-800">
                      {trainer.rating}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trainer;
