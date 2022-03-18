from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

class ProjectForm(FlaskForm):
    title = StringField("Project", validators=[DataRequired()])
    user_id = IntegerField("user_id")


