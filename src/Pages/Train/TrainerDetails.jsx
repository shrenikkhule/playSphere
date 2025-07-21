import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCertificate,
  FaUserTie,
  FaInfoCircle,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

function TrainerDetails() {
  const { state } = useLocation();
  const trainer = state?.trainer;

  if (!trainer) return <div className="p-4">No trainer data found.</div>;
  console.log(trainer);
  const days = Object.entries(trainer.weeklyAvailability);
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-10 flex flex-col lg:flex-row items-center lg:items-start gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left: Trainer Image */}
      <motion.div
        className="w-full lg:w-[40%] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Trainer Image */}
        <div className="h-[400px]">
          <img
            src={
              trainer.images && trainer.images.length > 0
                ? `http://localhost:5000/${trainer.images[0].replace(
                    /\\/g,
                    "/"
                  )}`
                : "https://via.placeholder.com/320x240?text=No+Image"
            }
            alt={trainer.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Ratings & Testimonials */}
        <div className="pt-8 px-4 pb-4 bg-white">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            ⭐ Student Testimonials
          </h2>

          <div className="grid md:grid-cols-1 gap-6">
            {[
              {
                name: "Rahul S.",
                rating: 5,
                text: "Shrenik is by far the best trainer I’ve had. Super motivating and experienced!",
              },
              {
                name: "Anjali K.",
                rating: 4,
                text: "Loved the sessions. Very professional, punctual, and fun workouts!",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <p className="text-base text-gray-700 italic mb-3">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-indigo-600">
                    {testimonial.name}
                  </h4>
                  <div className="text-yellow-400 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right: Info Section */}
      <motion.div
        className="w-full lg:w-[60%] bg-white rounded-3xl shadow-xl p-8 space-y-6"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">{trainer.name}</h1>
        <p className="text-gray-500 text-lg italic">{trainer.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <InfoItem
            icon={<FaMapMarkerAlt />}
            label="Address"
            value={trainer.address}
          />
          <InfoItem
            icon={<FaUserTie />}
            label="Classes For"
            value={trainer.classesFor}
          />
          <InfoItem
            icon={<FaMoneyBillWave />}
            label="Pricing"
            value={`₹${trainer.pricing}`}
          />
          <InfoItem
            icon={<FaCertificate />}
            label="Certification"
            value={trainer.certifications}
          />
          <InfoItem
            icon={<FaInfoCircle />}
            label="About Coach"
            value={trainer.aboutcoach}
          />
        </div>

        {/* Weekly Availability */}
        <div className="pt-6">
          <div className="flex items-center gap-2 mb-3 text-indigo-600 font-semibold text-xl">
            <FaCalendarAlt />
            <h2>Weekly Availability</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {Object.entries(trainer.weeklyAvailability).map(
              ([day, isAvailable]) => (
                <div
                  key={day}
                  className={`px-4 py-2 rounded-lg text-sm font-medium text-center ${
                    isAvailable
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-400 line-through"
                  }`}
                >
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </div>
              )
            )}
          </div>
        </div>

        {/* Optional CTA Buttons */}
        <div className="pt-6 flex gap-4">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition">
            Book Now
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-50 transition">
            Chat with Trainer
          </button>
        </div>
        {/* Location Map */}
        <div className="pt-10">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            📍 Trainer Location
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] w-full">
            <iframe
              title="Trainer Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                trainer.address
              )}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="text-indigo-500 text-xl mt-1">{icon}</div>
    <div>
      <p className="text-sm text-gray-500 uppercase">{label}</p>
      <p className="text-base font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default TrainerDetails;
