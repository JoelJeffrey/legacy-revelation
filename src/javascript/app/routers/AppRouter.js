var Marionette = require('backbone.marionette');
var AppController = require('controllers/AppController.js');

module.exports = Marionette.AppRouter.extend({

    appRoutes: {
        '(/)': 'index',
        'patch-notes(/)': 'patchNotes',
        'chronicle(/)': 'chronicle',
        // 'game-overview(/)': 'gameOverview',
        'company(/)': 'company',
        'buy(/)': 'buy',
        'character(/)(:slug)(/)': 'showCharacters',
        '*default': 'defaultHandler'
    },

    controller: new AppController()

});
