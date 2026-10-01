import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import type { Technology } from "./Types/technology";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        setError("Failed to load technology data.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add technology
  const handleAdd = (technology: Technology) => {
  const alreadySelected = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  if (alreadySelected) {
    toast.warning(
      `${technology.name} is already in your stack`
    );

    return;
  }

  setSelectedTechnologies((previous) => [
    ...previous,
    technology,
  ]);

  toast.success(
    `${technology.name} added to stack`
  );
};

  // Remove technology
  const handleRemove = (id: string) => {
  const removedTechnology = selectedTechnologies.find(
    (item) => item.id === id
  );

  setSelectedTechnologies((previous) =>
    previous.filter(
      (technology) => technology.id !== id
    )
  );

  if (removedTechnology) {
    toast.info(
      `${removedTechnology.name} removed`
    );
  }
};

  // Remove all
 const handleRemoveAll = () => {
  setSelectedTechnologies([]);

  toast.error("All technologies removed");
};

  return (
    <>
      <Navbar />
      <Hero />

      {loading && (
        <p className="py-16 text-center text-gray-600">
          Loading technologies...
        </p>
      )}

      {error && (
        <p className="py-16 text-center text-red-500">
          {error}
        </p>
      )}

      {!loading && !error && (
        <Technologies
          technologies={technologies}
          selectedTechnologies={selectedTechnologies}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      )}
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;