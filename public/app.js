const initialise = function(){
  const container = document.getElementById("main-map");
  const center = {lat: 57.3334381, lng: -4.4778644};
  const zoom = 14;

  const map = new MapWrapper(container, center, zoom);
  map.addMarker(center);

  const cityButton = document.getElementById("button-city-mover");
  cityButton.addEventListener("click", map.cityMove.bind(map));

}

window.addEventListener("DOMContentLoaded", initialise);
