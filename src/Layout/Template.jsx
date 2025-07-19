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
import Footer from "./Footer";
function Template() {
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.user);

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
      <div
        className="fixed top-0 left-0 w-full text-white shadow-md z-50  flex-1 flex flex-col"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))",
        }}
      >
        <header
          className={`sticky top-0 z-30 px-4 py-2 flex items-center justify-between`}
        >
          {/* Left: Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              <Link to="/" className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-400" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                  PlaySphere
                </span>
              </Link>
            </h1>
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

          {/* Center: Navigation Buttons */}
          <div className="hidden md:flex space-x-6">
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

          {/* Right: User Section */}
          <div className="flex items-center space-x-6">
            {loggedInUser ? (
              <div className="flex gap-4 items-center">
                <div
                  className="flex items-center cursor-pointer gap-2 px-4 py-2 text-white rounded-lg shadow-md font-semibold"
                  onClick={toggleModal}
                >
                  <div className="w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold border-2 border-indigo-500">
                    {loggedInUser.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="truncate max-w-[150px]">
                    Hi {loggedInUser.name}
                  </span>
                </div>

                <Link
                  to={`/dashboard/${loggedInUser.role}`}
                  className="group flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-lg shadow-md transition relative overflow-hidden"
                >
                  <span className="absolute inset-0 opacity-10 blur-md group-hover:opacity-20 transition-all duration-300" />
                  <svg
                    class="animate-spin"
                    fill="#F97316"
                    width="25px"
                    height="20px"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Football"
                      d="M66.091,75h-.434a24.926,24.926,0,0,1-8.332-1.544q-.532-.2-1.056-.418c-.229-.1-.456-.2-.682-.3l-.022-.01-.083-.039a25,25,0,0,1-6.2-4.1l-.069-.062-.011-.01q-.446-.405-.876-.835-.448-.448-.872-.916a25.022,25.022,0,0,1-4.1-6.173q-.2-.424-.382-.857-.139-.328-.268-.659a.307.307,0,0,0-.012-.031c-.012-.03-.023-.06-.034-.09a24.851,24.851,0,0,1-1.613-7.569c0-.008,0-.016,0-.024l0-.063c0-.038,0-.076-.006-.114v-.014c-.007-.143-.012-.286-.016-.43Q41,50.369,41,50a24.937,24.937,0,0,1,1.646-8.941.25.25,0,0,0,.009-.023c.008-.02.016-.04.023-.061s.022-.056.033-.084l.014-.035c.077-.2.157-.391.239-.587.037-.087.075-.175.113-.261l.024-.057.023-.052a25.041,25.041,0,0,1,4.434-6.78l.053-.058.018-.019q.337-.366.692-.72.423-.423.861-.822l.058-.053.007-.007a25.043,25.043,0,0,1,6.235-4.128l.069-.032.037-.016q.336-.154.678-.3.4-.167.8-.32A24.907,24.907,0,0,1,65.723,25h.552a24.915,24.915,0,0,1,9.288,1.893l.056.022.021.009.092.039.272.117.013.005.1.046.071.031.042.019a25.031,25.031,0,0,1,6.627,4.358l.01.009.057.051c.254.235.5.475.751.721s.459.468.68.707a25.024,25.024,0,0,1,4.514,6.862l.028.063c.007.016.015.034.022.05.018.04.035.079.052.119,0,0,0,0,0,0,.021.047.041.094.06.14l.045.107.01.023.036.086.025.061a.069.069,0,0,0,0,.01,25.09,25.09,0,0,1,.085,18.676c-.01.027-.021.054-.032.081,0,.01-.009.021-.013.031-.052.13-.106.258-.16.387q-.186.441-.389.873c0,.007-.007.016-.011.022-.014.028-.026.056-.04.083a25.059,25.059,0,0,1-4.089,6.1q-.4.443-.83.869c-.251.251-.506.5-.765.734l-.007.005-.075.069a25.023,25.023,0,0,1-6.594,4.328l-.051.023-.06.027-.114.05h0c-.092.04-.184.08-.276.119l-.1.041A24.911,24.911,0,0,1,66.337,75h-.247Zm-6.853-4.063a22.04,22.04,0,0,0,13.518,0l2.128-6.782L70.485,58H61.515l-4.4,6.156ZM75.169,70A22.1,22.1,0,0,0,82,65.087l-5.263-.078ZM50,65.08A22.093,22.093,0,0,0,56.828,70L55.267,65Zm33.651-1.957A21.886,21.886,0,0,0,88,50c0-.116,0-.232,0-.347l-6.344-4.361-6.836,3.418L72.11,56.833l4.417,6.184ZM44,49.655q0,.173,0,.346a21.881,21.881,0,0,0,4.345,13.112l7.136-.107,4.409-6.173-2.708-8.124L50.356,45.3Zm15.174-1.287L61.721,56h8.558l2.544-7.632L66,43.25ZM44.189,47.113l4.6-3.159-1.775-5.065A21.858,21.858,0,0,0,44.189,47.113Zm39.022-3.165,4.6,3.162a21.842,21.842,0,0,0-2.83-8.222ZM57.894,46.829,65,41.5v-8l-5.869-4.4a22.085,22.085,0,0,0-10.711,7.69l2.254,6.432Zm16.212,0,7.226-3.613,2.249-6.428A22.1,22.1,0,0,0,72.869,29.1L67,33.5v8ZM61.592,28.444,66,31.75l4.409-3.307a22.124,22.124,0,0,0-8.817,0Z"
                      transform="translate(-41 -25)"
                    />
                  </svg>
                  <span className="z-10">Dashboard</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="group flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-lg shadow-md transition relative overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-0 opacity-10 blur-md group-hover:opacity-20 transition-all duration-300" />
                  <MdSportsSoccer className="text-xl z-10" />
                  <span className="z-10">Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login">
                <div className="p-4 flex items-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-6 h-6 rounded-full mr-2"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjk7qpl0JIoUsadWQz2lyutltpEKFacR_bQ&s"
                      className="rounded-2xl"
                      alt="login"
                    />
                  </motion.div>
                  <span className="text-lg ">Login to PlaySphere</span>
                </div>
              </Link>
            )}
          </div>
        </header>
      </div>

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
          <span
            href="#home"
            className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <FaHome className="text-2xl mb-1 text-indigo-300 drop-shadow-md" />
            <span className="text-[11px] font-medium">Home</span>
          </span>
        </Link>
        <Link to={"/find-players"}>
          <span
            href="#play"
            className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <FaUsers className="text-2xl mb-1 text-pink-400 drop-shadow-md" />
            <span className="text-[11px] font-medium">Play</span>
          </span>
        </Link>
        {/* Book */}
        <Link to={"/book-venues"}>
          <span
            href="#book"
            className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <FaCalendarCheck className="text-2xl mb-1 text-teal-400 drop-shadow-md" />
            <span className="text-[11px] font-medium">Book</span>
          </span>
        </Link>
        {/* Train */}
        <Link to={"/trainer"}>
          <span
            href="#train"
            className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <MdFitnessCenter className="text-2xl mb-1 text-orange-400 drop-shadow-md" />
            <span className="text-[11px] font-medium">Train</span>
          </span>
        </Link>
        {/* Login */}
        {loggedInUser ? (
          <div
            className=" items-center cursor-pointer text-white rounded-lg font-semibold"
            onClick={toggleModal}
          >
            <div className="w-9 h-9 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold border-2 border-indigo-500">
              {loggedInUser.name.charAt(0).toUpperCase()}
            </div>
          </div>
        ) : (
          <Link to={"/login"}>
            <span
              href="#login"
              className="flex flex-col items-center justify-center text-xs hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <FiLogIn className="text-2xl mb-1 text-yellow-300 drop-shadow-md" />
              <span className="text-[11px] font-medium">Login</span>
            </span>
          </Link>
        )}
      </div>

      <Footer></Footer>
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
