function validateEmail()  
{  
var x=document.myform.email.value;  
var atPosition=x.indexOf("@");  
var dotPosition=x.lastIndexOf(".");  
if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atPostion:"+atPosition+"\n dotPosition:"+dotPosition);  
  return false;  
  }  
}
