import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Calendar, Clock, MapPin, Trophy } from "lucide-react";
import { useState } from "react";
import { HiClock, HiMapPin, HiTrophy } from "react-icons/hi2";

function CardDetails() {
  const { state } = useLocation();
  const venue = state?.venue;
  console.log(venue);

  if (!venue) return <div className="p-4">No venue data found.</div>;

  const imageName = venue.images?.[0]?.split("\\").pop();
  const imageUrl = imageName
    ? `http://localhost:5000/uploads/venues/${imageName}`
    : "https://via.placeholder.com/400x250?text=No+Image";

  const thumbnails = [
    imageUrl,
    "https://images.unsplash.com/photo-1505305976870-c0be1cd39939?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzJTIwZmllbGR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1710993115031-682d1a3c6529?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwZmllbGR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1728536909253-a84ce4750d33?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzJTIwZ3JvdW5kfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/456739859/photo/red-running-track-in-the-national-stadium-of-thailand-bangkok.webp?a=1&b=1&s=612x612&w=0&k=20&c=84WrZFj1YagdBYueSlZIH5Yy8_fnXxnfBsqQFf4-vUg=",
  ];

  const [mainImage, setMainImage] = useState(imageUrl);

  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Left - Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={mainImage}
                alt="Product"
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {thumbnails.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => setMainImage(src)}
                  />
                ))}
              </div>
            </div>

            {/* Right - Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">
                {venue.name.charAt(0).toUpperCase() + venue.name.slice(1)}
              </h2>
              <p className="text-gray-600 mb-4 flex items-center gap-2">
                <HiClock className="text-gray-600 w-5 h-5" />
                Timing: {venue.timing}
              </p>

              <p className="text-gray-600 mb-4 flex items-center gap-2">
                <HiMapPin className="text-green-600 w-5 h-5" />
                Address: {venue.address}
              </p>

              <p className="text-gray-600 mb-4 flex items-center gap-2">
                <HiTrophy className="text-orange-500 w-5 h-5" />
                Sports Available: {venue.sportsAvailable.join(", ")}
              </p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">Rs. 349.99</span>
                <span className="text-gray-500 line-through">Rs. 399.99</span>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 
                    5.404.434c1.164.093 1.636 1.545.749 
                    2.305l-4.117 3.527 1.257 5.273c.271 
                    1.136-.964 2.033-1.96 
                    1.425L12 18.354 7.373 
                    21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 
                    2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
              </div>

              <p className="text-gray-700 mb-6">{venue.description}</p>
              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Players:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  defaultValue="1"
                  className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex space-x-4 mb-6">
                <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 
                      1.437M7.5 14.25a3 3 0 0 0-3 
                      3h15.75m-12.75-3h11.218c1.121-2.3 
                      2.1-4.684 
                      2.924-7.138a60.114 60.114 0 0 
                      0-16.536-1.84M7.5 14.25 
                      5.106 5.272M6 
                      20.25a.75.75 0 1 1-1.5 
                      0 .75.75 0 0 1 1.5 
                      0Zm12.75 0a.75.75 0 1 1-1.5 
                      0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Book Now
                </button>

                <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 
                    8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 
                    0-3.597 1.126-4.312 
                    2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 
                    3.75 3 5.765 3 8.25c0 
                    7.22 9 12 9 
                    12s9-4.78 9-12Z"
                    />
                  </svg>
                  Wishlist
                </button>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    Well-Maintained Surface – Smooth turf or ground for safe
                    play.
                  </li>
                  <li>
                    Proper Lighting – Adequate floodlights for evening matches.
                  </li>
                  <li>
                    Equipment & Facilities – Goalposts, nets, scoreboards, etc.
                  </li>
                  <li>Seating & Shelter – Stands or benches for spectators.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetails;
