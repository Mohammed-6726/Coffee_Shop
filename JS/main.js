const toggleClick = document.querySelector(".toggle");
toggleClick.onclick = function(){
    if(toggleClick.classList.contains("click")){
    toggleClick.classList.remove("click");
    }
    else{
    toggleClick.classList.add("click");
    }
}
//--------------------animations-subTitel
const hiddenElements =document.querySelectorAll(".hidden");

const observer =new IntersectionObserver((e) => {
    e.forEach((element)=> {
        // console.log(e);
        if(element.isIntersecting){
            element.target.classList.add("show"); 
        }
        else{
            element.target.classList.remove("show")
        }
    })
})
hiddenElements.forEach((el)=>observer.observe(el));

//------------------------active class 
let linksActive = document.querySelectorAll("nav ul li a");
linksActive.forEach(function(e){
    e.addEventListener('click',function(e){
        linksActive.forEach(function(e){
            e.classList.remove('active');
        })
        e.target.classList.add('active');
    })
})
//---------------------login form
const logintBtn =document.querySelector('.login');
const contactCartContainer =document.querySelector('.login-cart-container');
const contactCartCloseicon =document.querySelector('.login-cart-close-icon');
console.log(contactCartCloseicon)
logintBtn.addEventListener('click',(e)=>{
    if(contactCartContainer.classList.contains('close')){
        contactCartContainer.classList.remove('close');
    }
        contactCartCloseicon.addEventListener('click',(e)=>{
            contactCartContainer.classList.add('close');
        })
})
//--------------------- copyright Section 
let copyright = document.querySelector('.copyright p>span');
console.log(copyright);
copyright.textContent = new Date().getFullYear();