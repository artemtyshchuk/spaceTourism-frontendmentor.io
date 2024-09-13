import { useEffect, useState } from "react";
import { CrewTypes, DataTypes, DestinationTypes, TechnologyTypes } from "types";

export const useDataFetch = () => {
  const [destination, setDestination] = useState<DestinationTypes[]>([]);
  const [crew, setCrew] = useState<CrewTypes[]>([]);
  const [technology, setTechnology] = useState<TechnologyTypes[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("data.json");
      const data = (await response.json()) as DataTypes;
      if (!data) {
        throw new Error("Failed to fetch data");
      } else {
        setDestination(data.destinations);
        setCrew(data.crew);
        setTechnology(data.technology);
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { destination, crew, technology };
};
