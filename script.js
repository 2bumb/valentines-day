document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.querySelector(".yes-btn");
    const img1 = document.querySelector(".img-1");
    const img2 = document.querySelector(".img-2");
    const img3 = document.querySelector(".img-3");
    const yayVideo = document.querySelector(".yay-vid");
    const tylerVid = document.querySelector(".tyler-vid");
    yesBtn.addEventListener("click", function() {
        img1.src = img2.src;
        // Change background for 7 seconds
        document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/cf/50/6d/cf506d6998d68de01e9171f30fc4e287.gif)";
        setTimeout(function() {
            document.body.style.backgroundImage = "none"; // Reset background after 7 seconds
            img2.classList.remove('hidden');
            yayVideo.play();
            img1.src = "kakashi-death.gif"; // Reset img-2 after 7 seconds
        }, 2000); // 7 seconds
        setTimeout(function() {
            img1.src = "obito.gif"; // Reset img-1 source to empty after additional 7 seconds
        }, 4800); // 7 seconds
        
        
    });
});


// setTimeout(function() {
    // img1.src = ""; // Reset img-1 source to empty after additional 7 seconds
// }, 7000); // 7 seconds


