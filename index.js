let header=document.querySelector("header");
let menuBtn=document.querySelector("#menu-btn");
let closeMenuBtn=document.querySelector("#close-menu-btn");

//Toggle mobile menu on menu button click
menuBtn.addEventListener("click",()=>{
    header.classList.toggle("show-mobile-menu");
});
//Close mobile menu on close button click
closeMenuBtn.addEventListener("click",()=>{
menuBtn.click();
});