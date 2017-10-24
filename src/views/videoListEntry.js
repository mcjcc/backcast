var VideoListEntryView = Backbone.View.extend({
  el: '.video-list',
  initialize: function() {
    
    this.render();
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));    
    return this;
  },

  events: {'click .video-list-entry-title': 'handleClick'},

  handleClick: function(e) {
    console.log(e);    
  },

  template: templateURL('src/templates/videoListEntry.html')

});
