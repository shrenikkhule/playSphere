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
        axios.get("http://localhost:5000/api/users/all")
            .then(res => setUsers(res.data))
            .catch(err => toast.error("Failed to fetch users"));
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
        const userToEdit = users.find(u => u._id === id);
        setEditedData({ phone: userToEdit.phone, address: userToEdit.address, role: userToEdit.role });
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

    const filteredUsers = users.filter(u => {
        const matchesRole = roleFilter === "all" || u.role === roleFilter;
        const matchesName = u.name.toLowerCase().includes(search.toLowerCase());
        return matchesRole && matchesName;
    });

    return (
        <div className="relative min-h-screen p-6 overflow-x-hidden">
            <div className="absolute inset-0 -z-10">
                <img src="/admin-bg.jpg" alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="flex justify-between items-center mb-6 text-white">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <div className="flex items-center gap-4">
                    <span className="text-md font-semibold">Welcome, {user.name}</span>
                    <button onClick={handleLogout} className="px-4 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200">Logout</button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-6">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full max-w-lg bg-white px-6 py-3 text-lg font-semibold placeholder-gray-600 rounded-full shadow-lg focus:outline-none"
                />
                <select
                    value={roleFilter}
                    onChange={e => setRoleFilter(e.target.value)}
                    className="px-6 py-3 text-lg font-medium rounded-full shadow-lg bg-white text-gray-800 focus:outline-none"
                >
                    <option value="all">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="player">Player</option>
                    <option value="coach">Coach</option>
                    <option value="turf owner">Turf Owner</option>
                    <option value="academies">Academy</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers.map((u) => (
                    <motion.div
                        key={u._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-6 shadow-xl relative"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16">
                                    <img
                                        src={
                                            u.gender === "male"
                                                ? "/usermale.jpg"
                                                : u.gender === "female"
                                                    ? "/userfemale.jpg"
                                                    : "/other-avatar.jpg"
                                        }
                                        alt=""
                                        className="rounded-full w-full h-full object-cover border-2 border-white"
                                    />

                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">{u.name}</h2>
                                    <p className="text-sm text-white/80">{u.email}</p>
                                </div>
                            </div>
                            <span className="text-xs bg-purple-600 px-3 py-1 rounded-full text-white">{u.role}</span>
                        </div>

                        {editingUserId === u._id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedData.phone}
                                    onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })}
                                    className="w-full my-2 p-2 rounded shadow border border-gray-300"
                                />
                                <input
                                    type="text"
                                    value={editedData.address}
                                    onChange={(e) => setEditedData({ ...editedData, address: e.target.value })}
                                    className="w-full my-2 p-2 rounded shadow border border-gray-300"
                                />
                                <select
                                    value={editedData.role}
                                    onChange={(e) => setEditedData({ ...editedData, role: e.target.value })}
                                    className="w-full my-2 p-2 rounded shadow border border-gray-300"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="player">Player</option>
                                    <option value="coach">Coach</option>
                                    <option value="turf owner">Turf Owner</option>
                                    <option value="academies">Academy</option>
                                </select>
                                <div className="flex justify-between mt-3">
                                    <button onClick={() => handleSave(u._id)} className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">Save</button>
                                    <button onClick={() => setEditingUserId(null)} className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400">Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="text-sm text-white/80">Phone: {u.phone}</p>
                                <p className="text-sm text-white/80">Address: {u.address}</p>
                                <div className="flex justify-between mt-3">
                                    <button onClick={() => handleEdit(u._id)} className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600">Edit</button>
                                    <button onClick={() => setConfirmDeleteId(u._id)} className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600">Delete</button>
                                </div>
                            </>
                        )}

                        {confirmDeleteId === u._id && (
                            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                                <div className="bg-white p-6 rounded-xl shadow-xl text-center">
                                    <p className="mb-4 text-gray-800 text-lg">Are you sure you want to delete <strong>{u.name}</strong>?</p>
                                    <div className="flex justify-center gap-4">
                                        <button onClick={() => handleDelete(u._id)} className="px-4 py-2 bg-red-600 text-white rounded-lg">Yes</button>
                                        <button onClick={() => setConfirmDeleteId(null)} className="px-4 py-2 bg-gray-300 text-black rounded-lg">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
