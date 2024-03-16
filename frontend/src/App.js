import React, { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/send-string', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: inputValue })
            });
            const responseData = await response.json();
            setResponseMessage(responseData.message);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">Send</button>
            </form>
            {responseMessage && <p>Response from backend: {responseMessage}</p>}
        </div>
    );
}

export default App;