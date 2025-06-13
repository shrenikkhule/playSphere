import { createContext, useContext, useState } from "react";

// Create LoadingContext
const LoadingContext = createContext();

// eslint-disable-next-line react/prop-types
export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out gap-3">
          <div className="animate-spin h-5 w-5 border-b-2 border-white rounded-full"></div>
          <div className="text-white text-lg font-bold">Loading...</div>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
}

// Export the useContext hook for LoadingContext
export const useLoading = () => useContext(LoadingContext);
