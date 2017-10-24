var VideoPlayerView = Backbone.View.extend({
  el: '.player', 

  initialize: function() {    
    // this.model.on('change', this.render, this);
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    console.log('videoplayerview render!');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
