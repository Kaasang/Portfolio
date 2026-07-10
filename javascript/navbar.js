const header = document.querySelector("header");
window.addEventListener("scroll",() =>{
    if (window.scrollY >50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");

    }
});

const menuBtn = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});