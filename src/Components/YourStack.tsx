import type { Technology } from "../Types/technology";

type YourStackProps = {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {selectedTechnologies.length}{" "}
            {selectedTechnologies.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </p>
        </div>

        {/* Remove All */}
        {selectedTechnologies.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 transition hover:text-red-700"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 px-4 py-10 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl">
            +
          </div>

          <h3 className="font-semibold text-gray-700">
            Your stack is empty
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Add technologies from the list to build your developer stack.
          </p>
        </div>
      ) : (
        /* Selected Technologies */
        <div className="mt-6 space-y-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-200 p-3"
            >
              {/* Icon */}
              <img
                src={technology.icon}
                alt={`${technology.name} icon`}
                className="h-10 w-10 rounded-lg object-contain"
              />

              {/* Name + Category */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-gray-800">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
  onClick={() => onRemove(technology.id)}
  className="rounded-lg px-2 py-1 text-sm font-medium text-red-500 transition hover:bg-red-50"
>
  ×
</button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default YourStack;