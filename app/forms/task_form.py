from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

class TaskForm(FlaskForm):
    title = StringField("Task", validators=[DataRequired()])
    content = StringField("Description", validators=[DataRequired()])
    project_id = IntegerField("project_id", validators=[DataRequired()])
