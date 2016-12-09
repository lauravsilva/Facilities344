function route(res, pageview) {
    return res.view(pageview);
}

module.exports = {
    account: function (req, res) {
        // Check if the user has any devices that are past their due date
        var http = require('http');
        var hostname = 'vm344c.se.rit.edu';
        var path = '/api/DeviceReservation.php?action=get_all_device_reservations';
        var options = {hostname: hostname, port: 80, path: path, method: 'GET'};
        http.request(options, function (response) {
            var responseData = '';
            response.setEncoding('utf8');
            response.on('data', function (chunk) {
                responseData += chunk;
            });
            response.once('error', function (err) {res.serverError(err);});
            response.on('end', function () {
                try {
                    var data = JSON.parse(responseData);

                    // Loop through each device and check their due date to the current time
                    data.forEach(function(deviceReservation) {
                        console.log(deviceReservation);
                        // Get the due date for the device reservation
                        var dueDateMonth = deviceReservation.EndDate.split("/")[0];
                        var dueDateDay = deviceReservation.EndDate.split("/")[1];
                        var dueDateYear = deviceReservation.EndDate.split("/")[2];
                        var dueDate = new Date('20' + dueDateYear, dueDateMonth, dueDateDay);
                        var currentDate = new Date();
                        if (dueDate < currentDate) {
                            alert("DEVICE IS LATE!");
                        }
                    });
                }
                catch (e) {
                    sails.log.warn('Could not parse response from options.hostname: ' + e);
                }
                return res.view('account');
            });
        }).end();
    },

    dashboard: function (req, res) {
        route(res, 'home');
    }
}
