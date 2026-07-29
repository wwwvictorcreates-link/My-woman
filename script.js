/* =========================================
   Happy Girlfriend's Day ❤️
   Premium Script
========================================= */

const loader = document.getElementById("loader");
const beginBtn = document.getElementById("beginBtn");
const music = document.getElementById("bgMusic");

/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2000);
});

/* =========================
   MUSIC
========================= */

beginBtn.addEventListener("click", () => {

    music.play().catch(() => {
        console.log("Music autoplay blocked until user interaction.");
    });

    beginBtn.innerHTML = "❤️ Enjoy Our Story ❤️";

    document.querySelector(".story").scrollIntoView({
        behavior: "smooth"
    });

});

/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="floating-heart";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,700);
/* =========================
   MEMORY WHEEL
========================= */

const memoryBtn = document.getElementById("memoryBtn");
const memoryText = document.getElementById("memoryText");

const memories = [
    "The first time we talked ❤️",
    "Our first picture together 📸",
    "The day you made me laugh so much 😂",
    "Every time you say my name 🥹",
    "Our favorite video together 🎥",
    "Every hug you've given me 🤗",
    "Our late-night conversations 🌙",
    "Every 'I miss you' message ❤️",
    "The first time you made my day brighter ☀️",
    "The future we're building together 💍"
];

if(memoryBtn){
    memoryBtn.addEventListener("click", () => {
        const random = Math.floor(Math.random() * memories.length);
        memoryText.textContent = memories[random];
    });
}

/* =========================
   QUIZ
========================= */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if(yesBtn){
    yesBtn.addEventListener("click", () => {
        alert("Awww ❤️ I can't wait to make more memories with you!");
    });
}

if(noBtn){
    noBtn.addEventListener("click", () => {
        alert("I knew you'd say yes anyway! 😂❤️");
    });
}

/* =========================
   OPEN WHEN
========================= */

const openCards = document.querySelectorAll(".open-card");

openCards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(1.05)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 200);
    });
});

/* =========================
   LOVE BUTTON
========================= */

const loveBtn = document.getElementById("loveBtn");

if(loveBtn){
    loveBtn.addEventListener("click", () => {
        alert("❤️ Happy Girlfriend's Day ❤️\n\nThank you for being such an amazing part of my life.\n\nI Love You! 💖");
    });
  }
/* =========================================
   SCRIPT PART 3
========================================= */

/* Floating Hearts Animation */

const style = document.createElement("style");

style.innerHTML = `
.floating-heart{
    position:fixed;
    bottom:-50px;
    pointer-events:none;
    z-index:999;
    animation:floatHeart linear forwards;
}

@keyframes floatHeart{
    from{
        transform:translateY(0) rotate(0deg);
        opacity:1;
    }

    to{
        transform:translateY(-120vh) rotate(360deg);
        opacity:0;
    }
}
`;

document.head.appendChild(style);

/* Smooth Fade In */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(50px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1000,
fill:"forwards"

});

observer.unobserve(entry.target);

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

observer.observe(section);

});

/* Hero Button Glow */

setInterval(()=>{

beginBtn.animate([

{transform:"scale(1)"},

{transform:"scale(1.08)"},

{transform:"scale(1)"}

],{

duration:1200

});

},2500);

/* Ending Button */

if(loveBtn){

loveBtn.addEventListener("click",()=>{

for(let i=0;i<40;i++){

createHeart();

}

});

}

/* Console Message */

console.log("❤️ Happy Girlfriend's Day Website Loaded Successfully ❤️");
