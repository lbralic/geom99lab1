function initMap() {
    const rome = { lat: 41.902, lng: 12.496 };
    const sangimi = { lat: 43.467, lng: 43.467 };
    const florence = { lat: 43.769, lng: 11.255 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 42.420, lng: 8.976 },
    });
    
    
    // Inspiration: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
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
    const marker = new google.maps.Marker({
      position: rome,
      map,
      title: "Rome",
    });
  
    
    // San Giminano
    const contentSanGimi =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Rome</h1>' +
      '<div id="bodyContent">' +
      "<p><b>San Giminano</b>, also referred to as <b>Ayers Rock</b>, is a large " +
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
      content: contentSanGimi,
      ariaLabel: "San Giminano",
    });
    const marker = new google.maps.Marker({
      position: rome,
      map,
      title: "San Giminano",
    });
    
    
    
    
    marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}
