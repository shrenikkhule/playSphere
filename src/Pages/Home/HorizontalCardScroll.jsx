import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import { scrolldata } from "./data";

const HorizontalCardScroll = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const distance = 320;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -distance : distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="py-10 px-4 sm:px-6 lg:px-12 bg-white">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Book <span className="text-indigo-600">Game Spots</span> Venues
        </motion.h2>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-5 overflow-x-auto scroll-smooth no-scrollbar pb-2"
        >
          {scrolldata.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group min-w-[240px] sm:min-w-[260px] bg-gradient-to-tr from-white to-indigo-50 rounded-2xl shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex-shrink-0 overflow-hidden"
            >
              <img
                src={item.img}
                alt={`Ground ${idx + 1}`}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.address}</p>
              </div>
            </motion.div>
          ))}
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
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover <span className="text-indigo-600">Game Spots</span> near you
        </motion.h2>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-5 overflow-x-auto scroll-smooth no-scrollbar pb-2"
        >
          {scrolldata.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group min-w-[240px] sm:min-w-[260px] bg-gradient-to-tr from-white to-indigo-50 rounded-2xl shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex-shrink-0 overflow-hidden"
            >
              <img
                src={item.img}
                alt={`Ground ${idx + 1}`}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.address}</p>
              </div>
              
            </motion.div>
          ))}
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
    </>
  );
};

export default HorizontalCardScroll;
