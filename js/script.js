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
  const bgNav = document.getElementById("bg-nav");
  // const surNav = document.getElementById("sur-nav");

  let isBelowThreshold = false;

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 650 && !isBelowThreshold) {
      isBelowThreshold = true;

      logo.classList.add("shrink");

      bgNav.classList.remove("bg-white");
      bgNav.classList.add("bg-white-tr");

      // surNav.classList.add("hidden");

    } else if (scrollY <= 650 && isBelowThreshold) {
      isBelowThreshold = false;

      logo.classList.remove("shrink");

      bgNav.classList.remove("bg-white-tr");
      bgNav.classList.add("bg-white");

      // surNav.classList.remove("hidden"); 
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
      // FICHIER index.html
      // POLYVALENTS REUTILISABLES
      meetingBtn: "Prendre RDV",
      quoteRequest: "Demander un devis",
      backToTop: "Retour en haut",
      generalGTC: "CGV",
      // MENU
      menuTitle1: "Accueil",
      menuTitle2: "Offre",
      menuTitle3: "Formations",
      menuTitle4: "Approche",
      menuTitle5: "Qui",
      menuTitle6: "Contact",
      // LANDING
      landingTitle: "Utilisez l’improvisation appliquée et la puissance du jeu pour former vos équipes !",
      landingSubtitle: "Des ateliers sur-mesure, interactifs et engageants, pour booster les soft skills de vos collaborateurs et souder vos équipes grâce au team building.",
      landingContactBtn: "Nous contacter",
      landingOfferBtn: "Notre offre",
      // OFFRES
      offerTitle: "Notre offre",
      offerSubtitle: "Nous formons vos collaborateurs de façon dynamique, en mettant l’accent sur le jeu, l’engagement et la pleine présence, avec des solutions sur-mesure parfaitement alignées à vos enjeux de formation et de cohésion d’équipe. ",
      offerTitle1: "Vivre l’instant présent",
      offerText1: "Des ateliers immersifs, sans écran, pour réveiller l’écoute, la spontanéité et l’intelligence relationnelle. On apprend par la présence, l’action et l’engagement collectif.",
      offerTitle2: "Soft skills & team building",
      offerText2: "L’improvisation appliquée développe les soft skills, stimule l’écoute et l’adaptabilité, et renforce la cohésion grâce à une approche ludique, concrète et tournée vers le collectif.",
      offerTitle3: "Un accompagnement sur-mesure",
      offerText3: "Chaque accompagnement est sur-mesure : enjeux, culture, équipes… tout est adapté pour une expérience utile, engageante et alignée avec la réalité de votre organisation.",
      // FORMATIONS
      trainingsTitle: "Exemples de formations possibles",
      trainingsSubtitle: "Ci-dessous une liste non exhaustive des ateliers possibles.",
      trainingTitle1: "Prise de parole en public ",
      trainingText1: "Nos ateliers améliorent la prise de parole en public en développant confiance, spontanéité et gestion du stress, pour structurer ses idées, capter l’attention et s’adapter à l’imprévu.",
      trainingTitle2: "Encourager la collaboration",
      trainingText2: "Notre approche par le jeu encourage la collaboration en renforçant la confiance, l’adaptabilité et la créativité, pour des équipes plus unies et performantes face aux défis.",
      trainingTitle3: "Sensibilisation aux enjeux (RSE, handicap, inclusion…)",
      trainingText3: "Nos interventions sensibilisent à des enjeux comme la RSE, le handicap ou l’inclusion (exemples), favorisant expérimentation et empathie pour aborder ces sujets concrètement et humainement.",
      trainingTitle4: "Renforcer la cohésion d'équipe",
      trainingText4: "Par des mises en situation ludiques, nous favorisons un vrai travail sur les liens d’équipe, renforçant cohésion, confiance et qualité des relations autour de l’écoute et la coopération.",
      trainingTitle5: "Développer l’écoute active",
      trainingText5: "Nous proposons des exercices ludiques pour renforcer l’écoute active. Par le jeu, les participants apprennent à être présents, mieux comprendre et répondre efficacement en contexte pro.",
      trainingTitle6: "Atelier sur-mesure",
      trainingText6: "Cette liste donne un aperçu non exhaustif des ateliers. Nous concevons des programmes sur-mesure, adaptés à vos objectifs et à votre contexte spécifique.",
      // learnMore: "En savoir plus →",
      // checkAllTrainings: "Voir toutes nos formations",
      // APPROCHE
      approachTitle: "Notre approche",
      // approachSubtitle: "Notre approche unique en improvisation appliquée combine créativité, engagement et adaptation pour transformer l’apprentissage des soft skills en une expérience vivante et impactante.",
      approachTitle1: "Transposition des techniques théâtrales au monde professionnel",
      approachText1: "Nous adaptons les outils de l’improvisation théâtrale aux contextes professionnels, éducatifs et personnels pour proposer des expériences concrètes et développer des compétences utiles au quotidien.",
      approachTitle2: "Formation centrée sur l’instant présent",
      approachText2: "Nos formations utilisent l’instant présent comme levier d’apprentissage, en se concentrant sur “ici et maintenant”. Une pratique ancrée dans le réel.",
      approachTitle3: "Implication globale par le jeu",
      approachText3: "L’engagement se fait à tous niveaux — physique, émotionnel et psychologique — grâce à des exercices ludiques. Cette implication favorise l’appropriation des soft skills, la confiance et la cohésion d’équipe.",
      // TEMOIGNAGES
      trustedUsTitle: "Ils nous font confiance",
      trustedUsSubtitle: "Découvrez ce que nos clients disent de nous.",
      trustedUsText1: '“Une formation aussi ludique qu’efficace. Nos bénévoles repartent avec des outils concrets pour parler de notre mission avec assurance et enthousiasme.”',
      trustedUsRole1: "Directrice Générale",
      trustedUsText2: '“Approche très professionnelle et progressive adaptée aux différents profils de collaborateurs. Sam a su mettre tout le monde à l\'aise dès le départ.”',
      trustedUsRole2: "Directeur Général",
      trustedUsText3: '"Formateurs compétents et pédagogues. Le suivi post-formation a été particulièrement apprécié."',
      trustedUsRole3: "Responsable Formation, Groupe DEF",
      // CHIFFRES
      keyNumTitle: "Nos chiffres clés",
      keyNumText1: "Années d'expérience",
      keyNumText2: "Ateliers réalisés",
      keyNumText3: "Satisfaction client",
      // QUI
      whoTitle: "Qui est Sam Shafiee ?",
      whoSubtitle: `“J’ai choisi de consacrer mon activité professionnelle à la formation par le jeu, un puissant levier de dépassement de soi, de créativité et d’écoute que je transmets avec passion.”`,
      whoTitle1: "Improvisation Théâtrale",
      whoText1: "Improvisateur depuis 2018, j’ai rapidement développé une véritable passion pour cet art. Au fil des années, il m’est apparu évident de rapprocher ses techniques du monde professionnel.",
      whoTitle2: "Expérience Professionnelle",
      whoText2: "Fort de 10 ans d’expérience en finance et conseil, je mesure pleinement les enjeux internes liés à la formation des collaborateurs et au développement de leurs compétences.",
      whoTitle3: "Formations Diplômantes",
      whoText3: "Diplômé d'un Master 1 à l'ESSEC puis d'un Master 2 en finance à Assas, j'ai obtenu ma certification de formateur en improvisation appliquée en 2024.",
      // CONTACT
      contactUsTitle: "Contactez-nous",
      contactUsSubtitle: "Prêt à développer les compétences de votre équipe ? Parlons-en.",
      contactDetailsTitle: "Nos coordonnées",
      // contactDetailsSubtitle1: "Adresse",
      contactDetailsSubtitle2: "Téléphone",
      contactDetailsSubtitle3: "Email",
      // openingHoursTitle: "Horaires d'ouverture",
      // OpeningDays1: "Lundi - Vendredi",
      // OpeningHours1: "9h00 - 18h00",
      // OpeningDays2: "Samedi",
      // OpeningHours2: "Fermé",
      // mapTitle: "Nous rencontrer",
      contactMeetingTitle: "Prendre rendez-vous",
      contactMeetingText: "Choisissez un créneau qui vous convient via notre agenda en ligne.",
      contactFormTitle: "Envoyez-nous un message",
      contactFormLastName: 'Nom',
      contactFormFirstName: 'Prénom',
      contactFormCompany: 'Entreprise',
      contactFormPosition: 'Poste Occupé',
      contactFormEmail: 'Email',
      contactFormPhone: 'Tél.',
      contactFormSubject: 'Sujet',
      contactFormMessage: 'Message',
      contactFormRGPD: "J’accepte que mes données personnelles soient traitées par JeuFormation uniquement afin de répondre à ma demande.",
      contactFormPrivacy1: "Pour en savoir plus sur la gestion de vos données personnelles et pour exercer vos droits, consultez notre ",
      contactFormPrivacy2: "Politique de confidentialité",
      contactFormButton: "Envoyer",
      // FOOTER
      footerTitle: "Big'Impro",
      footerSubtitle: "Des ateliers sur-mesure, interactifs et engageants, pour booster les soft skills de vos collaborateurs et souder vos équipes grâce au team building.",
      footerT1: "Liens rapides",
      footerT1Link1: "Accueil",
      footerT1Link2: "Offre",
      footerT1Link3: "Formations",
      footerT1Link4: "Approche",
      footerT1Link5: "Contact",
      footerT2: "Contactez-nous",
      footerT2Link1: "Formulaire",
      // footerT2Link2: "Digital",
      // footerT2Link3: "Communication",
      // footerT2Link4: "Finance",
      // footerT2Link5: "Toutes les formations",
      footerT3: "Réseaux sociaux",
      footerT4: "Aide",
      footerCopyright: "© 2025 Big'Impro. Tous droits réservés.",
      footerLegal: "Mentions légales",
      footerPrivacy: "Politique de confidentialité",

      // PAGES LEGALES
      // POLYVALENTS REUTILISABLES 
      legalSub1: "N'oubliez pas de consulter notre",
      legalSub2: "et nos",
      // FICHIER mentions-legales.html
      legalTitle: "Mentions Légales",
      legalT1: "Éditeur du site",
      legalT1I1: "Nom de l'entreprise / Nom du responsable",
      legalT1I2: "Adresse",
      legalT1I3: "Téléphone",
      legalT1I4: "Forme juridique",
      legalT1I5: "Directeur de la publication",
      legalT2: "Hébergeur du site",
      legalT2I1: "Nom de l'hébergeur",
      legalT2I2: "Adresse",
      legalT2I3: "Téléphone",
      legalT2I4: "Site internet",
      legalT3: "Propriété intellectuelle",
      legalT3I1: "Le contenu du site (textes, images, logos, graphismes, etc.) est la propriété exclusive de",
      legalT3I2: "sauf mentions contraires. Toute reproduction, distribution ou exploitation sans autorisation est strictement interdite.",
      // FICHIER politique-confidentialite.html
      privacyTitle: "Politique de Confidentialité",
      // FICHIER cgv.html
      gtcTitle: "Conditions Générales de Vente (CGV)",

    },
    en: {
      // FICHIER index.html
      // POLYVALENTS REUTILISABLES
      meetingBtn: "Schedule MTG",
      quoteRequest: "Request a quote",
      backToTop: "Back To Top",
      generalGTC: "GTC",
      // MENU
      menuTitle1: "Home",
      menuTitle2: "Offer",
      menuTitle3: "Training",
      menuTitle4: "Approach",
      menuTitle5: "Who",
      menuTitle6: "Contact",
      // LANDING
      landingTitle: "Use applied improvisation and the power of play to train your teams !",
      landingSubtitle: "Tailor-made, interactive, and engaging workshops to boost your team's soft skills and strengthen bonds through team building.",
      landingContactBtn: "Contact us",
      landingOfferBtn: "Our offer",
      // OFFRE
      offerTitle: "Our offer",
      offerSubtitle: "We train your employees dynamically, emphasizing play, engagement, and full presence, with tailor-made solutions perfectly aligned with your training and team cohesion needs.",
      offerTitle1: "Living the Present Moment",
      offerText1: "Immersive, screen-free workshops to awaken listening, spontaneity, and relational intelligence. Learning happens through presence, action, and collective engagement.",
      offerTitle2: "Soft skills & team building",
      offerText2: "Applied improvisation builds soft skills, boosts listening and adaptability, and strengthens team cohesion through a playful, hands-on, and collaborative approach.",
      offerTitle3: "A tailored support",
      offerText3: "Each program is tailor-made: goals, culture, teams… everything is adapted for a relevant, engaging, and useful experience aligned with your organization’s reality.",
      // FORMATIONS
      trainingsTitle: "Possible training examples",
      trainingsSubtitle: "Below is a non-exhaustive list of possible workshops.",
      trainingTitle1: "Public speaking",
      trainingText1: "Our workshops improve public speaking by building confidence, spontaneity, and stress management, helping structure ideas, capture attention, and adapt to the unexpected.",
      trainingTitle2: "Foster collaboration",
      trainingText2: "Our playful approach fosters collaboration by boosting trust, adaptability, and creativity, creating stronger, high-performing teams ready to face any challenge.",
      trainingTitle3: "Raising awareness of key topics (CSR, disability, inclusion...)",
      trainingText3: "Our sessions raise awareness on issues like CSR, disability, or inclusion (examples), fostering experimentation and empathy to address these topics in a concrete and human way.",
      trainingTitle4: "Strengthen team cohesion",
      trainingText4: "Through playful scenarios, we foster real team bonding, strengthening cohesion, trust, and relationship quality by focusing on listening and collaboration.",
      trainingTitle5: "Enhance active listening skills",
      trainingText5: "We offer interactive exercises to strengthen active listening. Through play, participants learn to be present, better understand others, and respond more effectively in professional settings.",
      trainingTitle6: "Tailor-made session",
      trainingText6: "This list offers a non-exhaustive overview of workshops. We design custom programs tailored to your goals and specific context, fully adapted to your needs.",
      // learnMore: "Learn more →",
      // checkAllTrainings: "Check all our trainings",
      // APPROCHE
      approachTitle: "Our approach",
      // approachSubtitle: "Our unique applied improvisation approach combines creativity, engagement, and adaptability to transform soft skills learning into a vivid and impactful experience.",
      approachTitle1: "Transposing Theatrical Techniques to the Professional World",
      approachText1: "We adapt theatrical improvisation tools to professional, educational, and personal contexts to offer concrete experiences and develop skills useful in daily life.",
      approachTitle2: "Training Focused on the Present Moment",
      approachText2: "Our trainings use the present moment as a learning lever, focusing on the 'here and now.' A practice rooted in reality.",
      approachTitle3: "Holistic Engagement Through Play",
      approachText3: "Engagement happens on all levels — physical, emotional, and psychological — through playful exercises. This involvement promotes the development of soft skills, trust, and team cohesion.",
      // TEMOIGNAGES
      trustedUsTitle: "They trust us",
      trustedUsSubtitle: "Check how customers feel about us.",
      trustedUsText1: '“A training as fun as effective. Our volunteers got some concrete tools to talk about our mission with confidence and enthousiasm.”',
      trustedUsRole1: "CEO",
      trustedUsText2: '“Very professional and progressive approach designed for different co-workers profiles. Sam succeeded in making everyone at ease from the beginning.”',
      trustedUsRole2: "CEO",
      trustedUsText3: '"Experienced trainers. The after-training service has been very appreciated."',
      trustedUsRole3: "Head of Training - DEF Group",
      // CHIFFRES
      keyNumTitle: "Our key figures",
      keyNumText1: "Years of experience",
      keyNumText2: "Achieved workshops",
      keyNumText3: "Customer satisfaction",
      // QUI
      whoTitle: "Who is Sam Shafiee ?",
      whoSubtitle: `“I have chosen to dedicate my professional activity to training through play, a powerful catalyst for self-improvement, creativity, and listening skills that I passionately share.”`,
      whoTitle1: "Theatrical Improvisation",
      whoText1: "An improviser since 2018, I quickly developed a true passion for this art. Over the years, it became clear to me to connect its techniques with the professional world.",
      whoTitle2: "Professional Experience",
      whoText2: "With 10 years of experience in finance and consulting, I fully understand the internal challenges related to employee training and skills development.",
      whoTitle3: "Certified Training",
      whoText3: "Graduated with a Master 1 from ESSEC and a Master 2 in Finance from Assas, I obtained my certification as a trainer in applied improvisation in 2024.",
      // CONTACT
      contactUsTitle: "Contact us",
      contactUsSubtitle: "Ready to boost your teams sofskills ? Let's talk.",
      contactDetailsTitle: "Our contact details",
      // contactDetailsSubtitle1: "Address",
      contactDetailsSubtitle2: "Phone",
      contactDetailsSubtitle3: "Email",
      // openingHoursTitle: "Opening hours",
      // openingDays1: "Monday - Friday",
      // openingHours1: "9am - 6pm",
      // openingDays2: "Saturday",
      // openingHours2: "Closed",
      // mapTitle: "Meet us",
      contactMeetingTitle: "Schedule a meeting",
      contactMeetingText: "Choose a convenient slot through our online calendar.",
      contactFormTitle: "Send us a message",
      contactFormLastName: 'Last Name',
      contactFormFirstName: 'First Name',
      contactFormCompany: 'Company',
      contactFormPosition: 'Position',
      contactFormEmail: 'Email',
      contactFormPhone: 'Phone',
      contactFormSubject: 'Subject',
      contactFormMessage: 'Message',
      contactFormRGPD: "I agree my personal data be used by JeuFormation only to treat my request.",
      contactFormPrivacy1: "To get further information about the treatment of your personal data and to exercise your rights, check our ",
      contactFormPrivacy2: "Privacy Policy",
      contactFormButton: "Send",
      // FOOTER
      footerTitle: "JEU Formation",
      footerSubtitle: "Tailor-made, interactive, and engaging workshops to boost your team's soft skills and strengthen bonds through team building.",
      footerT1: "Short links",
      footerT1Link1: "Home",
      footerT1Link2: "Offer",
      footerT1Link3: "Training",
      footerT1Link4: "Approach",
      footerT1Link5: "Contact",
      footerT2: "Contact us",
      footerT2Link1: "Form",
      // footerT2Link2: "Digital",
      // footerT2Link3: "Communication",
      // footerT2Link4: "Finance",
      // footerT2Link5: "All our trainings",
      footerT3: "Social networks",
      footerT4: "Help",
      footerCopyright: "© 2025 JEU Formation. All rights reserved.",
      footerLegal: "Legal notices",
      footerPrivacy: "Privacy policy",

      // PAGES LEGALES
      // POLYVALENTS REUTILISABLES
      legalSub1: "Do not forget to check our",
      legalSub2: "and our",
      // FICHIER mentions-legales.html
      legalTitle: "Legal Notices",
      legalT1: "Website editor",
      legalT1I1: "Company name / Manager name",
      legalT1I2: "Address",
      legalT1I3: "Phone",
      legalT1I4: "Legal status",
      legalT1I5: "Publishing director",
      legalT2: "Website host",
      legalT2I1: "Host name",
      legalT2I2: "Address",
      legalT2I3: "Phone",
      legalT2I4: "Website",
      legalT3: "Intellectual property",
      legalT3I1: "This website content (texts, images, logos, graphisms, etc.) is the exclusive property of",
      legalT3I2: "except contrary notices. Any reproduction, distribution or exploitation without authorization is strictly forbidden.",
      // FICHIER politique-confidentialite.html
      privacyTitle: "Privacy Policy",
      // FICHIER cgv.html
      gtcTitle: "General Terms & Conditions (GTC)",
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
