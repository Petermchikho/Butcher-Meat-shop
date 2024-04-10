(function(){
    "use strict";
    const openNav=document.querySelector("#open-nav");
    const closeNav=document.querySelector("#close-nav");
    openNav.addEventListener("click",()=>{
        document.querySelector(".mobile-nav").classList.add("show");
    });
    closeNav.addEventListener("click",()=>{
        document.querySelector(".mobile-nav").classList.remove("show");
    });
    const mobileNavs=document.querySelectorAll(".drop-down");
    mobileNavs.forEach(function(link){
        link.addEventListener("click",function(event){
            document.querySelectorAll(".mobile-nav-link-minor").forEach(function(linkRemove){
                linkRemove.classList.remove("show");

            })
            if(event.target.parentElement.parentElement.querySelector("ul")){
                event.target.parentElement.parentElement.querySelector("ul").classList.toggle("show");
        
            }
        })
    })
    const mobileNavsI=document.querySelectorAll(".drop-down i");
    mobileNavsI.forEach(function(link){
        link.addEventListener("click",function(event){
            document.querySelectorAll(".mobile-nav-link-minor").forEach(function(linkRemove){
                linkRemove.classList.remove("show");

            })
            event.target.parentElement.parentElement.parentElement.querySelector("ul").classList.toggle("show");
        })
    })
})();