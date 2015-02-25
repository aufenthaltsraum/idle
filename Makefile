TARGET = idle.min
SOURCES = object.js main.js

all: build/$(TARGET).js

build/$(TARGET).js: js/*
	mkdir -p build
	cd js && java -jar ../tools/compiler.jar $(SOURCES) > ../build/$(TARGET).js

clean:
	rm -f js/$(TARGET).js

.PHONY: clean
