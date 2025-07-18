import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const AddVenue = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    timing: "",
    sportsAvailable: "",
    description: "",
  });
  const [images, setImages] = useState([]);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("address", formData.address);
    data.append("timing", formData.timing);
    data.append("sportsAvailable", formData.sportsAvailable);
    data.append("description", formData.description);

    images.forEach((file) => {
      data.append("images", file);
    });

    try {
      const res = await fetch("http://localhost:5000/api/venues", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (result.success) {
        Swal.fire({
          title: "Venue Added!",
          text: "The venue has been successfully added.",
          icon: "success",
          confirmButtonColor: "#2563eb",
          confirmButtonText: "OK",
        });
        setResponseMsg("✅ Venue added successfully!");
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Failed to add venue. Please try again.",
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "Retry",
        });
        setResponseMsg("❌ Failed to add venue.");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while submitting the form.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
        confirmButtonText: "OK",
      });
      setResponseMsg("⚠️ Error occurred while submitting the form.");
    }
  };

  return (
    <>
      {/* 📍 Venue Form */}
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl mb-12">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-8 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Add Game Spot Venue
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="text"
            name="name"
            placeholder="Venue Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            required
          />
          <motion.input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            required
          />
          <motion.input
            type="text"
            name="timing"
            placeholder="Timing (e.g. 8AM - 10PM)"
            value={formData.timing}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            required
          />
          <motion.input
            type="text"
            name="sportsAvailable"
            placeholder="Sports Available (comma separated)"
            value={formData.sportsAvailable}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            required
          />
          <motion.textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          />
          <motion.input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 p-3 rounded-xl bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          />
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-6 py-3 rounded-xl w-full hover:from-blue-700 hover:to-blue-900 transition duration-300 shadow-md"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Submit Venue
          </motion.button>

          {responseMsg && (
            <motion.p
              className="text-center text-green-600 text-sm mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {responseMsg}
            </motion.p>
          )}
        </form>
      </div>
    </>
  );
};

export default AddVenue;
