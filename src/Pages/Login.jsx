import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .matches(/[a-zA-Z]/, "Must include letters")
    .matches(/[0-9]/, "Must include numbers")
    .required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const handleLogin = (values) => {
    // Simulate login success
    if (values.email !== "" && values.password !== "") {
      toast.success("Login successful! 🎉");
      setTimeout(() => navigate("/"), 2000);
    } else {
      toast.error("Invalid email or password ❌");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-[90%] max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-10 sm:px-10"
      >
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
          Login to <span className="text-green-500">PlaySphere</span>
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ touched, errors }) => (
            <Form className="space-y-5">
              {/* Email */}
              <div className="relative">
                <FaUser className="absolute top-3.5 left-3 text-purple-400" />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                    touched.email && errors.email
                      ? "border-red-400"
                      : "border-purple-200"
                  } bg-white text-gray-800 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-green-400`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <FaLock className="absolute top-3.5 left-3 text-purple-400" />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                    touched.password && errors.password
                      ? "border-red-400"
                      : "border-purple-200"
                  } bg-white text-gray-800 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-green-400`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
              >
                Log In
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-sm text-center text-purple-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-500 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
