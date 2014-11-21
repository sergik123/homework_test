//форма регистрации
var str = [];
var obj = new Object();

str = localStorage.users ? JSON.parse(localStorage.users) : [];

if(!localStorage.getItem('users')){
		localStorage.setItem('users',str);
	}


		
	$('#submit_reg').on('click',function(){

		var name = $('#first_name').val();
		var last = $('#last').val();
		var email = $('#email').val();
		var password = $('#pass').val();
		var age = $('#age').val();
		var hash_code = Math.floor((Math.random() * 100000) + 100);


	 obj = {
			user: {
				name:  name,
				last:  last,
				email: email,
				pass:  password,
				age:   age,
				hash:  hash_code,
				id:    0,
				id_friends: 0,
			markers: {
				lat:   		0,
				lon:   		0,
				title: 		'',
				description:''
			}
		}
			
	}

		
		var object = new Object(obj);
		obj.user.id=str.length;
		
		str.push(object);
		
		localStorage.users =JSON.stringify(str);
		window.location.href="http://homework_test/index.html#auth";
		location.reload();

		});
