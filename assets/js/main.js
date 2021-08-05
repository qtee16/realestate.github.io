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

    var oldValue = "background-image: url(./assets/img/banner/banner1.jpg);";
    var newValue = oldValue + ` background-position: 50% ${x / 2}px;`;
    banner.setAttribute("style", newValue)

})


// Number

// var counters = document.querySelectorAll(".number");

// const time = 2000;

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = +counter.getAttribute("data-number");
//         const count = +counter.innerText;
//         var newTime = Math.ceil(time / target)
//         // console.log(newTime, target)
//         if (count < target) {
//             counter.innerText = count + 1;
//             setTimeout(updateCount, newTime);
//         }
//         else {
//             count.innerText = target;
//         }
//     }

//     updateCount();
// })