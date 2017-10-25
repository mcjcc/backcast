var VideoListEntryView = Backbone.View.extend({
  // el: '.video-list',
  initialize: function() {
    console.log('VideoListEntryView.js initialized');
    
    
    this.model.on('change', this.render, this);
    
  },

  events: {'click .video-list-entry-title': 'handleClick'},

  handleClick: function(e) {
    
    this.model.select();
    
    console.log(this.model.attributes.snippet.channelTitle);    
  
  },

  render: function() {
    console.log('videolistentryview render');
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  

  template: templateURL('src/templates/videoListEntry.html')

});
