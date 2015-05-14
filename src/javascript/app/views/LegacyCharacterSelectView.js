var Marionette = require('backbone.marionette');
var BaseView = require('backbone.marionette');
var template = require('templates/legacy-character-select.hbs');
var CharacterItemView = require('views/CharacterItemView');
module.exports = Marionette.CompositeView.extend({

	childView: CharacterItemView,
    childViewContainer: '.character-list',

    template: template,

    ui: {
        showBtn: '.btn-show'
    },

    events: {
        'click @ui.showBtn': 'onClickShowBtn'
    },

    initialize: function(options) {
        console.log(options);
    },

    onShow: function() {
    },

    onClickShowBtn: function(event) {
        console.log('click show btn');
        //do stuff here
    }

});