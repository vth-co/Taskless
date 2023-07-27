# Taskless

Taskless is a clone of [Todoist](https://todoist.com/) allowing users to create tasklists and add tasks.

## Live Site

A live deployment of [Taskless](https://taskless.onrender.com/) is hosted on Render.

## Screenshots 

### Welcome

![](https://i.gyazo.com/57cb715b5f798273d2322284a6c41f79.jpg)

### Home

![](https://i.gyazo.com/b6ae0ebc170ad474fee23f1b8ef53786.png)

### Create Task

![](https://i.gyazo.com/206430bad8a99424e4e2c2efe8df31f4.png)

## Features

* Full CRUD Features for Tasklists
* Full CRUF Features for Tasks

### Future Features
* Users can add due dates
* Users can add tags on any tasklist or task
* Users can search for any tasklist or task either by name, description, and/or tags
* Users can set reminders on specific tasks

## Technologies Used
* React.js
* Python
* Flask
* Render
* Docker
* PostgreSQL

## Local Installation
1. Clone this repo
```
https://github.com/vth-co/Taskless.git
```
2. Install dependencies for the back end
```
pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
```
3. Install dependencies for the react front end
```
cd react-app
npm install
```
4. Create PostgreSQL user
``` 
CREATE USER taskless_user WITH CREATEDB PASSWORD 'password123'
```
5. Create PostgreSQL Database
```
CREATE DATABASE taskless_app_db WITH OWNER taskless_user
```
6. Create a .env file in the root directory with the same variables as .env.example and change the value of DATABASE_URL and SECRET_KEY
* Replace 'password' with any that you see fit
```
DATABASE_URL=postgresql://taskless_user:any_password_here@localhost/taskless_app_db
```
* Replace the value of SECRET_KEY to any secure encripted string of characters
```
SECRET_KEY=sdlfjkjlkfas;djkl;asdf;ajsdklf;jlksd;aldjkfsasdflj
```
7. Flask backend, Migrate, Upgrade, and Seed! In the root directory run
```
pipenv shell
flask db upgrade
flask seed all
```
8. Start back end server while in root directory
```
flask run
```
9. In a new terminal, enter react frontend directory and run
```
npm start
```
10. If a new browser tab does not open, navigate to localhost:3000 in your browser
11. Start using Taskless, Demo user is set up in the Login form. Please Enjoy!
