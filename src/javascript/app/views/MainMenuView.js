var BaseView = require('views/BaseView');
var template = require('templates/main-menu.hbs');

module.exports = BaseView.extend({

    template: template,

    templateHelpers: function() {
    },

    initialize: function(options) {
        console.log(options);
    },

    onShow: function() {
    }

});
