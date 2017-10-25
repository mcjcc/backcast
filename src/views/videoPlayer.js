var VideoPlayerView = Backbone.View.extend({
  el: '.player', 

  initialize: function() {    
    // this.model.on('change', this.render, this);
  },

  render: function() {
    
    if (this.model === undefined ) {
      this.$el.html('<div class="loading">Please wait...</div>');
    } else {
        
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
