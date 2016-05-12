var BaseView = require('views/BaseView');
var template = require('templates/modal-chronicle.hbs');

module.exports = BaseView.extend({

    template: template,

    templateHelpers: function() {
    },

    initialize: function(options) {
        console.log(options);
    },

    onShow: function() {
        setTimeout(this.fadeAnimation, 10);
    },

    fadeAnimation: function() {
        $('.modal-wrap').removeClass('is-hidden');
    }

});
