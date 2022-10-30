



var userNamel=document.getElementById("userName");


userNamel.innerHTML=localStorage.getItem("username");


var logOutBtn=document.getElementById("logBtn");




logOutBtn.addEventListener('click' , function(){

    logOut();

})



function logOut()
{
    localStorage.removeItem("username");
    
}
