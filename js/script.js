document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Fermer le menu si clic à l'extérieur
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnButton = mobileMenuButton.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      mobileMenu.classList.add('hidden');
    }
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

  // Switch Logo Dark / Light Modes
  function setLogoBasedOnTheme() {
    if (document.documentElement.classList.contains('dark')) {
      logoImg.src = './img/bigimpro (500 x 200 px)-nobg-darkmode.png'; // Logo pour mode sombre
    } else {
      logoImg.src = './img/bigimpro (500 x 200 px)-nobg.png'; // Logo pour mode clair
    }
  }

  // Switch onClick Dark / Light Modes
  const themeToggle = document.querySelectorAll('.theme-toggle');
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
  });

  // Switch Emojis Moon / Sun
  let currentThemeIcon = "";
  if (document.documentElement.classList.contains('dark')) {
    currentThemeIcon = "☀️";
  } else {
    currentThemeIcon = "🌚";
  }
  const icons = document.querySelectorAll('.theme-icon');

  icons.forEach(el => {
    el.addEventListener('click', () => {
      // Bascule l'icône globalement
      currentThemeIcon = currentThemeIcon === "🌚" ? "☀️" : "🌚";

      // Met à jour chaque bouton
      icons.forEach(icon => {
        icon.textContent = currentThemeIcon;
      });
    });
  });




  // LANG TOGGLE
  const langSwitch = document.querySelectorAll('.lang-switch');

  const translations = {
    fr: {
      menuTitle1: "Accueil",
      menuTitle2: "Offre",
      menuTitle3: "Formations",
      menuTitle4: "Approche",
      menuTitle5: "Contact",
      heroTitle: "Les techniques de l’improvisation appliquées au monde professionnel : un puissant levier pour former vos collaborateurs en les engageant activement par le jeu",
      heroSubtitle: "Des ateliers sur-mesure, interactifs et engageants, pour booster les soft skills de vos collaborateurs et souder vos équipes grâce au team building.",
      heroContactBtn: "Nous contacter",
      heroOfferBtn: "Notre offre",
      offerTitle: "Notre offre",
      offerSubtitle: "Nous formons vos collaborateurs de façon dynamique, en mettant l’accent sur le jeu, l’engagement et la pleine présence, avec des solutions sur-mesure parfaitement alignées à vos enjeux de formation et de cohésion d’équipe. ",
      offerTitle1: "Vivre l’instant présent",
      offerText1: "Des ateliers immersifs, sans écran, pour réveiller l’écoute, la spontanéité et l’intelligence relationnelle. On apprend par la présence, l’action et l’engagement collectif.",
      offerTitle2: "Soft skills & team building",
      offerText2: "L’improvisation appliquée est un outil puissant pour développer les soft skills et renforcer la cohésion d’équipe. En vivant des situations concrètes et engageantes, les participants stimulent leur écoute, leur adaptabilité et leur communication. Ludique et incarnée, cette approche favorise l’audace, l’entraide et l’apprentissage collectif.",
      offerTitle3: "Un accompagnement sur-mesure",
      offerText3: "Chaque accompagnement est conçu sur-mesure, en lien direct avec vos enjeux, votre culture et vos équipes. Rien n’est standardisé : nous adaptons les contenus, les mises en situation et les dynamiques pour que l’expérience soit pleinement pertinente, utile et impactante. Parce que chaque organisation est unique, la formation doit l’être aussi.",
      trainingsTitle: "Exemples de formations possibles",
      // trainingsSubtitle: "Découvrez nos principaux domaines d'expertise en formation professionnelle.",
      trainingTitle1: "Prise de parole en public ",
      trainingText1: "Nos ateliers boostent la prise de parole en public en développant confiance, spontanéité et gestion du stress. Elle aide à structurer ses idées, capter l’attention, et s’adapter facilement à l’imprévu pour des interventions plus naturelles et impactantes.",
      trainingTitle2: "Encourager la collaboration",
      trainingText2: "Notre méthode favorise une collaboration fluide en développant l’écoute active, la confiance mutuelle et la créativité collective. Elle apprend à rebondir ensemble face à l’imprévu, encourageant ainsi l’ouverture d’esprit, la flexibilité et un esprit d’équipe renforcé. ",
      trainingTitle3: "Sensibilisation aux enjeux (RSE, handicap, inclusion…)",
      trainingText3: "Nos ateliers peuvent aussi être conçus comme des espaces de sensibilisation à des enjeux tels que la RSE, le handicap ou l’inclusion. En favorisant l’expérimentation et l’empathie, ils permettent d’aborder ces thématiques de manière concrète, humaine et engageante.",
      trainingTitle4: "Renforcer la cohésion d'équipe",
      trainingText4: "À travers des mises en situation ludiques et collectives, nous créons les conditions d’un véritable travail sur les liens au sein de l’équipe. Ces expériences renforcent la cohésion, la confiance mutuelle et la qualité des relations, en plaçant l’écoute et la coopération au cœur de l’action.",
      trainingTitle5: "Développer l’écoute active",
      trainingText5: "Cet atelier propose des exercices concrets et interactifs pour renforcer l’écoute active dans les échanges professionnels. À travers le jeu et des mises en situation, les participants apprennent à être pleinement présents, à mieux comprendre leurs interlocuteurs et à répondre de manière plus juste et efficace.",
      trainingTitle6: "Atelier sur-mesure",
      trainingText6: "Cette liste offre un aperçu de nos ateliers possibles de façon non exhaustive. Nous sommes également à votre disposition pour concevoir un programme sur-mesure, parfaitement adapté à vos objectifs et à votre contexte spécifique.",
      // learnMore: "En savoir plus →",
      // checkAllTrainings: "Voir toutes nos formations",
      quoteRequest: "Demander un devis",
      approachTitle: "Notre approche",
      approachSubtitle: "Notre approche unique en improvisation appliquée combine créativité, engagement et adaptation pour transformer l’apprentissage des soft skills en une expérience vivante et impactante.",
      approachTitle1: "Transposition des techniques théâtrales au monde professionnel",
      approachText1: "Nous adaptons les méthodes de l’improvisation théâtrale pour répondre aux besoins spécifiques des contextes professionnels, éducatifs et de développement personnel. Cette transposition permet de faire vivre des expériences riches et concrètes, facilitant l’acquisition de compétences utiles au quotidien.",
      approachTitle2: "Formation centrée sur l’instant présent",
      approachText2: "Nos formations privilégient l’instant présent comme levier d’apprentissage. En se concentrant sur “ici et maintenant”, les participants développent leur capacité à s’adapter, à écouter activement et à réagir de façon authentique et spontanée face aux situations rencontrées.",
      approachTitle3: "Implication globale par le jeu",
      approachText3: "L’engagement se fait à tous les niveaux — physique, corporel, émotionnel et psychologique — grâce à des exercices ludiques et immersifs. Cette implication totale favorise une meilleure appropriation des soft skills, tout en renforçant la confiance et la cohésion au sein des équipes.",
      trustedUsTitle: "Ils nous font confiance",
      trustedUsSubtitle: "Découvrez ce que nos clients disent de nous.",
      trustedUsText1: '"La formation en management a transformé notre façon de travailler. Nos équipes sont plus motivées et productives."',
      trustedUsRole1: "Directeur RH - Entreprise XYZ",
      trustedUsText2: '"Approche très professionnelle et adaptée à nos besoins spécifiques. Les résultats ont été immédiats."',
      trustedUsRole2: "Directrice Générale, Société ABC",
      trustedUsText3: '"Formateurs compétents et pédagogues. Le suivi post-formation a été particulièrement apprécié."',
      trustedUsRole3: "Responsable Formation, Groupe DEF",
      keyNumTitle: "Nos chiffres clés",
      keyNum1: "7+",
      keyText1: "Années d'expérience",
      keyNum2: "15+",
      keyText2: "Projets réalisés",
      keyNum3: "96%",
      keyText3: "Satisfaction client",
      whoTitle: "Qui est Sam Shafiee ?",
      whoSubtitle: `“J’ai décidé de me consacrer à l’improvisation dans le cadre de mon activité professionnelle car c’est un outil puissant de dépassement de soi, de créativité et d’écoute que j’ai à coeur de partager.”`,
      contactUsTitle: "Contactez-nous",
      contactUsSubtitle: "Prêt à développer les compétences de votre équipe ? Parlons-en.",
      contactDetailsTitle: "Nos coordonnées",
      contactDetailsSubtitle1: "Adresse",
      contactDetailsText1: "12 Rue des Entrepreneurs<br>75000 Paris, France",
      contactDetailsSubtitle2: "Téléphone",
      contactDetailsText2: "07 XX XX XX XX",
      contactDetailsSubtitle3: "Email",
      contactDetailsText3: "contact@bigimpro.com",
      openingHoursTitle: "Horaires d'ouverture",
      days1: "Lundi - Vendredi",
      hours1: "9h00 - 18h00",
      days2: "Samedi",
      hours2: "Fermé",
      mapTitle: "Nous rencontrer",
      formTitle: "Envoyez-nous un message",
      formLastName: 'Nom',
      formFirstName: 'Prénom',
      formCompany: 'Entreprise',
      formPosition: 'Poste Occupé',
      formEmail: 'Email',
      formPhone: 'Tél.',
      formSubject: 'Sujet',
      formMessage: 'Message',
      formRGPD: "J’accepte que mes informations de contact soient temporairement stockées pour répondre à ma demande. Elles ne seront en aucun cas revendues ou utilisées à des fins marketing ou commerciale.",
      formPrivacy1: "Consultez notre ",
      formPrivacy2: "Politique de confidentialité",
      formButton: "Envoyer le message",
      backToTop: "Retour en haut",
      footerTitle: "Big'Impro",
      footerSubtitle: "Experts en formation professionnelle et développement des compétences depuis 2021.",
      footerT1: "Liens rapides",
      footerT1Link1: "Accueil",
      footerT1Link2: "Offre",
      footerT1Link3: "Formations",
      footerT1Link4: "Approche",
      footerT1Link5: "Contact",
      footerT2: "Formations",
      footerT2Link1: "Management",
      footerT2Link2: "Digital",
      footerT2Link3: "Communication",
      footerT2Link4: "Finance",
      footerT2Link5: "Toutes les formations",
      footerT3: "Réseaux sociaux",
      footerCopyright: "© 2025 Big'Impro. Tous droits réservés.",
      footerLegal: "Mentions légales",
      footerPrivacy: "Politique de confidentialité",
      footerGTC: "CGV",
    },
    en: {
      menuTitle1: "Home",
      menuTitle2: "Offer",
      menuTitle3: "Training",
      menuTitle4: "Approach",
      menuTitle5: "Contact",
      heroTitle: "Applied improvisation techniques in the professional world: a powerful lever to train your teams by actively engaging them through play",
      heroSubtitle: "Tailor-made, interactive, and engaging workshops to boost your team's soft skills and strengthen bonds through team building.",
      heroContactBtn: "Contact us",
      heroOfferBtn: "Our offer",
      offerTitle: "Our offer",
      offerSubtitle: "We train your employees dynamically, emphasizing play, engagement, and full presence, with tailor-made solutions perfectly aligned with your training and team cohesion needs.",
      offerTitle1: "Living the Present Moment",
      offerText1: "Immersive, screen-free workshops to awaken listening, spontaneity, and relational intelligence. Learning happens through presence, action, and collective engagement.",
      offerTitle2: "Soft skills & team building",
      offerText2: "Applied improvisation is a powerful tool for developing soft skills and strengthening team cohesion. By engaging in concrete, hands-on situations, participants enhance their listening, adaptability, and communication. Playful and embodied, this approach encourages boldness, collaboration, and collective learning.",
      offerTitle3: "A tailored support",
      offerText3: "Each program is tailor-made to align closely with your challenges, culture, and teams. Nothing is standardized: we adapt content, scenarios, and dynamics to ensure the experience is relevant, useful, and impactful. Because every organization is unique, so should be the training.",
      trainingsTitle: "Possible training examples",
      // trainingsSubtitle: "Find out our main expertise areas for professional training.",
      trainingTitle1: "Public speaking",
      trainingText1: "Our approach boosts public speaking by building confidence, spontaneity, and stress management. It helps structure ideas, capture attention, and adapt smoothly to the unexpected for more natural and impactful presentations.",
      trainingTitle2: "Foster collaboration",
      trainingText2: "Our method fosters smooth collaboration by developing active listening, mutual trust, and collective creativity. It teaches how to respond together to the unexpected, thereby encouraging open-mindedness, flexibility, and a strengthened team spirit.",
      trainingTitle3: "Raising awareness of key topics (CSR, disability, inclusion...)",
      trainingText3: "Our workshops can also be designed as spaces for raising awareness around key issues such as CSR, disability, or inclusion. By fostering experimentation and empathy, they offer a concrete, human, and engaging way to explore these topics.",
      trainingTitle4: "Strengthen team cohesion",
      trainingText4: "Through playful, collective scenarios, we create the conditions for meaningful connection within teams. These experiences strengthen cohesion, mutual trust, and the quality of relationships by placing listening and collaboration at the heart of the action.",
      trainingTitle5: "Enhance active listening skills",
      trainingText5: "This workshop offers practical and interactive exercises to strengthen active listening in professional interactions. Through play and role-playing scenarios, participants learn to be fully present, better understand their counterparts, and respond more thoughtfully and effectively.",
      trainingTitle6: "Tailor-made session",
      trainingText6: "This list provides a non-exhaustive overview of our possible workshops. We are also available to design a tailor-made program, fully adapted to your goals and specific context.",
      // learnMore: "Learn more →",
      // checkAllTrainings: "Check all our trainings",
      quoteRequest: "Request a quote",
      approachTitle: "Our approach",
      approachSubtitle: "Our unique applied improvisation approach combines creativity, engagement, and adaptability to transform soft skills learning into a vivid and impactful experience.",
      approachTitle1: "Transposing Theatrical Techniques to the Professional World",
      approachText1: "We adapt theatrical improvisation methods to meet the specific needs of professional, educational, and personal development contexts. This transposition allows participants to live rich, concrete experiences that facilitate the acquisition of skills useful in everyday life.",
      approachTitle2: "Training Focused on the Present Moment",
      approachText2: "Our training prioritizes the present moment as a key learning driver. By focusing on the “here and now,” participants develop their ability to adapt, actively listen, and respond authentically and spontaneously to situations encountered.",
      approachTitle3: "Holistic Engagement Through Play",
      approachText3: "Engagement happens on all levels — physical, bodily, emotional, and psychological — through playful and immersive exercises. This total involvement promotes a deeper internalization of soft skills while strengthening trust and cohesion within teams.",
      trustedUsTitle: "They trust us",
      trustedUsSubtitle: "Check how customers feel about us.",
      trustedUsText1: '"The management training got a significant impact on our working process. Our teams are now more motivated and productive."',
      trustedUsRole1: "Head of HR - XYZ Company",
      trustedUsText2: '"Very professional and goal-oriented approach. Everything is made to reach our specific needs. Results were immediate."',
      trustedUsRole2: "CEO - ABC Company",
      trustedUsText3: '"Experienced trainers. The after-training service has been very appreciated."',
      trustedUsRole3: "Head of Training - DEF Group",
      keyNumTitle: "Our key figures",
      keyNum1: "7+",
      keyText1: "Years of experience",
      keyNum2: "15+",
      keyText2: "Achieved projects",
      keyNum3: "96%",
      keyText3: "Customer satisfaction",
      whoTitle: "Who is Sam Shafiee ?",
      whoSubtitle: `“I've decided to professionalize my passion for improvisation because it's a powerful lever for surpassing oneself, creativity and active listening that I love to share.”`,
      contactUsTitle: "Contact us",
      contactUsSubtitle: "Ready to boost your teams sofskills ? Let's talk.",
      contactDetailsTitle: "Our contact details",
      contactDetailsSubtitle1: "Address",
      contactDetailsText1: "12 Rue des Entrepreneurs<br>75000 Paris, France",
      contactDetailsSubtitle2: "Phone",
      contactDetailsText2: "+33 7 XX XX XX XX",
      contactDetailsSubtitle3: "Email",
      contactDetailsText3: "contact@bigimpro.com",
      openingHoursTitle: "Opening hours",
      openingDays1: "Monday - Friday",
      openingHours1: "9am - 6pm",
      openingDays2: "Saturday",
      openingHours2: "Closed",
      mapTitle: "Meet us",
      formTitle: "Send us a message",
      formLastName: 'Last Name',
      formFirstName: 'First Name',
      formCompany: 'Company',
      formPosition: 'Position',
      formEmail: 'Email',
      formPhone: 'Phone',
      formSubject: 'Subject',
      formMessage: 'Message',
      formRGPD: "I agree my contact details to be temporarily stocked to deal with my demand. They won't be resold or used for marketing or sales.",
      formPrivacy1: "Check our ",
      formPrivacy2: "Privacy Policy",
      formButton: "Send your message",
      backToTop: "Back To Top",
      footerTitle: "Big'Impro",
      footerSubtitle: "Experts in professional training and softskills development since 2021.",
      footerT1: "Key links",
      footerT1Link1: "Home",
      footerT1Link2: "Offer",
      footerT1Link3: "Training",
      footerT1Link4: "Approach",
      footerT1Link5: "Contact",
      footerT2: "Training",
      footerT2Link1: "Management",
      footerT2Link2: "Digital",
      footerT2Link3: "Communication",
      footerT2Link4: "Finance",
      footerT2Link5: "All our trainings",
      footerT3: "Social networks",
      footerCopyright: "© 2025 Big'Impro. All rights reserved.",
      footerLegal: "Legal notices",
      footerPrivacy: "Privacy policy",
      footerGTC: "GTC",
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
