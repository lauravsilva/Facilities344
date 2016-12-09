function route(res, pageview) {
    return res.view(pageview);
}

module.exports = {
    account: function (req, res) {
        route(res, 'account');
    },

    dashboard: function (req, res) {
        route(res, 'home');
    }
}
