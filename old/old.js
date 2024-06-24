//FUNCTION FOR AUTO TYPING TEXT
var typed = new Typed('.auto-type-name', {
    strings: ['Ivan Policarpio',"Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

//FUNCTION FOR ACTIVE NAV LINK
let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('nav ul li a');
window.onscroll=()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top>offset && top<offset + height){
            navlink.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('nav ul li a[href*='+id+']').classList.add('active')
            })
        }
    })
}