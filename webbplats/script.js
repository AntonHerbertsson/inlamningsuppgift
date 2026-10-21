// Hämta knappen för att byta färgtema
const themeButton = document.getElementById("theme-toggle");

// Växla mellan mörkt och ljust tema
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeButton.textContent = "Mörkt läge";
  } else {
    themeButton.textContent = "Ljust läge";
  }
});

// Hämta kontaktformuläret
const contactForm = document.getElementById("contact-form");

// Skapa ett nytt tackmeddelande när formuläret skickas
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const response = document.getElementById("form-response");

  // Ta bort tidigare meddelande, om det finns
  response.innerHTML = "";

  // Skapa ett nytt HTML-element med JavaScript
  const thankYouMessage = document.createElement("p");

  thankYouMessage.textContent =
    "Tack, " +
    name +
    "! Detta är ett skolprojekt, så ditt meddelande skickas inte vidare.";

  // Visa det nya elementet på hemsidan
  response.appendChild(thankYouMessage);

  // Töm fälten efter att formuläret skickats
  contactForm.reset();
});
