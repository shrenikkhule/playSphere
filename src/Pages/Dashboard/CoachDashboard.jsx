import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../redux/slice/UserSlice';
import { useNavigate } from 'react-router-dom';


const CoachDashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { loggedInUser } = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };
    return (
        <div className="min-h-screen bg-[url('/bg-coach.jpg')] bg-cover bg-center text-white">
            <div className="flex justify-between px-6 py-4 bg-black text-white">
                <h1>🏀 COACH DASHBOARD</h1>
                {loggedInUser && (
                    <div className="flex items-center gap-4">
                        <span>Hello, {loggedInUser.name}</span>
                        <button
                            onClick={handleLogout}
                            className="px-3 py-1 bg-white text-black rounded"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>

    )
}

export default CoachDashboard