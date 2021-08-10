// Show and hide header

var header = document.querySelector("#header");
var banner = document.querySelector("#banner");
window.addEventListener("scroll", function() {
    var x = pageYOffset;
    if(x >= 200) {
        header.classList.add("scrolled");
        if (x >= 400) {
            if(header.classList.contains("sleep")) {
                header.classList.remove("sleep");
            }
            header.classList.add("awake");
            
        }
        else {
            if(header.classList.contains("awake")) {
                header.classList.remove("awake");
                header.classList.add("sleep");
            }
        }
    }
    else {
        if(header.classList.contains("scrolled")) {
            header.classList.remove("scrolled");
        }
        if(header.classList.contains("sleep")) {
            header.classList.remove("sleep");
        }
    }


    // Banner when scroll
    var oldValue = "background-image: url(./assets/img/banner/banner1.jpg);";
    var newValue = oldValue + ` background-position: 50% ${x / 2}px;`;
    banner.setAttribute("style", newValue)

})

// Menu header

var menuHeader = document.querySelector(".header__list-wrapper");
var menuList = document.querySelector(".header__nav-list");

function showMenu() {
    menuHeader.classList.toggle("show");
}

function hideMenu() {
    menuHeader.classList.remove("show");
}

const main = document.querySelector("#main");

main.addEventListener("click", function() {
    menuHeader.classList.remove("show");
})

header.addEventListener("click", function(e) {
    e.stopPropagation();
})

menuList.addEventListener("click", hideMenu);

// Active when scroll

const section = document.querySelectorAll(".content__section[id]")
window.addEventListener("scroll", navHighlighter)

function navHighlighter() {
    let scrollY = window.pageYOffset
    let homeItem = document.querySelector('.home-item')
    if (scrollY > 700) {
        homeItem.classList.remove("active")
    }
    else {
        homeItem.classList.add("active")
    }
    section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 100
        sectionID = current.getAttribute("id")
        let navItem = document.querySelector(`.header__nav-item a[href*=${sectionID}]`)
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navItem.classList.add("active")
        }
        else {
            navItem.classList.remove("active")
        }
    })
}