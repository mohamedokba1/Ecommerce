var sliderindex=1;
var numberOfProducts =0;
var fullName;
var email;
var phone;
var submit;
const nameRegex=/^[a-zA-Z ]{2,30}$/;
const mailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex=/^01[0-2]\d{8}$/;

fullName = document.getElementById("fullName");
email = document.getElementById("email");
phone = document.getElementById("phone");
var errors = document.getElementsByTagName("small");


setInterval(function (){
    switch(sliderindex)
    {
        case 1:
            document.getElementById("navigator-2").style.backgroundColor = "white";
            document.getElementById("navigator-3").style.backgroundColor = "white";
            document.getElementById("navigator-1").style.backgroundColor = "black";
            break;
        case 2:
            document.getElementById("navigator-1").style.backgroundColor = "white";
            document.getElementById("navigator-3").style.backgroundColor = "white";
            document.getElementById("navigator-2").style.backgroundColor = "black";
            break;
        case 3: 
            document.getElementById("navigator-1").style.backgroundColor = "white";
            document.getElementById("navigator-2").style.backgroundColor = "white";
            document.getElementById("navigator-3").style.backgroundColor = "black";
            break;
        default:
            break;
    }
        if(sliderindex==3)
        {
            sliderindex=1;
            document.getElementById("slider-img").setAttribute("src", "./img/"+sliderindex+".jpg");
        }
        else 
        {
            sliderindex++;
             document.getElementById("slider-img").setAttribute("src", "./img/"+sliderindex+".jpg");
        }
}, 2500);

document.getElementById("scroll-top").addEventListener('click', ()=>{
    document.body.scrollIntoView(); });

fullName.addEventListener('input', ()=>{
    errors[0].style.display="none";
        if((fullName.value).match(nameRegex))
        {
            fullName.style.border="2px solid green";
        }
        else
        {
            fullName.style.border="2px solid red";
        } 
});
email.addEventListener('input', ()=>{
    errors[1].style.display="none";
        if((email.value).match(mailRegex))
        {
            email.style.border="2px solid green";
        }
        else
        {
            email.style.border="2px solid red";
        } 
});
phone.addEventListener('input', ()=>{
    errors[2].style.display="none";
        if((phone.value).match(phoneRegex))
        {
            phone.style.border="2px solid green";
        }
        else
        {
            phone.style.border="2px solid red";
        } 
});

function submitForm()
{
    
    if(!(fullName.value.match(nameRegex)))
    {
        if((fullName.value).length==0)
        {
            errors[0].style.display="block";
            errors[0].innerHTML="Name is Required";
        }
        else
        {
            errors[0].style.display="block";
            errors[0].innerHTML="Name is not Valid !";
        }
    }
    if(!(email.value.match(mailRegex)))
    {
        if((email.value).length==0)
        {
            errors[1].style.display="block";
            errors[1].innerHTML="Email is Required";
        }
        else
        {
            errors[1].style.display="block";
            errors[1].innerHTML="Email is not valid !";
        }
    } 
    if(!(phone.value.match(phoneRegex)))
    {
        if((phone.value).length==0)
        {
            errors[2].style.display="block";
            errors[2].innerHTML="phone is Required";
        }
        else
        {
            errors[2].style.display="block";
            errors[2].innerHTML="phone is not valid !";
        }
    } 
    if((fullName.value.match(nameRegex))&&(email.value.match(mailRegex))&&(phone.value.match(phoneRegex)))
    {
        var success= document.getElementById("success-message");
        (success.parentNode).style.display="block";
        success.innerHTML="Your Feedback Sumbmited Successfully !";
    }
}
function displayLaptops()
{
    document.getElementById("Mobile").style.display="none";
    document.getElementById("Accessories").style.display="none";
    document.getElementById("second-cat").style.borderBottom="none";
    document.getElementById("third-cat").style.borderBottom="none";
    document.getElementById("first-cat").style.borderBottom="3px solid rgb(23, 19, 36)";
    document.getElementById("Laptops").style.display="flex";
    
}
function displayMobile()
{
    document.getElementById("Laptops").style.display="none";
    document.getElementById("Accessories").style.display="none";
    document.getElementById("third-cat").style.borderBottom="none";
    document.getElementById("first-cat").style.borderBottom="none";
    document.getElementById("second-cat").style.borderBottom="3px solid rgb(23, 19, 36)";
    document.getElementById("Mobile").style.display="flex";
    
}
function displayAccessories()
{
    document.getElementById("Mobile").style.display="none";
    document.getElementById("Laptops").style.display="none"; 
    document.getElementById("second-cat").style.borderBottom="none";
    document.getElementById("first-cat").style.borderBottom="none";
    document.getElementById("third-cat").style.borderBottom="3px solid rgb(23, 19, 36)";
    document.getElementById("Accessories").style.display="flex";
    
}
function addToCart()
{
    numberOfProducts++;
    document.getElementById("cart-counter").innerHTML=`${numberOfProducts}`;
}