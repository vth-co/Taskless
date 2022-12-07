from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length

class ProjectForm(FlaskForm):
    title = StringField("Project", validators=[
        DataRequired(message="Please input a name of 1 or more characters."), 
        Length(min=1, max=50, message="Name must be between 1-50 characters.")])
    user_id = IntegerField("user_id")
