let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("stars");
let med = document.querySelector(".txt");


window.onscroll = function() {
   let value = scrollY
   stars.style.left = value + "px";
   moon.style.top = value*3 + "px";
   mountains3.style.top = value*1.5 + "px";
   mountains4.style.top = value*1.2 + "px";
   river.style.top = value + "px";
   // boat.style.top = value + "px";
   boat.style.transition=".4s";
   stars.style.transition=".2s";
   mountains3.style.transition=".4s";
   mountains4.style.transition=".3s";
   mountains7.style.transition=".2s";
   moon.style.transition=".15s";
   med.style.transition=".3s";
   river.style.transition=".2s";
   boat.style.left = value*3 + "px";
   med.style.fontSize = value + "px"
   if (scrollY >= 89.71428680419922){
      med.style.fontSize = "89px"
      med.style.position = "fixed"
      if(scrollY >= 466.28570556640625) {
         med.style.display = "none"
      } else {
         med.style.display = "block"
      }
   }
   if(scrollY >= 111.42857360839844){
      document.querySelector(".hero").style.background = "linear-gradient(#20767b, #23002b)";
      document.querySelector(".hero").style.transition = "3s";
   }else {
      document.querySelector(".hero").style.background = "linear-gradient(rgb(48, 0, 32), rgb(35, 0, 43))";
      document.querySelector(".hero").style.transition = "3s";

   }
   
}