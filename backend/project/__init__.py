from flask import Flask

from config import config

def create_app(config_env):
	# Create the Flask application
	app = Flask(
		__name__,	
	)

	# Configure the Flask application
	app.config.from_object(config[config_env])

	initialize_extensions(app)
	register_blueprints(app)

	return app

# ----------------
# Helper Functions
# ----------------
def initialize_extensions(app):
  return

def register_blueprints(app):
  from .routes import blueprint as routes_blueprint
  from .api import blueprint as api_blueprint

  app.register_blueprint(routes_blueprint)
  app.register_blueprint(api_blueprint)