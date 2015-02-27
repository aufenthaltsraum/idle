TARGET = idle.min

all: build/$(TARGET).js

build/$(TARGET).js: js/*
	echo "nothing to build for now"

clean:
	echo "nothing to clean for now"

.PHONY: clean
