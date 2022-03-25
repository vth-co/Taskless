from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Credentials are incorrect.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[
                        DataRequired("Email is required."), 
                        Email("Email must be a valid email"), 
                        Length(min=3, max=50, message="Email must be between 3-50 characters."), 
                        user_exists])
    password = StringField('password', validators=[
                           DataRequired("Pasword is required."), 
                           Length(min=3, max=50, message="Password must be between 3-50 characters."),
                           password_matches])
