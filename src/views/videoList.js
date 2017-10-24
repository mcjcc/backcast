var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize: function() {
    console.log('videoList.js initialize fn called!');
    console.log('this.collection:', this.collection);
    this.render();
    // _.each(this.collection.models, function(model) {
      
    //   new VideoListEntryView({model: model});
    // });
    
  },

  render: function() {
    // console.log(this.collection);
    this.$el.children().detach();
    this.$el.html(this.template()); 

    this.collection.forEach(this.renderVideo, this);
   
    return this;
  },

  renderVideo: function(video) {
    var video = new VideoListEntryView({model: video});    
    // this.$el.append(video.render());
  },

  template: templateURL('src/templates/videoList.html')

});
