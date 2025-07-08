import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const ProfileModal = ({
  isOpen,
  onClose,
  address,
  gender,
  name,
  phone,
  role,
}) => {
  const userData = {
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qIivAq9P3NUfmSK7jgnujOpYPFN2fcELqg&s",
    name: name,
    address: address,
    mobile: phone,
    gender: gender,
    role: role,
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <style>{`
        .glow-border {
          position: relative;
        }
        .glow-border::before {
          content: "";
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 1rem;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4);
          background-size: 300% 300%;
          animation: gradientGlow 6s ease infinite;
          z-index: -1;
        }
        @keyframes gradientGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable={true}
        glareMaxOpacity={0.15}
        className="glow-border"
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, opacity: 0, y: -50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl font-bold transition-transform duration-300 hover:rotate-90 focus:outline-none"
            aria-label="Close modal"
          >
            &times;
          </button>

          {/* Header Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-32 h-32 mb-4">
              <img
                src={userData.profilePhoto}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-indigo-400 shadow-lg transition-transform transform hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/150x150/CCCCCC/333333?text=No+Image";
                }}
              />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">
              {userData.name}
            </h2>
            <p className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-1 rounded-full shadow">
              {userData.role} Profile
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            {[
              {
                label: "Address",
                value: userData.address,
                iconColor: "text-blue-500",
                iconPath: (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </>
                ),
              },
              {
                label: "Mobile",
                value: userData.mobile,
                iconColor: "text-green-500",
                iconPath: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9.25a1 1 0 001.07 1.07l3.776 1.076a1 1 0 001.07-.948l.582-2.915a1 1 0 01.684-.949H19a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  />
                ),
              },
              {
                label: "Gender",
                value: userData.gender,
                iconColor: "text-purple-500",
                iconPath: (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14c-1.49 0-2.924.408-4.212 1.144A10.04 10.04 0 0012 18c1.49 0 2.924-.408 4.212-1.144A10.04 10.04 0 0012 14z"
                    />
                  </>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center bg-gray-50 p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
              >
                <svg
                  className={`w-6 h-6 ${item.iconColor} mr-3`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {item.iconPath}
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    {item.label}:
                  </p>
                  <p className="text-md text-gray-800">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default ProfileModal;
