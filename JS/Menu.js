const tapLinks = document.querySelectorAll('.tap-links p');
const ContainerList = document.querySelectorAll('.Container-List .container');
console.log(ContainerList.length)
tapLinks.forEach(function(e){
    // console.log(e);
    e.addEventListener('click',function(e){ 
        tapLinks.forEach(function(e){
            e.classList.remove("active");
        })
        this.classList.add("active");

        ContainerList.forEach(function(e){
            e.classList.remove("active");
        })
        tapLinks.forEach(function(e,i){
            if(tapLinks[i].classList.contains("active"))
            {
                ContainerList[i].classList.add("active");
                ContainerList[i+1].classList.remove("active");
            }
        })
    })
})