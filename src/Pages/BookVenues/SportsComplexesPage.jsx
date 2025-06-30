const sportsData = {
  BANGALORE: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  CHENNAI: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  HYDERABAD: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  PUNE: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  VIJAYAWADA: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
  ],
  MUMBAI: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  "DELHI NCR": [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  VISAKHAPATNAM: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  GUNTUR: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  KOCHI: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  DUBAI: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  QATAR: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  AUSTRALIA: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
  OMAN: [
    "Sports Complexes",
    "Badminton Courts",
    "Football Grounds",
    "Cricket Grounds",
    "Tennis Courts",
    "Basketball Courts",
    "Table Tennis Clubs",
    "Volleyball Courts",
    "Swimming Pools",
  ],
};

const SportsComplexesPage = () => {
  return (
    <section className="bg-white px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        Top Sports Complexes in Cities
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-16">
        {Object.entries(sportsData).map(([city, facilities]) => (
          <div key={city}>
            <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-1 border-green-500">
              {city}
            </h2>
            <ul className="space-y-1 text-gray-700 text-sm">
              {facilities.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-green-600 transition cursor-pointer"
                >
                  {item} in {city}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SportsComplexesPage;
