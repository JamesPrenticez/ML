from . import blueprint
from flask import render_template

@blueprint.route('/', methods=['GET'])
def home():
	return render_template('index.html')