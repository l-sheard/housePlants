import React from "react";
import { Link } from "react-router-dom";

export function PlantCard({
  name,
  image,
  
}) {
  return (
    <Link
      to={`/care/${name}`}
      className="active:scale-100 hover:scale-105 transition-transform bg-lightGreen rounded-lg flex shadow-xl border-2 border-darkGreen overflow-hidden"
    >
      <div className="w-[40%] h-44 mr-4">
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="w-full h-full bg-center bg-cover bg-white rounded-r-lg"
        />
      </div>
      <div className="pt-4">
        <h1 className="text-black/70 text-3xl font-winkle">{name}</h1>
      </div>
    </Link>
  );
}
