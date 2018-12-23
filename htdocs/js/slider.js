window.slider = (function() {
    "use strict";
    var target;
    var timer;
    var imageUrls = [];
    var myInterval;
    var currentImage = 0;

    function fadein(index) {
        var image = document.createElement("img");

        image.src = imageUrls[index];
        image.className = "imageSlider fade-in";
        image.classList.add(index);
        target.appendChild(image); 
    }

    function fadeout(index) {
        var temp = document.getElementsByClassName(index)[0];
        temp.classList.add("fade-out");
        // target.firstElementChild.classList.add("fade-out");
        console.log(target);
        window.setTimeout(function() {
            target.removeChild(target.firstElementChild);
        }, timer);
    }

    function rotateImages() {
        fadein(currentImage);
        myInterval = window.setInterval(function() {
            fadeout(currentImage % imageUrls.length);
            fadein(++currentImage % imageUrls.length);
        }, timer);
    }

    function init(selector, newTimer) {
        target = document.getElementsByClassName(selector)[0];
        timer = newTimer;
        imageUrls = target.dataset.images.split(", ");
        console.log(imageUrls);
        rotateImages();
    }

    return {
        init: init
    }
})();