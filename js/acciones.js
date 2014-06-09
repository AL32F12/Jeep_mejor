// JavaScript Document
	var panel ='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"><div class="panel-content" align="center"><imgsrc="imagenes/logo_jeep.png" width="200" height="200"><div data-role="controlgroup"> <a data-role="button" href="#Principal">Principal</a> <a data-role="button" href="#nacimiento">Nacimiento</a>  <a data-role="button" href="#trayectoria">Trayectoria</a><a data-role="button" href="#lujos">Lujos</a> <a data-role="button" href="#acerca">Acerca de</a></div> </div> </div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});



$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(700);
  });
  
  $('#B_Beep').tap(function(){
    navigator.notification.beep(1);
  });
 },false); //deviceready
}); //document ready