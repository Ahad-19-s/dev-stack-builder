import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import type { Technology } from "./Types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
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
        <Technologies technologies={technologies} />
      )}
    </>
  );
}

export default App;