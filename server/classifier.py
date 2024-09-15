import cohere
from cohere import ClassifyExample
import os 
from dotenv import load_dotenv

load_dotenv()

co = cohere.Client(os.getenv("API_KEY"))

def classify(inputs):
    examples = [
    {"text": "Fix the production server issue immediately", "label": "Critical"},
    {"text": "Prepare the end-of-year financial report for the board meeting next week", "label": "High Priority"},
    {"text": "Review team performance for the quarterly report", "label": "Moderate"},
    {"text": "Clean up the old project files from the archive", "label": "Low Priority"},
    {"text": "Organize the office stationery cabinet", "label": "Trivial"},
    {"text": "Respond to an urgent customer complaint", "label": "Critical"},
    {"text": "Schedule a meeting with the client for project feedback", "label": "High Priority"},
    {"text": "Update the project documentation for future reference", "label": "Moderate"},
    {"text": "Check and organize the backup logs for the last month", "label": "Low Priority"},
    {"text": "Test the new feature that was added last week", "label": "Trivial"},
    {"text": "Address the security vulnerability in the system immediately", "label": "Critical"},
    {"text": "Submit the quarterly sales report by the end of this week", "label": "High Priority"},
    {"text": "Review and update employee handbooks", "label": "Moderate"},
    {"text": "Organize the team bonding event", "label": "Low Priority"},
    {"text": "Water the office plants", "label": "Trivial"},
    {"text": "Resolve the data corruption issue affecting the live environment", "label": "Critical"},
    {"text": "Draft the proposal for the new client project", "label": "High Priority"},
    {"text": "Review the latest market research for future projects", "label": "Moderate"},
    {"text": "Update the employee database with recent changes", "label": "Low Priority"},
    {"text": "Refill the coffee machine in the break room", "label": "Trivial"},
    {"text": "Investigate and resolve the network outage in the main office", "label": "Critical"},
    {"text": "Prepare the presentation for the client meeting tomorrow", "label": "High Priority"},
    {"text": "Compile the research notes for the next brainstorming session", "label": "Moderate"},
    {"text": "Check the licenses for software that are expiring soon", "label": "Low Priority"},
    {"text": "Sort and file old invoices from previous projects", "label": "Trivial"},
    {"text": "I have an important meeting in 10 minutes", "label": "Critical"},
    {"text":"Relax", "label":"Trivial"},
    {"text":"Study", "label":"Moderate"}
]

    response = co.classify(
        inputs=inputs,
        examples=examples,
    )
    return response
