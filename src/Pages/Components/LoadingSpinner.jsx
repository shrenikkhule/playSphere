const LoadingSpinner = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-screen h-screen gap-5 bg-white/70 dark:bg-gray-900/70">
      <div className="flex justify-center items-center relative">
        <div className="absolute animate-spin rounded-md h-16 w-16 border-4 border-emerald-500"></div>
        <img
          src="https://tailwindflex.com/images/logo.svg"
          className="rounded-full h-14 w-14 animate-pulse"
          alt="Loading..."
        />
      </div>
      <span className="text-2xl text-emerald-500">Just a quick stretch..</span>
    </div>
  );
};

export default LoadingSpinner;
