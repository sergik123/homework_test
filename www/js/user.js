var coordinate_lat  = [localStorage.coordinate_lat];
var coordinate_long = [localStorage.coordinate_long];

	var obj={
		lat_obj: coordinate_lat,
		lon_obj: coordinate_long
	}	

window.onload = function(){
	navigator.geolocation.getCurrentPosition(function(response) {
	      	initialize(response.coords);
	    });
	

var map;
var lat_o;
var lon_o;
var object;

	function initialize(coords) {

			var mylatLng = new google.maps.LatLng(coords.latitude, coords.longitude);
	        var mapOptions = {
	          center: mylatLng,
	          zoom: 14,
	          mapTypeId: google.maps.MapTypeId.ROADMAP
	        };
	        map = new google.maps.Map(document.getElementById("map"),
	            mapOptions);
	        google.maps.event.addListener(map,'click',function(event){

						
	      
	        		placemarker(event.latLng);
	        		coordinate_lat.push(event.latLng.A);
	        		coordinate_long.push(event.latLng.k);
	        		var str = JSON.stringify(obj);
		 			object = JSON.parse(str);
		 			localStorage.coordinate_lat = JSON.stringify(coordinate_lat);
	    			localStorage.coordinate_long = JSON.stringify(coordinate_long);
	   
	        });  
	        			
	        		lat_o = JSON.parse(localStorage.coordinate_lat);
	        		lon_o = JSON.parse(localStorage.coordinate_long);

	       for (var i = 0; i <=lon_o.length; i++) {
	        		var marker = new google.maps.Marker({	
					position: new google.maps.LatLng(lon_o[i], lat_o[i]),
					map: map,
					title: 'Our location'
			 		});
	        };  
     }

   function placemarker(location){
      	var marker = new google.maps.Marker({
		position: location,
		map: map,
		title: 'Our location'
 		});		
   }
}
	