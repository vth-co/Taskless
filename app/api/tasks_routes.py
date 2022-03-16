from flask import Blueprint, json, jsonify, redirect, request
from flask_login import login_required
from app.models import db, Task
from app.forms import TaskForm


task_routes = Blueprint('tasks', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field.capitalize()} : {error}')
    return errorMessages

@task_routes.route('/')
def get_tasks():
    tasks = Task.query.all()
    return jsonify(
        [task.to_dict() for task in tasks]
    )

@task_routes.route('/', methods=['POST'])
@login_required
def post_tasks():
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_task = Task()

        form.populate_obj(new_task)

        db.session.add(new_task)
        db.session.commit()

        return new_task.to_dict()
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 400
    
@task_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_task(id):
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_task = Task.query.get(id)

        form.populate_obj(edit_task)
        db.session.commit()

        return edit_task.to_dict()
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 400

@task_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_task(id):
    delete_task = Task.query.get(id)
    db.session.delete(delete_task)
    db.session.commit()
    return { 'message': "Success" }
