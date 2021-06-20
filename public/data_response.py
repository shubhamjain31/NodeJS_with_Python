import requests
import json
import sys

url = "https://opensourcepyapi.herokuapp.com:443/weather/06604"

req = requests.get(url)
data = req.json()

resp = {
	"Response": 200,
	"Message" : "Hello From Python Files",
	"Data"    : data
}

print(json.dumps(resp))

sys.stdout.flush()