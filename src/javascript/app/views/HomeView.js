var Marionette = require('backbone.marionette');
var template = require('templates/home.hbs');
var _ = require('underscore');
var Velocity = require('libs/velocity');
var channels = require('channels');
var MainMenuView = require('views/MainMenuView');
var UpdateMenuView = require('views/UpdateMenuView');

module.exports = Marionette.LayoutView.extend({

    className: 'page landing',

    template: template,

    regions: {
        regionMainMenu: '#region-main-menu',
        regionUpdateMenu: '#region-update-menu'
    },

    ui: {
    },

    events: {
    },

    templateHelpers: function() {
        return {
        };
    },

    initialize: function() {
    },

    onShow: function() {
        this.initMainMenuView();
        this.initUpdateMenuView();
    },

    initMainMenuView: function() {
        this.mainMenuView = new MainMenuView();
        this.regionMainMenu.show(this.mainMenuView);
    },
    initUpdateMenuView: function() {
        this.updateMenuView = new UpdateMenuView();
        this.regionUpdateMenu.show(this.updateMenuView);
    }

});
