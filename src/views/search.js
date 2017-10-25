var SearchView = Backbone.View.extend({
  el: '.search',
  events: {
    'click button': 'searchButtonClicked'
  },
  searchButtonClicked: function() {
    // var search = $(".form-control").val();
    // this.collection.search(search);
    console.log('HI');
  },
  render: function() {
    console.log('searchview being rendered');
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
