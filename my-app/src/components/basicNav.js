import React from 'react';
import { Link } from 'react-router-dom';

export function BasicNavbar() {
  return (
    <nav className="bg-darkGreen shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-darkGreen">
            <span className="font-semibold text-xl tracking-tight text-cream">Botanic Being</span>
          </div>
        </div>
      </div>
    </nav>
  );
}