// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
	// in production - return the set of prod keys
	module.exports = require('./prod');
} else {
	// in development - return the set of dev keys
	module.exports = require('./dev');
}
