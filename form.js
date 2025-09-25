console.log("✅ form.js chargé !");

document.addEventListener("DOMContentLoaded", function () {

  // FORMULAIRE DE CONTACT - ENVOI AJAX
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      fetch("sendmail.php", {
        method: "POST",
        body: formData
      })
        .then((res) => res.text())
        .then((data) => {
          console.log("Réponse PHP :", data);
          // status.removeAttribute("data-i18n");
          // status.textContent = "Message envoyé ✔️";
          status.textContent = "Message envoyé avec succès !";
          status.classList.remove("bg-[color:var(--primary-600)]", "dark:bg-[color:var(--primary-800)]", "hover:bg-[color:var(--primary-700)]", "dark:hover:bg-[color:var(--primary-900)]");
          status.classList.add("bg-green-600", "dark:bg-green-800", "hover:bg-green-700", "dark:hover:bg-green-900");

          form.reset();

          // Réinitialiser après 5 secondes
          setTimeout(() => {
            status.textContent = "Envoyer";
            // status.setAttribute("data-i18n", "contactFormButton");
            status.style.backgroundColor = ""; // annule override
            status.style.color = "";

            // Revenir aux classes originales
            status.classList.remove("bg-green-600", "dark:bg-green-800", "hover:bg-green-700", "dark:hover:bg-green-900");
            status.classList.add(
              "bg-[color:var(--primary-600)]",
              "dark:bg-[color:var(--primary-800)]", 
              "hover:bg-[color:var(--primary-700)]", 
              "dark:hover:bg-[color:var(--primary-900)]"
            );
          }, 8000);
        })
        .catch((err) => {
          console.error("Erreur JS :", err);
          status.textContent = "Erreur d'envoi.";
          status.style.color = "red";
          status.style.display = "block";
        });
    });
  }
})