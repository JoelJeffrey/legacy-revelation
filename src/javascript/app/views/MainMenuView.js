var BaseView = require('views/BaseView');
var template = require('templates/main-menu.hbs');
var constants = require('utils/constants');

module.exports = BaseView.extend({

    template: template,

    ui: {
        hamburger: '.hamburger',
        toggleMenu: '.toggle-menu'
    },

    events: {
        'click @ui.toggleMenu': 'onClickHamburger'
    },

    initialize: function(options) {
        console.log(options);
        this.menuOpen = false;
    },

    onShow: function() {
    },

    onClickHamburger: function () {
        this.toggleMenu();
    },

    toggleMenu: function () {
        this.menuOpen = !this.menuOpen;

        if (this.menuOpen) {
            this.ui.hamburger.addClass(constants.MENU_OPEN_CLASS);
        } else {
            this.ui.hamburger.removeClass(constants.MENU_OPEN_CLASS);
        }
    },

});
