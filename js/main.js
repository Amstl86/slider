// get elements
const prev = document.querySelector(".arrow-left"); 
const next = document.querySelector(".arrow-right");
const slideImage = document.getElementById("slide-image");
const slideCity = document.getElementById("slide-city");
const slideArea = document.getElementById("slide-area");
const slideTime = document.getElementById("slide-time");
const slideCost = document.getElementById("slide-cost");
const dots = document.getElementsByClassName("dots__item");
const dotsChange = document.querySelector(".dots");
const linkChange = document.querySelector(".navigation__list");
const menuLinks = document.getElementsByClassName("list-item__link");

// array with slides
let objects = [
    admiral = {
        image: './images/slide1.jpg',
        city: 'Rostov-on-Don LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request'
    },
    sochi = {
        image: './images/slide2.jpg',
        city: 'Sochi Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
    },
    patriotic = {
        image: './images/slide3.jpg',
        city: 'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
    }
]
let handler = e => {
    currentImageIndex = e.dataset.id;
    showParametrs();
    activeDotLink();
}
let currentImageIndex = 0;
showParametrs();
activeDotLink();

// subscribe to events
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
dotsChange.addEventListener("click", e => {
    let dotLink = e.target.closest(".dots__item");
    if (!dotLink && !dotsChange.contains(dotLink)) {
        return;
    }  
    handler(dotLink);
});
linkChange.addEventListener("click", e => {
    let dotLink = e.target.closest(".list-item__link");
    if (!dotLink && !linkChange.contains(dotLink)) {
        return;
    }
    handler(dotLink);
});

// functions
function activeDotLink() {
    let i;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active-dot", "");
    }
    for (i = 0; i < menuLinks.length; i++) {
        menuLinks[i].className = menuLinks[i].className.replace("active-link", "");
    }
    dots[currentImageIndex].className += " active-dot";
    menuLinks[currentImageIndex].className += " active-link";
}
function showParametrs() {
    slideImage.src = objects[currentImageIndex].image;
    slideCity.textContent = objects[currentImageIndex].city;
    slideArea.textContent = objects[currentImageIndex].area;
    slideTime.textContent = objects[currentImageIndex].time;
    slideCost.textContent = objects[currentImageIndex].cost;
}
function prevSlide() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = objects.length - 1;
    }
    showParametrs();
    activeDotLink();
}
function nextSlide() {
    currentImageIndex++;
    if (currentImageIndex > objects.length - 1) {
        currentImageIndex = 0;
    }
    showParametrs();
    activeDotLink();
}