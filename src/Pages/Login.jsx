// Modern Sports-Themed Login Page with Transparent Card and Icons
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slice/UserSlice";
import { FaUser, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sportsImages = [
  "/public/soccer.jpg",
  "/public/basketball.jpg",
  "/public/tennis.jpg",
  "/public/golf.jpg",
  "/public/swimming.jpg"
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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogin = async (values) => {
    const result = await dispatch(loginUser(values));
    if (loginUser.fulfilled.match(result)) {
      toast.success("Logged in successfully! ✨");
      const user = result.payload.user;
      // localStorage.setItem("user", JSON.stringify(user));
      // navigate("/dashboard", { replace: true });
      switch (user.role) {
        case "admin":
          navigate("/admin");
          break;
        case "player":
          navigate("/player");
          break;
        case "coach":
          navigate("/coach");
          break;
        case "turf owner":
          navigate("/turf owner");
          break;
        case "academies":
          navigate("/academies");
          break;
        default:
          navigate("/");
      }
    } else {
      toast.error(result.payload || "Login failed");
    }
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop
          effect="fade"
          className="w-full h-full"
        >
          {sportsImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img src={src} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/70" />
      </div>
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-10 overflow-y-auto">
        <div className="w-full max-w-lg bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-white mb-6">
            Login to <span className="text-black">PlaySphere</span>
          </h2>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            <Form className="space-y-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Mail className="w-4 h-4 text-black" />
                </div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-3 py-3 rounded-full bg-white/80 text-black placeholder-black shadow focus:outline-none"
                />
                <ErrorMessage name="email" component="div" className="text-black text-sm mt-1" />
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Lock className="w-4 h-4 text-black" />
                </div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-3 py-3 rounded-full bg-white/80 text-black placeholder-black shadow focus:outline-none"
                />
                <ErrorMessage name="password" component="div" className="text-black text-sm mt-1" />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black hover:bg-black text-white font-semibold rounded-full shadow-lg transition"
              >
                Login
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}






// function Login() {
//   const navigate = useNavigate();
//   const handleLogin = (values) => {
//     // Simulate login success
//     if (values.email !== "" && values.password !== "") {
//       toast.success("Login successful! 🎉");
//       setTimeout(() => navigate("/"), 2000);
//     } else {
//       toast.error("Invalid email or password ❌");
//     }
//   };

//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="w-[90%] max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-10 sm:px-10"
//       >
//         <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
//           Login to <span className="text-green-500">PlaySphere</span>
//         </h2>

//         <Formik
//           initialValues={{ email: "", password: "" }}
//           validationSchema={LoginSchema}
//           onSubmit={handleLogin}
//         >
//           {({ touched, errors }) => (
//             <Form className="space-y-5">
//               {/* Email */}
//               <div className="relative">
//                 <FaUser className="absolute top-3.5 left-3 text-purple-400" />
//                 <Field
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
//                     touched.email && errors.email
//                       ? "border-red-400"
//                       : "border-purple-200"
//                   } bg-white text-gray-800 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-green-400`}
//                 />
//                 <ErrorMessage
//                   name="email"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

//               {/* Password */}
//               <div className="relative">
//                 <FaLock className="absolute top-3.5 left-3 text-purple-400" />
//                 <Field
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
//                     touched.password && errors.password
//                       ? "border-red-400"
//                       : "border-purple-200"
//                   } bg-white text-gray-800 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-green-400`}
//                 />
//                 <ErrorMessage
//                   name="password"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
//               >
//                 Log In
//               </button>
//             </Form>
//           )}
//         </Formik>

//         <p className="text-sm text-center text-purple-600 mt-6">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-green-500 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// export default Login;

