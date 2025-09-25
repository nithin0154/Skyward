mapboxgl.accessToken = mapToken;
let cords = JSON.parse(coordinates);


const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: cords,
  zoom: 9,
});

map.on("load", () => {
  new mapboxgl.Marker({ color: "#ff0000ff" })
    .setLngLat(cords)
    .setPopup(
      new mapboxgl.Popup({ offset: 25, className: "popUp" }).setHTML(
        `<h6>Exact location will be provided after booking</h6>`
      )
    )
    .addTo(map);
});
