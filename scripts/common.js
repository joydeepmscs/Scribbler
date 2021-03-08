function showSignUp() {
    var signUpModal = document.getElementById("signup-modal");
    signUpModal.style.display = "flex";
}

function hideSignUp() {
    var signUpModal = document.getElementById("signup-modal");
    document.getElementById("signup-form").reset();
    signUpModal.style.display = "none";
}

function showSignIn() {
    var signInModal = document.getElementById("signin-modal");
    signInModal.style.display = "flex";
}

function hideSignIn() {
    var signInModal = document.getElementById("signin-modal");
    document.getElementById("signin-form").reset();
    signInModal.style.display = "none";
}

// making header as reusable component
onLoadHeader();
function onLoadHeader() {
    var headerTemplate=document.getElementsByClassName("header")[0];
    headerTemplate.innerHTML = '<div class="header-container">'+
        '<p class="title">ScriBBler</p>'+
        '<p class="subheading">Explore, Imagine, Create</p>'+
    '</div>'+
    '<div class="header-btn-container">'+
        '<button class="signup-btn" onclick="showSignUp()">Sign Up</button>'+
        '<button class="signin-btn" onclick="showSignIn()">Sign In</button>'+
    '</div>'+

<!-- Sign Up Modal -->
'<div id="signup-modal" class="modal">'+
    '<div class="modal-content">'+
        '<div class="modal-head-container">'+
            '<h2 class="modal-title">Get Started</h2>'+
            '<span class="modal-close" onclick="hideSignUp()">'+
            '<i class="fa fa-times" aria-hidden="true"></i>'+
          '</span>'+
        '</div>'+
        '<hr/>'+
        '<div class="modal-body">'+
            '<form id="signup-form">'+
                '<label for="name" class="label-text">Name</label>'+
                '<input type="text" placeholder="Enter your name" id="name" required/>'+
                '<label for="username" class="label-text">Username</label>'+
                '<input type="text" placeholder="Enter your username" id="username" required/>'+
                '<label for="password" class="label-text">Password</label>'+
                '<input type="password" placeholder="Enter your password" id="password" required/>'+
                '<label for="confirmpassword" class="label-text">Confirm Password</label>'+
                '<input type="password" placeholder="Re-enter your password" id="confirmpassword" required/>'+
                '<button type="submit" class="modal-popup-btn">Sign Up</button>'+
            '</form>'+
        '</div>'+
    '</div>'+
'</div>'+
<!-- Sign in Modal-->
'<div id="signin-modal" class="modal">'+
    '<div class="modal-content">'+
        '<div class="modal-head-container">'+
            '<h2 class="modal-title">Welcome Back!</h2>'+
            '<span class="modal-close" onclick="hideSignIn()">'+
            '<i class="fa fa-times" aria-hidden="true"></i>'+
          '</span>'+
        '</div>'+
        '<hr/>'+
        '<div class="modal-body">'+
            '<form id="signin-form">'+
                '<label for="signinusername" class="label-text">Username</label>'+
                '<input type="text" placeholder="Enter your username" id="signinusername" required/>'+
                '<label for="signinpassword" class="label-text">Password</label>'+
                '<input type="password" placeholder="Enter your password" id="signinpassword" required/>'+
                '<button type="submit" class="modal-popup-btn">Sign In</button>'+
                '<p class="bottom-banner">'+
                    'Not a member?'+
                    '<span class="bottom-banner-text" onclick="hideSignIn();showSignUp()">Sign Up</span>'+
                '</p>'+
            '</form>'+
        '</div>'+
    '</div>'+
'</div>';
}
