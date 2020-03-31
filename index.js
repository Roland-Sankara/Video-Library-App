//sliding Between LogIn and SignUp pages

let login = document.getElementById("Login");
let signup = document.getElementById("Signup");
let slide_button = document.getElementById("slide-btn");

function Signup(){
    login.style.left="-400px";
    signup.style.left="50px";
    slide_button.style.left="110px";
}
function Login(){
    login.style.left="50px";
    signup.style.left="450px";
    slide_button.style.left="0px";
}

//Library sliding navigation

let button_nav= document.getElementById("btn-menu");
let movie_panel_two= document.getElementById("movie-panel-2");
let movie_panel_one= document.getElementById("movie-panel-1");
let movie_panel_three= document.getElementById("movie-panel-3");
let movie_panel_four= document.getElementById("movie-panel-4");
let cart_page = document.getElementById("movie-cart");

function Anime(){
    button_nav.style.left="0px";
    movie_panel_two.style="margin-top:0px;"
    movie_panel_one.style="margin-top:30px;"
    movie_panel_three.style="margin-top:30px;"
    movie_panel_four.style="margin-top:30px;"
}
function Sci(){
    button_nav.style.left="120px";
    movie_panel_two.style="margin-top:30px;"
    movie_panel_one.style="margin-top:-730px;"
    movie_panel_three.style="margin-top:30px;"
    movie_panel_four.style="margin-top:30px;"
}
function Action(){
    button_nav.style.left="240px";
    movie_panel_two.style="margin-top:30px;"
    movie_panel_one.style="margin-top:-1500px;"
    movie_panel_three.style="margin-top:30px;"
    movie_panel_four.style="margin-top:30px;"
}
function Serie(){
    button_nav.style.left="360px";
    movie_panel_two.style="margin-top:30px;"
    movie_panel_one.style="margin-top:-2270px;"
    movie_panel_three.style="margin-top:30px;"
    movie_panel_four.style="margin-top:30px;"
}
function change2(){
    button_nav.style.left="0px";
    movie_panel_two.style="margin-top:30px;"
    movie_panel_one.style="margin-top:-3050px;"
    movie_panel_three.style="margin-top:30px;"
    movie_panel_four.style="margin-top:30px;"
    cart_page="margin-top:30px;"
}