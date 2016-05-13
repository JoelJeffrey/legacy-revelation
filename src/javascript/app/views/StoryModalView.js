var BaseView = require('views/BaseView');
var template = require('templates/modal-story.hbs');

module.exports = BaseView.extend({

    template: template,

    ui: {
        storyDescription: ".story-description"
    },

    templateHelpers: function() {
    },

    initialize: function(options) {
        console.log(this.model);
    },

    onShow: function() {
        setTimeout(this.fadeAnimation, 10);
        console.log(this.ui.storyDescription.html())
        this.ui.storyDescription.html().replace(/<p>/g, "<br>")
    },

    fadeAnimation: function() {
        $('.modal-wrap').removeClass('is-hidden');
    }

});
