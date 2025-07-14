import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [profileImages, setProfileImages] = useState({});
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || user.role !== "admin") {
      toast.error("Access denied: Admins only");
      navigate("/");
      return;
    }
    fetchUsers();
  }, [navigate, user]);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/api/users/all")
      .then((res) => setUsers(res.data))
      .catch((err) => toast.error("Failed to fetch users"));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.info("Logged out successfully");
    navigate("/");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      toast.success("User deleted");
      setConfirmDeleteId(null);
      fetchUsers();
    } catch (err) {
      toast.error("Failed to delete user");
    }
  };

  const handleEdit = (id) => {
    setEditingUserId(id);
    const userToEdit = users.find((u) => u._id === id);
    setEditedData({
      phone: userToEdit.phone,
      address: userToEdit.address,
      role: userToEdit.role,
    });
  };

  const handleSave = async (id) => {
    if (!editedData.phone || !editedData.address || !editedData.role) {
      toast.error("All fields must be filled!");
      return;
    }
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, editedData);
      toast.success("User updated");
      setEditingUserId(null);
      fetchUsers();
    } catch (err) {
      toast.error("Update failed");
    }
  };

  const handleImageUpload = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImages((prev) => ({ ...prev, [id]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredUsers = users.filter((u) => {
    const matchesRole = roleFilter === "all" || u.role === roleFilter;
    const matchesName = u.name.toLowerCase().includes(search.toLowerCase());
    return matchesRole && matchesName;
  });

  return (
    <div className="relative">
      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-lg bg-white px-6 py-3 text-lg font-medium placeholder-gray-500 text-gray-800 rounded-full shadow-md border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition duration-300"
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-6 py-3 text-lg font-medium rounded-full shadow-md bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition duration-300"
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="player">Player</option>
          <option value="coach">Coach</option>
          <option value="turf owner">Turf Owner</option>
          <option value="academies">Academy</option>
        </select>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredUsers.map((u) => (
          <motion.div
            key={u._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
                    <img
                      src={
                        u.gender === "male"
                          ? "/usermale.jpg"
                          : u.gender === "female"
                          ? "/userfemale.jpg"
                          : "/other-avatar.jpg"
                      }
                      alt={`${u.name}'s avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {u.name}
                    </h2>
                    <p className="text-sm text-gray-500">{u.email}</p>
                  </div>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider ${
                    u.role === "admin"
                      ? "bg-indigo-100 text-indigo-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {u.role}
                </span>
              </div>

              {/* Edit Mode */}
              {editingUserId === u._id ? (
                <div className="mt-6">
                  <input
                    type="text"
                    value={editedData.phone}
                    onChange={(e) =>
                      setEditedData({ ...editedData, phone: e.target.value })
                    }
                    className="w-full mb-3 p-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Phone Number"
                  />
                  <input
                    type="text"
                    value={editedData.address}
                    onChange={(e) =>
                      setEditedData({ ...editedData, address: e.target.value })
                    }
                    className="w-full mb-3 p-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Address"
                  />
                  <select
                    value={editedData.role}
                    onChange={(e) =>
                      setEditedData({ ...editedData, role: e.target.value })
                    }
                    className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="admin">Admin</option>
                    <option value="player">Player</option>
                    <option value="coach">Coach</option>
                    <option value="turf owner">Turf Owner</option>
                    <option value="academies">Academy</option>
                  </select>
                  <div className="flex justify-end gap-3 mt-4">
                    <button
                      onClick={() => setEditingUserId(null)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSave(u._id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="font-semibold">📞 Phone:</span> {u.phone}
                    </p>
                    <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
                      <span className="font-semibold">📍 Address:</span>{" "}
                      {u.address}
                    </p>
                  </div>
                  <div className="flex justify-end gap-3 mt-6">
                    <button
                      onClick={() => handleEdit(u._id)}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setConfirmDeleteId(u._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold shadow-sm"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Delete Confirmation Modal */}
            {confirmDeleteId === u._id && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Confirm Deletion
                  </h3>
                  <p className="mb-8 text-gray-600">
                    Are you sure you want to delete <strong>{u.name}</strong>?
                    This action cannot be undone.
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setConfirmDeleteId(null)}
                      className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold w-full"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleDelete(u._id)}
                      className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold w-full shadow-lg"
                    >
                      Yes, Delete
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
