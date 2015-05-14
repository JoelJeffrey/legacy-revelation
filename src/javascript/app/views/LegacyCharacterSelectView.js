var Marionette = require('backbone.marionette');
var BaseView = require('backbone.marionette');
var template = require('templates/legacy-character-select.hbs');
var CharacterItemView = require('views/CharacterItemView');
module.exports = Marionette.CompositeView.extend({

	childView: CharacterItemView,
    childViewContainer: '.character-list',

    template: template,

    ui: {
        showBtn: '.btn-show',
        hideBtn: '.btn-hide'
    },

    events: {
        'click @ui.showBtn': 'onClickShowBtn',
        'click @ui.hideBtn': 'onClickHideBtn'
    },

    initialize: function(options) {
        console.log(options);
    },

    onShow: function() {
    },

    onClickShowBtn: function(event) {
        console.log('click show btn');
        //do stuff here
        $('.legacy-character-select-wrapper').removeClass('hidden');
        this.removeClass('hidden');
    },
    onClickHideBtn: function(event) {
        console.log('click hide btn');
        //do stuff here
        $('.legacy-character-select-wrapper').addClass('hidden');
        this.ui.showBtn.removeClass('hidden');
    }

});