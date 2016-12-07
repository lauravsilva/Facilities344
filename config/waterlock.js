
/**
 * waterlock
 *
 * defines various options used by waterlock
 * for more informaiton checkout
 *
 * http://waterlock.ninja/documentation
 */
module.exports.waterlock = {

  baseUrl: 'http://facilities344.herokuapp.com/',

  authMethod: [
    {
       name: "waterlock-google-auth",
       clientId: "164515449157-gpth1s69l8nng33pfrcmhvefeg69knbd.apps.googleusercontent.com",
       clientSecret: "LTqmAusrLqlZDorltvB8hT78",
       redirectUri: 'http://facilities344.herokuapp.com'
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
      success: '/#/dashboard',
      failure: 'default'
    },
    logout: {
      success: '/#/login',
      failure: 'default'
    }
  }
};
