import os
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))

class Config:
	APP_NAME='ML'
	BASE_DIR = os.path.abspath(os.curdir)
	JSONIFY_PRETTYPRINT_REGULAR = True # Format JSON output for the api

class Development_Config(Config):
	SECRET_KEY="notasecretkey"

class Testing_Config(Config):
  SECRET_KEY="notasecretkey"

class Production_Config(Config):
  SECRET_KEY="notasecretkey"

config={
	'development': Development_Config,
	'testing': Testing_Config,
	'production': Production_Config,
}