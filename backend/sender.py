import requests
import json
#f = open('img1.jpg', 'rb')
#files = {'file' : f}'''files=files, '''

#register
# payload = {'id': 1 ,'name':'nik', 'email' : 'mate@gmail.com', 'phone' : '323424242', 'reg_id': 'wefes3242mgrgjsn'}
# url = 'http://127.0.0.1:5555/register'
# header = {'Content-type': 'application/json', 'accept': 'text/plain'}
# r = requests.post(url, data=json.dumps(payload), headers=header) #data=payload) 
# if r:
#     print(r.text)

#login
payload = {'email' : 'mate@gmail.com'}
url = 'http://127.0.0.1:5555/login'
header = {'Content-type': 'application/json', 'accept': 'text/plain'}
r = requests.get(url, data=json.dumps(payload), headers=header) #data=payload) 
if r:
    print(r.text)
