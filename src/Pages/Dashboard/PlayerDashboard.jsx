import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/UserSlice";
import { Link, useNavigate } from "react-router-dom";

const PlayerDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.user);
  console.log(loggedInUser);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-[url('/bg-players.jpg')] bg-cover bg-center text-white">
      <div className="flex justify-between px-6 py-4 bg-black text-white">
        <h1>🏀 PLAYERS DASHBOARD</h1>
        {loggedInUser && (
          <div className="flex items-center gap-4">
            <Link className="group flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-lg shadow-md transition relative overflow-hidden">
              <span className="absolute inset-0 opacity-10 blur-md group-hover:opacity-20 transition-all duration-300"></span>
              <span className="z-10">Hello, {loggedInUser.name}</span>
            </Link>

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
  );
};

export default PlayerDashboard;
