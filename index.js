//intro slide
document.addEventListener('DOMContentLoaded',()=>{
    setInterval(() => {
        document.getElementById('intro-page').style.display="none"
    }, 19000);
})




//form validations
function validateLogin(){
    let userName = document.getElementById('user1').value;
    let password = document.getElementById('pass1').value;
    if(userName==""){
        document.getElementById('user1').setAttribute('placeholder', 'Please enter Username')
        document.getElementById('user1').style="border-bottom: 2px solid red;"
    }else if(password.length<6){
        document.getElementById('pass1').setAttribute('placeholder', 'Enter atleast six characters')
        document.getElementById('pass1').style="border-bottom: 2px solid red;"
        alert('PassWord should be Atleast 6 Characters');
    }else{
        change();
    }

}
function validateSignup(){
    let userName2 = document.getElementById('user2').value;
    let password2 = document.getElementById('pass2').value;
    let emailValue = document.getElementById('email').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(userName2==""){
        document.getElementById('user2').setAttribute('placeholder', 'Please enter Username')
        document.getElementById('user2').style="border-bottom: 2px solid red;"
    }else if(emailPattern.test(emailValue)== false){
        document.getElementById('email').setAttribute('placeholder', 'Enter Valid Password')
        document.getElementById('email').style="border-bottom: 2px solid red;"
    }else if(password2.length<6){
        alert('Password Should be Atleast 6 Characters');
        document.getElementById('pass2').setAttribute('placeholder', 'Enter atleast Six Characters')
        document.getElementById('pass2').style="border-bottom: 2px solid red;"
    }else{
        change();
    }
}


//movie panel height
let panel_height = document.getElementById('movie-panel-1').offsetHeight;
document.getElementById('movie-panels').style=`height:${panel_height+40}px;`


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

/*let button_nav= document.getElementById("btn-menu");
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
    movie_panel_one.style=`margin-top:-${panel_height+20}px;`
    movie_panel_three.style="margin-top:0px;"
    movie_panel_four.style="margin-top:0px;"
}
function Action(){
    button_nav.style.left="240px";
    movie_panel_two.style="margin-top:0px;"
    movie_panel_one.style=`margin-top:-${(panel_height+20)*2}px;`
    movie_panel_three.style="margin-top:0px;"
    movie_panel_four.style="margin-top:0px;"
}
function Serie(){
    button_nav.style.left="360px";
    movie_panel_two.style="margin-top:0px;"
    movie_panel_one.style=`margin-top:-${(panel_height+20)*3}px;`
    movie_panel_three.style="margin-top:0px;"
    movie_panel_four.style="margin-top:0px;"
}
function change2(){
    document.getElementById('movie-cart').style.display="block";
    button_nav.style.left="0px";
    movie_panel_two.style="margin-top:0px;"
    movie_panel_one.style=`margin-top:-${(panel_height+20)*4}px;`
    movie_panel_three.style="margin-top:0px;"
    movie_panel_four.style="margin-top:0px;"
    cart_page="margin-top:0px;"
}*/
let button_nav= document.getElementById("btn-menu");
let movie_panel_two= document.getElementById("movie-panel-2");
let movie_panel_one= document.getElementById("movie-panel-1");
let movie_panel_three= document.getElementById("movie-panel-3");
let movie_panel_four= document.getElementById("movie-panel-4");
let cart_page = document.getElementById("movie-cart");



function Anime(){
    button_nav.style.left="0px";
    movie_panel_two.style=`top:-${panel_height+1000}px;`
    movie_panel_one.style="top:30px;"
    movie_panel_three.style=`top:-${panel_height+1000}px;`
    movie_panel_four.style=`top:-${panel_height+1000}px;`
    cart_page.style=`top:-${panel_height+1000}px;`
}
function Sci(){
    button_nav.style.left="120px";
    movie_panel_two.style="top:30px;"
    movie_panel_one.style=`top:-${panel_height+1000}px;`
    movie_panel_three.style=`top:-${panel_height+1000}px;`
    movie_panel_four.style=`top:-${panel_height+1000}px;`
    cart_page.style=`top:-${panel_height+1000}px;`
}
function Action(){
    button_nav.style.left="240px";
    movie_panel_two.style=`top:-${panel_height+1000}px;`
    movie_panel_one.style=`margin-top:-${(panel_height+1000)}px;`
    movie_panel_three.style="top:30px;"
    movie_panel_four.style=`top:-${panel_height+1000}px;`
    cart_page.style=`top:-${panel_height+1000}px;`
}
function Serie(){
    button_nav.style.left="360px";
    movie_panel_two.style=`top:-${panel_height+1000}px;`
    movie_panel_one.style=`margin-top:-${(panel_height+1000)}px;`
    movie_panel_three.style=`top:-${panel_height+1000}px;`
    movie_panel_four.style="top:30px;"
    cart_page.style=`top:-${panel_height+1000}px;`
}
function change2(){
    document.getElementById('movie-cart').style.display="block";
    button_nav.style.left="0px";
    movie_panel_two.style=`top:-${panel_height+1000}px;`
    movie_panel_one.style=`top:-${(panel_height+1000)}px;`
    movie_panel_three.style=`top:-${panel_height+1000}px;`
    movie_panel_four.style=`top:-${panel_height+1000}px;`
    cart_page.style="top:30px;"
}


// Adding and Removing to and from A movie cart

function cart(Movie_name,btn_id){
    //creating a template for the each element added to cart
     let parent = document.createElement("div");
     let text = document.createElement('h2');
     let name = document.createTextNode(Movie_name);
     let removeMovie = document.createElement('div');
     let H2 = document.createElement('h2');
     let remove_text = document.createTextNode('Remove');
     
     removeMovie.id='remove';
     H2.appendChild(remove_text);
     text.appendChild(name);
     removeMovie.appendChild(H2);
     parent.classList.add('movie');
     parent.classList.add('remove');
     parent.appendChild(text);
     parent.appendChild(removeMovie);
     H2.style="color:red;"
     removeMovie.style="border-radius:5px; cursor:pointer; border:3px solid grey; padding:6px;"
     //text.style=""
     
     parent.style=" display:flex; justify-content:space-between;  align-items:center;"
     document.getElementById("Added").appendChild(parent);

     document.getElementById(btn_id).style="pointer-events:none;";
     document.getElementById(btn_id).innerHTML = '<i class="far fa-check-circle"></i>';

     
    removeMovie.addEventListener('click',()=>{
        document.getElementById(btn_id).style="pointer-events:auto;"
        document.getElementById(btn_id).innerHTML = '<i class="fas fa-cart-plus"></i>';
        parent.style="display:none;"
        let countreduce = Number(document.getElementById('cartitems').innerText);
        document.getElementById('cartitems').innerText = `${countreduce - 1}`;

    });  
   
}
function cartItems(){
    let counter = document.getElementById('cartitems').innerText;
    let count = Number(counter) + 1;
    document.getElementById('cartitems').innerText = count;
    document.getElementById('cartitems').style="color:red; font-size:25px;"
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
let user_login = document.getElementById("user1");
let user_signup = document.getElementById("user2");
let people = []

function user_name(){
    people.push(user_login.value);
    people.push(user_signup.value);
    document.getElementById("a/c").innerText = `  ${people[0]}`; 
}




// search Algorithm 
let movielistArr = document.getElementsByClassName('movie-description')
document.getElementById('search-input').addEventListener('focus',()=>{
    searchList()
    document.getElementById('movie-cart').style.display="none";
});

document.getElementById('search-input').addEventListener('keyup',(e)=>{
    Array.from(movielistArr).forEach((movie)=>{
       let movie_name = movie.firstElementChild.innerText;
        if(movie_name.toLowerCase().indexOf(e.target.value) != -1){
           movie.parentNode.parentNode.style.display = "flex";
        }
        else{
            movie.parentNode.parentNode.style.display = "none";
        }
        
    });
});
function searchList(){
    button_nav.style.left="0px";
    movie_panel_two.style=`top:30px; `
    movie_panel_one.style=`top:30px;`
    movie_panel_three.style=`top:30px;`
    movie_panel_four.style=`top:30px;`
}

//like algorithm
function like(id){
    let text = document.getElementById(id).innerText;
    let likes = Number(text) + 1;
    document.getElementById(id).innerText = likes;
}

// movie popup
function vidlink(id,src){
    document.getElementById('iframe').setAttribute('src',src);
    $(id).magnificPopup({
        type:'inline',
        midClick:true
    })
}