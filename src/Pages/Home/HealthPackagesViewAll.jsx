import React, { useEffect, useState } from "react";
import { userGetHealthPackages } from "../../utils/Urls";
import CheckupCard from "./Components/CheckupCard";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import Swal from "sweetalert2";

function HealthPackagesViewAll() {
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [data, setData] = useState([]);

  // Function to fetch tests
  const getTests = async () => {
    try {
      const response = await axios.get(userGetHealthPackages, {
        params: { page: pageNo, search: debouncedSearch },
      });
      if (response.data.success === false) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.data.message,
        });
        setData([]);
      } else {
        setData(response.data.data);
      }
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching tests:", error);
    }
  };

  // Handle input change with debounce
  const handleSearch = (e) => {
    const inputValue = e.target.value;

    // Update search state only if input length is >= 3
    if (inputValue.length >= 3 || inputValue.length === 0) {
      setSearch(inputValue); // Update the search state
    }
  };

  // Debounce search state updates
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedSearch(search); // Update debouncedSearch after 1s delay
    }, 1500);

    return () => clearTimeout(delayDebounce); // Cleanup timeout
  }, [search]);

  // Fetch tests whenever `debouncedSearch` or `pageNo` changes
  useEffect(() => {
    getTests();
  }, [debouncedSearch, pageNo]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPageNo(newPage);
    }
  };

  const renderPageNumbers = () => {
    const maxPagesToShow = 5;
    const startPage = Math.max(pageNo - Math.floor(maxPagesToShow / 2), 1);
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i}>
          <button
            onClick={() => handlePageChange(i)}
            className={`flex items-center justify-center px-4 h-10 leading-tight border ${
              i === pageNo
                ? "text-blue-600 bg-blue-50 border-blue-300"
                : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            {i}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="p-4 bg-gradient-to-tr pt-28 from-gray-200 via-transparent to-gray-200">
      <div className="flex items-center justify-between px-6">
        <h1 className="text-2xl p-4 font-bold mb-4 text-gray-500">All Tests</h1>
        <div className="flex border rounded-md gap-2">
          <input
            type="text"
            name="search"
            id="search"
            className="border-2 border-gray-300 rounded-md p-2"
            onChange={handleSearch}
          />
          <button
            type="submit"
            className="bg-teal-600 text-white rounded-md p-2"
          >
            <BiSearch />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
        {data.map((item, index) => (
          <CheckupCard key={index} item={item} />
        ))}
      </div>

      <nav aria-label="pagination" className="mt-5 text-right">
        <ul className="inline-flex -space-x-px text-base h-10">
          {/* Previous Button */}
          <li>
            <button
              onClick={() => handlePageChange(pageNo - 1)}
              disabled={pageNo === 1}
              className={`flex items-center justify-center px-4 h-10 leading-tight border rounded-s-lg ${
                pageNo === 1
                  ? "text-gray-300 bg-gray-100"
                  : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {renderPageNumbers()}

          {/* Next Button */}
          <li>
            <button
              onClick={() => handlePageChange(pageNo + 1)}
              disabled={pageNo === totalPages}
              className={`flex items-center justify-center px-4 h-10 leading-tight border rounded-e-lg ${
                pageNo === totalPages
                  ? "text-gray-300 bg-gray-100"
                  : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HealthPackagesViewAll;
