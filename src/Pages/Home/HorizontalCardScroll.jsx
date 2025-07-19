import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import axios from "axios";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLocationArrow,
  FaRegClock,
} from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdSportsSoccer } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";

const HorizontalCardScroll = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchVenues = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/venues");
        setVenues(res.data);
      } catch (err) {
        console.error("Error fetching venues:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  const scrollRef = useRef(null);

  useEffect(() => {
    const cards = scrollRef.current.querySelectorAll(".tilt-card");
    VanillaTilt.init(cards, {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  return (
    <>
      <section className="py-10 px-4 sm:px-6 lg:px-12 bg-white">
        <LoadingSpinner loading={loading} />
        <div className="flex justify-between items-center mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Book <span className="text-indigo-600">Game Spots</span> Venues
          </motion.h2>

          <motion.h2
            className="text-xl md:text-xl font-extrabold text-gray-800 cursor-pointer"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to={"/book-venues"}>
              <span className="text-black">View All</span>
            </Link>
          </motion.h2>
        </div>

        <div className="w-full overflow-x-auto px-4 pb-2">
          <div
            ref={scrollRef}
            className="flex gap-5 scroll-smooth no-scrollbar"
            style={{
              minWidth: "1500px",
            }}
          >
            {venues.map((item, idx) => {
              const imageName = item.images?.[0]?.split("\\").pop();
              const imageUrl = imageName
                ? `http://localhost:5000/uploads/venues/${imageName}`
                : "https://via.placeholder.com/400x250?text=No+Image";

              return (
                <motion.div
                  key={item._id}
                  className="min-w-[300px] max-w-[300px] cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-indigo-400 border hover:border-indigo-300 overflow-hidden transition-all duration-300 flex-shrink-0 flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() =>
                    navigate(`/details/${item._id}`, { state: { venue: item } })
                  }
                >
                  <img
                    src={imageUrl}
                    alt={item.name}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-4 flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-indigo-700">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      📍 <span className="font-medium">{item.address}</span>
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      🕒 <span className="font-medium">{item.timing}</span>
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      🏅{" "}
                      <span className="font-medium">
                        {item.sportsAvailable.join(", ")}
                      </span>
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll Buttons Under the Cards */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="bg-white border border-gray-300 shadow-md p-2 rounded-full hover:bg-indigo-100 transition"
          >
            <FaChevronLeft className="text-indigo-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white border border-gray-300 shadow-md p-2 rounded-full hover:bg-indigo-100 transition"
          >
            <FaChevronRight className="text-indigo-600" />
          </button>
        </div>
      </section>
      <section className="py-10 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="flex justify-between items-center mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover <span className="text-indigo-600">Game Spots</span> near
            you
          </motion.h2>

          <motion.h2
            className="text-xl md:text-xl font-extrabold text-gray-800 cursor-pointer"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to={"/book-venues"}>
              <span className="text-black">View All</span>
            </Link>
          </motion.h2>
        </div>

        {/* Scroll Buttons Under the Cards */}
        <div className="w-full overflow-x-auto px-4 pb-2">
          <div
            ref={scrollRef}
            className="flex gap-6 scroll-smooth no-scrollbar"
            style={{ minWidth: "1500px" }}
          >
            {venues.map((item, idx) => {
              const imageName = item.images?.[0]?.split("\\").pop();
              const imageUrl = imageName
                ? `http://localhost:5000/uploads/venues/${imageName}`
                : "https://via.placeholder.com/400x250?text=No+Image";

              return (
                <motion.div
                  key={item._id}
                  className="min-w-[300px] max-w-[300px] h-[370px] flex-shrink-0 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() =>
                    navigate(`/details/${item._id}`, { state: { venue: item } })
                  }
                >
                  {/* Image Section */}
                  <div className="relative h-44 w-full flex-shrink-0">
                    <img
                      src={imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover rounded-t-xl"
                    />
                    <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                      Around You
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 flex flex-col gap-1 overflow-hidden flex-grow">
                    <h3 className="text-base font-semibold text-indigo-700 flex items-center gap-2 truncate">
                      <HiOutlineMapPin className="text-indigo-500 text-lg" />
                      {item.name}
                    </h3>

                    <div className="text-sm text-gray-600 flex items-center gap-2 truncate">
                      <FaLocationArrow className="text-indigo-400 text-sm" />
                      <span>{item.address}</span>
                    </div>

                    <div className="text-sm text-gray-600 flex items-center gap-2 truncate">
                      <FaRegClock className="text-indigo-400 text-sm" />
                      <span>{item.timing}</span>
                    </div>

                    <div className="text-sm text-gray-600 flex items-center gap-2 truncate">
                      <MdSportsSoccer className="text-indigo-400 text-base" />
                      <span className="truncate">
                        {item.sportsAvailable.join(", ")}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 italic mt-1 overflow-hidden line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="bg-white border border-gray-300 shadow-md p-2 rounded-full hover:bg-indigo-100 transition"
          >
            <FaChevronLeft className="text-indigo-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white border border-gray-300 shadow-md p-2 rounded-full hover:bg-indigo-100 transition"
          >
            <FaChevronRight className="text-indigo-600" />
          </button>
        </div>
      </section>
    </>
  );
};

export default HorizontalCardScroll;
