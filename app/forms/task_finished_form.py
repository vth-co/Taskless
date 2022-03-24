from flask_wtf import FlaskForm
from wtforms import BooleanField
from wtforms.validators import DataRequired

class TaskForm(FlaskForm):
    finished = BooleanField('finished', validators=[DataRequired()])
