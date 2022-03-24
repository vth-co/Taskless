from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, ValidationError, Length

class TaskForm(FlaskForm):
    title = StringField("Task", validators=[DataRequired(), Length(min=3, max=255, message="Title must be between 3-255 characters.")])
    content = StringField("Description", validators=[DataRequired(), Length(min=3, max=255, message="Content must be between 3-255 characters.")])
    project_id = IntegerField("project_id", validators=[DataRequired()])
