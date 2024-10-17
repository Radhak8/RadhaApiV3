
# MongoDB Database Setup Instructions

To manage API keys, you can use a MongoDB database to store and validate API keys for your users. Whenever a request is made, the API checks the validity of the key from the database before processing the request.

## Example Key Storage Setup

1. **Install pymongo:**
   ```
   pip install pymongo
   ```

2. **Connect to MongoDB:**
   ```python
   import pymongo

   # Replace <username>, <password>, and <dbname> with your MongoDB credentials and database name
   client = pymongo.MongoClient("mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>")
   db = client['media_downloader']
   keys_collection = db['api_keys']
   ```

3. **Store a New Key:**
   ```python
   # Store a new key
   keys_collection.insert_one({"user": "exampleUser", "api_key": "your_generated_key"})
   ```

4. **Validate API Key:**
   ```python
   # Validate API key
   def validate_api_key(api_key):
       key = keys_collection.find_one({"api_key": api_key})
       return key is not None
   ```

5. **Example Usage:**
   ```python
   if validate_api_key("your_generated_key"):
       print("API key is valid.")
   else:
       print("Invalid API key.")
   ```

By following these steps, you can securely store and validate API keys for your Media Downloader API service.
