#!/usr/bin/env node
"use strict";

var htlhcdtwy = require("./");
var pkg = require('./package.json');
var argv = process.argv.slice(2);
var input = argv[0];

if (argv.indexOf('--help') !== -1) {
	console.log("It's a satire. Check out http://hasthelargehadroncolliderdestroyedtheworldyet.com/ for inspiration.");
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

console.log(htlhcdtwy());
