/**
* Route Mappings
* (sails.config.routes)
*/
module.exports.routes = {
   '/': {
       view: 'index'
   }
   // , 'get /reservations': {
   //     view: 'reservations'
   //     , locals: {
   //       userObjects: ''
   //     }
   // }
   , '/account': 'RouteController.account'
   , '/dashboard': 'RouteController.dashboard'
   , '/logout': 'UserController.logout'

   //Device calls
   , '/getalldevices': 'HookController.get_all_devices'

   //Classroom calls
   , '/getallclassrooms': 'HookController.get_all_classrooms'

   // Routes for testing
   , '/email': 'HookController.get_user_by_email'
   , '/userid': 'HookController.get_user_by_id'
   , '/instructorclassid': 'HookController.get_instructor_by_classid'
   , '/getallstudents': 'HookController.get_all_students'
   , '/getallinstructors': 'HookController.get_all_instructors'
   , '/classes/:id' : 'HookController.get_all_classes_by_id'
   , '/roster/:classid' : 'HookController.get_all_students_in_class'

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
