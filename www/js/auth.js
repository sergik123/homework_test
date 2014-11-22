	// страница авторизации
	var str       =[];
	var flag_name = false;
	var flag_pass = false;
	var count     = 0;
	str = localStorage.users ? JSON.parse(localStorage.users) : [];

	$('#registration').on('click',function(){
		window.location.href="http://homework_test/index.html#registration";
	});

	//при клике на кнопку проверяется имя и пароль с теми что хранятся в localstorage
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
	     alert("please enter password!");		
	    }

	if(flag_name==false){
			alert("login not found");
		}

	if(flag_pass==false){
			alert("password not found!");
		}
	});
