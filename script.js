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