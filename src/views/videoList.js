var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize: function() {
    console.log('videoList.js initalized');    
    this.collection.on('sync', this.render, this);
    // this.render();
  },
  
  render: function() {    
    // console.log('videoListView  render called!');
    this.$el.children().detach();
    this.$el.html(this.template()); 
    this.collection.forEach(this.renderVideoListEntryView, this);
    
    return this;
  },

  renderVideoListEntryView: function(video) {
    var video = new VideoListEntryView({model: video}); 
    this.$el.append(video.render());
  },

  template: templateURL('src/templates/videoList.html')

});
