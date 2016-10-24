/**
 * HookController
 *
 * @description :: Server-side logic for managing Hooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function hook(res, pageview, path) {
    var http = require('http');
    var options = {
        hostname: 'vm344e.se.rit.edu'
        , port: 80
        , path: path
        , method: 'GET'
    };
    http.request(options, function (response) {
        var responseData = '';
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            responseData += chunk;
        });
        response.once('error', function (err) {
            // Some error handling here, e.g.:
            res.serverError(err);
        });
        response.on('end', function () {
            try {
                // response available as `responseData` in `yourview`
                var data = JSON.parse(responseData);
                console.log(data); // TODO: Remove this eventually
                console.log(pageview);
                res.locals.requestData = data;
            }
            catch (e) {
                sails.log.warn('Could not parse response from options.hostname: ' + e);
            }
            return res.view(pageview, {
                userObjects: data
            });
        });
    }).end();
};
module.exports = {
    get_user_by_email: function (req, res) {
        hook(res, 'email', '/api/User.php?action=get_user_by_email&email=' + req.param('email'));
    }
    , get_user_by_id: function (req, res) {
        hook(res, 'userid', '/api/User.php?action=get_user_by_id&id=' + req.param('id'))
    }
    , get_instructor_by_classid: function (req, res) {
        hook(res, 'instructorclassid', '/api/Instructor.php?action=get_instructor_by_classid&id=' + req.param('id'))
    }
};