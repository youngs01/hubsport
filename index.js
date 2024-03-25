document.addEventListener("DOMContentLoaded", function () {

    // this function is useed to visible search bar in the navbar

    let navInputParent = document.querySelector(".navInput-parent");
    let navInputBtn = document.querySelector(".navInput-btn");
    navInputBtn.addEventListener("click", function () {
        navInputParent.classList.toggle("toggleWidth")
    })



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

    resetBtn.addEventListener("click", function () {
        modalThumnail.classList.remove("d-none")
        modalVideo.classList.toggle("d-none")
    })

    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-btn2-next",
            prevEl: ".swiper-btn2-prev",
        },
    });



    let modalBtn2 = document.getElementById("modalBtn2");
    let modalVideo2 = document.getElementById("modalvideoSrc");
    let modlaImage = document.getElementById("imageModal");
    modalBtn2.addEventListener("click", function () {
        // modalVideo2.src = ""
        modlaImage.src = "Sales-Dynasty.webp"
    })


    // // let accordionToogler = document.querySelectorAll(".removingblock")
    // // if(window.innerWidth <= 990 ){
    // //     accordionToogler.classList.remove("d-block")
    // // }
    // function adjustAccordionState() {
    //     // Get all elements with the specified class name
    //     const accordions = document.querySelectorAll('.accordion-collapse');

    //     // Check window width and remove 'show' class if necessary
    //     if (window.innerWidth <= 990) {
    //         accordions.forEach(accordion => {
    //             if (accordion.classList.contains('show')) {
    //                 accordion.classList.remove('show');
    //             }
    //             else{
    //                 accordion.classList.toggle("show")
    //             }
    //         });
    //     }
    // }

    // // Call the function initially
    // adjustAccordionState();

    // // Add event listener to adjust accordion state when window is resized
    // window.addEventListener('resize', adjustAccordionState);


});
