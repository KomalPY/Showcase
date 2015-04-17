import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ProjectENV.locationType
});

Router.map(function() {
	this.route('grid');
	this.resource('places', {path: '/places/:statename'});
	 this.resource('maps', {path: '/maps/:lat'});
});

export default Router;
