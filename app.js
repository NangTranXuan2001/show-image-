var images = document.querySelectorAll(".image img")
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")
var close = document.querySelector(".close")

var gallery_img = document.querySelector(".gallery__inner img")
var gallery = document.querySelector(".gallery")

var currentIndex = 0;

function showGallery() {
    if (currentIndex == 0)
        prev.classList.add("hide")
    else
        prev.classList.remove("hide")

    if (currentIndex == images.length - 1)
        next.classList.add("hide")
    else
        next.classList.remove("hide")


    gallery_img.src = images[currentIndex].src
    gallery.classList.add("show")
}

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 27) {
        gallery.classList.remove("show")
    }
})

images.forEach((item, index) => {
    item.addEventListener("click", function() {
        currentIndex = index;
        showGallery()
    })
})

close.addEventListener("click", function() {
    gallery.classList.remove("show")
})

prev.addEventListener("click", function() {

    currentIndex -= 1;
    showGallery()

})

next.addEventListener("click", function() {
    currentIndex += 1;
    showGallery()
})