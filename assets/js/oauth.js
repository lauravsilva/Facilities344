var auth2 = {};
//var helper = (function () {
//    return {
//        /**
//         * Hides the sign in button and starts the post-authorization operations.
//         *
//         * @param {Object} authResult An Object which contains the access token and
//         *   other authentication information.
//         */
//        onSignInCallback: function (authResult) {
//            if (authResult.isSignedIn.get()) {
//                var access_token = authResult.currentUser.get().getAuthResponse().access_token;
//                console.log("access_token: " + access_token);
//                var id_token = authResult.currentUser.get().getAuthResponse().id_token;
//                console.log("id_token: " + id_token);
//                $('#authOps').show();
//                $('#gConnect').hide();
//                helper.profile(access_token);
//            }
//            else {
//                if (authResult['error'] || authResult.currentUser.get().getAuthResponse() == null) {
//                    // There was an error, which means the user is not signed in.
//                    // As an example, you can handle by writing to the console:
//                    console.log('There was an error: ' + authResult['error']);
//                }
//                $('#authResult').append('Logged out');
//                $('#authOps').hide();
//                $('#gConnect').show();
//            }
//        }
//        , /**
//         * Gets and renders the currently signed in user's profile data.
//         */
//        profile: function (access_token) {
//            gapi.client.plus.people.get({
//                'userId': 'me'
//            }).then(function (res) {
//                var profile = res.result;
//                $('#profile').empty();
////                $('#profile').append($('<button onclick="getUserInfoFromToken(\'' + access_token + '\')">GetToken</button>'));
//                $('#profile').append($('<p><img src=\"' + profile.image.url + '\"></p>'));
//                $('#profile').append($('<p><em>Name: </em>' + profile.displayName + '<br /><em>Tagline: </em>' + profile.tagline + '</p>'));
//                if (profile.emails) {
//                    $('#profile').append('Emails: ');
//                    for (var i = 0; i < profile.emails.length; i++) {
//                        $('#profile').append(profile.emails[i].value).append(' ');
//                    }
//                    $('#profile').append('<br/>');
//                }
//                if (profile.cover && profile.coverPhoto) {
//                    $('#profile').append($('<p><img src=\"' + profile.cover.coverPhoto.url + '\"></p>'));
//                }
//            }, function (err) {
//                var error = err.result;
//                $('#profile').empty();
//                $('#profile').append(error.message);
//            });
//        }
//    };
//})();
/**
 * jQuery initialization
 */
$(document).ready(function () {
    $('#loaderror').hide();
    if ($('meta')[0].content == 'YOUR_CLIENT_ID') {
        alert('This sample requires your OAuth credentials (client ID) ' + 'from the Google APIs console:\n' + '    https://code.google.com/apis/console/#:access\n\n' + 'Find and replace YOUR_CLIENT_ID with your client ID.');
    }
});
/**
 * Handler for when the sign-in state changes.
 *
 * @param {boolean} isSignedIn The new signed in state.
 */
var updateSignIn = function () {
    console.log('update sign in state');
    if (auth2.isSignedIn.get()) {
        helper.onSignInCallback(gapi.auth2.getAuthInstance());
    }
    else {
        helper.onSignInCallback(gapi.auth2.getAuthInstance());
    }
};

function getUserInfoFromToken(accessToken) {
    $.ajax({
        url: 'https://www.googleapis.com/oauth2/v3/tokeninfo'
        , type: 'POST'
        , data: 'access_token=' + accessToken
        , success: function (msg) {
            var expireTime = msg['expires_in'];
            var scope = msg['scope'];
            console.log(msg);
            alert("Session expires in: " + expireTime
                //+"\nUser Id: " + userId       //only works if you have granted this session "profile" under scope
                + "\nGranted Scope: " + scope);
        }
    })
}
/**
 * This method sets up the sign-in listener after the client library loads.
 */
function startApp() {
    gapi.load('auth2', function () {
        gapi.client.load('plus', 'v1').then(function () {
            gapi.signin2.render('signin-button', {
                scope: 'profile'
                , fetch_basic_profile: false
            });
            gapi.auth2.init({
                fetch_basic_profile: false
                , scope: 'profile'
            }).then(function () {
                console.log('init');
                auth2 = gapi.auth2.getAuthInstance();
                auth2.isSignedIn.listen(updateSignIn);
                auth2.then(updateSignIn);
            });
        });
    });
}