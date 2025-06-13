import { PopularSportsData } from "./data";
import HeroSection from "./HeroSection";
import HorizontalCardScroll from "./HorizontalCardScroll";

export default function Index() {
  return (
    <>
      <HeroSection></HeroSection>
      <HorizontalCardScroll></HorizontalCardScroll>
      <div className="p-6 bg-gradient-to-r from-indigo-50 to-white  ">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 drop-shadow">
          Popular Sports
        </h2>

        <div className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-3 lg:grid-cols-6">
          {PopularSportsData.map((card, index) => (
            <div
              key={index}
              className="min-w-[220px] bg-white rounded-2xl shadow-md p-5 my-3 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img className=" mb-4" src={card.img} alt="" />
              {/* <div className="text-indigo-600 text-3xl mb-4">{card.icon}</div> */}
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="flex items-center bg-gradient-to-r from-indigo-50 to-white px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold  mb-6 leading-tight drop-shadow">
              About the Team
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Clarity gives you the blocks & components you need to create a
              truly professional website, landing page or admin panel for your
              SaaS.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition">
                Read Our Story
              </button>
              <button className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-50 transition">
                We are Hiring !
              </button>
            </div>

            <p className="text-sm text-gray-500">
              Our team works around the clock to provide the best tools and
              support for your needs.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://playo-website.gumlet.io/playo-website-v3/icons/AboutUs_Image.png"
              alt="About us"
              className="w-full max-w-md rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
