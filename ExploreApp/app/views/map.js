import Ember from 'ember';

/*global google */
var maps = Ember.ContainerView.extend({

  id: 'map-canvas',
  tagName: 'div',

  attributeBindings: ['style'],
  style:"height: 600px;",
  
  map:null,

  didInsertElement: function() {
    var mapOptions = {
      center: new google.maps.LatLng(36.054099, -112.143160),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(this.$().get(0),mapOptions);
    this.set("map",map);
  }
});


export default maps;