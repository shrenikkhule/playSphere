import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          className="w-full md:max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            FIND <span className="text-[#4d4769]">PLAYERS</span> &{" "}
            <span className="text-[#4d4769]">VENUES</span> NEARBY
          </h1>
          <p className="text-lg text-gray-700">
            Seamlessly explore sports venues and play with sports enthusiasts
            just like you!
          </p>
          <div className="mt-8">
            <a
              href=""
              class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
            >
              <span class="ml-2">Get Started 🏀</span>
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-[550px] flex justify-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src="/homepage.JPG"
            alt="Sports Illustration"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-3xl shadow-2xl hover:shadow-[0_0_30px_#C0B7E8] transition-all"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
