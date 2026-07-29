const music = document.getElementById("bgMusic");
const button = document.getElementById("beginBtn");

button.onclick = () => {

    music.play();

    document.getElementById("next").scrollIntoView({
        behavior:"smooth"
    });

};

// Floating Hearts

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },11000);

}

setInterval(createHeart,500);
/* ================================= */
/* PHASE 2 */
/* ================================= */

const reasons = document.querySelectorAll(".reason");

const messages = [

"Your smile brightens even my darkest days. ❤️",

"Your laugh is my favorite sound. 😊",

"Your kindness inspires me every day. 🌹",

"Your hugs always feel like home. 🤗",

"Your beautiful heart is one of the reasons I fell for you. 💖",

"You care in ways that make me feel truly loved. ❤️",

"I could listen to your voice forever. 🎵",

"Your personality makes you one of a kind. ✨",

"Your strength amazes me every single day. 💪",

"I love everything about you, just the way you are. ❤️"

];

reasons.forEach((card,index)=>{

card.addEventListener("click",()=>{

alert(messages[index]);

});

});
