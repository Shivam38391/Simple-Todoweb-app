## Todo Application
This is a simple todo application that allows users to perform CRUD (create, read, update, delete) operations on their todo items.

## Features
Create a new todo item with a title and description
View a list of all todo items
Update a todo item's title
Delete a todo item

## Technologies Used
django, python, DRF, JAVAscript, postrasesql, bootstrap


## Installation
Clone the repository
# run following commands in terminal in (backend)


``` bash
## create virtual environment
python -m venv env
env\scripts\activate

# run following commands in terminal in (backend)
pip install -r requirements.txt
```

### If you dont want to use the sqlite3 database , please add your postgrasesqual configration in .env-sample , otherwise you can go for sqlite3 database
``` bash
python manage.py migrate
python manage.py makemigrations
```

``` bash
# if below command ran without any errors, 
# it means you have installed this project successfully.
python manage.py runserver
```

challenge I face Making this project is JavaScript , honestly I've a very less experienced with JavaScript and to overcome this problem, i took the help of google, youtube and chatgpt