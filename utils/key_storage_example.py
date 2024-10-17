
import pymongo

# Replace <username>, <password>, and <dbname> with your MongoDB credentials and database name
client = pymongo.MongoClient("mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>")
db = client['media_downloader']
keys_collection = db['api_keys']

# Store a new key
keys_collection.insert_one({"user": "exampleUser", "api_key": "your_generated_key"})

print("API key stored successfully.")
