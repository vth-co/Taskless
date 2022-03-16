from flask import Blueprint, json, jsonify, redirect, request
from flask_login import login_required
from app.models import db, Project
from app.forms import ProjectForm


project_routes = Blueprint('projects', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field.capitalize()} : {error}')
    return errorMessages

@project_routes.route('/')
def get_projects():
    projects = Project.query.all()
    return jsonify(
        [project.to_dict() for project in projects]
    )

@project_routes.route('/', methods=['POST'])
@login_required
def post_projects():
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_project = Project()

        form.populate_obj(new_project)

        db.session.add(new_project)
        db.session.commit()

        return new_project.to_dict()
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 400
    
@project_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_project(id):
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_project = Project.query.get(id)

        form.populate_obj(edit_project)
        db.session.commit()

        return edit_project.to_dict()
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_project(id):
    delete_project = Project.query.get(id)
    db.session.delete(delete_project)
    db.session.commit()
    return { 'message': "Success" }
