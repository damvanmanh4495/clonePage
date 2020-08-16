$(function(){
	$(".btn_signIn").click(function(event) {
		console.log('hello');
		// Lấy thông tin trên form
		var user = $(".user").val();
		var password =$(".password").val();

			// Kiểm tra giá trị nhập với tên tk và mk
		if(checkSignIn()){
			if (user == "admin" && password == "admin") {
				alert("Sign In Success!");
			} else {
				alert("Wrong username or password!");
			}
		}
			
	});

	$(".btn_signUp").click(function(event) {
		var input1 = $(".input_1").val();
		var input2 = $(".input_2").val();
		if(checkSignUp()){
			if(input1 == input2){
				alert("Sign Up Success");
			}else{
				alert("Your password and confirmation password do not match.")
			}
		}
		
	});

	function checkSignIn(){
		// Lấy thông tin trên form
		var user = $(".user").val();
		var password = $(".password").val();
		// abc@gmai.com
		var regx_email = /^[\w\-\.]+@[\w\-]+\.[a-z]{2,3}$/;
		var check = true;
		$(".err-user").text('');
		if (user == "" && password != "") {
			alert("Please enter your username");
			check = false;
		} else {
			if (!regx_email.test(user)) {
				$(".err-user").text('Email invalid!');
				check = false;
			}
		}
		

		if (user != "" && password == "") {
			alert("Please enter your password!");
			check = false;
		} else {
			check = true;
		}
		return check;
	}

	function checkSignUp(){
		var input1 = $(".input_1").val();
		var input2 = $(".input_2").val();
		var input3 = $(".input_3").val(); 
		var input4 = $(".input_4").val();
		var check2 = true;
		if(input1 == ""|| input3 == "" || input4 == ""){
			alert("Please enter all request information!"); 
			check = false;
		}else if(input2 = ""){
			alert("Please enter password confirm");
		}else{
			check=true;
		}
	}
})