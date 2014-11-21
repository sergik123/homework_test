// страница user
window.onload = init;
function init(){
	navigator.geolocation.getCurrentPosition(function(response) {
	       	initialize(response.coords);
	     });
		var map;
		var count      = 0;
		var marker;
		var tmp        = 0;
		var tmp1;
		var infowindow;
		var markers_lat         = [];
		var markers_lon         = [];
		var markers_title       = [];
		var markers_description = [];
		var marker_str = localStorage.users ? JSON.parse(localStorage.users) : [];	
	//этот цикл определяет hash текущего пользователя и создает ссылку 
	//чтоб можно было переходить по моей странице и попадать на страницу текущего пользователя
		for(var k=0; k<marker_str.length;k++){
			if(marker_str[k].user.hash==window.location.hash.split('=')[1]){
				if(marker_str[k].user.id==localStorage.user_id){
			var a = document.getElementById('user_hash');
			a.setAttribute('href','index.html#hash='+ marker_str[k].user.hash);
		}
			count = marker_str[k].user.id;
			}
		}
		$('#user_hash').on('click',function(){
		location.reload();
		});
		
		$('#users_all').on('click',function(){
		location.reload();
		});
	
		var contentString = document.getElementById("first_form");//форма для ввода текста для infowindow
		var contentStr    =  document.getElementById("message_info");//форма которая показывает внесенный текст

		var div = document.getElementById('div_name');
		var p = document.createElement('h3');
		p.innerHTML=marker_str[localStorage.user_id].user.name+' '+marker_str[localStorage.user_id].user.last;
		div.appendChild(p);

		function initialize(coords) {
			map_coords(coords);

			if(marker_str[count].user.id==localStorage.user_id){
				maps_click();
			}
				
			// цикл в который записываем координаты и описание полученные с localstorage
		for (var j = 0; j <=marker_str[count].user.markers.lat.length; j++) {
		markers_lat.push(marker_str[count].user.markers.lat[j]);
		markers_lon.push(marker_str[count].user.markers.lon[j]);
		markers_title.push(marker_str[count].user.markers.title[j]);
		markers_description.push(marker_str[count].user.markers.description[j]);
			
	    markerLatLng = new google.maps.LatLng(marker_str[count].user.markers.lat[j],marker_str[count].user.markers.lon[j]);
	    marker = new google.maps.Marker({
		position: markerLatLng,
		map: map,
		title: "text"
 		});	
	    if(marker_str[count].user.id==localStorage.user_id){
	    		myFunction_change();
				calc();
	    }
			mouseovers();	
			mousedown();		
		}
	}
	google.maps.event.addDomListener(window,'load',initialize);
	//функция устанавливает карту
	function map_coords(coords){
   		var mylatLng = new google.maps.LatLng(49.961843, 36.323477);
	    var mapOptions = {
	        center: mylatLng,
	        zoom: 18,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    map = new google.maps.Map(document.getElementById("map"),
	            mapOptions);
   	}
   	//функция для установки маркеров
   	function placemarker(location){
   		
       	marker = new google.maps.Marker({
		position: location,
		map: map,
		title: "text"
 		});	  
   }
   //функция которая срабатывает при клике на маркер.
   function calc(){
	    google.maps.event.addListener(marker, 'click', function(event) {
			contentString.style.visibility='visible';	
	    if (infowindow) {
			infowindow.close();
		};
		points(event.latLng.k,event.latLng.B);
		addinfowindow(point,contentString);
document.getElementById('textarea_txt').value =marker_str[count].user.markers.description[tmp];
document.getElementById('title_txt').value = marker_str[count].user.markers.title[tmp];
	        	
	    });	  
	};
	function show(){
		if (infowindow) {
			 infowindow.close();
		};
		addinfowindow(point,contentString);
	}
	//получает координаты маркеров. 
	//В зависимости от того в какой функции используем, будем получать разные координаты маркеров
	function points(lat, lon){
   		point = new google.maps.LatLng(
        parseFloat(lat+0.000150),
        parseFloat(lon));
   	}
   	// функция для отображения infowindow
   	function addinfowindow(point,contentString){
   		infowindow = new google.maps.InfoWindow({                
			map: map,
			position: point,                                
			content: contentString
        });
   	}
   	//функция при клике на карту записывает в массивы координаты маркеров 
   	//и записывает в localstorage массив маркеров
   	//еще срабатываеют все функции связанные с маркерами 
   	function maps_click(){
  
  google.maps.event.addListener(map,'click',function(event){
 
	var lat_arr=event.latLng.k;
	var lon_arr=event.latLng.B;

	markers_lat.push(lat_arr);
	markers_lon.push(lon_arr);
	marker_str[count].user.markers.lat = markers_lat;
	marker_str[count].user.markers.lon = markers_lon;
	markerLatLng = new google.maps.LatLng(lat_arr, lon_arr);
	localStorage.users = JSON.stringify(marker_str);		
	placemarker(markerLatLng);
	mouseovers();
	mousedown();
	calc();
	myFunction_change();				
		});
   };
   //функция срабатывает когда мы кликаем на маркер и записываем в массивы описания данные с textarea и input
   //и записываем в localstorage массивы описания маркеров
   function myFunction_change(){
   	$('#submit').on('click',function(){
   		
	var cnt = $("#textarea_txt").val();
	var title_txt = $("#title_txt").val();

	markers_description[tmp]=cnt;
	markers_title[tmp]=title_txt;

	marker_str[count].user.markers.title = markers_title;
	marker_str[count].user.markers.description = markers_description;

	localStorage.users = JSON.stringify(marker_str);	
	contentStr.style.visibility='hidden';
	return false;
		});
   }
//функция срабатывает при наведении на маркер и показывается infowindow
// и проверяется infowindow на undefined
   function mouseovers(){
 		google.maps.event.addListener(marker, 'mouseover', function(event) {

 		contentString.style.visibility='hidden';

 	for(var i=0; i<marker_str[count].user.markers.lat.length; i++){
 		if(event.latLng.k==marker_str[count].user.markers.lat[i]){
 			tmp = i;
 			markers_title.push(' ');
 			markers_description.push(' ');
 			}
 		}
 		if(typeof(marker_str[count].user.markers.title[tmp])=="undefined" || typeof(marker_str[count].user.markers.title[tmp])=="object"){
			marker_str[count].user.markers.title = markers_title;
			marker_str[count].user.markers.description = markers_description;
			contentStr.innerHTML='<div id="content" onclick="show()"><h2 id="mes_title" style="margin: 0px">'+marker_str[count].user.markers.title[tmp]+'</h2>'+
	'<p id="content_mes" style="margin: 0px">'+marker_str[count].user.markers.description[tmp]+'</p></div>';
 		}
 		else{
 			contentStr.innerHTML='<div id="content" onclick="show()"><h2 id="mes_title" style="margin: 0px">'+marker_str[count].user.markers.title[tmp]+'</h2>'+
	'<p id="content_mes" style="margin: 0px">'+marker_str[count].user.markers.description[tmp]+'</p></div>';
 		}
	     	contentStr.style.visibility='visible';
			points(event.latLng.k,event.latLng.B);
    if (infowindow) {
			 infowindow.close();
			};
            addinfowindow(point,contentStr);
	     });
 	}
 	//функция срабатывает когда курсор мыши отводится от маркера
 	function mousedown(){
 	google.maps.event.addListener(marker, 'mouseout', function(event) {
 	if(contentString.style.visibility!='visible')
 		if (infowindow) {
			    infowindow.close();
		};
 	});
 }
	}	