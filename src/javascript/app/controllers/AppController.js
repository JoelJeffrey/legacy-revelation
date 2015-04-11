var app = require('../app');
var Backbone = require('backbone');
var constants = require('utils/constants');
var channels = require('../channels');

// Views
var GlobalView = require('views/GlobalView.js');
var BaseView = require('views/BaseView.js');
var HomeView = require('views/HomeView.js');
var HomeView = require('views/PatchNotesView.js');

module.exports = Backbone.Marionette.Controller.extend({

    initialize: function() {

        // State checks
        app.onload = true;

        // Bootstrap it, gurrl
        this.bootstrap();

    },

    bootstrap: function() {
        this.globalView = new GlobalView();
        this.baseView = new BaseView();
        this.index();

        channels.globalChannel.on('navigate', this.navigate, this);
    },

    navigate: function(options) {

        // If navigate() is being called...
        // we must be past our initial page load
        // so we'll set onload to 'false'
        app.onload = false;

        var url = options.url;
        var trigger = options.trigger ? options.trigger : false;

        app.appRouter.navigate(url, {
            trigger: trigger
        });

    },

    /* View Routes
    =========================================== */

    index: function() {
        this.homeView = new HomeView();
        app.mainRegion.show(this.homeView);
    },

    patchNotes: function() {
        this.patchNotesView = new PatchNotesView();
        app.modalRegion.show(this.patchNotesView);
    },

    defaultHandler: function(route) {
        console.log('%cRoute /%s does not exist', 'color:white; background:gray; padding: 0 0.25em', route);
    }

});
