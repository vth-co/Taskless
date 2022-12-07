from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Task, Project
from app.forms import TaskForm
from datetime import datetime


task_routes = Blueprint('tasks', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
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

@task_routes.route('/<int:id>/completed', methods=["PUT"])
@login_required
def complete_task(id):
    task = Task.query.get(id)
    if not task:
        return {"errors": ['Task does not exist']}, 400
    task.completed = not task.completed
    
    db.session.commit()

    return task.to_dict()

@task_routes.route('/completed')
def completed_task():
    tasks = Task.query.join(Project).filter(Project.user_id == current_user.id).filter(Task.completed).all()
    return {"tasks": [task.to_dict() for task in tasks]}
    

@task_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_task(id):
    delete_task = Task.query.get(id)
    db.session.delete(delete_task)
    db.session.commit()
    return { 'message': "Success" }
