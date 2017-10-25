var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  initialize: function() {
    console.log('videos.js initialized');

    // initial app load, request 
    this.request = {
      q: 'puppy',
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
      type: 'video',
      videoEmbeddable: 'true',
      part: 'snippet'
    };
    this.fetch({
      data: this.request,
      success: function(data) {
        // console.log('fetch success!');
        // console.log(data);
        var defaultModel = data.at(0);
        console.log('before calling select');
        defaultModel.select();
        // var player = new VideoPlayerView({model: defaultModel});
        // player.render();
    
      },
      error: function(data) {
        console.log('fetch failed!');
      }
    });
    
  },
  search: function(query) {
    
    var request = {
      q: query,
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
      type: 'video',
      videoEmbeddable: 'true',
      part: 'snippet'
    };

    this.fetch({
      data: request,
      success: function(data) {
        console.log('fetch success!');
      },
      error: function(data) {
        console.log('fetch failed!');
      }
    });
    
  },
  parse: function(response) {
    console.log('parse called!');
    this.reset(response.items);
    // console.log('reponse.items', response.items[0]);
    
    // var defaultModel = response.items[0];
    // var player = new VideoPlayerView({model: defaultModel});
    // player.render();
    
    
    // put the first element of response.items into a new VideoPlayerView
    // response.items[0].select();
    return response.items;
  }

});
