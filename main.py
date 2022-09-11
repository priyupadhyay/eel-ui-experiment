##########################
#Fetching task data

import csv
	
# field names
fields = []
rows = []
# name of csv file
filename = "list_of_tasks.csv"

with open(filename, 'r') as csvfile:
    # creating a csv writer object
    csvreader = csv.reader(csvfile)
        
    # writing the fields
    fields = next(csvreader)
    # extracting each data row one by one
    for row in csvreader:
        rows.append(row)

    print("Total no. of rows: %d"%(csvreader.line_num))

########################## 

# Creating and linking the UI

import eel
eel.init("web")

# Exposing the get_list_of_tasks function to javascript
@eel.expose	
def get_list_of_tasks():
    # TODO: Fetch data from url and coonstruct the rows list.

	return rows

# Exposing the perform_task function to javascript
@eel.expose	
def perform_task(task_name, action):
    # TODO: make appropriate method call here.
	return "Performing <b>"+ action + "</b> on "+ task_name




# Start the index.html file
eel.start("index.html", size=(600, 500), position=(300,50))
