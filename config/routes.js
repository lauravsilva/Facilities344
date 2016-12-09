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

   , 'get /account': {
       view: 'account'
       , locals: {
           userObjects: ''
       }
   }
    , 'get /devices': {
      view: 'devices'
      , locals: {
        userObjects: ''
      }
    }
   , '/account': 'RouteController.account'
   , '/dashboard': 'RouteController.dashboard'
   , '/logout': 'UserController.logout'

   //Device calls
   , '/getalldevices': 'HookController.get_all_devices'

   //Classroom calls
   , '/classrooms': 'HookController.get_all_classrooms'
    
    // Roster
   , '/class/:id': 'HookController.get_all_students_in_class'

   //Device Reservation calls
   , '/createdevicereservation': 'HookController.create_device_reservation'
   , '/removedevicereservation': 'HookController.remove_device_reservation'
   , '/getalldevicereservations': 'HookController.get_all_device_reservations'

   //Class Reservation calls
   , '/createclassreservation': 'HookController.create_class_reservation'
   , '/removeclassreservation': 'HookController.remove_class_reservation'
   , '/getallclassreservations': 'HookController.get_all_class_reservations'

   //Get all reservations
   , '/getallreservations': 'HookController.get_all_reservations'

   // Routes for testing
   , '/email': 'HookController.get_user_by_email'
   , '/userid': 'HookController.get_user_by_id'
   , '/instructorclassid': 'HookController.get_instructor_by_classid'
   , '/getallstudents': 'HookController.get_all_students'
   , '/getallinstructors': 'HookController.get_all_instructors'


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
