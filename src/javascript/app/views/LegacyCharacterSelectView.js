var Marionette = require('backbone.marionette');
var BaseView = require('backbone.marionette');
var template = require('templates/legacy-character-select.hbs');
var CharacterItemView = require('views/CharacterItemView');
module.exports = Marionette.CompositeView.extend({

	childView: CharacterItemView,
    childViewContainer: '.character-list',

    template: template,

    ui: {
        hideBtn: '.btn-hide'
    },

    events: {
        'click @ui.hideBtn': 'onClickHideBtn'
    },

    initialize: function(options) {
        // console.log(options);
    },

    onShow: function() {
    },

    onClickHideBtn: function(event) {
        console.log('click hide btn');
        //do stuff here
        $('.legacy-character-select-wrapper').addClass('is-hidden');
        $('.btn-show').removeClass('is-hidden');
    }

});