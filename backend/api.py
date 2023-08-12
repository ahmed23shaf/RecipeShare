from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


with open('../data/recipes.json') as f:
    recipes = json.load(f)


@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    return jsonify(recipes)


@app.route('/api/recipes', methods=['POST'])
def add_recipe():
    new_recipe = request.json
    new_recipe['id'] = len(recipes) + 1
    recipes.append(new_recipe)

    with open('../data/recipes.json', 'w') as f:
        json.dump(recipes, f, indent=4)

    return jsonify(new_recipe), 201

if __name__ == '__main__':
    app.run(debug=True)
