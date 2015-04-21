var Marionette = require('backbone.marionette');
var AppController = require('controllers/AppController.js');

module.exports = Marionette.AppRouter.extend({

    appRoutes: {
        '(/)': 'index',
        'patch-notes(/)': 'patchNotes',
        'game-overview(/)': 'gameOverview',
        'company(/)': 'company',
        'buy(/)': 'buy',
        '*default': 'defaultHandler'
    },

    controller: new AppController()

});
