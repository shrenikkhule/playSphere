import { useParams } from "react-router-dom";
function TrainerDetails() {
  const trainers = [
    {
      id: 1,
      name: "Sanket Kamble",
      location: "Pune, Maharashtra, India",
      type: "Adults",
      rating: "4.8",
      image:
        "https://playo.co/_next/image?url=https%3A%2F%2Fplayov2.gumlet.io%2Fprofiles%2F1743006993348-profilePic.jpg&w=1920&q=75",
    },
    {
      id: 2,
      name: "Aditi Sharma",
      location: "Pune, Maharashtra, India",
      type: "Teens & Adults",
      rating: "4.9",
      image:
        "https://www.healthfitnessindia.in/wp-content/uploads/2016/11/LUVFITNESS-by-Personal-Fitness-Trainer-Manisha-Singh-Exercise-Nutrition-Beauty-Health-Fitness-Wellness-India-34.jpg",
    },
    {
      id: 3,
      name: "Aditi Sharma",
      location: "Pune, Maharashtra, India",
      type: "Teens & Adults",
      rating: "4.9",
      image:
        "https://playo.co/_next/image?url=https%3A%2F%2Fplayov2.gumlet.io%2Fprofiles%2F1749040695924-profilePic.jpg&w=1920&q=75",
    },
    {
      id: 4,
      name: "Rohan Mehta",
      location: "Pune, Maharashtra, India",
      type: "Kids & Adults",
      rating: "4.7",
      image:
        "https://playo.co/_next/image?url=https%3A%2F%2Fplayov2.gumlet.io%2Fprofiles%2F1748309041080-profilePic.jpg&w=1920&q=75",
    },
  ];

  const { id } = useParams();
  const trainer = trainers.find((t) => t.id === id);
  if (!trainer) return <p className="text-center mt-10">Trainer not found</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg text-center">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-40 h-40 mx-auto rounded-full object-cover"
      />
      <h2 className="text-2xl font-bold mt-4">{trainer.name}</h2>
      <p className="text-gray-600">{trainer.location}</p>
      <p className="text-gray-700 mt-2">Type: {trainer.type}</p>
      <p className="text-yellow-500 mt-1">⭐ {trainer.rating}</p>
    </div>
  );
}

export default TrainerDetails;
