var Video = Backbone.Model.extend({
  
  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId); 
    
    
  },

  select: function() {
    this.trigger('select', this);
    console.log('Video select() firing');
    // when a video is selected, it passes a video into the VideoPlayerView();
  
    var player = new VideoPlayerView({model: this});
    player.render();
    // this.videoplayerview.render()
  }

});
