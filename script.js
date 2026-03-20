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
            next.classList.add("collapsible");

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

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const dot = document.querySelector(".cursor-dot");
    dot.style.left = x + "px";
    dot.style.top = y + "px";

    const outline = document.querySelector(".cursor-outline");
    outline.style.left = x + "px";
    outline.style.top = y + "px";

    document.body.style.setProperty('--mouse-x', x + "px");
    document.body.style.setProperty('--mouse-y', y + "px");
});

const links = document.querySelectorAll("a, button, .flip-card, #darkModeToggle, h3");
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        document.querySelector(".cursor-outline").classList.add("cursor-active");
    });
    link.addEventListener("mouseleave", () => {
        document.querySelector(".cursor-outline").classList.remove("cursor-active");
    });
});

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
    const submitBtn = form.querySelector('button[type="submit"]');

    if (greseli.length === 0) {
      
        submitBtn.innerHTML = "<span>✓</span> Sent!";
        submitBtn.classList.add("success-btn");
        
        form.classList.add("form-success");
        
        feedback_text.textContent = "Message sent successfully!";
        feedback_text.style.color = "#2ecc71";
        
        setTimeout(() => {
            form.classList.remove("form-success");
            submitBtn.classList.remove("success-btn");
            submitBtn.innerHTML = "Submit";
            form.reset();
        }, 3000);

    } else {
        feedback_text.innerText = "";
        greseli.forEach(element => {
            feedback_text.innerText += element + "\n";
        });
        feedback_text.style.color = "#ff4757";
    }
});

const flipCard = document.querySelector(".flip-card");
const cardImages = flipCard.querySelectorAll("img");

flipCard.addEventListener("mousemove", (e) => {
    const rect = flipCard.getBoundingClientRect();
    
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const moveX = x * -20; 
    const moveY = y * -20;

    cardImages.forEach(img => {
        img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
    });
});

flipCard.addEventListener("mouseleave", () => {
    cardImages.forEach(img => {
        img.style.transform = `scale(1.1) translate(0, 0)`;
    });
});