import json


with open('package.json') as json_data:
    d = json.load(json_data)
    d['version'] = str(d['version'])
    version = str(d['version'].split(".")[0]+"_"+''.join(d['version'].split(".")[1:]))
    version = float(version.replace("_","."))
    print("version")
    print(version)
    d['version'] = str(version+0.02)[0:4].replace(".","")
    d['version'] = '.'.join(list(d['version']))
    print(d['version'])

with open('package.json', 'w') as outfile:
    json.dump(d,outfile,indent=2)
