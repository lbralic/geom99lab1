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
      "<p>My trip began in Rome. Despite only staying for a day, I was able " +
      "to see a variety attractions. These included the famous Collesseum, " +
      "The Aventine Keyhole, and many lesser known cathedrals and churches.</p>" +
      '<img src="rome.jpg" alt="Rome">' +
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
      "<p>San Gimignano is a small village located within Tuscany, and it is where " +
      "I spent a large portion of my trip. I got a tour of the lush vinyards in this region, " +
      "and I got the chance to learn about the wine-making process.</p>"
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
      "<p>My final stop was Florence, where I visited family. I got to see " +
      "the Cathedral of Santa Maria del Fiore, The Boboli Gardens, The Pitti " +
      "Palace, and the Uffizi Gallery. This was my favourite stop, and I would " +
      "like to visit again sometime in the future.</p>" +
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
