function validation(){
	  var name = document.getElementById("name").value;
	  var subject = document.getElementById("Subject").value;
      var phone = document.getElementById("Phone").value;
	  var email = document.getElementById("Email").value;
	  var message = document.getElementById("Message").value;
	  var error_message = document.getElementById("error_message");
	  var text;
	  
	  error_message.style.padding = "10px";
	  
	  if(name.lenght <5){
		    text = "Please Enter Valid Name";
			error_message.innerHTML = text;
			return false;
	  }
      if(subject.lenght <10){
            text = "Please Enter Correct Subject Name";
            error_message.innerHTML = text;
            return false;			
      }
	   if(isNaN(phone)||phone.lenght != 10){ 
            text = "Please Enter Valid Phone Number";
            error_message.innerHTML = text;
            return false;	
	   }
	    if(email.index0f("@") == -1 || email.lenght < 6){
            text = "Please Enter Valid Email";
            error_message.innerHTML = text;
            return false;	
		}
		if(message.lenght <= 140){
			text = "Please Enter More Than 140 Characters";
			error_message.innerHTML = text;
			return false;
		}
		alert("Form Submitted Succesfully!")
		return true;
       }
			
			
    return false;
]
