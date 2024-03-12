document.addEventListener("DOMContentLoaded", function () {
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

    let contrastbtn = document.getElementById("contrastbtn");
    let contrastState = false;
    let textOranges = document.querySelectorAll(".text-orange");
    let bgOranges = document.querySelectorAll(".bg-orange");
    
    contrastbtn.addEventListener("click", function () {
        if (contrastState === false) {
            contrastState = true;
            textOranges.forEach(function(element) {
                element.style.setProperty("color", "#180BB1", "important");
                element.style.setProperty("border-color", "#180BB1", "important");
                element.style.setProperty("background-color", "#EDF8FF", "important");
            });
            bgOranges.forEach(function(element) {
                element.style.backgroundColor = "#180BB1";
                element.style.borderColor = "#180BB1";
            });
        } else {
            contrastState = false;
            textOranges.forEach(function(element) {
                element.style.color = "";
                element.style.borderColor = "";
                element.style.backgroundColor = "";
            });
            bgOranges.forEach(function(element) {
                element.style.backgroundColor = "#FF5C35";
                element.style.borderColor = "#FF5C35";
            });
        }
    });
    
    









});
