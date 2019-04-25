import os
import json
from flask import Flask, request, Response, jsonify, render_template    
from flask_pymongo import PyMongo
from PIL import Image

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'myDatabase'
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)

# @app.route("/", methods=['post', 'get'])
# def hello():
#     return 'nice'

store = {}
@app.route("/register", methods=['POST'])
def register():
	temp = {}
	if request.method == 'POST':
		print(11, request.form)
		print(12, request.files)
		users = mongo.db.users
		s = users.find_one({'email': request.form['email']})
		if s:
			print(s)
			temp = {"status" : True, "user" : s['email']}
		else:
			temp = {"status" : False }
			paths = os.path.dirname(os.path.abspath(__file__))
			t = Image.open(request.files['photo'])
			fig = dict(request.form)
			email = str(fig['email'][0])
			name = str(fig['name'][0])
			t.save('pics/'+email+'.jpg', 'JPEG')
			data = {
			"email" : email,
			"name" : name,
			}
			print("\n\n\n", data)
			mongo.db.users.insert_one(data)
		# temp = temp = {"status" : True}
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

@app.route("/check", methods=['POST'])
def check():
	temp = {}
	if request.method == 'POST':
		#print(request.form)
		logs = mongo.db.logs
		s = logs.find_one({'email': request.json['email']})
		if s:
			print(s)
			temp = {"status": 200}
		else:
			temp = {"status": 400}
			data = {"email" : request.form.email, "filename" : request.form.image}
			mongo.db.logs.insert_one(data)
	#temp = {"msg" : "Got it"}				
	res = Response(json.dumps(data), status=200, mimetype="text/plain")
	return res

@app.route("/testing", methods=['get'])
def testing():
	# store = request.
	# print(store)
	# print(type(store))
	checker = mongo.db.checker
	if checker:
		data = request.args['name']
		temp = {"name": str(data)}
		#print(100, temp)
		mongo.db.checker.insert_one(temp)
		#print(200, temp)
		print(222, checker.find_one())
		temp1 = {"name": str(data)}
		print(100, temp1)
	res = Response(json.dumps(temp1), status=200, mimetype="text/plain")
	return res


@app.route("/sendImage", methods=['post'])
def sendImage():
	temp = {}
	if request.method == 'POST':
		print(11, request.form)
		print(12, request.files)
		notify = mongo.db.notify
		v = Image.open(request.files['pic'])
		fig = dict(request.form)
		email = str(fig['email'][0])
		v.save('sample/'+email+'.jpg', 'JPEG')
		data = {
			"email" : email,
			"result" : email
		}
		mongo.db.notify.insert_one(data)	

	temp = {"msg": "GET IT"}
	res = Response(json.dumps(temp), status=200, mimetype="text/plain")
	return res

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=3134)


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