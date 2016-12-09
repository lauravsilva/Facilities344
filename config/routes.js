/**
 * Route Mappings
 * (sails.config.routes)
 */
module.exports.routes = {
    '/': {
        view: 'index'
    }
    , 'get /reservations': {
        view: 'reservations'
        , locals: {
          userObjects: ''
        }
    }
    , '/account': 'RouteController.account'
    , '/dashboard': 'RouteController.dashboard'
    , '/email': 'HookController.get_user_by_email'
    , '/userid': 'HookController.get_user_by_id'
    , '/instructorclassid': 'HookController.get_instructor_by_classid'
    , '/getallstudents': 'HookController.get_all_students'
    , '/getallinstructors': 'HookController.get_all_instructors'
    , '/logout': 'UserController.logout'

    //Device calls
    , '/getalldevices': 'HookController.get_all_devices'

    //Classroom calls
    , '/getallclassrooms': 'HookController.get_all_classrooms'

    /* Admin routes ----------------------------------------------------
    , 'get /classrooms-admin': {
        view: 'classrooms-admin'
    }
    , 'get /account-admin': {
        view: 'account-admin'
    }
    , 'get /devices-admin': {
        view: 'devices-admin'
    }
    , 'get /reservations-admin': {
        view: 'reservations-admin'
    }
    , 'get /admin': {
        view: 'admin'
    }
    */
};
