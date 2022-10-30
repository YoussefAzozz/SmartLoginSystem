


var userSignEmail=document.getElementById("signEmail");

var userEmailPassword=document.getElementById("signPassword");

var users=[];

users=JSON.parse(localStorage.getItem("users"));

var messageAlert = document.getElementById("message");

var loginButton=document.getElementById("login");

loginButton.addEventListener('click',function(){

    if(userSignEmail.value == "" || userEmailPassword.value == "")
    {
        messageAlert.innerHTML=`<p class="alert alert-danger">All Inputs are required</p>`;
    }

    else
    {
        login();
    }

})


function login()
{
    for(var i=0;i < users.length;i++)
    {
        if(users[i].email.toLowerCase() == userSignEmail.value.toLowerCase() && users[i].password.toLowerCase() == userEmailPassword.value.toLowerCase())
        {
            var userForWelcome = users[i].name;
            localStorage.setItem("username",userForWelcome);
            location.href = "file:///D:/FullStackDevelopment/FrontEndDevelopment/JavaScript/SmartLoginSystem/Home/index.html";
            // loginButton.setAttribute("href" , "../..Home/index.html");
            return;
        }

        
    }
        
    messageAlert.innerHTML=`<p class="alert alert-danger">Incorrect mail or password</p>`;
        
}













