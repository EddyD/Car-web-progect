$(document).ready(function(){
	var date = new Date();
	var year = date.getFullYear();
	function getYear(){
		document.getElementById("footer").innerHTML = "&copy; all the rights are saved for the Luxury Cars company " + year;
		
	}
		getYear();
		
		$("footer").css("textAlign","center");
		$("#log").on("click",function(){
			alert("lala");
		});
		$("ul li:nth(0)").on("click",function(){
			alert("bamba");
		});
		$("ul li:nth(1)").on("click",function(){
			alert("bamba4");
		});	
		$("ul li:nth(2)").on("click",function(){
			alert("bamba3");
		});
		$("a").on("click",function(){
			alert("lolo")
		});
		
		$(".reg input:nth(3)").on("click",function(){
			if( $("input:nth(0)").val()==''){
				 $("input:nth(0)").css("border","2px solid red")
				return;
			}else{
				$("input:nth(0)").css("border","");
			};
			if( $("input:nth(1)").val()==''){
				 $("input:nth(1)").css("border","2px solid red")
				return;
			}else{
				$("input:nth(1)").css("border","");
			};
			if( $("input:nth(2)").val()==''){
				 $("input:nth(2)").css("border","2px solid red")
				return;
			}else{
				$("input:nth(2)").css("border","");
			};
			$("input:nth(0)").val("");
			$("input:nth(1)").val("");
			$("input:nth(2)").val("");
			alert("Your Personal Information is updated successfully");
			
		});

});
