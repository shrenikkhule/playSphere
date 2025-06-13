import { Outlet } from "react-router-dom";
import {
  FaCalendarCheck,
  FaDumbbell,
  FaHome,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdFitnessCenter, MdSportsSoccer } from "react-icons/md";

function Template() {
  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full  text-white shadow-md z-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-xl text-green-400" />
              <span className="text-xl font-bold tracking-wide text-white">
                PlaySphere
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#play"
                className="hover:text-green-300 font-medium flex items-center gap-1 transition"
              >
                <FaUsers className="text-base text-green-400" />
                <span>Find Players</span>
              </a>
              <a
                href="#book"
                className="hover:text-yellow-300 font-medium flex items-center gap-1 transition"
              >
                <FaCalendarCheck className="text-base text-yellow-400" />
                <span>Book Venues</span>
              </a>
              <a
                href="#train"
                className="hover:text-orange-300 font-medium flex items-center gap-1 transition"
              >
                <FaDumbbell className="text-base text-orange-400" />
                <span>Train</span>
              </a>
            </div>

            {/* Auth Button */}
            <div className="flex">
              <button className="group flex items-center gap-2 px-5 py-2.5  text-white font-semibold rounded-lg shadow-md transition relative overflow-hidden">
                <span className="absolute inset-0 opacity-10 blur-md group-hover:opacity-20 transition-all duration-300"></span>
                <MdSportsSoccer className="text-xl z-10" />{" "}
                {/* Import this icon */}
                <span className="z-10">Login/SignUp</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-14 pb-16">
        <Outlet />
      </main>

      <div
        className="md:hidden fixed bottom-0 left-0 w-full  text-white flex justify-around items-center h-16 z-50 shadow-[0_-2px_15px_rgba(0,0,0,0.4)] border-t border-indigo-700 backdrop-blur-md"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))",
        }}
      >
        <a
          href="#home"
          className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
        >
          <FaHome className="text-2xl mb-1 text-indigo-300 drop-shadow-md" />
          <span className="text-[11px] font-medium">Home</span>
        </a>

        <a
          href="#play"
          className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
        >
          <FaUsers className="text-2xl mb-1 text-pink-400 drop-shadow-md" />
          <span className="text-[11px] font-medium">Play</span>
        </a>

        {/* Book */}
        <a
          href="#book"
          className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
        >
          <FaCalendarCheck className="text-2xl mb-1 text-teal-400 drop-shadow-md" />
          <span className="text-[11px] font-medium">Book</span>
        </a>

        {/* Train */}
        <a
          href="#train"
          className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
        >
          <MdFitnessCenter className="text-2xl mb-1 text-orange-400 drop-shadow-md" />
          <span className="text-[11px] font-medium">Train</span>
        </a>

        {/* Login */}
        <a
          href="#login"
          className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
        >
          <FiLogIn className="text-2xl mb-1 text-yellow-300 drop-shadow-md" />
          <span className="text-[11px] font-medium">Login</span>
        </a>
      </div>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Learn</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Partner with Us</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <ul className="space-y-2">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Privacy & Terms</h3>
              <ul className="space-y-2">
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cancellation Policy</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end">
            {/* <h1>PlaySphere</h1> */}
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} TecSolix. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Template;
