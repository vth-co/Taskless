from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length

class ProjectForm(FlaskForm):
    title = StringField("Project", validators=[DataRequired(), Length(min=3, max=255, message="Title must be between 3-255 characters.")])
    user_id = IntegerField("user_id")
