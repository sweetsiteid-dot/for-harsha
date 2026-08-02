const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const memoryBtn = document.getElementById("memoryBtn");

/* =========================
   OPEN WEBSITE
========================= */

openBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    createOpeningEffect();

    setTimeout(() => {

        opening.style.transition = "opacity 1s ease";
        opening.style.opacity = "0";

        setTimeout(() => {

            opening.style.display = "none";
            mainContent.style.display = "block";

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        },1000);

    },1800);

});

/* =========================
   OPEN EFFECT
========================= */

function createOpeningEffect(){

    const icons = [
        "🤍",
        "✨",
        "⭐",
        "♡"
    ];

    for(let i=0;i<90;i++){

        const item = document.createElement("div");

        item.className = "falling";

        item.innerHTML =
        icons[Math.floor(Math.random()*icons.length)];

        item.style.left =
        Math.random()*100 + "vw";

        item.style.fontSize =
        (18 + Math.random()*20) + "px";

        item.style.animationDuration =
        (2 + Math.random()*2.5) + "s";

        document.body.appendChild(item);

        setTimeout(()=>{
            item.remove();
        },4500);

    }

}

/* =========================
   MEMORY BUTTON
========================= */

memoryBtn.addEventListener("click",()=>{

    document
    .getElementById("memories")
    .scrollIntoView({
        behavior:"smooth"
    });

});

/* =========================
   MUSIC BUTTON
========================= */

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML =
        "⏸ Pause Music";

    }else{

        music.pause();

        musicBtn.innerHTML =
        "🎵 Play Music";

    }

});

/* =========================
   AUTO SLIDER
========================= */

const slides =
document.querySelectorAll(".slide");

const dots =
document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>
        slide.classList.remove("active")
    );

    dots.forEach(dot=>
        dot.classList.remove("active")
    );

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

},3000);

/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer =
document.querySelector(".hearts");

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    const icons=[
        "🤍",
        "♡",
        "✨"
    ];

    heart.innerHTML =
    icons[Math.floor(Math.random()*icons.length)];

    heart.style.left =
    Math.random()*100 + "%";

    heart.style.fontSize =
    (16 + Math.random()*18) + "px";

    heart.style.animationDuration =
    (8 + Math.random()*5) + "s";

    heart.style.opacity =
    Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },13000);

}

setInterval(createHeart,650);

/* =========================
   PARALLAX HERO
========================= */

window.addEventListener("scroll",()=>{

    const hero =
    document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY =
        window.scrollY * 0.2 + "px";

    }

});

/* =========================
   FADE SECTION
========================= */

const sections =
document.querySelectorAll(
".hero,.memories,.counter,.letter,.ending-section"
);

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition=".8s ease";

    observer.observe(section);

});

/* =========================
   INITIAL
========================= */

showSlide(0);
