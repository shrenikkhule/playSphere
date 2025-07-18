import {
  FaMapMarkerAlt,
  FaFutbol,
  FaClock,
  FaImage,
  FaPlus,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function AllVenuesDashboard() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/venues");
        setVenues(res.data);
      } catch (err) {
        console.error("Error fetching venues:", err);
      }
    };

    fetchVenues();
  }, []);

  const deleteVenue = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/venues/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action will permanently delete the venue.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteVenue(id);

        // Update UI
        setVenues((prev) => prev.filter((venue) => venue._id !== id));

        Swal.fire("Deleted!", "Venue has been deleted.", "success");
      } catch (err) {
        Swal.fire("Error!", "Failed to delete venue.", "error");
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pb-16">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-700">
        Explore Game Spots
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {venues.map((venue, index) => (
          <motion.div
            key={venue._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {venue.images && venue.images.length > 0 ? (
              <img
                src={`http://localhost:5000/uploads/venues/${venue.images[0]
                  .split("\\")
                  .pop()}`}
                alt={venue.name}
                className="h-56 w-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="h-56 w-full bg-gray-100 flex items-center justify-center text-gray-400 text-lg rounded-t-2xl">
                <FaImage className="text-3xl" /> &nbsp; No Image
              </div>
            )}

            <div className="p-5 flex flex-col justify-between flex-1">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition">
                  {venue.name}
                </h3>

                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-500" /> {venue.address}
                </p>

                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <FaClock className="text-blue-500" />
                  <span className="font-medium text-gray-700">
                    {venue.timing}
                  </span>
                </p>

                <div className="flex flex-wrap gap-2">
                  {venue.sportsAvailable?.map((sport, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full flex items-center gap-1"
                    >
                      <FaFutbol className="text-sm" /> {sport}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-700 line-clamp-3">
                  {venue.description}
                </p>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => handleDelete(venue._id)}
                  className="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 text-sm font-medium px-4 py-2 rounded-lg transition"
                >
                  Delete Venue
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        <Link
          to="/dashboard/turf owner/add-venues"
          className="flex flex-col items-center justify-center border-4 border-dashed border-blue-400 rounded-2xl p-8 text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-300 group"
        >
          <FaPlus className="text-4xl mb-3 group-hover:scale-125 transition-transform" />
          <span className="text-lg font-semibold">Add New Venue</span>
        </Link>
      </div>
    </div>
  );
}

export default AllVenuesDashboard;
