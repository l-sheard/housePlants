from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'})

    image_file = request.files['image']

    # Save the uploaded image to a desired location
    image_file.save('./image/uploadedImage.jpg')

    return jsonify({'message': 'Image uploaded successfully'})

if __name__ == '__main__':
    app.run(debug=True)