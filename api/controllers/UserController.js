/**
 * UserController.js
 *
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
    login: function (req, res) {
         return res.login({
             successRedirect: '/'
         });
     }
     , /**
      * `UserController.logout()`
      */
     logout: function (req, res) {
         req.session.destroy();
         res.redirect('/');
     }
});
