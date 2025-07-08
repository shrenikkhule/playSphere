import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { User, Mail, Phone, Lock, MapPin } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import { registerUser } from "../redux/slice/UserSlice";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"])
    .required("Gender is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Enter a valid 10-digit phone number")
    .required("Phone is required"),
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
    <div className="relative w-full min-h-screen overflow-y-auto">
      {/* Background Carousel (unchanged) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={"https://placehold.co/1920x1080/0d1a26/0f2a4a?text=Soccer"}
          alt={`Slide `}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out `}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-6xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden
        flex flex-col md:flex-row"
        >
          {/* Left Panel - Branding */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex w-full md:w-1/2 flex-col justify-center items-center p-10 text-white"
          >
            <div class="flex items-end gap-1">
              <svg
                class="animate-spin"
                fill="#F97316"
                width="30px"
                height="30px"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Football"
                  d="M66.091,75h-.434a24.926,24.926,0,0,1-8.332-1.544q-.532-.2-1.056-.418c-.229-.1-.456-.2-.682-.3l-.022-.01-.083-.039a25,25,0,0,1-6.2-4.1l-.069-.062-.011-.01q-.446-.405-.876-.835-.448-.448-.872-.916a25.022,25.022,0,0,1-4.1-6.173q-.2-.424-.382-.857-.139-.328-.268-.659a.307.307,0,0,0-.012-.031c-.012-.03-.023-.06-.034-.09a24.851,24.851,0,0,1-1.613-7.569c0-.008,0-.016,0-.024l0-.063c0-.038,0-.076-.006-.114v-.014c-.007-.143-.012-.286-.016-.43Q41,50.369,41,50a24.937,24.937,0,0,1,1.646-8.941.25.25,0,0,0,.009-.023c.008-.02.016-.04.023-.061s.022-.056.033-.084l.014-.035c.077-.2.157-.391.239-.587.037-.087.075-.175.113-.261l.024-.057.023-.052a25.041,25.041,0,0,1,4.434-6.78l.053-.058.018-.019q.337-.366.692-.72.423-.423.861-.822l.058-.053.007-.007a25.043,25.043,0,0,1,6.235-4.128l.069-.032.037-.016q.336-.154.678-.3.4-.167.8-.32A24.907,24.907,0,0,1,65.723,25h.552a24.915,24.915,0,0,1,9.288,1.893l.056.022.021.009.092.039.272.117.013.005.1.046.071.031.042.019a25.031,25.031,0,0,1,6.627,4.358l.01.009.057.051c.254.235.5.475.751.721s.459.468.68.707a25.024,25.024,0,0,1,4.514,6.862l.028.063c.007.016.015.034.022.05.018.04.035.079.052.119,0,0,0,0,0,0,.021.047.041.094.06.14l.045.107.01.023.036.086.025.061a.069.069,0,0,0,0,.01,25.09,25.09,0,0,1,.085,18.676c-.01.027-.021.054-.032.081,0,.01-.009.021-.013.031-.052.13-.106.258-.16.387q-.186.441-.389.873c0,.007-.007.016-.011.022-.014.028-.026.056-.04.083a25.059,25.059,0,0,1-4.089,6.1q-.4.443-.83.869c-.251.251-.506.5-.765.734l-.007.005-.075.069a25.023,25.023,0,0,1-6.594,4.328l-.051.023-.06.027-.114.05h0c-.092.04-.184.08-.276.119l-.1.041A24.911,24.911,0,0,1,66.337,75h-.247Zm-6.853-4.063a22.04,22.04,0,0,0,13.518,0l2.128-6.782L70.485,58H61.515l-4.4,6.156ZM75.169,70A22.1,22.1,0,0,0,82,65.087l-5.263-.078ZM50,65.08A22.093,22.093,0,0,0,56.828,70L55.267,65Zm33.651-1.957A21.886,21.886,0,0,0,88,50c0-.116,0-.232,0-.347l-6.344-4.361-6.836,3.418L72.11,56.833l4.417,6.184ZM44,49.655q0,.173,0,.346a21.881,21.881,0,0,0,4.345,13.112l7.136-.107,4.409-6.173-2.708-8.124L50.356,45.3Zm15.174-1.287L61.721,56h8.558l2.544-7.632L66,43.25ZM44.189,47.113l4.6-3.159-1.775-5.065A21.858,21.858,0,0,0,44.189,47.113Zm39.022-3.165,4.6,3.162a21.842,21.842,0,0,0-2.83-8.222ZM57.894,46.829,65,41.5v-8l-5.869-4.4a22.085,22.085,0,0,0-10.711,7.69l2.254,6.432Zm16.212,0,7.226-3.613,2.249-6.428A22.1,22.1,0,0,0,72.869,29.1L67,33.5v8ZM61.592,28.444,66,31.75l4.409-3.307a22.124,22.124,0,0,0-8.817,0Z"
                  transform="translate(-41 -25)"
                />
              </svg>
              <svg
                class="animate-bounce"
                fill="#F97316"
                width="30px"
                height="30px"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Football"
                  d="M66.091,75h-.434a24.926,24.926,0,0,1-8.332-1.544q-.532-.2-1.056-.418c-.229-.1-.456-.2-.682-.3l-.022-.01-.083-.039a25,25,0,0,1-6.2-4.1l-.069-.062-.011-.01q-.446-.405-.876-.835-.448-.448-.872-.916a25.022,25.022,0,0,1-4.1-6.173q-.2-.424-.382-.857-.139-.328-.268-.659a.307.307,0,0,0-.012-.031c-.012-.03-.023-.06-.034-.09a24.851,24.851,0,0,1-1.613-7.569c0-.008,0-.016,0-.024l0-.063c0-.038,0-.076-.006-.114v-.014c-.007-.143-.012-.286-.016-.43Q41,50.369,41,50a24.937,24.937,0,0,1,1.646-8.941.25.25,0,0,0,.009-.023c.008-.02.016-.04.023-.061s.022-.056.033-.084l.014-.035c.077-.2.157-.391.239-.587.037-.087.075-.175.113-.261l.024-.057.023-.052a25.041,25.041,0,0,1,4.434-6.78l.053-.058.018-.019q.337-.366.692-.72.423-.423.861-.822l.058-.053.007-.007a25.043,25.043,0,0,1,6.235-4.128l.069-.032.037-.016q.336-.154.678-.3.4-.167.8-.32A24.907,24.907,0,0,1,65.723,25h.552a24.915,24.915,0,0,1,9.288,1.893l.056.022.021.009.092.039.272.117.013.005.1.046.071.031.042.019a25.031,25.031,0,0,1,6.627,4.358l.01.009.057.051c.254.235.5.475.751.721s.459.468.68.707a25.024,25.024,0,0,1,4.514,6.862l.028.063c.007.016.015.034.022.05.018.04.035.079.052.119,0,0,0,0,0,0,.021.047.041.094.06.14l.045.107.01.023.036.086.025.061a.069.069,0,0,0,0,.01,25.09,25.09,0,0,1,.085,18.676c-.01.027-.021.054-.032.081,0,.01-.009.021-.013.031-.052.13-.106.258-.16.387q-.186.441-.389.873c0,.007-.007.016-.011.022-.014.028-.026.056-.04.083a25.059,25.059,0,0,1-4.089,6.1q-.4.443-.83.869c-.251.251-.506.5-.765.734l-.007.005-.075.069a25.023,25.023,0,0,1-6.594,4.328l-.051.023-.06.027-.114.05h0c-.092.04-.184.08-.276.119l-.1.041A24.911,24.911,0,0,1,66.337,75h-.247Zm-6.853-4.063a22.04,22.04,0,0,0,13.518,0l2.128-6.782L70.485,58H61.515l-4.4,6.156ZM75.169,70A22.1,22.1,0,0,0,82,65.087l-5.263-.078ZM50,65.08A22.093,22.093,0,0,0,56.828,70L55.267,65Zm33.651-1.957A21.886,21.886,0,0,0,88,50c0-.116,0-.232,0-.347l-6.344-4.361-6.836,3.418L72.11,56.833l4.417,6.184ZM44,49.655q0,.173,0,.346a21.881,21.881,0,0,0,4.345,13.112l7.136-.107,4.409-6.173-2.708-8.124L50.356,45.3Zm15.174-1.287L61.721,56h8.558l2.544-7.632L66,43.25ZM44.189,47.113l4.6-3.159-1.775-5.065A21.858,21.858,0,0,0,44.189,47.113Zm39.022-3.165,4.6,3.162a21.842,21.842,0,0,0-2.83-8.222ZM57.894,46.829,65,41.5v-8l-5.869-4.4a22.085,22.085,0,0,0-10.711,7.69l2.254,6.432Zm16.212,0,7.226-3.613,2.249-6.428A22.1,22.1,0,0,0,72.869,29.1L67,33.5v8ZM61.592,28.444,66,31.75l4.409-3.307a22.124,22.124,0,0,0-8.817,0Z"
                  transform="translate(-41 -25)"
                />
              </svg>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-center">
              Welcome to <br />
              <span className="text-yellow-300">PlaySphere</span>
            </h1>
            <p className="text-lg text-center max-w-sm leading-relaxed">
              The ultimate hub for Players, Coaches, Turf Owners & Sports
              Academies.
            </p>
          </motion.div>

          {/* Right Panel - Form */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full md:w-1/2  backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-600 px-6 py-8 sm:p-10 text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Create Your Account
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
                <Form className="space-y-4">
                  {/* Text Fields */}
                  {[
                    "name",
                    "email",
                    "phone",
                    "address",
                    "password",
                    "confirmPassword",
                  ].map((field) => (
                    <div key={field} className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-black/60">
                        {fieldIcons[field]}
                      </div>
                      <Field
                        as={field === "address" ? "textarea" : "input"}
                        name={field}
                        type={field.includes("password") ? "password" : "text"}
                        placeholder={
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }
                        className="w-full pl-10 pr-3 py-2.5 rounded-full bg-white/80 text-black placeholder-black 
                      focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                      <ErrorMessage
                        name={field}
                        component="div"
                        className="text-yellow-100 text-sm mt-1"
                      />
                    </div>
                  ))}

                  {/* Role */}
                  <div>
                    <Field
                      as="select"
                      name="role"
                      className="w-full p-3 rounded-full bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <option value="">Select Role</option>
                      <option value="player">Player</option>
                      <option value="coach">Coach</option>
                      <option value="turf owner">Turf Owner</option>
                      <option value="academies">Academy</option>
                      {values.email === "shweta@gmail.com" && (
                        <option value="admin">Admin</option>
                      )}
                    </Field>
                    <ErrorMessage
                      name="role"
                      component="div"
                      className="text-yellow-100 text-sm mt-1"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <Field
                      as="select"
                      name="gender"
                      className="w-full p-3 rounded-full bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-yellow-100 text-sm mt-1"
                    />
                  </div>

                  {/* Terms */}
                  <div className="flex items-center space-x-2">
                    <Field
                      type="checkbox"
                      name="terms"
                      className="h-4 w-4 text-green-400"
                    />
                    <label className="text-sm">
                      I accept the{" "}
                      <span className="underline">terms and conditions</span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="text-yellow-100 text-sm"
                  />

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#16a34a" }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 
                  text-white font-bold rounded-full shadow-lg transition duration-300"
                  >
                    Register
                  </motion.button>
                </Form>
              )}
            </Formik>

            {/* Registration Success Message */}
            {registeredUser && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6 bg-white/70 text-black p-4 rounded-lg shadow-md"
              >
                <h3 className="font-semibold text-lg mb-2">
                  Registration Successful 🎉
                </h3>
                <p>
                  <strong>Name:</strong> {registeredUser.name}
                </p>
                <p>
                  <strong>Email:</strong> {registeredUser.email}
                </p>
                <p>
                  <strong>Role:</strong> {registeredUser.role}
                </p>
              </motion.div>
            )}

            {/* Login Link */}
            <p className="text-sm text-center text-white mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-yellow-300 underline hover:text-yellow-200"
              >
                Log in
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
