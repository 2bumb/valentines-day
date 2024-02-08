document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.querySelector(".yes-btn");
    const img1 = document.querySelector(".img-1");
    const img2 = document.querySelector(".img-2");
    const img3 = document.querySelector(".img-3");
    yesBtn.addEventListener("click", function() {
        img1.src = img2.src;
        // Change background for 7 seconds
        document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/cf/50/6d/cf506d6998d68de01e9171f30fc4e287.gif)";
        setTimeout(function() {
            document.body.style.backgroundImage = "none"; // Reset background after 7 seconds
            img1.src = "kakashi-death.gif"; // Reset img-2 after 7 seconds
        }, 2000); // 7 seconds
    });
});


// img1.src = "kakashi-death.gif"; // Reset img-2 after 7 seconds