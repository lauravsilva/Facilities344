
/**
 * waterlock
 *
 * defines various options used by waterlock
 * for more informaiton checkout
 *
 * http://waterlock.ninja/documentation
 */
module.exports.waterlock = {

  // Base URL
  //
  // used by auth methods for callback URI's using oauth and for password
  // reset links.
  baseUrl: 'http://facilities344.herokuapp.com',

  // Auth Method(s)
  //
  // this can be a single string, an object, or an array of objects for your
  // chosen auth method(s) you will need to see the individual module's README
  // file for more information on the attributes necessary. This is an example
  // of the local authentication method with password reset tokens disabled.
  authMethod: [
    {
       name: "waterlock-google-auth",
       clientId: "437977184848-1srksc4289acnf9lnnahj84dkm6e996k.apps.googleusercontent.com",
       clientSecret: "qTTZNqs6_LmxO5ywJTUObWhf"
    }
  ],


  // JSON Web Tokens
  //
  // this provides waterlock with basic information to build your tokens,
  // these tokens are used for authentication, password reset,
  // and anything else you can imagine
  jsonWebTokens:{
    secret: process.env.JWT_SECRET,
    expiry:{
      unit: 'hours',
      length: '1'
    },
    audience: process.env.APP_NAME,
    subject: 'subject',
    trackUsage: true,
    stateless: false,
    tokenProperty: 'token',
    expiresProperty: 'expires',
    includeUserInJwtResponse: true
  },
  postActions: {
    login: {
      success: '/dashboard',
      failure: 'default'
    },
    logout: {
      success: '/#/login',
      failure: 'default'
    }
  }
};
