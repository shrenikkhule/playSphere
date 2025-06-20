import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

// Validation schema
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
