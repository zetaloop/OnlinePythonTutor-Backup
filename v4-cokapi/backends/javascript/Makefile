# Docker-specific targets

# build a docker container
all:
	docker build -t="pgbovine/cokapi-js:v1" .

test:
	docker run -m 512M -t -i --rm --user=netuser --net=none --cap-drop all pgbovine/cokapi-js:v1 /tmp/javascript/node-v6.0.0-linux-x64/bin/node --expose-debug-as=Debug /tmp/javascript/jslogger.js --jsondump=true --code="var x=1; var y=2; var z=3;"

regtest:
	# run regression test suite as root
	docker run -m 512M -t -i --rm --net=none --cap-drop all -w /tmp/javascript pgbovine/cokapi-js:v1 python golden_test.py --all

bash:
	docker run -m 512M -t -i --rm --user=netuser --net=none --cap-drop all pgbovine/cokapi-js:v1 bash


# to run natively on Linux or macOS

# for building on native linux
depsLinux:
	tar -xvf node-v6.0.0-linux-x64.tar.xz
	ln -s node-v6.0.0-linux-x64 node-v6.0.0
	npm install # rely on package.json
	npm install -g jshint # might need sudo

# for building natively on macOS
depsMac:
	tar -xvf node-v6.0.0-darwin-x64.tar.gz
	ln -s node-v6.0.0-darwin-x64 node-v6.0.0
	npm install # rely on package.json
	npm install -g jshint # might need sudo

# to run on a specific input file: make infile=tests/fact.js
# use '@' to NOT print out the command
run:
	@jshint jslogger.js && node-v6.0.0/bin/node --expose-debug-as=Debug jslogger.js $(infile)

# output a JSON trace that's compatible with Python Tutor's frontend
# use '@' to NOT print out the command
json:
	@jshint jslogger.js && node-v6.0.0/bin/node --expose-debug-as=Debug jslogger.js --jsondump=true $(infile)

# redirect json output to a file that you can import from something like
# ../../../v5-unity/pytutor-embed-demo.html
embed:
	@make json infile=$(infile) > ../../../v5-unity/pytutor-embed-demo/js-test.json


# to run on a specific input file: make pretty infile=tests/fact.js
# use '@' to NOT print out the command
pretty:
	@jshint jslogger.js && node-v6.0.0/bin/node --expose-debug-as=Debug jslogger.js --prettydump=true $(infile)
tspretty:
	@jshint jslogger.js && node-v6.0.0/bin/node --expose-debug-as=Debug jslogger.js --prettydump=true --typescript=true $(infile)

golden:
	jshint jslogger.js && python golden_test.py --all

diffall:
	jshint jslogger.js && python golden_test.py --diffall
