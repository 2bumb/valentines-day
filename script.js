document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const img1 = document.querySelector(".img-1");
    const img2 = document.querySelector(".img-2");
    const img3 = document.querySelector(".img-3");
    const yayVideo = document.querySelector(".yay-vid");
    const tylerVid = document.querySelector(".tyler-vid");

    function resetNoBtnStyle() {
        noBtn.style.transform = ""; // Reset the transform
    }

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
            resetNoBtnStyle(); // Reset the style of the no button
        }, 4800); // 7 seconds
    });

    noBtn.addEventListener("mouseover", function() {
        noBtn.style.transform = "translateX(-470px)"; // Move the button 300px to the right
    });

    noBtn.addEventListener("mouseout", function() {
        noBtn.style.transform = "translateY(-1000px)"; // Reset the button position when mouse leaves

        //i need the button to stay in the users view    
        //add the tyler.vid after kakashi finish dancing
        //at the end i want everything to rest and be normal from the start 

    });
});
