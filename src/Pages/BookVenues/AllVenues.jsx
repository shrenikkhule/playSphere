import { FaStar } from "react-icons/fa";
import { MdLocationOn, MdSportsCricket } from "react-icons/md";
import { motion } from "framer-motion";

function AllVenues() {
  const venues = [
    {
      title: "Nawu Sports Club",
      rating: 3.67,
      reviews: 3,
      location: "Gahunje (~24.7 km)",
      sport: "Box Cricket",
      image:
        "https://playo.gumlet.io/NAWUSPORTSCLUB20231117073811203577/NawuSportsClub1700288203817.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
    },
    {
      title: "Legends Arena",
      rating: 4.2,
      reviews: 14,
      location: "Baner (~12.1 km)",
      sport: "Football Turf",
      image:
        "https://playo.gumlet.io/SPARKCRICKETGROUND20210130172407984571/SparkCricketGround1612027957023.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
    },
    {
      title: "Ace Sports Hub",
      rating: 4.7,
      reviews: 8,
      location: "Wakad (~8.6 km)",
      sport: "Badminton",
      image:
        "https://playo.gumlet.io/PAVILIONPINNACLE20231003144418876805/PavilionPinnacle1697361058400.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
    },
    {
      title: "Ace Sports Hub",
      rating: 4.7,
      reviews: 8,
      location: "Wakad (~8.6 km)",
      sport: "Badminton",
      image:
        "https://playo.gumlet.io/MATCHPOINTHINJEWADI20250514144216814720/MatchpointHinjewadi1747233872116.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
    },
    {
      title: "Ace Sports Hub",
      rating: 4.7,
      reviews: 8,
      location: "Wakad (~8.6 km)",
      sport: "Badminton",
      image:
        "https://playo.gumlet.io/MAJESTICBADMINTONCLUB20250505052744457633/MajesticBadmintonClub1746422926901.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
    },
    {
      title: "Ace Sports Hub",
      rating: 4.7,
      reviews: 8,
      location: "Wakad (~8.6 km)",
      sport: "Badminton",
      image:
        "https://playo.gumlet.io/MAJESTICBADMINTONCLUB20250505052744457633/MajesticBadmintonClub1746422926901.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
    },
    {
      title: "Ace Sports Hub",
      rating: 4.7,
      reviews: 8,
      location: "Wakad (~8.6 km)",
      sport: "Badminton",
      image:
        "https://playo.gumlet.io/MAJESTICBADMINTONCLUB20250505052744457633/MajesticBadmintonClub1746422926901.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
    },
    {
      title: "Ace Sports Hub",
      rating: 4.7,
      reviews: 8,
      location: "Wakad (~8.6 km)",
      sport: "Badminton",
      image:
        "https://playo.gumlet.io/MAJESTICBADMINTONCLUB20250505052744457633/MajesticBadmintonClub1746422926901.jpg?mode=crop&crop=smart&h=200&width=450&q=75",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {venues.map((venue, index) => (
          <motion.div
            key={index}
            className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <img
              src={venue.image}
              alt={venue.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 space-y-2">
              <h2 className="text-lg font-bold text-gray-800">{venue.title}</h2>

              <div className="flex items-center space-x-1">
                <FaStar className="text-yellow-500" />
                <span className="text-sm font-semibold text-gray-700">
                  {venue.rating}
                </span>
                <span className="text-sm text-gray-500">({venue.reviews})</span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <MdLocationOn className="mr-2 text-blue-500" />
                <span>{venue.location}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <MdSportsCricket className="mr-2 text-green-500" />
                <span>{venue.sport}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AllVenues;
