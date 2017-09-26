function validate(){
  var pass1 = document.getElementById("input1").value;
  var pass2 = document.getElementById("input2").value;
  if(pass1 !== pass2){
    alert("Sorry, your passwords do not match");
  }
  else if(pass1.length < 8){
    alert("Your password must be at least 8 characters long");
  }
  else {
    alert("Passwords are looking good!");
  }

}
