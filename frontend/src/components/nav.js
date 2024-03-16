import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-darkGreen shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-darkGreen">
            <span className="font-semibold text-xl tracking-tight text-cream">Botanic Being</span>
          </div>
          <div className="flex items-center">
            <a className="text-cream hover:text-gray-300 mx-3 font-bold" href="/">Home</a>
            <a className="text-cream hover:text-gray-300 mx-3 font-bold" href="/about">Upload</a>
            <a className="text-cream hover:text-gray-300 mx-3 font-bold" href="/services">Signout</a>
          </div>
        </div>
      </div>
    </nav>
  );
}