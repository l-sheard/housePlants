import React from 'react';
import { BasicNavbar } from '../components/basicNav';
import { LoginForm } from '../components/login';
import BBtitle from "../images/BBtitle.png";


export function LoginPage() {

    return (
        <div className="App bg-darkGreen">
            <BasicNavbar />
            <header className="App-header">
            <img alt="Botanic Being" src={BBtitle} className='w-80'></img>
                <LoginForm />
            </header>
        </div>
    );
}