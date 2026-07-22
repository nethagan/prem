/*====================================
      TYPING ANIMATION
====================================*/

const typingElement = document.getElementById("typing");

const professions = [
    "Java Full Stack Developer",
    "AI Enthusiast",
    "Data Science Student",
    "Python Developer",
    "Problem Solver"
];

let professionIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const current = professions[professionIndex];

    if (!deleting) {

        typingElement.textContent = current.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === current.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingElement.textContent = current.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            professionIndex++;

            if (professionIndex >= professions.length) {

                professionIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/*====================================
        SCROLL REVEAL
====================================*/

const revealElements = document.querySelectorAll(
    "section, .project-card, .skill, .education-card"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*====================================
      ACTIVE NAVIGATION
====================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*====================================
    NAVBAR BACKGROUND CHANGE
====================================*/

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(5,8,22,.92)";

        navbar.style.backdropFilter = "blur(20px)";

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.35)";

    }

    else {

        navbar.style.background =
            "rgba(10,15,30,.45)";

        navbar.style.boxShadow = "none";

    }

});


/*====================================
      SMOOTH SCROLL
====================================*/

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*====================================
      SCROLL PROGRESS BAR
====================================*/

const progressBar =
document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*====================================
        BACK TO TOP BUTTON
====================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*====================================
        CURSOR GLOW
====================================*/

const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";

});


/*====================================
        3D PROJECT CARD EFFECT
====================================*/

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width/2)/20;

        const rotateX = (rect.height/2 - y)/20;

        card.style.transform =

        `perspective(1000px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        scale(1.04)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});


/*====================================
        BUTTON RIPPLE EFFECT
====================================*/

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle = document.createElement("span");

const diameter = Math.max(

this.clientWidth,

this.clientHeight

);

circle.style.width = diameter+"px";

circle.style.height = diameter+"px";

circle.style.left =

e.offsetX-diameter/2+"px";

circle.style.top =

e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

const ripple=this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});


/*====================================
        CONTACT FORM
====================================*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=form.querySelector("input[type=text]").value.trim();

const email=form.querySelector("input[type=email]").value.trim();

const message=form.querySelector("textarea").value.trim();

if(name===""||email===""||message===""){

alert("Please fill all the fields.");

return;

}

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

alert("Enter a valid email.");

return;

}

alert("Thank you! Your message has been submitted.");

form.reset();

});

}


/*====================================
        FLOATING PARTICLES
====================================*/

const particleContainer=document.getElementById("particles");

for(let i=0;i<40;i++){

const particle=document.createElement("span");

particle.classList.add("particle");

particle.style.left=Math.random()*100+"vw";

particle.style.animationDelay=Math.random()*12+"s";

particle.style.animationDuration=

(8+Math.random()*10)+"s";

particle.style.width=

(3+Math.random()*8)+"px";

particle.style.height=

particle.style.width;

particleContainer.appendChild(particle);

}