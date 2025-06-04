document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Transition Navbar
  const logo = document.getElementById("logo");
  const bgNav = document.getElementById("bg-nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 650) {
      console.log(window.scrollY);
      if (!logo.classList.contains("w-40")) {
        logo.classList.remove("w-60");
        logo.classList.add("w-40");
      }
      if (!bgNav.classList.contains("bg-white-tr")) {
        bgNav.classList.remove("bg-white");
        bgNav.classList.add("bg-white-tr");
      }
    } else {
      if (!logo.classList.contains("w-60")) {
        logo.classList.remove("w-40");
        logo.classList.add("w-60");
      }
      if (!bgNav.classList.contains("bg-white")) {
        bgNav.classList.remove("bg-white-tr");
        bgNav.classList.add("bg-white");
      }
    }
  });


  // DARK MODE TOGGLE
  // const themeToggle = document.getElementById('theme-toggle');
  // themeToggle.addEventListener('click', () => {
  //   document.documentElement.classList.toggle('dark');
  // });


  // LANG TOGGLE
  // const langSwitch = document.getElementById('lang-switch');

  // const translations = {
  //   'fr': {
  //     'Accueil': 'Accueil',
  //     'Services': 'Services',
  //     'Formations': 'Formations',
  //     'Méthodologie': 'Méthodologie',
  //     'Contact': 'Contact',
  //     'Nos Services Professionnels': 'Nos Services Professionnels',
  //     'En savoir plus →': 'En savoir plus →',
  //     'Voir toutes nos formations': 'Voir toutes nos formations',
  //     'Notre Approche Pédagogique': 'Notre Approche Pédagogique',
  //     'Ils nous ont fait confiance': 'Ils nous ont fait confiance',
  //     'Contactez-nous': 'Contactez-nous',
  //     'Envoyez-nous un message': 'Envoyez-nous un message',
  //     'Nom': 'Nom',
  //     'Prénom': 'Prénom',
  //     'Entreprise': 'Entreprise',
  //     'Poste Occupé': 'Poste Occupé',
  //     'Email': 'Email',
  //     'Tél.': 'Tél.',
  //     'Sujet': 'Sujet',
  //     'Message': 'Message',
  //     'Envoyer le message': 'Envoyer le message',
  //   },
  //   'en': {
  //     'Accueil': 'Home',
  //     'Services': 'Services',
  //     'Formations': 'Training',
  //     'Méthodologie': 'Methodology',
  //     'Contact': 'Contact',
  //     'Nos Services Professionnels': 'Our Professional Services',
  //     'En savoir plus →': 'Learn more →',
  //     'Voir toutes nos formations': 'See all our trainings',
  //     'Notre Approche Pédagogique': 'Our Educational Approach',
  //     'Ils nous ont fait confiance': 'They trusted us',
  //     'Contactez-nous': 'Contact us',
  //     'Envoyez-nous un message': 'Send us a message',
  //     'Nom': 'Last Name',
  //     'Prénom': 'First Name',
  //     'Entreprise': 'Company',
  //     'Poste Occupé': 'Position',
  //     'Email': 'Email',
  //     'Tél.': 'Phone',
  //     'Sujet': 'Subject',
  //     'Message': 'Message',
  //     'Envoyer le message': 'Send Message',
  //   }
  // };

  // let currentLang = 'fr';

  // langSwitch.addEventListener('click', () => {
  //   currentLang = currentLang === 'fr' ? 'en' : 'fr';
  //   translatePage();
  // });

  // function translatePage() {
  //   document.querySelectorAll('a, h2, h3, h4, p, label, button').forEach(el => {
  //     if (translations['fr'][el.innerText]) {
  //       el.innerText = translations[currentLang][el.innerText] || el.innerText;
  //     }
  //   });
  // }


  // Back to top button
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('opacity-0', 'invisible');
      backToTopButton.classList.add('opacity-100', 'visible');
    } else {
      backToTopButton.classList.remove('opacity-100', 'visible');
      backToTopButton.classList.add('opacity-0', 'invisible');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });


  // Formulaire de contact - envoi AJAX
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
          status.textContent = "Message envoyé avec succès !";
          status.style.display = "block";
          console.log("Réponse PHP :", data);
          form.reset();
        })
        .catch((err) => {
          console.error("Erreur JS :", err);
          status.textContent = "Erreur d'envoi.";
          status.style.color = "red";
          status.style.display = "block";
        });
    });
  }
});
