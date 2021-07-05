function appTodo() {
  
var mail = JSON.parse(localStorage.getItem("login"));
console.log(mail);

if (JSON.parse(localStorage.getItem(mail)) != null) {


 window.location.href = "todo.html";

  }else{
    console.log("helo");
  }

}





function signUp() {

//password validation

  var password= document.getElementById('password').value;
  console.log(password);
  var pattern1 = /\w\W\d/g; 
  var result1 = pattern1.test(password);




//mail id validation

  var mail = document.getElementById('mail').value;
  var pattern2=  /\S+@\S+\.\S+/; 
  var result2 = mail.match(pattern2);

  console.log(mail);

  //variable declare for retype password


  var reTypePassword=document.getElementById("retype").value;
 


if(result1 && result2){



if(password==reTypePassword){

  console.log("password matches");



//local storage checking if already mail exists or not

if (JSON.parse(localStorage.getItem(mail)) != null) {


    
    alert(" This Email address  already exists");

} else {

    console.log(`Email address not found`); 



var name=document.getElementById("name").value;
var mobileNumber=document.getElementById("mobileNo").value;



var json={ "username":name,
"mobileno":mobileNumber,
"Password":password };

localStorage.setItem(mail, JSON.stringify(json));
   console.log(json);
   
   console.log(JSON.parse(localStorage.getItem(mail)));

   localStorage.setItem("login", JSON.stringify(mail));

 window.location.href = "todo.html";
 
}




}
else{

  console.log("password not matched");
  alert("password not matched");
   document.getElementById("repass").innerHTML="password not matched";
}



}
else{

  console.log("Incorrect Password or Mailid");
  alert("Incorrect Password or Mailid");
}

}




//login page


function login(){

var mail = document.getElementById('logmail').value;
console.log(mail);




var password=document.getElementById('logpass').value;
console.log(password);


console.log(JSON.parse(localStorage.getItem(mail))["Password"] );

if (JSON.parse(localStorage.getItem(mail)) != null) {


    console.log(`Email address exists`);

if(password===JSON.parse(localStorage.getItem(mail))["Password"]){

  console.log('show profile');



localStorage.setItem("login", JSON.stringify(mail));
  
   
   console.log(JSON.parse(localStorage.getItem("login")));

   window.location.href = "todo.html";
}else{

document.getElementById("pwd-wrng").innerHTML="Password wrong";


}


} else {
    console.log(`Email address not found`); 
   
}

}





function profile(){




console.log("hello");

 var Mail=JSON.parse(localStorage.getItem('login'));
console.log(Mail);

var jsonObject=JSON.parse(localStorage.getItem(Mail));
console.log(jsonObject);

 
var Mobile=JSON.parse(localStorage.getItem(Mail))["mobileno"];
console.log(Mobile);

var Name=JSON.parse(localStorage.getItem(Mail))["username"];
console.log(Name);

var Password="*********";
console.log(Password);



document.getElementById("profile").innerHTML=Name;                     
document.getElementById("mobileNumber").innerHTML=Mobile;
document.getElementById("mailid").innerHTML=Mail;
document.getElementById("passwrd").innerHTML=Password;



}



function changePassword() {
  

//html variables

var oldPassword=document.getElementById("oldpwd").value;
var newPassword=document.getElementById("newpwd").value;
var confirmPassword=document.getElementById("confirmpwd").value;





//function variables
 var Mail=JSON.parse(localStorage.getItem('login'));
console.log(Mail);

var jsonObject=JSON.parse(localStorage.getItem(Mail));
console.log(jsonObject);


var number=JSON.parse(localStorage.getItem(Mail))["mobileno"];
console.log(number);

var Name=JSON.parse(localStorage.getItem(Mail))["username"];
console.log(Name);

var password=JSON.parse(localStorage.getItem(Mail))["Password"];
console.log(password);




if(oldPassword===password){



console.log("change password");

  var pattern = /\w\W\d/g; 
  var result = pattern.test(newPassword);
console.log(result);

 if(result){


if(newPassword===confirmPassword){


console.log(newPassword);

var newJson={ "username":Name,
"mobileno":number,
"Password":newPassword };

localStorage.setItem(Mail, JSON.stringify(newJson));
   console.log(newJson);
   
   console.log(JSON.parse(localStorage.getItem(Mail)));

}else{

alert("new password not matches with confirm password")

}


 }else{
alert("password not matches with pattern");
  console.log("password not matches with pattern");
 }


}
else{


console.log(" no change password");



}










}






function pwdchange(){

window.location.href = "passwordChange.html";







}


function logout(){



localStorage.removeItem("login");

window.location.href = "index.html";



}



