import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const TrainerProfileForm = () => {
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
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
  });
  const [images, setImages] = useState([]);
  const token = localStorage.getItem("token");

  const API = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const loadTrainerProfile = async () => {
    setLoading(true);
    try {
      const res = await API.get("/trainers/me");
      setTrainer(res.data);
    } catch {
      setTrainer(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTrainerProfile();
  }, []);

  useEffect(() => {
    if (editing && trainer) {
      setForm({
        name: trainer.name || "",
        address: trainer.address || "",
        classesFor: trainer.classesFor || "",
        pricing: trainer.pricing || "",
        aboutcoach: trainer.aboutcoach || "",
        description: trainer.description || "",
        certifications: trainer.certifications || "",
        weeklyAvailability: trainer.weeklyAvailability || {},
      });
    }
  }, [editing, trainer]);

  const handleImageChange = (e) => setImages(e.target.files);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvailabilityChange = (day) => {
    setForm((prev) => ({
      ...prev,
      weeklyAvailability: {
        ...prev.weeklyAvailability,
        [day]: !prev.weeklyAvailability[day],
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach((key) => {
      if (key === "weeklyAvailability") {
        data.append(key, JSON.stringify(form[key]));
      } else {
        data.append(key, form[key]);
      }
    });
    for (let i = 0; i < images.length; i++) {
      data.append("images", images[i]);
    }

    try {
      await API.post("/trainers/create", data);
      setEditing(false);
      loadTrainerProfile();
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete("/trainers/me");
      setTrainer(null);
    } catch (err) {
      console.error(
        "Error deleting profile:",
        err.response?.data || err.message
      );
    }
  };
  const handleUpdateProfile = async () => {
    try {
      const data = new FormData();

      Object.keys(form).forEach((key) => {
        if (key === "weeklyAvailability") {
          data.append(key, JSON.stringify(form[key]));
        } else {
          data.append(key, form[key]);
        }
      });

      for (let i = 0; i < images.length; i++) {
        data.append("images", images[i]);
      }

      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        `http://localhost:5000/api/trainers/me`,
        data,
        config
      );

      console.log("✅ Update successful:", response.data);
      setEditing(false);
      loadTrainerProfile();
    } catch (err) {
      console.error(
        "❌ Update error:",
        err.response?.data?.message || err.message
      );
    }
  };
  useEffect(() => {
    if (editing && trainer) {
      setForm({
        name: trainer.name || "",
        address: trainer.address || "",
        classesFor: trainer.classesFor || "",
        pricing: trainer.pricing || "",
        aboutcoach: trainer.aboutcoach || "",
        description: trainer.description || "",
        certifications: trainer.certifications || "",
        weeklyAvailability: {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
          ...trainer.weeklyAvailability, // ✅ overwrite with existing data
        },
      });
    }
  }, [editing, trainer]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12 px-4 sm:px-12">
      {loading ? (
        <div className="text-center text-xl font-semibold text-indigo-600">
          Loading...
        </div>
      ) : !trainer || editing ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10"
        >
          <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
            {editing ? "Edit" : "Create"} Trainer Profile
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { name: "name", placeholder: "Full Name" },
              { name: "address", placeholder: "Address" },
              {
                name: "classesFor",
                placeholder: "Classes For (e.g. Kids, Adults)",
              },
              { name: "pricing", placeholder: "Pricing (e.g. ₹500/session)" },
              { name: "aboutcoach", placeholder: "About Coach" },
              { name: "certifications", placeholder: "Certifications" },
            ].map(({ name, placeholder }) => (
              <input
                key={name}
                name={name}
                placeholder={placeholder}
                value={form[name]}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            ))}
            <textarea
              name="description"
              placeholder="Coach Description"
              value={form.description}
              onChange={handleChange}
              className="col-span-full border p-3 rounded"
              rows={4}
            />
            <div className="col-span-full">
              <label className="block font-medium text-gray-700 mb-2">
                Weekly Availability:
              </label>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {Object.entries(form.weeklyAvailability).map(
                  ([day, isChecked]) => (
                    <label
                      key={day}
                      className="capitalize flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleAvailabilityChange(day)}
                        className="accent-indigo-500"
                      />
                      {day}
                    </label>
                  )
                )}
              </div>
            </div>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="col-span-full"
            />
            <div className="col-span-full flex justify-center">
              {editing ? (
                <button
                  onClick={handleUpdateProfile}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                  Update Profile
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                  Submit Profile
                </button>
              )}
            </div>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto bg-white shadow-xl rounded-3xl p-10"
        >
          <h1 className="text-5xl font-bold text-indigo-700 mb-6 flex items-center gap-4">
            🧑‍🏫 {trainer.name}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4 text-lg">
              <p>
                📍 <strong>Address:</strong> {trainer.address}
              </p>
              <p>
                🏷️ <strong>Classes For:</strong> {trainer.classesFor}
              </p>
              <p>
                🧠 <strong>About Coach:</strong> {trainer.aboutcoach}
              </p>
              <p>
                💰 <strong>Pricing:</strong> {trainer.pricing}
              </p>
              <p>
                📝 <strong>Description:</strong> {trainer.description}
              </p>
              <p>
                📜 <strong>Certifications:</strong> {trainer.certifications}
              </p>
              <div>
                📅 <strong>Weekly Availability:</strong>
                <ul className="list-disc ml-6 mt-1 text-green-700">
                  {Object.entries(trainer.weeklyAvailability).map(
                    ([day, available]) =>
                      available && (
                        <li key={day} className="capitalize">
                          {day}
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {trainer.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={`http://localhost:5000/${img}`}
                  alt={`Trainer-${idx}`}
                  className="w-full h-40 object-cover rounded-xl border shadow hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>
          <div className="mt-10 flex gap-6">
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            >
              🗑️ Delete Profile
            </button>
            <button
              onClick={() => {
                setEditing(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
            >
              ✏️ Edit Profile
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TrainerProfileForm;
