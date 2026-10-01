import Bannar from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        
        {/* Left Content */}
        <div>
          <p className="mb-3 font-semibold text-pink-500">
            BUILD • LEARN • CREATE
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Build Your Future with{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Modern Technologies
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Explore modern web technologies, discover powerful tools, and
            build your own developer stack to grow your skills and create
            amazing projects.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105">
              Explore Technologies
            </button>

            <button className="rounded-full border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-pink-500 hover:text-pink-500">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="flex justify-center">
          <img
            src={Bannar}            alt="Developer working with modern technologies"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;