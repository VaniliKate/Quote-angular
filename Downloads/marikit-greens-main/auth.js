$(document).ready(function () {
    let isLoggedIn = localStorage.getItem("email");
    if (isLoggedIn && isLoggedIn != "admin@gmail.com") {
        $(".hide-auth").hide()
        $(".admin-auth").hide();
    } else if (isLoggedIn && isLoggedIn == "admin@gmail.com") {
        $(".hide-auth").hide();
    } else {
        $(".admin-auth").hide();
        $(".hide-logged").hide();
    }
    $(".log-out").click(function () {
        localStorage.removeItem("pw");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        
        window.location.replace(
          (window.location.pathname = "/ft-homepage/homepage.html")
        ); 
    })
})