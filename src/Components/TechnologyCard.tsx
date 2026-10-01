import type { Technology } from "../Types/technology";

type TechnologyCardProps = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isSelected: boolean;
};

const TechnologyCard = ({
  technology,
  onAdd,
  isSelected,
}: TechnologyCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Icon + Badge */}
      <div className="mb-4 flex items-start justify-between">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-14 w-14 rounded-xl object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-3 flex-grow text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {technology.category}
        </span>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-yellow-500">★</span>

        <span className="font-semibold text-gray-800">
          {technology.rating}
        </span>

        <span className="text-sm text-gray-500">
          / 5
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isSelected}
        className={`mt-5 w-full rounded-xl px-4 py-3 font-semibold text-white transition ${
          isSelected
            ? "cursor-not-allowed bg-gray-400"
            : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;