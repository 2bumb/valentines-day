document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const img1 = document.querySelector(".img-1");
    const img2 = document.querySelector(".img-2");
    const img3 = document.querySelector(".img-3");
    const yayVideo = document.querySelector(".yay-vid");
    const tylerVid = document.querySelector(".tyler-vid");

    function resetNoBtnStyle() {
        noBtn.style.transform = "";  
    }

    yesBtn.addEventListener("click", function() {
        img1.src = img2.src;
        document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/cf/50/6d/cf506d6998d68de01e9171f30fc4e287.gif)";
        setTimeout(function() {
            document.body.style.backgroundImage = "none";  
            img2.classList.remove('hidden');
            yayVideo.play();
            img1.src = "kakashi-death.gif";  
        }, 2000);  
        setTimeout(function() {
            
            img1.src = "obito.gif";  
            resetNoBtnStyle();  
        }, 4800);  
    });

    noBtn.addEventListener("mouseover", function() {
        noBtn.style.transform = "translateX(-470px)";  
    });

    noBtn.addEventListener("mouseout", function() {
        noBtn.style.transform = "translateY(-1000px)";

    });
});
