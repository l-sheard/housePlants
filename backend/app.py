from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import sklearn
import numpy as np
from PIL import Image

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/', methods=['GET'])
def hi():
    return "hi!"

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'})

    image_file = request.files['image']

    with open('./svm_classifier 1.pkl', 'rb') as f:
        model = pickle.load(f)

        img = Image.open(image_file.stream).resize((64,64))
        data = np.asarray(img).flatten()
        prediction = model.predict(np.array([data]))[0]
        return jsonify({'prediction': int(prediction)})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port="8080")