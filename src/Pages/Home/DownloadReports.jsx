import { FaFileDownload } from "react-icons/fa";

function DownloadReports() {
  const reports = [
    { testName: "17 Hydro progesterone (17 OHP)", cost: 700 },
    { testName: "Thyroid Test", cost: 700 },
  ];
  return (
    <div className="mt-24 ">
      <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6">
        Download Your Reports
      </h1>

      {reports.map((item, index) => (
        <div className="max-w-3xl m-8 p-4 border rounded-lg shadow-md bg-white flex" key={index}>
          {/* Left Side */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.testName}
            </h3>
            <p className="text-sm text-gray-600 mt-1">Cost: ₹{item.cost}</p>
          </div>

          {/* Right Side (Download Button) */}
          <div className="ml-4">
            <button
              type="button"
              className="bg-orange-500 text-2xl text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
            >
              <FaFileDownload />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DownloadReports;
