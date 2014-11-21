	// страница мои друзья

	var marker_str = [];
	var tmp        = [];
	var marker_id  = [];
	var count      = 0;
	marker_str     = localStorage.users ? JSON.parse(localStorage.users) : [];


	

	var div = document.createElement('div');
	var my_friends_form = document.getElementById("my_friends_form");
	//этот цикл определяет id текущего пользователя и создает ссылку 
	//чтоб можно было переходить по моей странице и попадать на страницу текущего пользователя
	for(var k = 0; k < marker_str.length;k++){
			if(marker_str[k].user.id == localStorage.user_id){
			var a = document.getElementById('user_hash');
			a.setAttribute('href','index.html#hash='+ marker_str[k].user.hash);
			count = k;

			}
	
			
			
	}
	//этот цикл добавляет в массив tmp всех друзей текущего пользователя
	for(var i = 0; i < marker_str[count].user.id_friends.length; i++){
		tmp.push(marker_str[count].user.id_friends[i]);
		
	}
	// проходим в цикле по всему массиву и добавляем друзей на страницу
	for(var j = 0; j < tmp.length;j++){
		
		var p = document.createElement('p');
		p.setAttribute("style", "font-size: 14pt");
		p.innerHTML ='<a href=index.html#hash='+marker_str[marker_str[count].user.id_friends[j]].user.hash+'>'+marker_str[marker_str[count].user.id_friends[j]].user.name+' '+marker_str[marker_str[count].user.id_friends[j]].user.last+'</a>'+'<br>';
		div.appendChild(p);
		my_friends_form.appendChild(div);
		
	}
		
	
	$('a').on('click',function(){
		location.reload();
	});

	
