	// форма авторизации
	var str       =[];
	var flag_name = false;
	var flag_pass = false;
	var count     = 0;
	str = localStorage.users ? JSON.parse(localStorage.users) : [];

	$('#registration').on('click',function(){
		window.location.href="http://homework_test/index.html#registration";
	});

	//здесь при нажатии на кнопку проверяется логин и пароль с теми которые хранятся в localstorage
	//если они совпадают то мы записываем в user_id текущий id пользователя и заходим на его страницу
	$('#submit_in').on('click',function(){

		var name     = $('#name').val();
		var password = $('#password').val();

	for(var k = 0; k < str.length;k++){
		if(str[k].user.name){
			if (name!="") {
				if(name == str[k].user.name){
					flag_name = true;
					count     = str[k].user.hash;
					localStorage.setItem('user_id',str[k].user.id);
					if (password==str[k].user.pass) {
	     				flag_pass = true;
	    			}
				}
					
			}
		}		
	}

	if (flag_name==true && flag_pass==true) {
		window.location.href="http://homework_test/index.html#hash="+count;
		location.reload();
	};

	if (password=="") {
	     alert("Введите пароль пожалуйста!");		
	    }

	if(flag_name==false){
			alert("Такой пользователь не зарегистрирован на сайте!");
		}

	if(flag_pass==false){
			alert("Не правильный пароль!");
		}
	});
