const hamburger = document.querySelector(".hamburger")
const uls = document.querySelector(".navbarUl")

hamburger.addEventListener("click" , ()=>{
    uls.classList.toggle("active");
})