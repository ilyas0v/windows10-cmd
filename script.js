$(function(){
	$("#konteynr").draggable();
});
$(document).ready(function(){
	$("#close").on("click", function(){
		$("#konteynr").fadeOut('fast');
	});
	
	$("#GIZLI_INPUT").on("keyup",function(e){
		if (e.keyCode == 13) {
			$('#command_zone').animate({scrollTop:100000},'50');
			var YAZI = $(this).val();
			YAZI = YAZI.trim();
			var Hisse = YAZI.split(" ");
			if(Hisse[0]=="cls"){
				$("#commandlar").html('<li>C:\\Users\\ILYAS><span class="input1"></span><span id="kursor" style="color:white">_</span></li>');
				$(this).val("");
			}else{
				$(this).val("");
				$(".input1").last().attr("class","COMPLETED");
				$("#kursor").remove();
				if(YAZI!="" && YAZI!=" "){
					var HISSECIKLER = YAZI.split(" ");
					$("#commandlar").append("<span style='font-family:consolas;font-size:14px;'> '"+HISSECIKLER[0]+"' is not recognized as an internal or external command,<br>operable program or batch file.</span><br><br><li>C:\\Users\\ILYAS><span class='input1'></span><span id='kursor' style='color:white'>_</span></li>");
				}else{
					$("#commandlar").append("<li>C:\\Users\\ILYAS><span class='input1'></span><span id='kursor' style='color:white'>_</span></li>");
				}
			}
		}else{
			$(".input1").text($(this).val());
		}
	});
	
	$("#GIZLI_INPUT").focus();
	$("body").click(function(){
		$("#GIZLI_INPUT").focus();
	});
	
	setInterval(function blink () {
	$('#kursor').toggleClass('gorunmez_kursor');
	$("#GIZLI_INPUT").focus();}, 400);
	
});