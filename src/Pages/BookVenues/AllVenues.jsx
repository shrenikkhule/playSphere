import { FaStar } from "react-icons/fa";
import { MdLocationOn, MdSportsCricket } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useNavigate } from "react-router-dom";

function AllVenues() {
  // const venues = [
  //   {
  //     title: "Nawu Sports Club",
  //     rating: 3.67,
  //     reviews: 3,
  //     location: "Gahunje (~24.7 km)",
  //     sport: "Box Cricket",
  //     image:
  //       "https://playo.gumlet.io/NAWUSPORTSCLUB20231117073811203577/NawuSportsClub1700288203817.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
  //   },
  //   {
  //     title: "Legends Arena",
  //     rating: 4.2,
  //     reviews: 14,
  //     location: "Baner (~12.1 km)",
  //     sport: "Football Turf",
  //     image:
  //       "https://playo.gumlet.io/SPARKCRICKETGROUND20210130172407984571/SparkCricketGround1612027957023.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
  //   },
  //   {
  //     title: "Ace Sports Hub",
  //     rating: 4.7,
  //     reviews: 8,
  //     location: "Wakad (~8.6 km)",
  //     sport: "Badminton",
  //     image:
  //       "https://playo.gumlet.io/PAVILIONPINNACLE20231003144418876805/PavilionPinnacle1697361058400.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
  //   },
  //   {
  //     title: "Ace Sports Hub",
  //     rating: 4.7,
  //     reviews: 8,
  //     location: "Wakad (~8.6 km)",
  //     sport: "Badminton",
  //     image:
  //       "https://playo.gumlet.io/MATCHPOINTHINJEWADI20250514144216814720/MatchpointHinjewadi1747233872116.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
  //   },
  //   {
  //     title: "Ace Sports Hub",
  //     rating: 4.7,
  //     reviews: 8,
  //     location: "Wakad (~8.6 km)",
  //     sport: "Badminton",
  //     image:
  //       "https://playo.gumlet.io/MAJESTICBADMINTONCLUB20250505052744457633/MajesticBadmintonClub1746422926901.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
  //   },
  //   {
  //     title: "Ace Sports Hub",
  //     rating: 4.7,
  //     reviews: 8,
  //     location: "Wakad (~8.6 km)",
  //     sport: "Badminton",
  //     image:
  //       "https://playo.gumlet.io/MAJESTICBADMINTONCLUB20250505052744457633/MajesticBadmintonClub1746422926901.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
  //   },
  //   {
  //     title: "Ace Sports Hub",
  //     rating: 4.7,
  //     reviews: 8,
  //     location: "Wakad (~8.6 km)",
  //     sport: "Badminton",
  //     image:
  //       "https://playo.gumlet.io/MAJESTICBADMINTONCLUB20250505052744457633/MajesticBadmintonClub1746422926901.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
  //   },
  //   {
  //     title: "Ace Sports Hub",
  //     rating: 4.7,
  //     reviews: 8,
  //     location: "Wakad (~8.6 km)",
  //     sport: "Badminton",
  //     image:
  //       "https://playo.gumlet.io/MAJESTICBADMINTONCLUB20250505052744457633/MajesticBadmintonClub1746422926901.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
  //   },
  // ];
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchVenues = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/venues");
        setVenues(res.data);
      } catch (err) {
        console.error("Error fetching venues:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);
  return (
    <>
      <LoadingSpinner loading={loading} />
      <div className="min-h-screen px-4 py-8 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              className="flex flex-col cursor-pointer bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 w-full h-full"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() =>
                navigate(`/details/${venue._id}`, { state: { venue: venue } })
              }
            >
              {/* Image container */}
              <div className="w-full h-52 overflow-hidden rounded-t-3xl">
                <img
                  src={
                    venue.images?.[0]
                      ? `http://localhost:5000/uploads/venues/${venue.images[0]
                          .split("\\")
                          .pop()}`
                      : "https://via.placeholder.com/400x250?text=No+Image"
                  }
                  alt={venue.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card content */}
              <div className="flex flex-col justify-between flex-grow p-5 space-y-3">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {venue.name}
                  </h2>

                  <div className="flex items-center space-x-1 mt-1">
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      {venue.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      {venue.description}
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MdLocationOn className="mr-2 text-blue-500" />
                    <span>{venue.address}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MdSportsCricket className="mr-2 text-green-500" />
                    <span>{venue.sportsAvailable.join(", ")}</span>
                  </div>
                </div>

                <button className="mt-auto bg-indigo-600 text-white text-sm py-2 px-4 rounded-xl hover:bg-indigo-700 transition">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllVenues;
