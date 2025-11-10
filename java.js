// Enkel formulärhantering
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.textContent = "Tack för ditt meddelande, " + name + "! Vi återkommer snart.";
        formMessage.style.color = "green";
        this.reset();
    } else {
        formMessage.textContent = "Vänligen fyll i alla fält.";
        formMessage.style.color = "red";
    }
});
