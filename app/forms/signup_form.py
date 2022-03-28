from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[
        DataRequired("Username is required."), 
        Length(min=3, max=40, message="Username must be between 3-40 characters."),
        username_exists])
    email = StringField('email', validators=[
        DataRequired("Email is required."), 
        Email("Email must be a valid email"), 
        Length(min=3, max=50, message="Email must be between 3-50 characters."),
        user_exists])
    password = StringField('password', validators=[
        DataRequired("Password is required."),
        Length(min=3, max=50, message="Password must be between 3-50 characters."),
        EqualTo('confirm_password',message ="Passwords must match")])
    confirm_password = StringField('password',validators=[DataRequired("Confirm Password is required.")])
