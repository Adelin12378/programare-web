const time = new Date();
const hours = time.getHours();
console.log(time.toDateString());

document.addEventListener("DOMContentLoaded", () => {
    const greeting_text = document.getElementById("greeting");

    if ((hours < 12) && (hours >= 4)) {
        greeting_text.textContent = "Good Morning";
    } else if (hours < 18 && hours >= 12) {
        greeting_text.textContent = "Good Afternoon";
    } else {
        greeting_text.textContent = "Good Evening";
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    const greseli = [];
    const name = document.getElementById('name').value;
    if (!(name.includes(' '))) {
        greseli.push("Name must contain at least a first name and a last name.");
    }
    const email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
        greseli.push("Please enter a valid email address.");
    }
    const message = document.getElementById('message').value;
    if (message.length < 10) {
        greseli.push("Message must contain at least 10 characters.");
    }

    const feedback_text = document.getElementById("form-feedback");
    if (greseli.length === 0) {
        feedback_text.textContent = "Thank you for your message, we will get back to you as soon as possible!";
        feedback_text.style.color = "green";
    } else {
        greseli.forEach(element => {
            feedback_text.innerText += element + "\n";
        });
        feedback_text.style.color = "blue";
    }
});
});

const darkBtn = document.getElementById("darkModeToggle");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "☀️ Light Mode";
    } else {
        darkBtn.textContent = "🌙 Dark Mode";
    }
});

const headings = document.querySelectorAll("main h3");

headings.forEach(function(h3) {
    h3.style.cursor = "pointer";
    h3.textContent = "▼ " + h3.textContent;

    h3.addEventListener("click", function() {
        let next = this.nextElementSibling;
        let isHidden = false;

        while (next && next.tagName !== "H3") {
            next.classList.add("collapsible"); // ensure animation class

            next.classList.toggle("hidden");
            isHidden = next.classList.contains("hidden");

            next = next.nextElementSibling;
        }

        if (isHidden) {
            this.textContent = this.textContent.replace("▼", "▶");
        } else {
            this.textContent = this.textContent.replace("▶", "▼");
        }
    });
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
    
    cursorOutline.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
});

const interactables = document.querySelectorAll("a, button, #darkModeToggle, h3, .flip-card");

interactables.forEach(el => {
    el.addEventListener("mouseenter", () => cursorOutline.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => cursorOutline.classList.remove("cursor-hover"));
});