import Ember from 'ember';

/*global google */
var mapsComponent = Ember.Component.extend({
  id: 'maps-canvas',
 className : 'maps-canvas',
  tagName: 'div',
  layoutName : 'maps',
 templateName : 'maps',
 statename: '',
  attributeBindings: ['style'],
  style:"position:relative;margin:5%; margin-top:100px; margin-bottom:-50px; height: 300px; border:1px solid red",


  map:null,


  didInsertElement: function() {

	var mapOptions = {
		
      center: new google.maps.LatLng(34.295383,-111.952880),
      zoom: 4,
      mapTypeId: 'roadmap'
    };
    var map = new google.maps.Map(this.$().get(0),mapOptions);
    var bounds = new google.maps.LatLngBounds();
    var marker, i;
    var markers = [
        ['Arizona', 34.295383,-111.952880],
        ['Utah', 39.159840, -111.777741],
        ['New York', 40.705631, -74.014396],
        ['Chicago', 41.871581, -87.621606],
        ['Seattle',47.602812, -122.322796],
        ['Alaska', 64.577288, -150.557246],
        ['Colorado',39.253617, -105.468170],
        ['Washington',38.903624, -77.036196],

    ];

    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
      // bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
          });
     }
    // map.fitbounds(bounds);
    //this.set("map",map);

  }

   
});


export default mapsComponent; 