from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

class ProjectForm(FlaskForm):
    title = StringField("Project", validators=[DataRequired()])
