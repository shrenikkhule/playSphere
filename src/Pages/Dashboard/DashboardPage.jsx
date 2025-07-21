import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slice/UserSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  Calendar,
  DollarSign,
  ClipboardList,
  CheckCircle,
  FileCheck,
  CreditCard,
  FileText,
  UserPlus,
  BookmarkCheck,
  FileBarChart,
} from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { Menu, LogOut, Moon, Sun, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileModal from "./Components/ProfileModel";
import { useDarkMode } from "./Components/DarkModeProvider";

// NavItem Component
const NavItem = ({ icon: Icon, label, isActive, onClick }) => (
  <motion.div
    onClick={onClick}
    whileHover={{ scale: 1.05, x: 5 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center cursor-pointer p-3 rounded-lg transition-colors duration-200 ${
      isActive
        ? "bg-violet-600 text-white"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }`}
  >
    <Icon className="w-5 h-5 mr-4" />
    <span className="font-medium">{label}</span>
    <AnimatePresence>
      {isActive && (
        <motion.div
          layoutId="active-indicator"
          className="ml-auto h-6 w-1 bg-violet-400 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  </motion.div>
);

const getNavItems = {
  player: [
    { icon: Home, label: "Home", link: "/dashboard/player" },
    { icon: CgProfile, label: "Profile", link: "/dashboard/profile" },
    { icon: Calendar, label: "Book venues", link: "/dashboard/customers" },
    { icon: UserPlus, label: "Hire coaches", link: "/dashboard/products" },
    { icon: BookmarkCheck, label: "Join events", link: "/dashboard/settings" },
  ],
  coach: [
    { icon: Home, label: "Home", link: "/dashboard/coach" },
    { icon: CgProfile, label: "Profile", link: "/dashboard/profile" },
    {
      icon: ClipboardList,
      label: "Create Profile for Website",
      link: "/dashboard/coach/create-profile",
    },
    { icon: DollarSign, label: "Track earnings", link: "/dashboard/coach/crm" },
    { icon: FileCheck, label: "Get bookings", link: "/dashboard/coach/crm" },
    { icon: FileText, label: "Use CRM", link: "/dashboard/coach/crm" },
  ],
  "turf owner": [
    { icon: Home, label: "Home", link: "/dashboard/turf owner" },
    { icon: CgProfile, label: "Profile", link: "/dashboard/profile" },
    {
      icon: ClipboardList,
      label: "Manage slots",
      link: "/dashboard/turf owner/add-venues",
    },
    {
      icon: Calendar,
      label: "Bookings",
      link: "/dashboard/turf owner/all-venues",
    },
    { icon: CreditCard, label: "Payments", link: "/dashboard/turf" },
  ],
  academies: [
    { icon: Home, label: "Home", link: "/dashboard/admin" },
    { icon: CgProfile, label: "Profile", link: "/dashboard/profile" },
    { icon: Users, label: "Manage students", link: "/dashboard/reports" },
    { icon: Calendar, label: "Events", link: "/dashboard/logs" },
    { icon: CreditCard, label: "Payments", link: "/dashboard/logs" },
  ],
  admin: [
    { icon: Home, label: "Home", link: "/dashboard/admin" },
    { icon: CgProfile, label: "Profile", link: "/dashboard/profile" },
    { icon: CheckCircle, label: "Verification", link: "/dashboard/reports" },
    { icon: FileBarChart, label: "Analytics", link: "/dashboard/logs" },
  ],
};

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.user);

  const role = loggedInUser?.role;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // ✅ Fix: use navItems() function correctly
  const navItems = () => {
    switch (role) {
      case "player":
        return getNavItems.player;
      case "coach":
        return getNavItems.coach;
      case "turf owner":
        return getNavItems["turf-owner"];
      case "admin":
        return getNavItems.admin;
      case "academies":
        return getNavItems.academies;
      default:
        return [];
    }
  };

  return (
    <div
      className={`flex min-h-screen font-sans transition-colors duration-300 ${
        isDarkMode
          ? "bg-slate-900 text-slate-200"
          : "bg-slate-100 text-slate-800"
      }`}
    >
      {/* Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto`}
      >
        <div className="p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 bg-violet-600 rounded-full mr-3"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjk7qpl0JIoUsadWQz2lyutltpEKFacR_bQ&s"
                className="rounded-2xl"
              />
            </motion.div>
            <h1 className="text-xl font-bold">PlaySphere</h1>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems().map((item) => (
            <Link key={item.label} to={item.link} state={{ tab: item.label }}>
              <NavItem
                icon={item.icon}
                label={item.label}
                isActive={activeNav === item.label}
                onClick={() => setActiveNav(item.label)}
              />
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center p-3 rounded-lg hover:bg-slate-800">
            {loggedInUser && (
              <div className="w-10 h-10 mr-3 rounded-full bg-violet-600 text-white font-semibold flex items-center justify-center border-2 border-violet-500">
                {loggedInUser.name.charAt(0).toUpperCase()}
              </div>
            )}
            {loggedInUser && (
              <div>
                <p className="font-semibold text-white">
                  Hello, {loggedInUser.name}
                </p>
                <p className="text-sm text-slate-400">{loggedInUser.role}</p>
              </div>
            )}
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="ml-auto"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5 text-slate-400 hover:text-red-500 cursor-pointer" />
            </motion.div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header
          className={`sticky top-0 z-30 p-4 flex items-center justify-between ${
            isDarkMode
              ? "bg-slate-900/70 backdrop-blur-sm"
              : "bg-white/70 backdrop-blur-sm shadow-sm"
          }`}
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-slate-500"
            >
              <Menu className="w-6 h-6" />
            </button>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold leading-tight text-gray-900 dark:text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                {role} Dashboard
              </span>
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-400 cursor-pointer" />
              ) : (
                <Moon className="w-6 h-6 text-slate-600 cursor-pointer" />
              )}
            </motion.button>
            <motion.button
              className="relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell
                className={`w-6 h-6 cursor-pointer ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </motion.button>
            {loggedInUser && (
              <div
                onClick={toggleModal}
                className="w-10 h-10 rounded-full bg-violet-600 text-white font-semibold flex items-center justify-center border-2 border-violet-500 cursor-pointer"
              >
                {loggedInUser.name.charAt(0).toUpperCase()}
              </div>
            )}
            <button
              onClick={handleLogout}
              className="px-2 py-2 border-b-4 border border-purple-500 text-purple-500 hover:text-white hover:bg-purple-500 transition-all duration-200 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {loggedInUser && (
            <motion.h2
              className={`text-3xl font-bold  ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome Back, {loggedInUser.name}!
            </motion.h2>
          )}
        </main>
        <div className="px-10">
          <Outlet />
        </div>
      </div>

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
    </div>
  );
};

export default DashboardPage;
