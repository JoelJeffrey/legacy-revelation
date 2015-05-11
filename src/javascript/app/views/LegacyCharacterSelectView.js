var Marionette = require('backbone.marionette');
var BaseView = require('backbone.marionette');
var template = require('templates/legacy-character-select.hbs');
var CharacterItemView = require('views/CharacterItemView');
module.exports = Marionette.CompositeView.extend({

	childView: CharacterItemView,
    childViewContainer: '.character-list',

    template: template,

    initialize: function(options) {
        console.log(options);
    },

    onShow: function() {
    }

});