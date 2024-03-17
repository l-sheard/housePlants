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
            <Link className="text-cream hover:text-gray-300 mx-3 font-bold" to="/">Home</Link>
            <Link className="text-cream hover:text-gray-300 mx-3 font-bold" to="/upload">Upload</Link>
            <Link className="text-cream hover:text-gray-300 mx-3 font-bold" to="/services">Signout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}