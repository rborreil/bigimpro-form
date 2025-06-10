document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Transition Navbar
  const logo = document.getElementById("logo");

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
  const themeToggle = document.querySelectorAll('.theme-toggle');
  const logoImg = document.querySelector('#logo img'); // On cible l'image à l'intérieur du div #logo
  // Au début de ton DOMContentLoaded principal :
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } else if (prefersDark) {
    // Si pas de choix et que le système est dark, on active dark
    document.documentElement.classList.add('dark');
  }
  setLogoBasedOnTheme();

  // Switch logo dark / light mode
  function setLogoBasedOnTheme() {
    if (document.documentElement.classList.contains('dark')) {
      logoImg.src = './img/bigimpro (500 x 200 px)-nobg-darkmode.png'; // Logo pour mode sombre
    } else {
      logoImg.src = './img/bigimpro (500 x 200 px)-nobg.png'; // Logo pour mode clair
    }
  }

  // Click sur le bouton
  themeToggle.forEach(el => {
    el.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      setLogoBasedOnTheme();
      // Optionnel : mémoriser le choix de thème
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  })



  // LANG TOGGLE
  const langSwitch = document.querySelectorAll('.lang-switch');

  const translations = {
    fr: {
      menuTitleOne: "Accueil",
      menuTitleTwo: "Services",
      menuTitleThree: "Formations",
      menuTitleFour: "Approche",
      menuTitleFive: "Contact",
      heroTitle: "L'improvisation théâtrale, un levier pour booster vos softskills",
      heroSubtitle: "Ateliers interactifs sur mesure pour améliorer la performance et l'efficacité de vos équipes.",
      heroContactBtn: "Nous contacter",
      heroServicesBtn: "Nos services",
      servicesTitle: "Nos Services Professionnels",
      servicesDescription: "Nous proposons des solutions adaptées à vos besoins spécifiques pour améliorer la performance de votre organisation.",
      serviceTitleOne: "Formations & Événements",
      serviceDescriptionOne: "Programmes adaptés à vos objectifs spécifiques et à votre secteur d'activité.",
      serviceTitleTwo: "Montée en Compétences",
      serviceDescriptionTwo: "Optimisation des compétences et développement du potentiel de vos équipes.",
      serviceTitleThree: "Méthode Certifiée",
      serviceDescriptionThree: "Renforcez la cohésion et la collaboration au sein de vos équipes.",
      trainingTitle: "Nos Domaines de Formation",
      trainingSubtitle: "Découvrez nos principaux domaines d'expertise en formation professionnelle.",
      learnMore: "En savoir plus →",
      seeAllTrainings: "Voir toutes nos formations",
      approachTitle: "Notre Approche Pédagogique",
      trustedUsTitle: "Ils nous ont fait confiance",
      contactUsTitle: "Contactez-nous",
      sendMessageTitle: "Envoyez-nous un message",
      fieldLastName: "Nom",
      fieldFirstName: "Prénom",
      fieldCompany: "Entreprise",
      fieldPosition: "Poste Occupé",
      fieldEmail: "Email",
      fieldPhone: "Tél.",
      fieldSubject: "Sujet",
      fieldMessage: "Message",
      sendButton: "Envoyer le message",
      testimonialsText1: "La formation en management a transformé notre façon de travailler. Nos équipes sont plus motivées et productives.",
      testimonialsText2: "Approche très professionnelle et adaptée à nos besoins spécifiques. Les résultats ont été immédiats.",
      testimonialsText3: "Formateurs compétents et pédagogues. Le suivi post-formation a été particulièrement apprécié.",
      backToTop: "Retour en haut",
      // Ajoute ici d'autres textes si besoin
    },
    en: {
      menuTitleOne: "Home",
      menuTitleTwo: "Services",
      menuTitleThree: "Programs",
      menuTitleFour: "Approach",
      menuTitleFive: "Contact",
      heroTitle: "Theatrical improvisation, a lever to boost your soft skills",
      heroSubtitle: "Custom interactive workshops made to enhance your team's performance and efficiency.",
      heroContactBtn: "Contact us",
      heroServicesBtn: "Our services",
      servicesTitle: "Our Professional Services",
      servicesDescription: "We offer solutions tailored to your specific needs to improve your organization's performance.",
      serviceTitleOne: "Training & Events",
      serviceDescriptionOne: "Customized programs specifically designed for your goals and industry",
      serviceTitleTwo: "Skills Development",
      serviceDescriptionTwo: "Skills optimisation and improvement of your teams abilities.",
      serviceTitleThree: "Certified Method",
      serviceDescriptionThree: "Strengthen cohesion and collaboration within your teams.",
      trainingTitle: "Our Training Areas",
      trainingSubtitle: "Find out our main expertise areas for professional training.",
      learnMore: "Learn more →",
      seeAllTrainings: "See all our trainings",
      approachTitle: "Our Educational Approach",
      trustedUsTitle: "They trusted us",
      contactUsTitle: "Contact us",
      sendMessageTitle: "Send us a message",
      fieldLastName: "Last Name",
      fieldFirstName: "First Name",
      fieldCompany: "Company",
      fieldPosition: "Position",
      fieldEmail: "Email",
      fieldPhone: "Phone",
      fieldSubject: "Subject",
      fieldMessage: "Message",
      sendButton: "Send Message",
      testimonialsText1: "The management training transformed how we work. Our teams are more motivated and productive.",
      testimonialsText2: "Very professional approach tailored to our specific needs. The results were immediate.",
      testimonialsText3: "Competent and pedagogical trainers. The post-training follow-up was particularly appreciated.",
      backToTop: "Back to top",
      // Same here, add more as needed
    }
  };


  let currentLang = 'fr';

  langSwitch.forEach(el => {
    el.addEventListener('click', () => {
      currentLang = currentLang === 'fr' ? 'en' : 'fr';
      translatePage();
    });
  });

  function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang] && translations[currentLang][key]) {
        el.innerText = translations[currentLang][key];
      }
    });
  }



  // BACK TO TOP BUTTON
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



  // SMOOTH SCROLLING FOR ANCHOR LINKS
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
