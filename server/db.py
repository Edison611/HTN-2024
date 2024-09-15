from pymongo import MongoClient
from dotenv import load_dotenv
import os
load_dotenv()

def get_database():
    password = os.getenv("DB_PASSWORD")
    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = f"mongodb+srv://edisony611:12345@cluster0.gi71ria.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    
    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    client = MongoClient(CONNECTION_STRING)
    # for db in client.list_databases():
    #     print(db)
    
    # Create the database for our exam  ple (we will use the same database throughout the tutorial
    return client['htn2024']

