/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    /**
     * `LoginController.onSignInCallback()`
     * Hides the sign in button and starts the post-authorization operations.
     *
     * @param {Object} authResult An Object which contains the access token and
     *   other authentication information.
     */
    onSignInCallback: function (req, res, authResult) {
        if (authResult.isSignedIn.get()) {
            var access_token = authResult.currentUser.get().getAuthResponse().access_token;
            console.log("access_token: " + access_token);
            var id_token = authResult.currentUser.get().getAuthResponse().id_token;
            console.log("id_token: " + id_token);
            $('#authOps').show();
            $('#gConnect').hide();
            helper.profile(access_token);
        }
        else {
            if (authResult['error'] || authResult.currentUser.get().getAuthResponse() == null) {
                // There was an error, which means the user is not signed in.
                // As an example, you can handle by writing to the console:
                console.log('There was an error: ' + authResult['error']);
            }
            $('#authResult').append('Logged out');
            $('#authOps').hide();
            $('#gConnect').show();
        }
        return res.json({
            todo: 'onSignInCallback() is not implemented yet!'
        });
    }
    , /**
     * `LoginController.profile()`
     * Gets and renders the currently signed in user's profile data.
     */
    profile: function (req, res, access_token) {
        gapi.client.plus.people.get({
            'userId': 'me'
        }).then(function (res) {
            var profile = res.result;
            $('#profile').empty();
            //                $('#profile').append($('<button onclick="getUserInfoFromToken(\'' + access_token + '\')">GetToken</button>'));
            $('#profile').append($('<p><img src=\"' + profile.image.url + '\"></p>'));
            $('#profile').append($('<p><em>Name: </em>' + profile.displayName + '<br /><em>Tagline: </em>' + profile.tagline + '</p>'));
            if (profile.emails) {
                $('#profile').append('Emails: ');
                for (var i = 0; i < profile.emails.length; i++) {
                    $('#profile').append(profile.emails[i].value).append(' ');
                }
                $('#profile').append('<br/>');
            }
            if (profile.cover && profile.coverPhoto) {
                $('#profile').append($('<p><img src=\"' + profile.cover.coverPhoto.url + '\"></p>'));
            }
        }, function (err) {
            var error = err.result;
            $('#profile').empty();
            $('#profile').append(error.message);
        });
        return res.json({
            todo: 'profile() is not implemented yet!'
        });
    }
};