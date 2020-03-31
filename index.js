//movie panel height
let panel_height = document.getElementById('movie-panel-1').offsetHeight;
document.getElementById('movie-panels').style=`height:${panel_height}px;`


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
function Signup_mobile(){
    login.style.left="-480px";
    signup.style.left="10px";
    slide_button.style.left="110px";
}
function Login_mobile(){
    login.style.left="10px";
    signup.style.left="480px";
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
    movie_panel_one.style="margin-top:0px;"
    movie_panel_three.style="margin-top:0px;"
    movie_panel_four.style="margin-top:0px;"
}
function Sci(){
    button_nav.style.left="120px";
    movie_panel_two.style="margin-top:0px;"
    movie_panel_one.style=`margin-top:-${panel_height+25}px;`
    movie_panel_three.style="margin-top:0px;"
    movie_panel_four.style="margin-top:0px;"
}
function Action(){
    button_nav.style.left="240px";
    movie_panel_two.style="margin-top:0px;"
    movie_panel_one.style=`margin-top:-${(panel_height+25)*2}px;`
    movie_panel_three.style="margin-top:0px;"
    movie_panel_four.style="margin-top:0px;"
}
function Serie(){
    button_nav.style.left="360px";
    movie_panel_two.style="margin-top:0px;"
    movie_panel_one.style=`margin-top:-${(panel_height+25)*3}px;`
    movie_panel_three.style="margin-top:0px;"
    movie_panel_four.style="margin-top:0px;"
}
function change2(){
    button_nav.style.left="0px";
    movie_panel_two.style="margin-top:0px;"
    movie_panel_one.style=`margin-top:-${(panel_height+20)*4}px;`
    movie_panel_three.style="margin-top:0px;"
    movie_panel_four.style="margin-top:0px;"
    cart_page="margin-top:0px;"
}

// Adding and Removing to and from A movie cart

function cart(Movie_name){
    //creating a template for the each element added to cart
     let parent = document.createElement("div");
     let text = document.createElement('h1');
     let name = document.createTextNode(Movie_name);
     let removeMovie = document.createElement('div');
     let H2 = document.createElement('h2');
     let remove_text = document.createTextNode('Remove');
     
     removeMovie.id="remove"
     H2.appendChild(remove_text);
     text.appendChild(name);
     removeMovie.appendChild(H2);
     parent.classList.add('movie');
     parent.appendChild(text);
     parent.appendChild(removeMovie);
     H2.style="color:red;"
     removeMovie.style="border-radius:5px; cursor:pointer; border:3px solid grey; padding:6px;"
     text.style="border-right:5px solid teal; padding-right:50px;"
     removeMovie.addEventListener('click',()=>parent.style="display:none");
     parent.style=" display:flex; justify-content:space-around;  align-items:center; height:70px; "
     document.getElementById("Added").appendChild(parent);
     
}

//sliding between welcome page and the library
let Library= document.getElementById("video_Lib");
let welcome = document.getElementById("welcome_page");




function change(){
    Library.style="left:0px;";
    welcome.style="left:-100%";
}

function change1(){
    Library.style="left:-100%;";
    welcome.style="left:0px;";
}


// geting the UserName
let user = document.getElementById("user");
let people = []

function user_name(){
    people.push(user.value);
    document.getElementById("a/c").innerText = `User: ${people[0]}`; 
}