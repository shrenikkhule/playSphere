import { motion } from "framer-motion";
import { FaGooglePlay, FaStar } from "react-icons/fa";
import { MdLocationOn, MdSportsCricket } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Events() {
  const events = [
    {
      title: "The Royal Rally Badminton Tournament",
      location: "Sector 72, Gurgaon",
      time: "9 AM Onwards",
      date: "22nd June 2025",
      image:
        "https://playo-activities.gumlet.io/PLAYOBADMINTONCUP/TheRoyalRallyBadmintonTournamentIMG1749108591913.png?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright",
    },
    {
      title: "The Royal Rally Badminton Tournament",
      location: "Sector 72, Gurgaon",
      time: "9 AM Onwards",
      date: "22nd June 2025",
      image:
        "https://playo-activities.gumlet.io/PLAYOBADMINTONCUP/TheRoyalRallyBadmintonTournamentIMG1749108591913.png?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright",
    },
    {
      title: "The Royal Rally Badminton Tournament",
      location: "Sector 72, Gurgaon",
      time: "9 AM Onwards",
      date: "22nd June 2025",
      image:
        "https://playo-activities.gumlet.io/PLAYOBADMINTONCUP/TheRoyalRallyBadmintonTournamentIMG1749108591913.png?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright",
    },
    {
      title: "The Royal Rally Badminton Tournament",
      location: "Sector 72, Gurgaon",
      time: "9 AM Onwards",
      date: "22nd June 2025",
      image:
        "https://playo-activities.gumlet.io/PLAYOBADMINTONCUP/TheRoyalRallyBadmintonTournamentIMG1749108591913.png?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright",
    },
    {
      title: "The Royal Rally Badminton Tournament",
      location: "Sector 72, Gurgaon",
      time: "9 AM Onwards",
      date: "22nd June 2025",
      image:
        "https://playo-activities.gumlet.io/PLAYOBADMINTONCUP/TheRoyalRallyBadmintonTournamentIMG1749108591913.png?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright",
    },
  ];
  return (
    <>
      <div className="p-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 mt-2">📍 {event.location}</p>
                <p className="text-gray-600">🕘 {event.time}</p>
                <p className="text-gray-600">📅 {event.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
