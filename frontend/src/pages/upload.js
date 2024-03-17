import React, { useCallback } from "react";
import { Navbar } from "../components/nav";
import { useState } from "react";
import {
  classifyImage,
  humanClassificationResult,
} from "../data/classification";

export function UploadPage() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const [classificationResult, setClassificationResult] = useState(null);

  const onUploadClick = useCallback(async () => {
    const result = await classifyImage(image);
    setClassificationResult(result);
  }, [image]);

  return (
    <div className="App bg-cream">
      <Navbar />
      <header className="App-header">
        <h1 className="text-brown font-bold m-4 text-2xl text-center">
          Upload an Image
        </h1>
        {classificationResult !== null && (
          <p>omg it is a {humanClassificationResult(classificationResult)}!!</p>
        )}

        <div className="flex flex-col items-center h-screen">
          <label className="bg-darkGreen hover:bg-lightGreen text-white font-bold py-2 px-2 rounded-lg cursor-pointer">
            Browse
            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {image && (
            <div className="mt-4 flex flex-col items-center">
              <h2 className="text-brown text-center font-bold pb-2">
                Preview:
              </h2>
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                style={{ maxWidth: "400px", height: "auto" }}
                accept="image/*;capture=camera"
              />

              <button
                onClick={onUploadClick}
                className="bg-darkGreen hover:bg-lightGreen text-white font-bold py-2 px-2 rounded-lg cursor-pointer mt-4"
              >
                Upload!
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
