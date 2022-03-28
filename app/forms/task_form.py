from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length

class TaskForm(FlaskForm):
    title = StringField("Task", validators=[
        DataRequired(message="Title is required."), 
        Length(min=3, max=50, message="Title must be between 3-50 characters.")])
    content = StringField("Description", validators=[
        DataRequired(message="Content is required."), 
        Length(min=3, max=255, message="Content must be between 3-255 characters.")])
    project_id = IntegerField("project_id", validators=[DataRequired()])
