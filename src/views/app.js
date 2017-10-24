var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    console.log('App.js initialize fn called!');
    // seting video model to the mock data/yt api
    this.videos = new Videos(window.exampleVideoData);    
    console.log('this.videos:', this.videos);
    this.render();
    new VideoListView({collection: this.videos});
    new VideoPlayerView();
    new SearchView();
  },

  

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
