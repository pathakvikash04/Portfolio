
var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-content")
function opentab(tabname){
    for(i of tablinks){
        i.classList.remove('active-link');
    }
    for(j of tabcontents){
        j.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
    
}
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1200, 
        offset: 100,    
        easing: "ease-in-out", 
        once: true      
    });
});