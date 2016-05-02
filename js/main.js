/* Added ready handler
*/
$(document).ready(function(){



/*   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// Used Leaflet.js library to draw a map in your `#map-container` div.

var map = L.map('map-container').setView([46.852, -121.760], 13);

var streetLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
    minZoom: 8,
}).addTo(map);

// Added MapView and Satellite layers.

var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var mapLayers = {
    "Satellite": satLayer,
    "Map View": drawLayer,
    "Open Street Maps": streetLayer
}

L.control.layers(mapLayers).addTo(map);


// Customized map to show markers with popups at Paradise Valley, Cougar Valley, and Mowich Lake.

/* var marker = L.marker([46.782898, -121.728248]).addTo(map);

marker.bindPopup("<b>Paradise Valley</b><br>I am a popup.").openPopup();
*/
var ParadiseValley = L.circle([46.782898, -121.728248], 500, {
    color: '#7a2557',
    fillColor: '#b33a81',
    fillOpacity: 0.5
}).addTo(map);

ParadiseValley.bindPopup("Paradise Valley");

var CougarValley = L.circle([47.019660, -121.357116], 500, {
    color: '#7a2557',
    fillColor: '#b33a81',
    fillOpacity: 0.5
}).addTo(map);

CougarValley.bindPopup("Cougar Valley");

var MowichLake = L.circle([46.933104, -121.863114], 500, {
    color: '#7a2557',
    fillColor: '#b33a81',
    fillOpacity: 0.5
}).addTo(map);

MowichLake.bindPopup("Mowich Lake Campground");

})
