// ==============================
// PORTFOLIO JAVASCRIPT
// ==============================

// AOS Animation
AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

// ==============================
// Sticky Navbar
// ==============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.background = "rgba(10,15,30,0.95)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        nav.style.background = "rgba(10,15,30,.60)";
        nav.style.boxShadow = "none";

    }

});

// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

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

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll("#stats h1");

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = Number(counter.innerText.replace(/\D/g, ""));

            const current = Number(counter.dataset.count || 0);

            const increment = Math.ceil(target / 60);

            if (current < target) {

                counter.dataset.count = current + increment;

                counter.innerText = current + increment + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector("#stats");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight && !counterStarted) {

        startCounter();

        counterStarted = true;

    }

});

// ==============================
// Scroll Reveal
// ==============================

const revealElements = document.querySelectorAll(".card,.skill,.project");

const reveal = () => {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("fade-up");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

// ==============================
// Back To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#7C3AED;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 8px 20px rgba(0,0,0,.3);
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// Contact Form Validation
// ==============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "2px solid red";

                valid = false;

            } else {

                input.style.border = "2px solid #06B6D4";

            }

        });

        if (valid) {

            alert("Thank you! Your message has been submitted.");

            form.reset();

        }

    });

}

// ==============================
// Mouse Glow Effect
// ==============================

const glow = document.createElement("div");

glow.style.cssText = `
position:fixed;
width:20px;
height:20px;
background:#06B6D4;
border-radius:50%;
pointer-events:none;
filter:blur(12px);
opacity:.7;
z-index:9999;
`;

document.body.appendChild(glow);

window.addEventListener("mousemove", e => {

    glow.style.left = e.clientX - 10 + "px";

    glow.style.top = e.clientY - 10 + "px";

});

// ==============================
// Scroll Progress Bar
// ==============================

const progress = document.createElement("div");

progress.style.cssText = `
position:fixed;
top:0;
left:0;
height:4px;
background:linear-gradient(to right,#7C3AED,#06B6D4);
width:0%;
z-index:9999;
`;

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    progress.style.width = (scroll / height) * 100 + "%";

});

// ==============================
// Console Message
// ==============================

console.log("Portfolio Developed by Praveen Raj Nethagani 🚀");
