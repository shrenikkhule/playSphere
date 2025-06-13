import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { domain, postCartUrl } from "../../../utils/Urls";
import { networkRequestCustomer } from "../../../utils/network_request_customer";
import { useCart } from "../../../CartContext";
import { useState } from "react";

const CheckupCard = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart: incrementCartCount } = useCart();
  let path = "package-details";

  const addToCart = (item) => {
    let api = `${postCartUrl}`;
    const handleLoading = (loading) => {
      setIsLoading(loading);
    };

    const extractedData = {
      name: item.name,
      package_id: item.id,
      type: "package",
      sale_price: item.sale_price,
    };

    const handleResponse = (data) => {
      if (data.success === true) {
        incrementCartCount();
      }
      Swal.fire({
        icon: data.success === true ? "success" : "error",
        title: "Added!",
        text: data.message,
      });
    };

    networkRequestCustomer(
      api,
      handleLoading,
      handleResponse,
      "post",
      extractedData
    );
  };

  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="p-4 bg-teal-600 rounded-t-lg text-white relative">
        <h2 className="text-lg font-semibold">
          {item.name === undefined ? item.investigations : item.name}
        </h2>
        <div className="flex justify-between">
          <div className="flex items-center mt-2">
            <span className="text-md text-gray-200 line-through mr-2">
              ₹{item.cost_price}
            </span>
            <span className="text-md font-bold">₹{item.sale_price}</span>
          </div>
          <div className="p-2 text-xs font-semibold rounded text-green-500 inline-block">
            {(((item.sale_price / item.cost_price) * 100 - 100) * -1).toFixed(
              2
            )}
            % off
          </div>
        </div>
      </div>
      {/* Details Section */}
      <div className="p-4 flex flex-col space-y-2">
        {/* <div className="flex items-center">
                    <FaFlask className="text-gray-600 mr-2" />
                    <span className="font-semibold text-gray-800">91 parameters</span>
                    <span className="ml-1 text-gray-500">included</span>
                </div> */}
        <div className="flex items-center">
          <FaClock className="text-gray-600 mr-2" />
          <span className="font-semibold text-gray-800">Reports within</span>
          <span className="text-sm ml-1 text-gray-800">
            {item.schedule_report}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex space-x-4">
        <Link to={`/${path}/${item.id}`}>
          <button className="text-sm flex-1 px-4 py-2 border border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-100 transition">
            View Details
          </button>
        </Link>
        <button
          onClick={() => addToCart(item)}
          disabled={isLoading}
          className={`text-sm flex-1 px-4 py-2 ${
            isLoading 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-orange-500 hover:bg-orange-600"
          } text-white font-semibold rounded-lg transition`}
        >
          {isLoading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default CheckupCard;
