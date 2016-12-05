/**
 * HookController
 *
 * @description :: Server-side logic for managing Hooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function hookGlobal(res, pageview, path) {
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
//                console.log(data); // TODO: Remove this eventually
//                console.log(pageview);
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
}

function hookLocal(res, pageview, path) {
  var http = require('http');
  var options = {
    hostname: 'vm344c.se.rit.edu'
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
//                console.log(data); // TODO: Remove this eventually
//                console.log(pageview);
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
}

module.exports = {
  //Global calls
    get_user_by_email: function (req, res) {
        hookGlobal(res, 'email', '/api/User.php?action=get_user_by_email&email=' + req.param('email'));
    }
    , get_user_by_id: function (req, res) {
        hookGlobal(res, 'userid', '/api/User.php?action=get_user_by_id&id=' + req.param('id'))
    }
    , get_instructor_by_classid: function (req, res) {
        hookGlobal(res, 'instructorclassid', '/api/Instructor.php?action=get_instructor_by_classid&id=' + req.param('id'))
    }
    , get_all_instructors: function (req, res) {
        hookGlobal(res, 'home', '/api/Instructor.php?action=get_all_instructors')
    }
    , get_all_students: function (req, res) {
        console.log(process.env);
        hookGlobal(res, 'home', '/api/Student.php?action=get_all_students')
    }

    //Local calls
    //Device calls
    , get_all_devices: function (req, res) {
        hookLocal(res, 'devices', '/api/Device.php?action=get_all_devices')
    }
    , get_device_by_id: function (req, res) {
        hookLocal(res, 'devices', '/api/Devices.php?action=get_device_by_id&deviceid=' + req.param('deviceid'))
    }
    , create_device: function (req, res) {
        hookLocal(res, 'devices', '/api/Devices.php?action=create_device&devicemodel=' + req.param('devicemodel')
          + '&devicecondition=' + req.param('devicecondition') + '&devicename=' + req.param('devicename'))
    }
    , update_device: function (req, res) {
        hookLocal(res, 'devices', '/api/Devices.php?action=create_device&deviceid='
          + req.param('deviceid') + '&devicemodel=' + req.param('devicemodel')
          + '&devicename=' + req.param('devicename') + '&devicecondition=' + req.param('devicecondition'))
    }

    //Classroom calls
    , get_all_classrooms: function (req, res) {
        hookLocal(res, 'classrooms', '/api/Classroom.php?action=get_all_classrooms')
    }
    , get_classroom_by_id: function (req, res) {
        hookLocal(res, 'classrooms', '/api/Classroom.php?action=get_classroom_by_id&classroomid=' + req.param('classroomid'))
    }
    , create_classroom: function (req, res) {
        hookLocal(res, 'classroom', '/api/Classroom.php?action=create_classroom&building=' + req.param('building') + '&roomnumber=' + req.param('roomnumber')
          + '&capacity=' + req.param('capacity'))
    }
    , update_classroom: function (req, res) {
        hookLocal(res, 'classrooms', '/api/Classroom.php?action=update_classroom&classroomid=' + req.param('classroomid')
          + '&building=' + req.param('building') + '&capacity=' + req.param('capacity')
          + '&roomnumber=' + req.param('roomnumber'))
    }

    //DeviceReservation calls
    , get_all_device_reservations: function (req, res) {
        hookLocal(res, 'reservations', '/api/DeviceReservation.php?action=get_all_device_reservations')
    }
    , get_device_reservation_by_id: function (req, res) {
        hookLocal(res, 'reservations', '/api/DeviceReservation.php?action=get_device_reservation_by_id&devicereservationid=' + req.param('devicereservationid'))
    }
    , create_device_reservation: function (req, res) {
        hookLocal(res, 'reservations', '/api/DeviceReservation.php?action=create_device_reservation&userid=' + req.param('userid') + '&startdate' + req.param('startdate') + '&enddate=' + req.param('enddate'))
    }
    , update_device_reservation: function (req, res) {
        hookLocal(res, 'reservations', '/api/DeviceReservation.php?action=update_device_reservation&devicereservationid=' + req.param('devicereservationid')
          + '&userid=' + req.param('userid') + '&startdate' + req.param('startdate') + '&enddate=' + req.param('enddate'))
    }

    //ClassReservation calls
    , get_all_class_reservations: function (req, res) {
        hookLocal(res, 'reservations', '/api/ClassReservation.php?action=get_all_class_reservations')
    }
    , get_class_reservation_by_id: function (req, res) {
        hookLocal(res, 'reservations', '/api/ClassReservation.php?action=get_class_reservation_by_id&classreservationid=' + req.param('classreservationid'))
    }
    , create_class_reservation: function (req, res) {
        hookLocal(res, 'reservations', '/api/ClassReservation.php?action=create_class_reservation&instructorid=' + req.param('instructorid') + '&classid=' + req.param('classid') + '&startdate=' + req.param('startdate')
          + '&enddate=' + req.param('enddate') + '&classroomid=' + req.param('classroomid'))
    }
    , update_class_reservation: function (req, res) {
        hookLocal(res, 'reservations', '/api/ClassReservation.php?action=update_class_reservation&classreservationid=' + req.param('classreservationid')
          + '&instructorid=' + req.param('instructorid') + '&classid=' + req.param('classid') + '&startdate=' + req.param('startdate')
        + '&enddate=' + req.param('enddate') + '&classroomid=' + req.param('classroomid'))
  }




};
