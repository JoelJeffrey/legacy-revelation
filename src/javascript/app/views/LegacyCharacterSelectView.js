var Marionette = require('backbone.marionette');
var BaseView = require('backbone.marionette');
var template = require('templates/legacy-character-select.hbs');
var CharacterItemView = require('views/CharacterItemView');
module.exports = Marionette.CollectionView.extend({

    childView: CharacterItemView,

    tagName: 'ul',
    className: 'legacy-character-select',

	childView: CharacterItemView,

    // template: template,

    initialize: function(options) {
        console.log(options);
    },

    onShow: function() {
    }

});
