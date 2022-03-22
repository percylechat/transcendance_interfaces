import json


with open('package.json') as json_data:
    d = json.load(json_data)
    d['version'] = str(d['version'])
    version = str(d['version'].split(".")[0]+"_"+''.join(d['version'].split(".")[1:]))
    version = float(version.replace("_","."))
    print("version")
    print(version)
    d['version'] = str(version+0.01)[0:4].replace(".","")
    d['version'] = '.'.join(list(d['version']))
    if len(d['version']) == 3:
        d['version'] += ".0"
    print(d['version'])

with open('package.json', 'w') as outfile:
    json.dump(d,outfile,indent=2)
