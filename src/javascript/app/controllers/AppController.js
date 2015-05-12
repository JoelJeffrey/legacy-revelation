var app = require('../app');
var Backbone = require('backbone');
var constants = require('utils/constants');
var channels = require('../channels');

// Views
var GlobalView = require('views/GlobalView.js');
var BaseView = require('views/BaseView.js');
var HomeView = require('views/HomeView.js');
var PatchNotesView = require('views/PatchNotesView.js');
var GameOverviewView = require('views/GameOverviewView.js');
var CompanyView = require('views/CompanyView.js');
var BuyView = require('views/BuyView.js');
var characterData = require('../data/characterData');
var CharacterModalView = require('views/CharacterModalView');

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

        channels.globalChannel.trigger('menu:close');

    },

    /* View Routes
    =========================================== */

    index: function() {
        app.modalRegion.empty();

        this.homeView = new HomeView();
        app.mainRegion.show(this.homeView);
    },

    patchNotes: function() {
        this.patchNotesView = new PatchNotesView();
        app.modalRegion.show(this.patchNotesView);
    },

    gameOverview: function() {
        this.gameOverviewView = new GameOverviewView();
        app.modalRegion.show(this.gameOverviewView);
    },

    company: function() {
        this.companyView = new CompanyView();
        app.modalRegion.show(this.companyView);
    },

    buy: function() {
        this.buyView = new BuyView();
        app.modalRegion.show(this.buyView);
    },

    showCharacters: function(slug) {
        var characterInfo = _.where(characterData, {slug: slug})[0];
        this.characterModalView = new CharacterModalView({
            model: new Backbone.Model(characterInfo)
        });

        app.modalRegion.show(this.characterModalView);
    },

    defaultHandler: function(route) {
        // console.log('%cRoute /%s does not exist', 'color:white; background:gray; padding: 0 0.25em', route);
    }

});
