$(document).ready(function(){
    $(".click_reg").click(function(){
        console.log("aa");
        $(".log_in").hide(300);
        $(".register").show(300)
    });
    $(".click_log").click(function(){
        console.log("aa");
        $(".log_in").show(300);
        $(".register").hide(300)
    });

    $(".user_account_topBar").click(function(){
        console.log("bb");
        $(".background_logIn").fadeIn(300);
    });

    $(".close_logIn").click(function(){
        $(".background_logIn").fadeOut(300);
    });
    
    $(function(){
        $(".btn_logIn").click(function(){
            console.log("aaa");
            var userNameLogIn = $("#userName_logIn").val();
            var passwordLogIn = $("#password_logIn").val();
            
            if(checkLogin()){
                if(userNameLogIn == "admin@gmail.com" && passwordLogIn == "123456"){
                    alert("Sign In Success!");
                    
                }else{
                    alert("Invalid usernam or password. Please try again!")
                }
            }
            
        });
    });

    function checkLogin(){
		// Lấy thông tin trên form
		var user = $("#userName_logIn").val();
		var password = $("#password_logIn").val();
		// abc@gmai.com
		var regx_email = /^[\w\-\.]+@[\w\-]+\.[a-z]{2,3}$/;
		var check = true;
		$(".err_logIn").text('');
		if (user == "") {
			$(".err_logIn").text('Please enter your username');
			check = false;
		} else {
			if (!regx_email.test(user)) {
				$(".err_logIn").text('Email wrong format!');
				check = false;
			}
		}
		

		if (password == "") {
			$(".err-pass").text('Please enter password!');
			check = false;
		} else {
			$(".err-pass").text('');
		}
		return check;
    }
    
    
});
