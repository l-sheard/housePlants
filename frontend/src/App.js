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
            setResponseMessage(mapResponseToMessage(parseInt(responseData.prediction)));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Function to map response number to message
    const mapResponseToMessage = (responseNumber) => {
        switch(responseNumber) {
            case 0:
                return 'Message for response 0';
            case 1:
                return 'Message for response 1';
            case 2:
                return 'Message for response 2';
            case 3:
                return 'Message for response 3';
            case 4:
                return 'Message for response 4';
            default:
                return 'Unknown response';
        }
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