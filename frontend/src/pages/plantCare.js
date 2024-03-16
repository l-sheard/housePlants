import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/nav';
import { useParams } from 'react-router-dom';

export function PlantCare() {

  const {plant: plantName} = useParams();
    
    const [plantData, setPlantData] = useState(null);
    useEffect(() => {
      (async () => {
        try {
          const response = await fetch('/api/plant-care'); // Assuming backend endpoint is /api/plant-care
          const data = await response.json();
          setPlantData(data);
        } catch (error) {
          console.error('Error fetching plant data:', error);
        }
      })()
    }, []);
      
  return (
    <div className='App bg-darkGreen'>
    <Navbar />
      <header className='bg-cream p-20'>
        <h1 className='text-brown text-8xl text-left font-winkle'>
          {plantName}
        </h1>
      </header>
      <div className='text-brown font-bold text-left p-20 text-xl bg-cream'>
            <p>Plant Type:</p>
            <p>Sunlight Requirement:</p>
            <p>Watering:</p>
            <p>Indoor Spread:</p>
            <p>Indoor Height:</p>
            <p>Indoor Flowering:</p>
            <p>Bloom Period:</p>
            <p>Humidity:</p>
            <p>Air Purifying:</p>
            <p>Soil PH:</p>
            <p>Bloom Description:</p>
        </div>
    </div>
  );
}