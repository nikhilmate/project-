import os
import json
from flask import Flask, request, Response, jsonify, render_template    
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'myDatabase'
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)

# @app.route("/", methods=['post', 'get'])
# def hello():
#     return 'nice'

store = {}
@app.route("/register", methods=['POST', 'GET'])
def register():
	temp = {}
	if request.method == 'POST':
		#print(request.json)
		users = mongo.db.users
		s = users.find_one({'email': request.json['email']})
		if s:
			print(s)
			temp = {"msg" : "Got it","user" : s['email']}
		else:
			temp = {"msg" : "Nothing"}
			mongo.db.users.insert_one(request.json)
	#temp = {"msg" : "Got it"}				
	res = Response(json.dumps(temp), status=200, mimetype="text/plain")
	return res

@app.route("/login", methods=['get'])
def login():
	print(mongo.db.users)
	if request.method == 'GET':
		users = mongo.db.users
		s = users.find_one({'email' : request.json['email']})
		if s:
			store = {"status": 200}
		else:
			store = {"status": 400}
	res = Response(json.dumps(store), status=200, mimetype="text/plain")
	return res

@app.route("/sendImage", methods=['post'])
def sendImage():
	# store = request.json
	# print(store)
	# print(type(store))
	temp = {"msg": "GET IT"}
	res = Response(json.dumps(temp), status=200, mimetype="text/plain")
	return res


if __name__ == '__main__':
    app.run(host="127.0.0.1", port="5555", debug=True)


'''
import json
from flask import Flask, request, Response, jsonify, render_template    

app = Flask(__name__)

@app.route("/", methods=['post', 'get'])
def hello():
    return 'nice'

store = {}
@app.route("/register", methods=['post'])
def register():
	store = request.json
	print(store)
	print(type(store))
	res = Response(json.dumps(store), status=200, mimetype="text/plain")
	return res

@app.route("/sendImage", methods=['post'])
def sendImage():
	store = request.json
	print(store)
	print(type(store))
	res = Response(json.dumps(store), status=200, mimetype="text/plain")
	return res

@app.route("/login", methods=['get'])
def login():
	store = request.json
	print(store)
	print(type(store))
	res = Response(json.dumps(store), status=200, mimetype="text/plain")
	return res



@app.route("/login", methods=['get'])
def login():
	print("loggedd!!!!!!!!!!!!!")
	store = request.data or request.args
	print(11, request, store)
	# print(11, request.data)
	# print(store)
	# print(type(store))
	res = Response(store, status=200, mimetype="text/plain")
	return res


if __name__ == '__main__':
    app.run(host="127.0.0.1", port="5555", debug=True)
'''