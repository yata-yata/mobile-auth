// Load modules
var Controllers = require('./controllers');


// Declare internals

var internals = {};

exports.register = function(plugin, options, next){

    plugin.route([
        { method: 'POST', path: '/auth/google/token', config: Controllers.Google.token },
    ]);

    next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};
