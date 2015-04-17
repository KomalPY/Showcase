import Ember from 'ember';

var placesRoute = Ember.Route.extend({
fetchStateName: '',
  model: function(params) {
   this.set('fetchStateName', params.statename);

    return Ember.$.ajax({
      url: 'http://172.16.65.131/explore/getplaces.php?statename='+params.statename,
	  
	
    }).then(function(response) {
      var locs = [];
      if (response && response.length) {
        for(var i=0; i<response.length; i++) {
          locs.push(Ember.Object.create(response[i]));
        }
      }
      return locs;
    });
  },
  
  
  setupController: function(controller, model) {
    controller.set('content', model);
   // controller.set('fetchValue', this.get('fetchStateName'));
//alert(this.get('fetchStateName'));
  }
});


export default placesRoute;
