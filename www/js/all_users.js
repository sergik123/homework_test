	// страница все пользователи

	var user_id_friends = [];
	var marker_str      = [];
	marker_str          = localStorage.users ? JSON.parse(localStorage.users) : [];
	var count;

	///этот цикл определяет id текущего пользователя и создает ссылку 
	//чтоб можно было переходить по моей странице и попадать на страницу текущего пользователя
	for(var k = 0; k < marker_str.length;k++){
		if(marker_str[k].user.id == localStorage.user_id){
			var a = document.getElementById('user_hash');
			a.setAttribute('href','index.html#hash='+ marker_str[k].user.hash);
			count = k;	
		}
	}
	//записываем всех user в массив user_id_friends
	for(var i = 0; i < marker_str[count].user.id_friends.length; i++){
		user_id_friends.push(marker_str[count].user.id_friends[i]);
	}
	var div         = document.createElement('div');
	div.id          = "div_list_users";
	var div1        = document.createElement('div');
	div1.id         = "div_add_user";
	var button1     = document.getElementsByName('set_btn');
	var form_all_us = document.getElementById("user_all_form");
	//проходим циклом по по всем пользователям и записываем на страницу их имя и фамилию
	// и добавляем каждому из них нужный hash
	for (var i = 0; i < marker_str.length; i++) {
	var p  = document.createElement('p');
	var p1 = document.createElement('p');
	
	p.setAttribute("style", "font-size: 14pt");
	p1.setAttribute("style", "font-size: 14pt");
	p.innerHTML  ='<a  href=index.html#hash='+marker_str[i].user.hash+'>'+marker_str[i].user.name+' '+marker_str[i].user.last+'</a>'+'<br>';
	p1.innerHTML = '<input type="button" value="добавить в друзья" name="set_btn">'+'<br>';
	
	div.appendChild(p);
	div1.appendChild(p1);
	
	form_all_us.appendChild(div);
	form_all_us.appendChild(div1);	

	button1[i].onclick = function(){
		if(this.value=="пользователь у вас в друзьях"){
			alert('пользователь уже у вас в друзьях');
		}else{
	user_id_friends.push(this.id);
	alert('пользователь добавлен в друзья');
	this.value="пользователь у вас в друзьях";
	marker_str[count].user.id_friends = user_id_friends;
	localStorage.users = JSON.stringify(marker_str);	
	}			
		}	
	};
	$('a').on('click',function(){
		location.reload();
	});
	for(var j = 0; j< marker_str[count].user.id_friends.length;j++){
		button1[marker_str[count].user.id_friends[j]].value = "пользователь у вас в друзьях";
	}
	var k=-1;
	$(button1).each(function(){
		k++;
    $(this).attr("id",k);  
    });
