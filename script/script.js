/* =========================================================
   XYZZZ PORTFOLIO
   JavaScript
========================================================= */


/* ================= DOM ELEMENTS ================= */

const header = document.querySelector(".header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

const typingText = document.getElementById("typingText");

const backToTop = document.getElementById("backToTop");

const currentYear = document.getElementById("currentYear");


/* ================= MOBILE MENU ================= */

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* Close mobile menu when link is clicked */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= HEADER SCROLL ================= */

function handleHeader() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeader);

handleHeader();


/* ================= TYPING EFFECT ================= */

const roles = [
    "Junior Software Developer",
    "Application Developer",
    "Web Developer",
    "Software Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

const typingSpeed = 90;
const deletingSpeed = 45;
const pauseAfterTyping = 1800;
const pauseAfterDeleting = 500;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, pauseAfterTyping);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

            setTimeout(typeEffect, pauseAfterDeleting);

            return;
        }

    }

    setTimeout(
        typeEffect,
        deleting ? deletingSpeed : typingSpeed
    );
}


if (typingText) {
    typeEffect();
}


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${sectionId}`
                ) {
                    link.classList.add("active");
                }

            });

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* ================= BACK TO TOP ================= */

function handleBackToTop() {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

window.addEventListener(
    "scroll",
    handleBackToTop
);


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-text, " +
    ".stat-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".timeline-item, " +
    ".education-card, " +
    ".cert-card, " +
    ".contact-box"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= STAGGERED CARD ANIMATION ================= */

const cardGroups = [
    ".skill-card",
    ".project-card",
    ".cert-card"
];


cardGroups.forEach(selector => {

    const cards = document.querySelectorAll(selector);

    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    });

});


/* ================= CURRENT YEAR ================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ================= PREVENT EMPTY LINKS ================= */

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

    });

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%c👋 Hello, Developer!",
    "color:#38bdf8;font-size:18px;font-weight:bold;"
);

console.log(
    "%cWelcome to XYZZZ's portfolio.",
    "color:#94a3b8;font-size:13px;"
);
