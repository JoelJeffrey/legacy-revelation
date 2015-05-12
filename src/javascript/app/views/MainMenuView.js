var BaseView = require('views/BaseView');
var template = require('templates/main-menu.hbs');
var constants = require('utils/constants');
var channels = require('../channels');

module.exports = BaseView.extend({

    template: template,

    ui: {
        hamburger: '.hamburger',
        toggleMenu: '.toggle-menu',
        mainMenu: '.main-menu'
    },

    events: {
        'click @ui.toggleMenu': 'onClickHamburger'
    },

    initialize: function(options) {
        // console.log(options);
        this.menuOpen = false;

        channels.globalChannel.on('menu:close', this.closeMenu, this);
    },

    onShow: function() {
    },

    onClickHamburger: function () {
        this.toggleMenu();
    },

    closeMenu: function() {
        this.bindUIElements();
        this.menuOpen = false;
        this.ui.mainMenu.removeClass(constants.MENU_OPEN_CLASS);
        this.ui.hamburger.removeClass(constants.MENU_OPEN_CLASS);
    },

    toggleMenu: function () {
        this.menuOpen = !this.menuOpen;

        if (this.menuOpen) {
            this.ui.mainMenu.addClass(constants.MENU_OPEN_CLASS);
            this.ui.hamburger.addClass(constants.MENU_OPEN_CLASS);
        } else {
            this.ui.mainMenu.removeClass(constants.MENU_OPEN_CLASS);
            this.ui.hamburger.removeClass(constants.MENU_OPEN_CLASS);
        }
    },

});
