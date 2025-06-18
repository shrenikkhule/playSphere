import { FaClock, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Deals() {
  const DealsData = [
    {
      title: "Canopy Hills Trek - Kodaikanal",
      organizer: "BMC",
      location:
        "Near Indiranagar Metro Station, 778, 9th A Main Road, Stage 1, Indiranagar, Bengaluru, Karnataka - 560038",
      departure: "Friday - 06:30 PM",
      arrival: "Sunday - 11:00 PM",
      recurrence: "Every Weekend",
      image:
        "https://playo-activities.gumlet.io/TREKTOCANOPYHILLS,VATTAKANAL-KODAIKANALBYBMC/TrektoCanopyHillsVattakanalKodaikanalbyBMCcover1678391303778.jpg?mode=crop&crop=smart&h=200&width=450&q=40&format=webp",
    },
    {
      title: "Tadiandamol Trek - Coorg",
      organizer: "BMC",
      location: "MG Road Pickup Point, Bengaluru, Karnataka - 560001",
      departure: "Friday - 10:00 PM",
      arrival: "Sunday - 10:00 PM",
      recurrence: "Every Weekend",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Nishani Motte Trek - Coorg",
      organizer: "BMC",
      location: "Koramangala Pickup Point, Bengaluru, Karnataka - 560034",
      departure: "Friday - 11:00 PM",
      arrival: "Sunday - 09:00 PM",
      recurrence: "Every Weekend",
      image:
        "https://playo-activities.gumlet.io/OVERNIGHTCAMPINGWITHDIYBARBECUEATJUICEOFEARTH/OvernightCampingwithDIYBarbecueatJuiceofEarthcover1662473152354.jpg?mode=crop&crop=smart&h=200&width=450&q=40&format=webp",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
        {DealsData.map((event, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {event.title}
                </h2>
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {event.organizer}
                </p>
                <p className="text-sm text-gray-600 flex items-start gap-2 mb-3">
                  <FaMapMarkerAlt className="mt-1 text-red-500" />{" "}
                  {event.location}
                </p>

                <div className="text-sm text-gray-700 space-y-2 mb-4">
                  <p className="flex items-center gap-2">
                    <FaClock className="text-indigo-500" />{" "}
                    <strong>Departure:</strong> {event.departure}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaClock className="text-green-500" />{" "}
                    <strong>Arrival:</strong> {event.arrival}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-yellow-500" />{" "}
                    <strong>Schedule:</strong> {event.recurrence}
                  </p>
                </div>
              </div>

              {/* <button className="mt-auto w-full py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full shadow-md hover:scale-105 transition">
                Book Now
              </button> */}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Deals;
