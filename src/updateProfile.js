const wrapper = document.querySelector(".wrapper"),
        follow_btn = document.querySelector(".button-box .follow"),
        heart = document.querySelector(".heart");

        follow_btn.addEventListener("click", (e)=>{
            heart.classList.add("active");
            follow_btn.innerHTML = "Following";

            setTimeout(()=>{
            heart.classList.remove("active");
            follow_btn.innerHTML = "Follow";
            }, 2600);
        });

