window.onload = function(){
const menuhomepage = document.querySelector(".homepage");
const menutoggle = document.querySelector(".toggle");
const menumenu = document.querySelector(".menu");

menutoggle.addEventListener('click', ()=>{
    menuhomepage.classList.toggle('active');
    menutoggle.classList.toggle('active');
    menumenu.classList.toggle('active');
})}

