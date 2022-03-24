// function getData(){
//     let profileName = localStorage.getItem('name');
//     let  profileEmail = localStorage.getItem('email');

// $(document).ready(function(){

//     // document.getElementsByClassName.innerHTML = (profileName);
//     // document.getElementsByClassName.innerHTML = (profileEmail);
//     $('.nametext').text(profileName);
//     $('.emailtext').text(profileEmail);
//     document.getElementById('name').value = display;

// })
// }
function myProfile(){

    // Perform localStorage action
    const fname = localStorage.getItem('name');
    $('.nametext').text(fname);
    const femail = localStorage.getItem('email');
    $('.emailtext').text(femail);

}
myProfile();
