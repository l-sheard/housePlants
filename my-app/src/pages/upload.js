import React from 'react';
import { Navbar } from '../components/nav';
import { useState } from 'react';

export function UploadPage() {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
    };

    return (
        <div className="App bg-darkGreen">
            <Navbar />
            <header className="App-header">
            <h1 className='text-brown font-bold p-3'>Upload an Image:</h1>
            <div className='flex justify-center h-screen'>
                <div className=''>
                    <label className="bg-darkGreen hover:bg-lightGreen text-white font-bold py-2 px-2 rounded-lg cursor-pointer">
                        Browse
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                    {image && (
                        <div>
                            <h2 className='text-brown'>Preview:</h2>
                            <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ maxWidth: '400px', height: 'auto' }} />
                        </div>
                    )}
                </div>
            </div>
            </header>
        </div>
    );
}