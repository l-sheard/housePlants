import React from 'react';

export function Navbar() {
  return (
    <nav className="bg-darkGreen shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <span className="font-semibold text-xl tracking-tight text-cream">Botanic Being</span>
          </div>
          <div className="flex items-center">
            <a className="text-cream hover:text-gray-300 mx-3" href="/">Home</a>
            <a className="text-cream hover:text-gray-300 mx-3" href="/about">Upload</a>
            <a className="text-cream hover:text-gray-300 mx-3" href="/services">Signout</a>
          </div>
        </div>
      </div>
    </nav>
  );
}