// JavaScript source code

/* using javascript DOM manipulation to toggle "active" css classes when the menu icon
is clicked*/

window.onload=function(){

console.log("hello");

var menuToggle =  document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");

var toggledMenu = menuToggle.addEventListener("click", function(){
 
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
});

}



