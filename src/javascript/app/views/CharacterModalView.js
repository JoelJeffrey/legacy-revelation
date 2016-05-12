var BaseView = require('views/BaseView');
var template = require('templates/modal-legacy-character.hbs');

module.exports = BaseView.extend({

    template: template,

    templateHelpers: function() {
    },

    initialize: function(options) {
        console.log(this.model);
    },

    onShow: function() {
    	setTimeout(this.fadeAnimation, 10);
    },

    fadeAnimation: function() {
    	$('.modal-wrap').removeClass('is-hidden');
    }

});
