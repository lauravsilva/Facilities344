/**
 * HookController
 *
 * @description :: Server-side logic for managing Hooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  test: function (req, res) {
    var http = require('http');

    var options = {
      hostname: 'vm344e.se.rit.edu',
      port: 80,
      path: '/api/Student.php?action=get_all_students',
      method: 'GET'
    };

    http.request(options, function(response) {
      var responseData = '';
      response.setEncoding('utf8');

      response.on('data', function(chunk){
        responseData += chunk;
      });

      response.once('error', function(err){
        // Some error handling here, e.g.:
        res.serverError(err);
      });

      response.on('end', function(){
        try {
          // response available as `responseData` in `yourview`
          var data = JSON.parse(responseData);
          console.log(data);
          // TODO: Figure out how to pass data to view
          res.locals.requestData = data;
        } catch (e) {
          sails.log.warn('Could not parse response from options.hostname: ' + e);
        }

        res.view('homepage', {
          userObjects: data
        });
      });
    }).end();
  }
};

