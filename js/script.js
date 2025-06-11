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
      servicesText: "Nous proposons des solutions adaptées à vos besoins spécifiques pour améliorer la performance de votre organisation.",
      serviceTitleOne: "Formations & Événements",
      serviceTextOne: "Programmes adaptés à vos objectifs spécifiques et à votre secteur d'activité.",
      serviceTitleTwo: "Montée en Compétences",
      serviceTextTwo: "Optimisation des compétences et développement du potentiel de vos équipes.",
      serviceTitleThree: "Méthode Certifiée",
      serviceTextThree: "Renforcez la cohésion et la collaboration au sein de vos équipes.",
      trainingsTitle: "Nos Domaines de Formation",
      trainingsSubtitle: "Découvrez nos principaux domaines d'expertise en formation professionnelle.",
      trainingTitleOne: "Communication",
      trainingTextOne: "Verbale, non verbale, écrite.",
      trainingTitleTwo: "Collaboration & Ouverture",
      trainingTextTwo: "En favorisant les échanges et le partage.",
      trainingTitleThree: "Innovation & Créativité",
      trainingTextThree: "En activant la capacité à créer.",
      trainingTitleFour: "Confiance en Soi & Leadership",
      trainingTextFour: "En s'affirmant et en prenant confiance par le jeu.",
      trainingTitleFive: "Adaptabilité",
      trainingTextFive: "En transformant les imprévus en opportunités.",
      trainingTitleSix: "Cohésion d'équipe",
      trainingTextSix: "En partageant des moments fédérateurs.",
      learnMore: "En savoir plus →",
      checkAllTrainings: "Voir toutes nos formations",
      approachTitle: "Notre Approche",
      approachSubtitle: "Notre méthodologie repose sur une approche pratique et interactive, centrée sur les besoins réels des participants et de l'entreprise.",
      approachTitle1: "Objectif",
      approachText1: "Travailler sur des compétences précises en impliquant les participants par le jeu.",
      approachTitle2: "Approche",
      approachText2: "Renforcer les soft skills clés tels que la communication, l'adaptabilité et la créativité, en utilisant le jeu et l'interaction comme outils d'apprentissage.",
      approachTitle3: "Thématiques",
      approachText3: "Négociation & gestion des conflits, prévention des risques psychosociaux, diversité & inclusion…",
      trustedUsTitle: "Ils nous ont fait confiance",
      trustedUsSubtitle: "Découvrez ce que nos clients disent de nos formations.",
      trustedUsText1: '"La formation en management a transformé notre façon de travailler. Nos équipes sont plus motivées et productives."',
      trustedUsRole1: "Directeur RH - Entreprise XYZ",
      trustedUsText2: '"Approche très professionnelle et adaptée à nos besoins spécifiques. Les résultats ont été immédiats."',
      trustedUsRole2: "Directrice Générale, Société ABC",
      trustedUsText3: '"Formateurs compétents et pédagogues. Le suivi post-formation a été particulièrement apprécié."',
      trustedUsRole3: "Responsable Formation, Groupe DEF",
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
      menuTitleThree: "Training",
      menuTitleFour: "Approach",
      menuTitleFive: "Contact",
      heroTitle: "Theatrical improvisation, a lever to boost your soft skills",
      heroSubtitle: "Custom interactive workshops made to enhance your team's performance and efficiency.",
      heroContactBtn: "Contact us",
      heroServicesBtn: "Our services",
      servicesTitle: "Our Professional Services",
      servicesText: "We offer solutions tailored to your specific needs to improve your organization's performance.",
      serviceTitleOne: "Training & Events",
      serviceTextOne: "Customized programs specifically designed for your goals and industry",
      serviceTitleTwo: "Skills Development",
      serviceTextTwo: "Skills optimisation and improvement of your teams abilities.",
      serviceTitleThree: "Certified Method",
      serviceTextThree: "Strengthen cohesion and collaboration within your teams.",
      trainingsTitle: "Our Training Areas",
      trainingsSubtitle: "Find out our main expertise areas for professional training.",
      trainingTitleOne: "Communication",
      trainingTextOne: "Verbal, non-verbal, written.",
      trainingTitleTwo: "Collaboration & Openness",
      trainingTextTwo: "By encouraging exchanges and sharing.",
      trainingTitleThree: "Innovation & Creativity",
      trainingTextThree: "By awaking a creative mind.",
      trainingTitleFour: "Self Confidence & Leadership",
      trainingTextFour: "By self asserting and improving self-confidence through play.",
      trainingTitleFive: "Adaptability",
      trainingTextFive: "By making the unforeseen a new opportunity.",
      trainingTitleSix: "Team Building",
      trainingTextSix: "By sharing unifying moments.",
      learnMore: "Learn more →",
      checkAllTrainings: "Check all our trainings",
      approachTitle: "Our Approach",
      approachSubtitle: "Our method rely on a practical and interactive approach, based on people and company real needs.",
      approachTitle1: "Goal",
      approachText1: "Working on people specific skills through play.",
      approachTitle2: "Approach",
      approachText2: "Strenghten key softskills such as communication, adaptability and creativity : we keep using games and interaction as learning tools.",
      approachTitle3: "Thematics",
      approachText3: "Negotiation & crisis management, psychosocial risk prevention, diversity & inclusion...",
      trustedUsTitle: "They trusted us",
      trustedUsSubtitle: "Check our customers feedback on our training.",
      trustedUsText1: '"The management training got a significant impact on our working process. Our teams are now more motivated and productive."',
      trustedUsRole1: "Head of HR - XYZ Company",
      trustedUsText2: '"Very professional and goal-oriented approach. Everything is made to reach our specific needs. Results were immediate."',
      trustedUsRole2: "CEO - ABC Company",
      trustedUsText3: '"Experienced trainers. The after-training service has been very appreciated."',
      trustedUsRole3: "Head of Training - DEF Group",
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
  const frenchFlagSVG = `<svg class="lang-flag w-6 h-6" alt="Switch Language" xmlns="http://www.w3.org/2000/svg"
                                width="32" height="32" viewBox="0 0 32 32">
                                <!-- Fond blanc avec coins arrondis -->
                                <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#ffffff" />

                                <!-- Bande bleue -->
                                <rect x="1" y="4" width="10" height="24" rx="0" ry="0" fill="#0055A4" />

                                <!-- Bande rouge -->
                                <rect x="21" y="4" width="10" height="24" rx="0" ry="0" fill="#EF4135" />

                                <!-- Ombre douce autour -->
                                <path
                                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                                    opacity=".15" />
                            </svg>`;
  const ukFlagSVG = `<svg class="lang-flag w-6 h-6" alt="Switch Language" xmlns="http://www.w3.org/2000/svg"
                                width="32" height="32" viewBox="0 0 32 32">
                                <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect>
                                <path
                                    d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                                    fill="#fff"></path>
                                <path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                                    fill="#b92932"></path>
                                <path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                                    fill="#b92932"></path>
                                <path
                                    d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                                    fill="#fff"></path>
                                <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                                <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                                <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
                                <rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)"
                                    fill="#b92932"></rect>
                                <path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                                    fill="#b92932"></path>
                                <path
                                    d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                                    fill="#b92932"></path>
                                <path
                                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                                    opacity=".15"></path>
                                <path
                                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                                    fill="#fff" opacity=".2"></path>
                            </svg>`;

  langSwitch.forEach(el => {
    el.addEventListener('click', () => {
      if (currentLang === 'fr') {
        currentLang = 'en';
        el.innerHTML = frenchFlagSVG;
      } else {
        currentLang = 'fr';
        el.innerHTML = ukFlagSVG;
      }
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
