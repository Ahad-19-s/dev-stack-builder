import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import type { Technology } from "./Types/technology";

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
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);
  };

  // Remove technology
  const handleRemove = (id: string) => {
    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    );
  };

  // Remove all
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
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
    </>
  );
}

export default App;