
//эта функция должна показывать и скрывать различные блоки, 
//но почему то если подключить этот скрипт, то неправильно работает script который отвечает 
//за отображение карты и установки маркеров
// поэтому я вынес его в html 
if(window.location.hash==''){
         window.location.hash='#registration';
      }
if(window.location.hash=='#auth'){
      document.getElementById('wrapper').style.visibility='hidden';
         document.getElementById('container').style.visibility='visible';
         document.getElementById('user_wrapper').style.visibility='hidden';
         document.getElementById('input').style.visibility='hidden';
         document.getElementById('user_all_form').style.visibility='hidden';
         document.getElementById('map').style.visibility='hidden';
         document.getElementById('left_block').style.visibility='hidden';
   }else 
   if(window.location.hash=='#registration'){
      document.getElementById('wrapper').style.visibility='visible';
         document.getElementById('container').style.visibility='hidden';
         document.getElementById('user_wrapper').style.visibility='hidden';
         document.getElementById('input').style.visibility='visible';
         document.getElementById('user_all_form').style.visibility='hidden';
         document.getElementById('map').style.visibility='hidden';
         document.getElementById('left_block').style.visibility='hidden';
   }else 
   if(window.location.hash=='#users_all'){
      document.getElementById('wrapper').style.visibility='hidden';
         document.getElementById('container').style.visibility='hidden';
         document.getElementById('user_wrapper').style.visibility='hidden';
         document.getElementById('input').style.visibility='hidden';
         document.getElementById('map').style.visibility='hidden';
         document.getElementById('user_all_form').style.visibility='visible';
         document.getElementById('left_block').style.visibility='visible';
         
   }else 
   if(window.location.hash=='#add'){
      document.getElementById('wrapper').style.visibility='hidden';
         document.getElementById('container').style.visibility='hidden';
         document.getElementById('user_wrapper').style.visibility='hidden';
         document.getElementById('input').style.visibility='hidden';
         document.getElementById('map').style.visibility='hidden';
         document.getElementById('my_friends_form').style.visibility='visible';
         document.getElementById('left_block').style.visibility='visible';  
   }else
   if(window.location.hash!='#registration' && window.location.hash!='#auth'){
      document.getElementById('wrapper').style.visibility='hidden';
         document.getElementById('container').style.visibility='hidden';
         document.getElementById('user_wrapper').style.visibility='visible';
         document.getElementById('user_wrapper').style.visibility='visible';
         document.getElementById('input').style.visibility='hidden';
         document.getElementById('map').style.visibility='visible';
         document.getElementById('user_all_form').style.visibility='hidden';
         document.getElementById('left_block').style.visibility='visible';
         
   }
         var button = document.getElementById('input');
         button.onclick = function(){
         
      window.location.href="http://homework_test/index.html#auth";
      //location.reload();
   }

