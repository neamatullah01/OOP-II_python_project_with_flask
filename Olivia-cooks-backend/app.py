from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

MONGO_URI = f"mongodb+srv://{os.getenv('DB_USER')}:{os.getenv('DB_PASS')}@cluster0.rchgrre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(MONGO_URI)
db = client["restaurantDB"]
top_food_collection = db["topFood"]
all_food_collection = db["allFood"]
all_cart_collection = db["cartFood"]

@app.route('/topFoods', methods=['GET'])
def get_top_foods():
    foods = list(top_food_collection.find())
    for food in foods:
        food["_id"] = str(food["_id"])
    return jsonify(foods)

@app.route('/allFoods', methods=['GET'])
def get_all_foods():
    foods = list(all_food_collection.find())
    for food in foods:
        food["_id"] = str(food["_id"])
    return jsonify(foods)


@app.route('/food', methods=['GET'])
def get_food_by_name():
    name = request.args.get('name')
    query = {"food_name": name}
    result = all_food_collection.find_one(query)
    if result:
        result["_id"] = str(result["_id"])
    return jsonify(result)

@app.route('/singleFood/<id>', methods=['GET'])
def get_single_food(id):
    query = {"_id": ObjectId(id)}
    result = all_food_collection.find_one(query)
    if result:
        result["_id"] = str(result["_id"])
    return jsonify(result)

@app.route('/singleTopFood/<id>', methods=['GET'])
def get_single_top_food(id):
    query = {"_id": ObjectId(id)}
    result = top_food_collection.find_one(query)
    if result:
        result["_id"] = str(result["_id"])
    return jsonify(result)

@app.route('/carts', methods=['POST'])
def add_to_cart():
    new_product = request.json
    new_product.pop('_id', None)
    result = all_cart_collection.insert_one(new_product)
    return jsonify({'acknowledged': result.acknowledged, 'inserted_id': str(result.inserted_id)})

@app.route('/carts', methods=['GET'])
def get_carts():
    carts = list(all_cart_collection.find())
    for cart in carts:
        cart["_id"] = str(cart["_id"])
    return jsonify(carts)

@app.route('/carts/<id>', methods=['DELETE'])
def delete_cart(id):
    try:
        query = {'_id': ObjectId(id)}
        result = all_cart_collection.delete_one(query)
        if result.deleted_count > 0:
            return jsonify({'message': 'Cart item deleted successfully'}), 200
        else:
            return jsonify({'message': 'No cart item found with this ID'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/', methods=['GET'])
def home():
    return "Server running"

if __name__ == '__main__':
    app.run(debug=True, port=int(os.getenv('PORT', 5000)))
