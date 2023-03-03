from . import blueprint
from flask import jsonify

# Billing Linkys 
@blueprint.route('/api/test', methods=['GET']) 
def test():
  thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
  }
  return jsonify(thisdict)