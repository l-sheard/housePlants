

import React from 'react';
import { BasicNavbar } from '../components/basicNav';
import { LoginForm } from '../components/login';
import AloeMateLogo from "../images/AloeMateLogo.png";

export function LoginPage() {
    return (
        <div>
            <BasicNavbar />
        <div className="App bg-cream flex flex-col justify-center items-center h-screen">
        <header className="App-header flex flex-row justify-center items-center">
            <img alt="Aloe Mate" src={AloeMateLogo} className="w-80 mb-4 mr-4" />
            <div className="p-4">
                <LoginForm />
            </div>
        </header>
    </div>
        </div>

);
}