document.addEventListener("DOMContentLoaded", function () {

    // this function is useed to visible search bar in the navbar

    let navSearchIcon = document.querySelector(".search-icon");
    let navInput = document.querySelector(".nav-input");
    navInput.style.display = "none";

    navSearchIcon.addEventListener("click", function () {
        if (navInput.style.display === "none" || navInput.style.display === "") {
            navInput.style.display = "block";
            navInput.focus();
            navSearchIcon.style.border = "1px solid black";
            navSearchIcon.style.borderRight = "0px solid transparent";
            navInput.style.borderTop = "1px solid #180BB1";
            navSearchIcon.style.borderColor = "#180BB1";
            console.log('open input');
        } else {
            navInput.style.display = "none";
            navSearchIcon.style.border = "0px solid black";
            navSearchIcon.style.borderRight = "0px solid transparent";
            navInput.style.borderTop = "0px solid #180BB1";
            navSearchIcon.style.borderColor = "#180BB1";
        }
    });

    navInput.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            (navInput.value === "") ? alert("Write something") : alert("Processing");

        }

    });

    // this function changes the color and background of offers button
    // from orange to blue 

    let contrastbtns = document.querySelectorAll(".contrastbtn");
    let contrastState = false;
    let textOranges = document.querySelectorAll(".text-orange");
    let bgOranges = document.querySelectorAll(".bg-orange");


    contrastbtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            let body = document.body;
            body.classList.toggle("high-contrast")
        });
    });

    // this function make the swiper responsive on different 
    // screen size

    function SwiperResponse() {
        let swiper1View;
        if (window.innerWidth <= 575) {
            swiper1View = 2
        }
        else if (window.innerWidth <= 769) {
            swiper1View = 3
        }
        else if (window.innerWidth <= 990) {
            swiper1View = 4;
        }
        else {
            swiper1View = 5;
        }
        var swiper = new Swiper(".mySwiper1", {
            slidesPerView: swiper1View,
            spaceBetween: 2,
            loop: true,
            freeMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
        });
    }
    SwiperResponse();
    window.addEventListener("resize", function () {
        SwiperResponse();
    })



    let navTogglerState = false;
    let navToggler = document.querySelector('.navbar-toggler');
    let inputElement = document.querySelector('.search-div');

    inputElement.style.display = 'none'

    navToggler.addEventListener("click", function () {
        if (!navTogglerState) {
            inputElement.style.display = "block"
            navTogglerState = true
        }
        else {
            inputElement.style.display = 'none';
            navTogglerState = false

        }
    })

    let playBtn = document.getElementById("playBtn");
    let modalThumnail = document.querySelector(".modal-thumnail")
    let modalVideo = document.getElementById("modalVideo");
    let resetBtn = document.querySelector(".modal-close-btn")
    playBtn.addEventListener("click", function () {
        modalThumnail.classList.toggle("d-none")
        modalVideo.classList.remove("d-none")
    })

    resetBtn.addEventListener("click", function(){
        modalThumnail.classList.remove("d-none")
        modalVideo.classList.toggle("d-none")
    })





});
