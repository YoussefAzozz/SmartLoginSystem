


var userName=document.getElementById("signName");

var useremail=document.getElementById("signEmail");

var userpassword=document.getElementById("signPassword");

var registerButton=document.getElementById("registerUser");

var clear=document.getElementsByClassName("form-control");

var messageForAlert = document.getElementById("message");

var usersContainer=[];



if(localStorage.getItem("users") != null)
{
    usersContainer=JSON.parse(localStorage.getItem("users"));
}



registerButton.addEventListener("click",function(){

    addUser();

})



function addUser()
{

    if(validateInputs() == true)
    {
        if(ifHasAlreadyAccount() == true)
        {
            messageForAlert.innerHTML=`<p class="text-center">You have already an account , Please sign in</p>`;
        }
        else
        {
            var user={
                name:userName.value,
                email:useremail.value,
                password:userpassword.value
            }
        
            usersContainer.push(user);
            localStorage.setItem("users",JSON.stringify(usersContainer));
            clearForm();
            localStorage.setItem("username",user.name);
            location.href="file:///D:/FullStackDevelopment/FrontEndDevelopment/JavaScript/SmartLoginSystem/Home/index.html";
        }
        
    }

    else if(userName.value == "" || useremail.value == "" || userpassword.value == "")
    {
        messageForAlert.innerHTML=`<p class="alert alert-danger">All Inputs are required</p>`;
    }
    

    else
    {
        messageForAlert.innerHTML=`<p class="alert alert-danger">Invalid username or email</p>`;
    }

    
}


function clearForm()
{
    for(var i=0;i<clear.length;i++)
    {
        clear[i].value="";
    }
}


function validateInputs()
{
    var regexForName=/[A-Z][a-z]{3,15}\s{0,1}[A-Z][a-z]{3,15}/;

    var regexForEmail=/[a-z]{5,15}[0-9]{0,5}@(yahoo|gmail)\.com/;

    if(regexForName.test(userName.value) == true && regexForEmail.test(useremail.value) == true)
    {
        return true;
    }

    else
    {
        return false;
    }
}



function ifHasAlreadyAccount()
{
    for(var i=0;i < usersContainer.length;i++)
    {
        if(usersContainer[i].name.toLowerCase() == userName.value.toLowerCase() && usersContainer[i].email.toLowerCase() == useremail.value.toLowerCase())
        {
            return true;
        }
    }
    return false;
}