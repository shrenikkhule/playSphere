import { motion } from "framer-motion";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "10 Easy Workouts to Boost Your Energy",
      category: "Fitness",
      description:
        "Stay active with beginner-friendly exercises to improve your health and mood.",
      image:
        "https://playo.co/_next/image?url=https%3A%2F%2Fd20rwxqzk8p5vr.cloudfront.net%2Fwp-content%2Fuploads%2F2017%2F04%2F4.png&w=1920&q=75",
    },
    {
      id: 2,
      title: "Healthy Eating: Foods That Fuel Your Body",
      category: "Nutrition",
      description:
        "Discover the best foods to power your workouts and stay energized all day.",
      image:
        "https://playo.co/_next/image?url=https%3A%2F%2Fd20rwxqzk8p5vr.cloudfront.net%2Fwp-content%2Fuploads%2F2017%2F09%2Ffeatured-image-7.jpg&w=1920&q=75",
    },
    {
      id: 3,
      title: "Stretching Secrets for Flexibility",
      category: "Wellness",
      description:
        "Improve posture and reduce soreness with these daily stretches.",
      image:
        "https://playo.co/_next/image?url=https%3A%2F%2Fd20rwxqzk8p5vr.cloudfront.net%2Fwp-content%2Fuploads%2F2017%2F10%2Ffat-burning-sports.jpg&w=1920&q=75",
    },
    {
      id: 4,
      title: "Morning Routines That Transform Your Day",
      category: "Lifestyle",
      description:
        "Learn how to start your day with purpose, energy, and positivity.",
      image:
        "https://playo.co/_next/image?url=https%3A%2F%2Fd20rwxqzk8p5vr.cloudfront.net%2Fwp-content%2Fuploads%2F2017%2F04%2Fwater-zorbing-in-bangalore.jpg&w=1920&q=75",
    },
  ];

  return (
    <section className="px-10 py-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Blogs to Keep You Fit!
      </h2>

      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="min-w-[300px] max-w-[320px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <span className="text-sm text-indigo-600 font-semibold uppercase">
                {blog.category}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mt-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              <button className="mt-4 inline-block bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
