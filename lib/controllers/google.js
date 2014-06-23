// Include modules
var Nipple = require('nipple');

// Declare internals
var internals = {};

exports.token = {
    auth: false,
    handler: function(request, reply){
        var url = 'https://accounts.google.com/o/oauth2/token';

        // Add in secret
        request.payload.client_secret = process.env.mobileGoogleSecret;

        Nipple.post(url, {
            payload: JSON.stringify(request.payload)
        }, function(erro, res, payload){
            if(err){
                reply(Boom.wrap(err));
            } else {
                reply(payload).code(res.statusCode);
            }
        });
    }
};
