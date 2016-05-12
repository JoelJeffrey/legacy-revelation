var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var template = require('templates/home.hbs');
var _ = require('underscore');
var Velocity = require('libs/velocity');
var channels = require('channels');
var MainMenuView = require('views/MainMenuView');
var UpdateMenuView = require('views/UpdateMenuView');
var LegacyCharacterSelectView = require('views/LegacyCharacterSelectView');
var characterData = require('../data/characterData');

module.exports = Marionette.LayoutView.extend({

    className: 'page landing',

    template: template,

    regions: {
        regionMainMenu: '#region-main-menu',
        regionLegacyCharacterSelect: '#region-legacy-character-select',
        regionUpdateMenu: '#region-update-menu'
    },

    ui: {
        showBtn: '.btn-show'
    },

    events: {
        'click @ui.showBtn': 'onClickShowBtn'
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
        this.initLegacyCharacterSelectView();
    },

    onClickShowBtn: function(event) {
        console.log('click show btn');
        //do stuff here
        $('.legacy-character-select-wrapper').removeClass('is-hidden');
        $('.btn-hide').removeClass('is-hidden');
        this.ui.showBtn.addClass('is-hidden');
    },

    initMainMenuView: function() {
        this.mainMenuView = new MainMenuView();
        this.regionMainMenu.show(this.mainMenuView);
    },

    initLegacyCharacterSelectView: function() {
        this.legacyCharacterSelectView = new LegacyCharacterSelectView({
            collection: new Backbone.Collection(characterData)
        });
        this.regionLegacyCharacterSelect.show(this.legacyCharacterSelectView);
    },

    initUpdateMenuView: function() {
        this.updateMenuView = new UpdateMenuView();
        this.regionUpdateMenu.show(this.updateMenuView);
    }

});
