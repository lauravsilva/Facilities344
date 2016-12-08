module.exports.cron = {
    myFirstJob: {
        schedule: '* * */2 * * *'
        , onTick: function () {
            sails.controllers.tweet.run_cron();
        }
    }
};