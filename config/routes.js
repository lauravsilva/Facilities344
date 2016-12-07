/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */
module.exports.routes = {
    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/
    '/': {
        view: 'index'
    }
    , 'get /index': {
        view: 'index'
    }
    , 'get /reservations': {
        view: 'reservations'
    }
    , 'get /reservations-admin': {
        view: 'reservations-admin'
    }
    , 'get /devices': {
        view: 'devices'
          , locals: {
              userObjects: ''
          }
    }
    , 'get /devices-admin': {
        view: 'devices-admin'
    }
    , 'get /classrooms': {
        view: 'classrooms'
    }
    , 'get /classrooms-admin': {
        view: 'classrooms-admin'
    }
    , 'get /account': {
        view: 'account'
    }
    , 'get /account-admin': {
        view: 'account-admin'
    }
    , 'get /dashboard': {
        view: 'home'
        , locals: {
            userObjects: ''
        }
    }
    , 'get /admin': {
        view: 'admin'
    }
    , '/email': 'HookController.get_user_by_email'
    , '/userid': 'HookController.get_user_by_id'
    , '/instructorclassid': 'HookController.get_instructor_by_classid'
    , '/getallstudents': 'HookController.get_all_students'
    , '/getallinstructors': 'HookController.get_all_instructors'
    , '/logout': 'UserController.logout'

    //Device calls
    , '/getalldevices': 'HookController.get_all_devices'
    
    
    
    , '/timeline': 'TweetController.get_timeline'
    ,'/tweet': 'TweetController.post_tweet'
    , '/': 'TweetController.run_cron'
};
