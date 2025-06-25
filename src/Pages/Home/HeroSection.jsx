import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full relative">
      {/* Fixed Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/sport-ball-floor-indoors_23-2151919235.jpg?semt=ais_hybrid&w=740')",
        }}
      ></div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Content */}
        <motion.div
          className="w-full md:max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-white">
            FIND <span className="text-[#ffffff]">PLAYERS</span> &{" "}
            <span className="text-[#ffffff]">VENUES</span> NEARBY
          </h1>
          <p className="text-lg text-white">
            Seamlessly explore sports venues and play with sports enthusiasts
            just like you!
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
            >
              <span className="ml-2">Get Started 🏀</span>
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src="/pngfind.com-basketball.png"
            alt="Sports Illustration"
            className="w-42 h-56 lg:hidden block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -30, 0] }} // Increased jump height
            transition={{
              repeat: Infinity,
              duration: 2, // Faster animation
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
