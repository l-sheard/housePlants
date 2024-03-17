import React, { useEffect, useState } from "react";
import { Navbar } from "../components/nav";
import { useParams } from "react-router-dom";
import icon from "../images/plant_sample.jpg"
import PlantFactCard from "../components/plantFactCard";

export function PlantCare() {
  const { plant: plantName } = useParams();

  const [plantData, setPlantData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/plant-care"); // Assuming backend endpoint is /api/plant-care
        const data = await response.json();
        setPlantData(data);
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    })();
  }, []);

  return (
    <div className="App bg-cream">
      <Navbar />
      <header className="m-20 mb-6">
        <div className="flex items-center">
          <img src={icon} className="mr-4 h-24 w-24 overflow-hidden rounded-full shadow-lg border-2 border-brown" alt="" />
          <h1 className="text-brown text-8xl text-left font-winkle">
            {plantName}
          </h1>
        </div>
      </header>
      <div className="p-20 pt-0 flex gap-x-4">
        <div className="flex-1 space-y-4">
          <PlantFactCard property="Plant type" value="Aloe Vera" />
          <PlantFactCard property="Sunlight Requirement" value="lots" />
          <PlantFactCard property="Watering" value="Once a week" />
          <PlantFactCard property="Indoor Spread" value="yasss" />
          <PlantFactCard property="Indoor Height" value="tall innit" />
          <PlantFactCard property="Indoor Flowering" value="nein" />
        </div>
        <div className="flex-1 space-y-4">
          <PlantFactCard property="Bloom period" value="6 weeks"  />
          <PlantFactCard property="Humidity" value="Very hynid"  />
          <PlantFactCard property="Air purification" value="sooooo pure omg"  />
          <PlantFactCard property="Soil pH" value="ooo acidic ahhh"  />
          <PlantFactCard property="Bloom description" value="so pretty <3"  />
        </div>
      </div>
    </div>
  );
}
