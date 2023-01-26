function initMap() {
    const rome = { lat: 41.902, lng: 12.496 };
    const san_gimi = { lat: 43.467, lng: 43.467 };
    const florence = { lat: 43.769, lng: 11.255 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 42.420, lng: 8.976 },
    });
    
    
    // Inspiration: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
    // advanced-markers-accessibility from https://googlemaps.github.io/js-samples/
    
    const numMarkers = [
    {
      position: rome,
      title: "Rome",
    },
    {
      position: san_gimi,
      title: "San Gimignano",
    },
    {
      position: florence,
      title: "Florence",
    }
  ];
    
    const contentRome =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Rome</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Rome</b>, also referred to as <b>Ayers Rock</b>, is a large " +
      "sandstone rock formation in the southern part of the " +
      "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
      "south west of the nearest large town, Alice Springs; 450&#160;km " +
      "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
      "features of the Uluru - Kata Tjuta National Park. Uluru is " +
      "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
      "Aboriginal people of the area. It has many springs, waterholes, " +
      "rock caves and ancient paintings. Uluru is listed as a World " +
      "Heritage Site.</p>" +
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
      "(last visited June 22, 2009).</p>" +
      "</div>" +
      "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentRome,
      ariaLabel: "Rome",
    });
    
  
    numMarkers.forEach(({ position, title }, i) => {
    const pinView = new google.maps.marker.PinView({
      glyph: `${i + 1}`,
    });
    
    
    const marker = new google.maps.AdvancedMarkerView({
      position,
      map,
      title: `${i + 1}. ${title}`,
      content: pinView.element,
    });
  
    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", ({ domEvent, latLng }) => {
      const { target } = domEvent;
      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
  });
}
