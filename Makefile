TARGET = idle.min

all: setup

setup:
	mkdir -p lib
	cd lib && wget -c https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js

clean:
	rm -rf lib

.PHONY: clean
