import { useLocation } from "react-router-dom";

function ProfilePage() {
  const location = useLocation();
  const tab = location.state?.tab || "Home";
  return (
    <div>
      <h1 className="text-2xl font-bold">{tab}</h1>
      {/* {tab === "Customers" && <CustomersComponent />} */}
      {/* etc. */}
    </div>
  );
}

export default ProfilePage;
