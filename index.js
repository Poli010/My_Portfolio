// HIRE BUTTON 
function menu() {
    var hire = document.getElementById("hire");
    var check = document.getElementById("check");
   
    if(check.checked){
        hire.style.display = "block";
    } else {
        hire.style.display = "none";
    }
}

//AUTO TYPE
var typed = new Typed('.auto-type-name', {
    strings: ['Arnold Ivan Policarpio',"Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

//PROJECT PAGE 
function ris(){
    window.location.href = "project_location/ris_page.html";
}

function logsheet(){
    window.location.href = "project_location/logsheet.html";
}

function locator(){
    window.location.href = "project_location/e-locator.html";
}

function goldtags(){
    window.location.href = "project_location/goldtags.html";
}

function kfc(){
    window.location.href = "project_location/kfc.html";
}
//HIRE ME MODAL
function hireme(){
    var modal = document.getElementById("modal");
    modal.classList.toggle("hire_me_modal-open");
}
function asd(){
    modal.classList.remove("hire_me_modal-open");
}

function mensahe(){
    let send = document.getElementById("sender");
    let sending = document.getElementById("sending");

    send.style.display = "none";      // Hide the button
    sending.style.display = "block";  // Show the "Sending..." message
}


//SCROLL IN ANIMATION
AOS.init();

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')