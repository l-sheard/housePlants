from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/send-string', methods=['POST'])
def receive_string():
    data = request.json  # Extract JSON data from request body
    received_string = data.get('data')  # Get the 'data' field from JSON
    # Do something with the received string
    response_message = f"Received string: {received_string}"
    return jsonify({'message': response_message})

if __name__ == '__main__':
    app.run(debug=True)