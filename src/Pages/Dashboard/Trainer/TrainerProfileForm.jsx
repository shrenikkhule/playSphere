import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaUser,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaRupeeSign,
  FaInfoCircle,
  FaAward,
  FaImage,
} from "react-icons/fa";
import Swal from "sweetalert2";

const TrainerProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    classesFor: "",
    pricing: "",
    aboutcoach: "",
    description: "",
    certifications: "",
    weeklyAvailability: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvailabilityChange = (day) => {
    setFormData((prev) => ({
      ...prev,
      weeklyAvailability: {
        ...prev.weeklyAvailability,
        [day]: !prev.weeklyAvailability[day],
      },
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, images: e.target.files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      if (key === "weeklyAvailability") {
        for (const day in formData.weeklyAvailability) {
          data.append(
            `weeklyAvailability[${day}]`,
            formData.weeklyAvailability[day]
          );
        }
      } else if (key === "images") {
        for (let i = 0; i < formData.images.length; i++) {
          data.append("images", formData.images[i]);
        }
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/trainers/create",
        data
      );

      Swal.fire({
        icon: "success",
        title: "Trainer Profile Created",
        text: "Your trainer profile was successfully submitted!",
        confirmButtonColor: "#6366f1",
      });

      console.log(response.data);
    } catch (err) {
      console.error(err);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was a problem creating the trainer profile.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-10 rounded-3xl shadow-2xl border border-gray-100"
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Trainer Profile Setup
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <FaUser className="text-indigo-600 text-xl" />
            <input
              name="name"
              placeholder="Name"
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-indigo-600 text-xl" />
            <input
              name="address"
              placeholder="Address"
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-3">
            <FaChalkboardTeacher className="text-indigo-600 text-xl" />
            <input
              name="classesFor"
              placeholder="Classes For"
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-3">
            <FaRupeeSign className="text-indigo-600 text-xl" />
            <input
              name="pricing"
              placeholder="Pricing"
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-3 col-span-1 md:col-span-2">
            <FaInfoCircle className="text-indigo-600 text-xl" />
            <input
              name="aboutcoach"
              placeholder="About Coach"
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <textarea
              name="description"
              placeholder="Description"
              className="w-full border p-3 rounded-lg min-h-[100px]"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex items-center gap-3 col-span-1 md:col-span-2">
            <FaAward className="text-indigo-600 text-xl" />
            <input
              name="certifications"
              placeholder="Certifications"
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Weekly Availability
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.keys(formData.weeklyAvailability).map((day) => (
                <label key={day} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.weeklyAvailability[day]}
                    onChange={() => handleAvailabilityChange(day)}
                  />
                  <span className="capitalize text-gray-700">{day}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 col-span-1 md:col-span-2">
            <FaImage className="text-indigo-600 text-xl" />
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
        >
          Submit Trainer Profile
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default TrainerProfileForm;
