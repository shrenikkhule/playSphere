import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slice/UserSlice";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";

const sportsImages = [
  "https://placehold.co/1920x1080/0d1a26/0f2a4a?text=Soccer",
  "https://placehold.co/1920x1080/0d1a26/0f2a4a?text=Basketball",
  "https://placehold.co/1920x1080/0d1a26/0f2a4a?text=Tennis",
  "https://placehold.co/1920x1080/0d1a26/0f2a4a?text=Golf",
  "https://placehold.co/1920x1080/0d1a26/0f2a4a?text=Swimming",
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdUNrQaPt3choN3RDW_ZzG47xDZcADhubgQ&s",
  // "https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?cs=srgb&dl=pexels-jean-daniel-2570139.jpg&fm=jpg",
];

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .matches(/[a-zA-Z]/, "Must include letters")
    .matches(/[0-9]/, "Must include numbers")
    .required("Password is required"),
});

export default function Login() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sportsImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (values) => {
    const result = await dispatch(loginUser(values));
    if (loginUser.fulfilled.match(result)) {
      toast.success("Logged in successfully! ✨");
      const user = result.payload.user;
      localStorage.setItem("user", JSON.stringify(user));
      switch (user.role) {
        case "admin":
          navigate("/dashboard/admin");
          break;
        case "player":
          navigate("/");
          break;
        case "coach":
          navigate("/dashboard/coach");
          break;
        case "turf owner":
          navigate("/dashboard/turf owner");
          break;
        case "academies":
          navigate("/dashboard/academies");
          break;
        default:
          navigate("/");
      }
    } else {
      toast.error(result.payload || "Login failed");
    }
  };
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      rotate: [0, 7, -7, 0],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };
  const bgShapeVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.1, 0.2, 0.1],
      rotate: [0, 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };
  return (
    <div className="relative w-full h-screen overflow-hidden font-inter">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        {sportsImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/80" /> */}
      </div>
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500 blur-3xl opacity-10"
        variants={bgShapeVariants}
        initial="animate"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-green-500 blur-3xl opacity-10"
        variants={bgShapeVariants}
        initial="animate"
        animate="animate"
        transition={{
          ...bgShapeVariants.animate.transition,
          duration: 25,
          delay: 5,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-purple-500 blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"
        variants={bgShapeVariants}
        initial="animate"
        animate="animate"
        transition={{
          ...bgShapeVariants.animate.transition,
          duration: 30,
          delay: 10,
        }}
      />
      {/* Animated Sporty Icons (Stickers) - positioned relative to viewport */}
      {/* Basketball Icon */}
      <motion.div
        className="absolute top-[10%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 text-blue-400 opacity-30 z-0"
        variants={floatVariants}
        initial="initial"
        animate="animate"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V6ZM12 18.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75ZM18.75 12a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6c.414 0 .75-.336.75-.75ZM6 12a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6c.414 0 .75-.336.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>

      {/* Trophy Icon */}
      <motion.div
        className="absolute bottom-[10%] right-[10%] transform translate-x-1/2 translate-y-1/2 text-green-400 opacity-30 z-0"
        variants={floatVariants}
        initial="initial"
        animate="animate"
        transition={{ ...floatVariants.animate.transition, delay: 1.5 }} // Stagger animation start
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
        >
          <path
            fillRule="evenodd"
            d="M11.53 2.53a.75.75 0 0 1 0 1.06L5.81 10.25H21a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-.25v.75A.75.75 0 0 0 21 14a2 2 0 0 1 2 2v2.25a.75.75 0 0 1-.75.75H1.5a.75.75 0 0 1-.75-.75V16a2 2 0 0 1 2-2 .75.75 0 0 0 .75-.75v-.75H3a.75.75 0 0 1-.75-.75V11a.75.75 0 0 1 .75-.75h1.72L11.53 2.53ZM12.75 16.5a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0v-3.75Z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>

      {/* Soccer Ball Icon */}
      <motion.div
        className="absolute top-[20%] right-[25%] transform -translate-x-1/2 -translate-y-1/2 text-red-400 opacity-30 z-0 hidden sm:block" // Hidden on smaller screens
        variants={floatVariants}
        initial="initial"
        animate="animate"
        transition={{
          ...floatVariants.animate.transition,
          delay: 0.5,
          duration: 4.5,
        }} // Stagger and slightly different duration
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V6ZM12 18.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75ZM18.75 12a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6c.414 0 .75-.336.75-.75ZM6 12a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6c.414 0 .75-.336.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>

      {/* Stopwatch Icon */}
      <motion.div
        className="absolute bottom-[20%] left-[25%] transform translate-x-1/2 -translate-y-1/2 text-yellow-400 opacity-30 z-0 hidden sm:block" // Hidden on smaller screens
        variants={floatVariants}
        initial="initial"
        animate="animate"
        transition={{
          ...floatVariants.animate.transition,
          delay: 2.5,
          duration: 5.5,
        }} // Stagger and slightly different duration
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V6ZM12 18.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75ZM18.75 12a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6c.414 0 .75-.336.75-.75ZM6 12a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6c.414 0 .75-.336.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>
      {/* Main Content Area */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-10 overflow-y-auto">
        <motion.div
          className="w-full max-w-lg bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-blue-600"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
              {/* Main Sporty Icon (Inline SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V6ZM12 18.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75ZM18.75 12a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6c.414 0 .75-.336.75-.75ZM6 12a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6c.414 0 .75-.336.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              Login to <span className="text-black">PlaySphere</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Your ultimate destination for sports!
            </p>
          </motion.div>

          {/* Formik Form */}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            <Form className="space-y-5">
              {/* Email Field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Mail className="w-4 h-4 text-black" />
                </div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-3 py-3 rounded-full bg-white/80 text-black placeholder-black shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-300 text-sm mt-1 ml-10"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Lock className="w-4 h-4 text-black" />
                </div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-3 py-3 rounded-full bg-white/80 text-black placeholder-black shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-300 text-sm mt-1 ml-10"
                />
              </div>
              <motion.div className="text-right">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium transition duration-200"
                >
                  Forgot Password?
                </a>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold rounded-full shadow-lg transition duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 100, 255, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            </Form>
          </Formik>
          <motion.div
            className="mt-6 sm:mt-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Link to={"/register"}>
              <p className="text-gray-300 text-sm sm:text-base">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 font-medium transition duration-200"
                >
                  Sign Up
                </a>
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
