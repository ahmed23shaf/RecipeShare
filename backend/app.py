from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/api/recipes', methods=['POST'])
def add_recipe():
    data = request.json
    
    return jsonify({'message': 'Recipe added successfully'})

if __name__ == '__main__':
    app.run(debug=True)