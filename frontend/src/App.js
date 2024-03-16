import React, { useState } from 'react';

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', selectedFile);

            const response = await fetch('http://localhost:5000/api/upload-image', {
                method: 'POST',
                body: formData
            });
            const responseData = await response.json();
            setResponseMessage(responseData.message);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {responseMessage && <p>Response from backend: {responseMessage}</p>}
        </div>
    );
}

export default App;