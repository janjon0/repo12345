let login_Users = [
    {
    username: "user1", pass: "pass123", age: 25, gender: "male", phone: "123-456-7890"
    },
    {
    username: "user2", pass: "abc456", age: 30, gender: "female", phone: "987-654-3210"
    }
   ];
function onenterr(){
    var username1=document.getElementById('Susername').value ;
    var pass1=document.getElementById('spass').value ;
    var email=document.getElementById('email').value ;
    var phone =document.getElementById('phonenum').value ;
    var age =document.getElementById('age').value ;
    var cpas=document.getElementById('confirmpass')
    //var regex= /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{5.12}$/;
    if(username1==""||pass1==""||email==""||phone==""||age==""){
        alert("enter unfilled text")
    }
   
    else if(phone.lenght<11. || phone.lenght>11){
        alert("enter only 11");
    }
    else if(age<=18 || age>60){
        alert("enter between 18to60"); 
    }
   
   // else if(regex(pass1)){
   //  alert("the password must have uppercase lowercase");
    
     else if(pass1.lenght!==cpas.lenght){
    alert("enter equal pass"); 
   }
   
   else {
    var obj={username:username1 ,pass:pass1}
    login_Users.push(obj);
    console.log(obj);
    alert("Added succefuly");
   }
}
function cli(){
 var lusername=document.getElementById('lusername').value
 var lpass=document.getElementById('lpassword').value
 if(lusername==""||lpass==""){
    alert("ENTER INVALLED text")
 }
 for(let i=0;i<login_Users.length;i++){
    if(lusername==login_Users[i].username && lpass==login_Users[i].pass){
        alert("welcome");
        console.log(login_Users);
         // window.location.href="quiz.html" 
    }  
    else {
        alert("try again");
       
    }
 }


}
function clli(){
    let fpass=document.getElementById('fpassword').value;
    let fusername=document.getElementById('fusername').value
    let userexisist =login_Users.some(login_Users=>login_Users.username==fusername);
    if(userexisist){
        alert("pass ")
        userexisist.pass=fpass;
    }
    else{
        alert("invalled")
    }
}





