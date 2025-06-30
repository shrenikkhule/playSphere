<<<<<<< HEAD
=======
import { useNavigate, Link } from "react-router-dom";
>>>>>>> 6d82c06a62d2c12e013f53f0fccaeba49ba6b95b
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
<<<<<<< HEAD
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { User, Mail, Phone, Lock, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { registerUser } from "../redux/slice/UserSlice";



const sportsImages = [
    "/public/soccer.jpg",
    "/public/basketball.jpg",
    "/public/tennis.jpg",
    "/public/golf.jpg",
    "/public/swimming.jpg"
];

=======

// Validation schema
>>>>>>> 6d82c06a62d2c12e013f53f0fccaeba49ba6b95b
const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    gender: Yup.string().oneOf(["male", "female", "other"]).required("Gender is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Enter a valid 10-digit phone number").required("Phone is required"),
    address: Yup.string().required("Address is required"),
    password: Yup.string()
        .min(6, "Password too short")
        .matches(/[a-zA-Z]/, "Must include letters")
        .matches(/[0-9]/, "Must include numbers")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    terms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

<<<<<<< HEAD
const fieldIcons = {
    name: <User className="w-4 h-4 text-black" />,
    email: <Mail className="w-4 h-4 text-black" />,
    phone: <Phone className="w-4 h-4 text-black" />,
    address: <MapPin className="w-4 h-4 text-black" />,
    password: <Lock className="w-4 h-4 text-black" />,
    confirmPassword: <Lock className="w-4 h-4 text-black" />,
};

export default function RegisterPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { registeredUser } = useSelector((state) => state.user);


    const handleRegister = async (values) => {
        console.log("Form submitted with:", values);
        const result = await dispatch(registerUser(values));
        console.log("Register result:", result);

        if (registerUser.fulfilled.match(result)) {
            toast.success("Registered successfully! 🎉");
            setTimeout(() => navigate("/login"), 1500);
        } else {
            console.error("Registration failed:", result);
            toast.error(result.payload || "Registration failed");
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-lg max-h-[90vh] overflow-y-auto
            scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-rounded-full
            bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8"
                >
                    <h2 className="text-4xl font-bold text-center text-white mb-6">
                        Welcome to <span className="text-black">PlaySphere</span>
                    </h2>

                    <Formik
                        initialValues={{
                            name: "",
                            gender: "",
                            email: "",
                            phone: "",
                            address: "",
                            password: "",
                            confirmPassword: "",
                            role: "",
                            terms: false,
                        }}
                        validationSchema={RegisterSchema}
                        onSubmit={handleRegister}
                    >
                        {({ values }) => (
                            <Form className="space-y-4 text-white">
                                {["name", "email", "phone", "address", "password", "confirmPassword"].map((field) => (
                                    <div key={field} className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                            {fieldIcons[field]}
                                        </div>
                                        <Field
                                            as={field === "address" ? "textarea" : "input"}
                                            name={field}
                                            type={field.includes("password") ? "password" : "text"}
                                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                            className="w-full pl-10 pr-3 py-2.5 text-base tracking-wide font-medium
                        rounded-full bg-white/80 backdrop-blur-sm shadow
                        placeholder-black text-black
                        focus:outline-none focus:ring-2 focus:ring-green-300"
                                        />
                                        <ErrorMessage name={field} component="div" className="text-black text-sm mt-1" />
                                    </div>
                                ))}
                                <div>
                                    <Field as="select" name="role" className="w-full p-3 rounded-full bg-white/80 backdrop-blur-sm text-black focus:outline-none focus:ring-2 focus:ring-green-300">
                                        <option value="">Select Role</option>
                                        <option value="player">Player</option>
                                        <option value="coach">Coach</option>
                                        <option value="turf owner">Turf Owner</option>
                                        <option value="academies">Academy</option>
                                        {values.email === "shweta@gmail.com" && (
                                            <option value="admin">Admin</option>
                                        )}
                                    </Field>
                                    <ErrorMessage name="role" component="div" className="text-red-300 text-sm mt-1" />
                                </div>
                                <div>
                                    <Field
                                        as="select"
                                        name="gender"
                                        className="w-full p-3 rounded-full bg-white/80 backdrop-blur-sm text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-300"
                                    >
                                        <option value="" disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Field>
                                    <ErrorMessage name="gender" component="div" className="text-red-300 text-sm mt-1" />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Field type="checkbox" name="terms" className="h-4 w-4 text-green-300 focus:ring-green-500" />
                                    <label className="text-sm">I accept the terms and conditions</label>
                                </div>
                                <ErrorMessage name="terms" component="div" className="text-red-300 text-sm" />

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-black hover:bg-black text-white font-semibold rounded-full shadow-lg transition ease-in-out duration-300"
                                >
                                    Register
                                </button>

                            </Form>
                        )}
                    </Formik>
                    {registeredUser && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mt-6 bg-white/40 text-black p-4 rounded-lg shadow-md"
                        >
                            <h3 className="font-semibold text-lg mb-2">Registration Successful 🎉</h3>
                            <p><strong>Name:</strong> {registeredUser.name}</p>
                            <p><strong>Email:</strong> {registeredUser.email}</p>
                            <p><strong>Role:</strong> {registeredUser.role}</p>
                        </motion.div>
                    )}

                    <p className="text-sm text-center text-white mt-6">
                        Already have an account?{' '}
                        <Link to="/login" className="text-black hover:underline">
                            Log in
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
=======
function Register() {
    const navigate = useNavigate();

    const handleRegister = (values) => {
        toast.success("Registered successfully! 🎉");
        setTimeout(() => navigate("/login"), 2000);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 overflow-y-auto py-10">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-[90%] max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-10 sm:px-10"
            >
                <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
                    Register at <span className="text-green-500">PlaySphere</span>
                </h2>

                <Formik
                    initialValues={{
                        name: "",
                        gender: "",
                        email: "",
                        phone: "",
                        address: "",
                        password: "",
                        confirmPassword: "",
                        terms: false,
                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={handleRegister}
                >
                    {() => (
                        <Form className="space-y-5">
                            {[
                                { name: "name", type: "text", placeholder: "Full Name" },
                                { name: "email", type: "email", placeholder: "Email" },
                                { name: "phone", type: "text", placeholder: "Phone Number" },
                                { name: "address", as: "textarea", placeholder: "Address" },
                                { name: "password", type: "password", placeholder: "Password" },
                                { name: "confirmPassword", type: "password", placeholder: "Confirm Password" }
                            ].map(({ name, type, placeholder, as = "input" }) => (
                                <div key={name}>
                                    <Field
                                        as={as}
                                        name={name}
                                        type={type}
                                        placeholder={placeholder}
                                        className="w-full px-4 py-2.5 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    />
                                    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                            ))}

                            {/* Gender Dropdown */}
                            <div>
                                <Field
                                    as="select"
                                    name="gender"
                                    className="w-full px-4 py-2.5 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                                >
                                    <option value="" disabled className="text-purple-700">
                                        Select Gender
                                    </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </Field>


                                <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            {/* Terms */}
                            <div className="flex items-center space-x-2">
                                <Field type="checkbox" name="terms" />
                                <span className="text-sm text-purple-700">I accept the terms and conditions</span>
                            </div>
                            <ErrorMessage name="terms" component="div" className="text-red-500 text-sm" />

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
                            >
                                Register
                            </button>
                        </Form>
                    )}
                </Formik>

                <p className="text-sm text-center text-purple-600 mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-500 hover:underline">
                        Log in
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}

export default Register;
>>>>>>> 6d82c06a62d2c12e013f53f0fccaeba49ba6b95b
