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

@app.route('/topFoods', methods=['GET'])
def get_top_foods():
    result = list(top_food_collection.find({}, {"_id": 0})) 
    return jsonify(result)

@app.route('/allFoods', methods=['GET'])
def get_all_foods():
    page = request.args.get('page', default=0, type=int)
    size = request.args.get('size', default=10, type=int)
    foods = list(all_food_collection.find().skip(page * size).limit(size))
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

@app.route('/foodsCount', methods=['GET'])
def get_foods_count():
    count = all_food_collection.estimated_document_count()
    return jsonify({"count": count})

@app.route('/', methods=['GET'])
def home():
    return "Server running"

if __name__ == '__main__':
    app.run(debug=True, port=int(os.getenv('PORT', 5000)))
