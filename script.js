
        document.addEventListener("DOMContentLoaded", function() {
            const yesBtn = document.querySelector(".yes-btn");
            const img1 = document.querySelector(".img-1");
            const img2 = document.querySelector(".img-2");

            yesBtn.addEventListener("click", function() {
                img1.src = img2.src;
            });
        });