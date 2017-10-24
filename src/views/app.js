var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    console.log('App.js initialize fn called!');
    // seting video model to the mock data/yt api
    this.videos = new Videos(window.exampleVideoData);        
    // this.myVideoPlayerView = new VideoPlayerView({model: this.videos.models[0]}).render();
    this.render();
    
  },

  render: function() {
    this.$el.html(this.template());

    // pass a collection of videos to render
    this.renderVideoListView({collection: this.videos});
    // new VideoListView({collection: this.videos}).render();

    // pass a video to the player view to render
    this.renderVideoPlayerView();
    
    // this.myVideoPlayerView.render();

    // render search bar
    // this.renderSearchView();

    return this;
  },

  renderVideoListView: function(videos) {  
    new VideoListView(videos).render();
    // var videoList = new VideoListView(videos);
    // this.$el.append(videoList.render());
  },

  renderVideoPlayerView: function() {
    console.log('this.videos', this.videos.models[0]);
    var myVideoPlayerView = new VideoPlayerView({model: this.videos.models[0]}).render();
  },

  // renderSearchView: function() {
  //   new SearchView().render();
  // },

  template: templateURL('src/templates/app.html')

});


  // renderVideoListEntryView: function(video) {
  //   var video = new VideoListEntryView({model: video}); 
  //   this.$el.append(video.render());
  // },