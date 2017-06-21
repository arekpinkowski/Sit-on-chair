// var contact = document.getElementById("sub");
// var sedondSubMenu = document.getElementById("Email");
//
// contact.addEventListener("mouseover", function(event){
//         sedondSubMenu.classList.add("visible");
//
// })

var sub = document.querySelector(".lastSubMenu");
var last = document.querySelector(".galery");

sub.addEventListener("mouseover", function(event){
    console.log("ok");
    last.style.display = "block";
});
sub.addEventListener("mouseout", function(event){
    console.log("okkk");
    last.style.display = "none";
});

var pictures = document.querySelectorAll(".box");

for (var i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener("mouseover", function(event){
        this.querySelector(".picture").style.visibality = "hidden";
    });
    pictures[i].addEventListener("mouseout", function(event){
        this.querySelector(".picture").style.visibality = "visible";
        });

}


var pictures = document.querySelectorAll(".box");

 for (var i = 0; i < pictures.length; i++) {
     pictures[i].addEventListener("mouseover", function () {
         this.querySelector(".picture h3").style.visibility = "hidden";
     });
     pictures[i].addEventListener("mouseout", function () {
         this.querySelector(".picture h3").style.visibility = "visible";
     });
 };



var left = document.getElementById("prev");
var right = document.getElementById("next");
var sliderPics = document.querySelectorAll(".pict li");
var index = 0;

sliderPics[index].classList.add("visible");

right.addEventListener("click", function () {
    sliderPics[index].classList.remove("visible");
    index++;
    if (index === sliderPics.length) {
        index = 0;
        sliderPics[index].classList.add("visible");
    } else {
        sliderPics[index].classList.add("visible");
    }
});
left.addEventListener("click", function () {
    sliderPics[index].classList.remove("visible");
    index--;
    if (index < 0) {
        index = sliderPics.length - 1;
        sliderPics[index].classList.add("visible");
    } else {
        sliderPics[index].classList.add("visible");
    }
});

console.log("hello");
