import Ember from 'ember';

var gridRoute = Ember.Route.extend({

  cachedCities: null,
  
  model: function() {
    
    // This is so that we don't refresh it all the time
    // arguably, this is a hack.
    var cachedCities = this.get('cachedCities');
    
    if(cachedCities !== null) {
      return cachedCities;
    }

    var self = this;
    return Ember.$.ajax({
      url: 'http://172.16.65.131/explore/getstates.php',
    }).then(function(response) {
      var cities = [];
      if (response && response.length) {
        for(var i=0; i<response.length; i++) {
          cities.push(Ember.Object.create(response[i]));
        }
      }
      self.set('cachedCities', cities);
      return cities;
    });
  },
  
  
  setupController: function(controller, model) {
    controller.set('content', model);
  }
});


export default gridRoute;
