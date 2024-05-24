function init() {
    var myLatlng = new google.maps.LatLng(41.45348560686851, -8.289093834232604);

    var mapOptions = {
      zoom: 18,
      center: myLatlng,
      scrollwheel: false,
      styles: [
        {
          "featureType": "administrative.country",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "hue": "#ff0000"
            }
          ]
        }
      ]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: {
        scaledSize: new google.maps.Size(40, 40)
      }
    });
  }
  google.maps.event.addDomListener(window, 'load', init);