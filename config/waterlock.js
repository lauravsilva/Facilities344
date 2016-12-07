
/**
 * waterlock
 *
 * defines various options used by waterlock
 * for more informaiton checkout
 *
 * http://waterlock.ninja/documentation
 */
module.exports.waterlock = {
  authMethod: [
    {
       name: "waterlock-google-auth",
       clientId: "437977184848-1srksc4289acnf9lnnahj84dkm6e996k.apps.googleusercontent.com",
       clientSecret: "qTTZNqs6_LmxO5ywJTUObWhf"
    }
  ],

  jsonWebTokens:{
    secret: 'secret',//process.env.JWT_SECRET,
    expiry:{
      unit: 'hours',
      length: '1'
    },
    audience: 'Facilities 344',
    subject: 'subject',
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
