// getUserLocation: function(successCallback, errorCallback) {
//   if(typeof(navigator.geolocation) === 'undefined')
//     return false;

//   var gl = navigator.geolocation;

//   var success = function(position) {
//     locationObj = {
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude
//     };

//     successCallback.call(null, locationObj);
//   };

//   var error = function(position) {
//     errorCallback.call(null, position);
//   };

//   gl.getCurrentPosition(success, error);

//   return true;
// }


// getUserLocation(
//   function(position) {
//     var center = new google.maps.LatLng(position.latitude, position.longitude);
//     reports_viewer.map.setCenter(center);
//     reports_viewer.map.setZoom(14);
//   },
//   function(error) {

//   }
// );

// //Now let's setup some UI components
// $('#report_address').popover({
//   placement: 'top',
//   title: 'Utilize o mapa',
//   content: 'No mapa, pode arrastar o marcador para a localização da queixa. Desta forma a morada é automaticamente preenchida'
// });


