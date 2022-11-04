from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length

class TaskForm(FlaskForm):
    title = StringField("Task", validators=[
        DataRequired(message="Title is required."), 
        Length(min=1, max=255, message="Title must be between 1-255 characters.")])
    content = StringField("Description", validators=[
        # DataRequired(message="Content is required."), 
        Length(max=255, message="Content must be between 3-255 characters.")])
    project_id = IntegerField("project_id")
    user_id = IntegerField("user_id")
