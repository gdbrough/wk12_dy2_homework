const MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })

  var contentString = '<div id="content">'+
        '<h1 id="firstHeading" class="firstHeading">Drumnadrochit</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Drumnadrochit</b> (Scottish Gaelic, Druim na Drochaid) ' +
        'is a village in the Highland local government council area of Scotland, '+
        'lying on the west shore of Loch Ness, at the foot of Glen Urquhart.</p>'+
        '<p>Attribution: Drumnadrochit, <a href="https://en.wikipedia.org/wiki/Drumnadrochit">'+
        'Wikipedia</a> '+
        '(last visited April 10, 2018).</p>'+
        '</div>'+
        '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener("click", function(){
    infowindow.open(marker.map, marker);
  });
};

MapWrapper.prototype.cityMove = function () {
  this.googleMap.setCenter({lat: 57.4789459, lng: -4.2247927});
};
