import React from "react";
import { Navbar } from "../components/nav";
import { PlantCard } from "../components/plantCard";
import image from "../images/plant_sample.jpg";

export function Homepage() {
  return (
    <div className="App bg-cream">
      <Navbar />
      <header className="App-header flex flex-col items-center pt-8">
        <h1 className="text-black/70 text-3xl font-winkle">Aloe Mate</h1>
        </header>


        <h1 className="text-brown font-bold m-4 text-3xl">Your collection</h1>
        <div class="grid grid-cols-3 gap-6 px-4">
          <PlantCard name="AloeMate" image={image} />
          <PlantCard
            name="Jimmy"
            image="https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4="
          />
          <PlantCard
            name="Jimmy"
            image="https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4="
          />
          <PlantCard
            name="Jimmy"
            image="https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4="
          />
          <PlantCard
            name="Jimmy"
            image="https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4="
          />
          <PlantCard
            name="Jimmy"
            image="https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4="
          />
        </div>
    </div>
  );
}
