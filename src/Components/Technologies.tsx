import type { Technology } from "../Types/technology";
import TechnologyCard from "./TechnologyCard";

type TechnologiesProps = {
  technologies: Technology[];
};

const Technologies = ({ technologies }: TechnologiesProps) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="font-semibold text-pink-500">
            TECHNOLOGY STACK
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Explore{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover modern technologies and choose the tools you want to
            add to your developer stack.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;