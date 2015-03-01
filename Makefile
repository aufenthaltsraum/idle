TARGET = idle.min

all: setup

setup:
	mkdir -p lib
	cd lib && \
	wget -c https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js && \
	wget -c https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js && \
	wget -c https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js && \
	wget -c https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css

clean:
	rm -rf lib

.PHONY: clean setup
