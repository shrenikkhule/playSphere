import { Link } from 'react-router-dom';
import CheckupCard from './CheckupCard';

// eslint-disable-next-line react/prop-types
const HealthPackages = ({ title, link,data }) => {
  return (
    <div className="p-4 bg-gradient-to-tr from-gray-200 via-transparent to-gray-200">
      <div className="flex items-center justify-between px-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-500">{title}</h2>
        <Link to={link}><h2 className="text-1xl font-bold mb-4 text-gray-500">View All</h2></Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
        {data.map((item, index) => (
          <CheckupCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default HealthPackages;
