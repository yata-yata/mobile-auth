// Include modules
var FormData = require('form-data');

// Declare internals
var internals = {
    url: 'https://accounts.google.com/o/oauth2/token'
};

exports.token = {
    auth: false,
    handler: function(request, reply){
        var form = new FormData();

        // Add in mobile secret
        form.append('code', request.payload.code);
        form.append('client_id', request.payload.client_id);
        form.append('client_secret', process.env.mobileGoogleSecret);
        form.append('redirect_uri', request.payload.redirect_uri);
        form.append('grant_type', request.payload.grant_type);

        form.submit(internals.url, function(err, res) {
            reply(res);
        });
    }
};
