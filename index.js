"use strict";

module.exports = function() {
	if (!(typeof worldHasEnded === "undefined")) {
		return "YUP.";
	} else {
		return "NOPE.";
	}
};
