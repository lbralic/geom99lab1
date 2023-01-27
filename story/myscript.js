function initMap() {
    const rome = { lat: 41.902, lng: 12.496 };
    const sangimi = { lat: 43.467, lng: 11.043 };
    const florence = { lat: 43.769, lng: 11.255 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: 42.941, lng: 11.998 },
    });
    
    
    // Inspiration: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
    const contentRome =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Rome</h1>' +
      '<div id="bodyContent">' +
      "<p>My trip began in Rome. Despite only staying for two days, I was able " +
      "to see a variety attractions. These included the famous Collesseum, " +
      "The Aventine Keyhole, and many lesser known cathedrals and churches.</p>"
      "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentRome,
      ariaLabel: "Rome",
    });
    const marker = new google.maps.Marker({
      position: rome,
      label: "1",
      map,
      title: "Rome",
    });
  
    marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
    
    /// San Gimignano
    
   const contentSanGimi =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">San Gimignano</h1>' +
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
    const infowindow2 = new google.maps.InfoWindow({
      content: contentSanGimi,
      ariaLabel: "San Gimignano",
    });
    const marker2 = new google.maps.Marker({
      position: sangimi,
      label: "2",
      map,
      title: "San Gimignano",
    });
  
    marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
    });
  });
    
    
    
    // Florence marker
    
    const contentFlorence =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Florence</h1>' +
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
    const infowindow3 = new google.maps.InfoWindow({
      content: contentFlorence,
      ariaLabel: "Florence",
    });
    const marker3 = new google.maps.Marker({
      position: florence,
      label: "3",
      map,
      title: "Florence",
    });
  
    marker3.addListener("click", () => {
    infowindow3.open({
      anchor: marker3,
      map,
    });
  });
    
    
    // Polyline
    // Inspiration: https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
    
    const italyPolylineCoord = [
    rome,
    sangimi,
    florence,
  ];
  const italyPolyline = new google.maps.Polyline({
    path: italyPolylineCoord,
    geodesic: true,
    strokeColor: "#7700C8",
    strokeOpacity: 1.0,
    strokeWeight: 2.5,
  });

  italyPolyline.setMap(map);
}
