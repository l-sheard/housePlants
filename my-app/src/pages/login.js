import React from 'react';
import { Navbar } from '../components/nav';
import { LoginForm } from '../components/login';

export function LoginPage() {

    return (
        <div>
            <Navbar />
            <header className="App-header">
                <LoginForm />
            </header>
        </div>
    );
}