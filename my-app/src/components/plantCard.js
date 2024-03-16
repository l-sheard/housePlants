import React from 'react';

export function PlantCard(props) {
  return (
    <div className="bg-brown rounded-md text-brown p-2">
        <img className="bg-solid w-64 h-64" src={props.image} alt="Italian Trulli"></img>
        <h1 className="text-cream">{props.name}</h1>
    </div>
  );
}