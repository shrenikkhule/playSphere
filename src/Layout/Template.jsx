import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaCalendarCheck,
  FaDumbbell,
  FaHome,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdFitnessCenter, MdSportsSoccer } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import { cities } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/UserSlice";
import ProfileModal from "../Pages/Dashboard/Components/ProfileModel";
function Template() {
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.user);
  console.log(loggedInUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() === "") {
      setFilteredCities([]);
    } else {
      const results = cities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(results);
    }
  };
  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full text-white shadow-md z-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))",
        }}
      >
        {/* Removed px-4 sm:px-6 lg:px-8 from here to allow elements to touch edges */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16 relative">
            {/* LEFT: Logo + Search */}
            {/* Added pl-4 sm:pl-6 lg:pl-8 to add internal padding, but keeps logo flush left */}
            <div className="flex items-center space-x-4 pl-4 sm:pl-6 lg:pl-8">
              <Link to="/">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-xl text-green-400" />
                  <span className="text-xl font-bold tracking-wide text-white">
                    PlaySphere
                  </span>
                </div>
              </Link>

              <div className="relative hidden sm:block">
                <input
                  type="text"
                  value={search}
                  onChange={handleSearchChange}
                  placeholder="Search City"
                  className="px-4 py-1.5 rounded-lg bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green-400 shadow"
                />
                {filteredCities.length > 0 && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-md max-h-48 overflow-auto">
                    {filteredCities.map((city, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-green-100 text-black cursor-pointer text-sm"
                        onClick={() => {
                          setSearch(city);
                          setFilteredCities([]);
                        }}
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CENTER: Nav Links */}
            {/* Uses absolute positioning for perfect horizontal centering */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
              <Link to="/find-players">
                <span className="hover:text-green-300 font-medium flex items-center gap-1 transition">
                  <FaUsers className="text-base text-green-400" />
                  <span>Find Players</span>
                </span>
              </Link>
              <Link to="/book-venues">
                <span className="hover:text-yellow-300 font-medium flex items-center gap-1 transition">
                  <FaCalendarCheck className="text-base text-yellow-400" />
                  <span>Book Venues</span>
                </span>
              </Link>
              <Link to="/trainer">
                <span className="hover:text-orange-300 font-medium flex items-center gap-1 transition">
                  <FaDumbbell className="text-base text-orange-400" />
                  <span>Train</span>
                </span>
              </Link>
            </div>

            {/* RIGHT: Auth Section */}
            {/* ml-auto pushes it to the right, and pr- adds internal padding */}
            <div className="flex gap-4 ">
              {loggedInUser ? (
                <div className="flex gap-4">
                  <div
                    className="flex items-center cursor-pointer gap-2 px-4 py-2 text-white rounded-lg shadow-md font-semibold"
                    onClick={toggleModal}
                  >
                    <div className="w-9 h-9 rounded-full bg-white text-violet-600 flex items-center justify-center font-bold border-2 border-violet-500">
                      {loggedInUser.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="truncate max-w-[150px]">
                      Hi {loggedInUser.name}
                    </span>
                  </div>

                  {/* Dashboard Button */}
                  <Link
                    // to="/dashboard"
                    to={`/dashboard/${loggedInUser.role}`}
                    className="group flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-lg shadow-md transition relative overflow-hidden"
                  >
                    <span className="absolute inset-0 opacity-10 blur-md group-hover:opacity-20 transition-all duration-300" />
                    <MdSportsSoccer className="text-xl z-10" />
                    <span className="z-10">Dashboard</span>
                  </Link>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="group flex cursor-pointer items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-lg shadow-md transition relative overflow-hidden"
                  >
                    <span className="absolute inset-0 opacity-10 blur-md group-hover:opacity-20 transition-all duration-300" />
                    <MdSportsSoccer className="text-xl z-10" />
                    <span className="z-10">Logout</span>
                  </button>
                </div>
              ) : (
                <Link to={"/login"}>
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-6 h-6 rounded-full mr-3"
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjk7qpl0JIoUsadWQz2lyutltpEKFacR_bQ&s"
                          className="rounded-2xl"
                        />
                      </motion.div>
                      <h1 className="text-">Login to PlaySphere</h1>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-14">
        <Outlet />
      </main>

      <div
        className="md:hidden fixed bottom-0 left-0 w-full  text-white flex justify-around items-center h-16 z-50 shadow-[0_-2px_15px_rgba(0,0,0,0.4)] border-t border-indigo-700 backdrop-blur-md"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))",
        }}
      >
        <Link to={"/"}>
          <a
            href="#home"
            className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <FaHome className="text-2xl mb-1 text-indigo-300 drop-shadow-md" />
            <span className="text-[11px] font-medium">Home</span>
          </a>
        </Link>
        <Link to={"/find-players"}>
          <a
            href="#play"
            className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <FaUsers className="text-2xl mb-1 text-pink-400 drop-shadow-md" />
            <span className="text-[11px] font-medium">Play</span>
          </a>
        </Link>
        {/* Book */}
        <Link to={"/book-venues"}>
          <a
            href="#book"
            className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <FaCalendarCheck className="text-2xl mb-1 text-teal-400 drop-shadow-md" />
            <span className="text-[11px] font-medium">Book</span>
          </a>
        </Link>
        {/* Train */}
        <Link to={"/trainer"}>
          <a
            href="#train"
            className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <MdFitnessCenter className="text-2xl mb-1 text-orange-400 drop-shadow-md" />
            <span className="text-[11px] font-medium">Train</span>
          </a>
        </Link>
        {/* Login */}
        <Link to={"/login"}>
          <a
            href="#login"
            className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <FiLogIn className="text-2xl mb-1 text-yellow-300 drop-shadow-md" />
            <span className="text-[11px] font-medium">Login</span>
          </a>
        </Link>
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
      {loggedInUser && (
        <ProfileModal
          isOpen={isModalOpen}
          onClose={toggleModal}
          userData={loggedInUser}
          address={loggedInUser.address}
          gender={loggedInUser.gender}
          name={loggedInUser.name}
          phone={loggedInUser.phone}
          role={loggedInUser.role}
        />
      )}
    </>
  );
}

export default Template;

// const ProfileModal = ({ isOpen, onClose }) => {
//   // Placeholder user data
//   const userData = {
//     profilePhoto: "https://placehold.co/150x150/000000/FFFFFF?text=Profile", // Placeholder image
//     name: "Alex 'The Ace' Johnson",
//     address: "789 Victory Lane, Stadium City, CA 90210",
//     mobile: "+1 (555) 987-6543",
//     gender: "Non-Binary",
//   };

//   const modalRef = useRef(null);

//   // Close modal when clicking outside of it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen, onClose]);

//   // Handle escape key to close modal
//   useEffect(() => {
//     const handleEscapeKey = (event) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("keydown", handleEscapeKey);
//     } else {
//       document.removeEventListener("keydown", handleEscapeKey);
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscapeKey);
//     };
//   }, [isOpen, onClose]);

//   // Conditional rendering for animations
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fade-in">
//       <style>
//         {`
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slide-down {
//           from { transform: translateY(-50px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out forwards;
//         }
//         .animate-slide-down {
//           animation: slide-down 0.4s ease-out forwards;
//         }
//         `}
//       </style>
//       <div
//         ref={modalRef}
//         className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform animate-slide-down
//                    transition-all duration-300 ease-in-out border-4 border-blue-500 relative"
//       >
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold transition-transform duration-200 transform hover:rotate-90 focus:outline-none"
//           aria-label="Close modal"
//         >
//           &times;
//         </button>

//         <div className="flex flex-col items-center mb-6">
//           {/* Profile Photo */}
//           <img
//             src={userData.profilePhoto}
//             alt="Profile"
//             className="w-32 h-32 rounded-full object-cover border-4 border-indigo-400 shadow-md mb-4 transform hover:scale-105 transition-transform duration-300"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src =
//                 "https://placehold.co/150x150/CCCCCC/333333?text=No+Image";
//             }}
//           />
//           <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">
//             {userData.name}
//           </h2>
//           <p className="text-md text-gray-600 font-medium bg-blue-100 px-3 py-1 rounded-full">
//             Athlete Profile
//           </p>
//         </div>

//         {/* User Details */}
//         <div className="space-y-4">
//           <div className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
//             <svg
//               className="w-6 h-6 text-blue-500 mr-3"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//               ></path>
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//               ></path>
//             </svg>
//             <div>
//               <p className="text-sm font-semibold text-gray-700">Address:</p>
//               <p className="text-md text-gray-800">{userData.address}</p>
//             </div>
//           </div>

//           <div className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
//             <svg
//               className="w-6 h-6 text-green-500 mr-3"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9.25a1 1 0 001.07 1.07l3.776 1.076a1 1 0 001.07-.948l.582-2.915a1 1 0 01.684-.949H19a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
//               ></path>
//             </svg>
//             <div>
//               <p className="text-sm font-semibold text-gray-700">Mobile:</p>
//               <p className="text-md text-gray-800">{userData.mobile}</p>
//             </div>
//           </div>

//           <div className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
//             <svg
//               className="w-6 h-6 text-purple-500 mr-3"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM12 14c-1.49 0-2.924.408-4.212 1.144A10.04 10.04 0 0012 18c1.49 0 2.924-.408 4.212-1.144A10.04 10.04 0 0012 14z"
//               ></path>
//             </svg>
//             <div>
//               <p className="text-sm font-semibold text-gray-700">Gender:</p>
//               <p className="text-md text-gray-800">{userData.gender}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
