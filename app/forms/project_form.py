from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length

class ProjectForm(FlaskForm):
    title = StringField("Project", validators=[
        DataRequired(message="Project name is required."), 
        Length(min=1, max=50, message="Title must be between 1-50 characters.")])
    user_id = IntegerField("user_id")
