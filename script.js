
var videocon = document.querySelector(".video-container");
var playbtn = document.querySelector(".play");

videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
        scale: 1,
        opacity: 1
    })
})

videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn, {
        scale: 0,
        opacity: 0
    })
})

document.addEventListener("mousemove", function(dets){
    gsap.to(playbtn, {
        left : dets.x-50,
        top: dets.y-50
    })
})



document.addEventListener("mousemove", function(dets){
    gsap.to(".cursor", {
        left : dets.x,
        top : dets.y
    })
})

document.querySelector("#child1").addEventListener("mouseenter", function(){
    gsap.to(".cursor", {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)'
    })
})

document.querySelector("#child1").addEventListener("mouseleave", function(){
    gsap.to(".cursor", {
        opacity: 0
    })
})

document.querySelector("#child2").addEventListener("mouseenter", function(){
    gsap.to(".cursor", {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)'
    })
})

document.querySelector("#child2").addEventListener("mouseleave", function(){
    gsap.to(".cursor", {
        opacity: 0
    })
})

document.querySelector("#child3").addEventListener("mouseenter", function(){
    gsap.to(".cursor", {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)'
    })
})

document.querySelector("#child3").addEventListener("mouseleave", function(){
    gsap.to(".cursor", {
        opacity: 0
    })
})

document.querySelector("#child4").addEventListener("mouseenter", function(){
    gsap.to(".cursor", {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)'
    })
})

document.querySelector("#child4").addEventListener("mouseleave", function(){
    gsap.to(".cursor", {
        opacity: 0
    })
})

