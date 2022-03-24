$(document).ready(function () {
  $(".go-home").click(function () {
    console.log("hello")
     window.location.replace(
       window.location.pathname = "/ft-homepage/homepage.html"
     ); 
  })

  $("#deliver").submit(function(event){
    event.preventDefault();
    getItDelivered();
});
  
  $(".form").submit(function(){
    formInputs();
  });

  $("#pickup").submit(function(){
    pickUp();
  });
});

function getItDelivered() {
  $(".deliversection").show();
  $("#pickup").hide();
  $("#deliver").hide();
  $("#deliveryoptions").hide();
  $(".options").hide();
  $(".pickup-feedback").hide();
  
}


function formInputs() {

let firstName = $("#firstname").val();
let lastName = $("#lastname").val();
let phoneNumber = $("#phonenumber").val();
let location = $("#location").val();

  if (firstName === "") {
    alert("Please enter your first name")
  } else if(lastName === "") {
    alert("Please enter your last name")
  } else if(phoneNumber === "") {
    alert("Please enter your phone number")
  } else if(location === "") {
    alert ("Please enter your location")
  } else if (firstName !== "" && lastName !== "" && phoneNumber !== "" && location !== "") {

  $("#pickup").hide();
  $("#deliver").hide();
  $("#deliveryoptions").hide();
  $(".deliversection").hide();


  $(".card-delivery").show();
  $(".delivery-feedback").text("Thank you " + firstName + " " + lastName + " for shopping with Us. Your greens will be delivered to " + location + ". For any further communication, we shall reach you through this number " + "+254787878787");
  

  }

}
function pickUp() {
  $(".options").hide();
  $("#pickup").hide();
  $("#deliver").hide();
  $("#deliveryoptions").hide();
  $(".deliversection").hide();

  $(".pickup-feedback").show();
  $(".card-pickup").show();
};

