/* ============================================
   EMI TOURS - Main JavaScript
   ============================================ */

// ===== TRANSLATIONS =====
const i18n = {
  en: {
    nav: { home: 'Home', destinations: 'Destinations', about: 'About Us', contact: 'Contact' },
    hero: { badge: 'Premium Travel Agency', title: 'EMI <span>TOURS</span>', subtitle: 'We would love to hear from you. Reach out to us and let us plan your perfect journey.', btn1: 'Explore Destinations', btn2: 'Contact Us' },
    partners: { tag: 'Our Partners', desc: 'Trusted by leading airlines worldwide' },
    why: { tag: 'Why Choose Us', title: 'Why EMI Tours?', cards: [
      { title: 'Professional Planning', desc: 'Every detail crafted to perfection. From flights to accommodation, we handle it all.' },
      { title: 'Worldwide Destinations', desc: 'Access to 50+ countries with carefully curated travel experiences.' },
      { title: 'Trusted Service', desc: 'Years of excellence recognized by thousands of happy travelers.' },
      { title: '24/7 Customer Support', desc: 'We are always here for you, anytime, anywhere.' }
    ]},
    services: { tag: 'Our Services', title: 'Travel Services' },
    servicesList: [
      'Custom Travel Planning','Ticketing & Reservations','Hajj & Omra',
      'Events & Groups','Transportation'
    ],
    servicesDesc: [
      'Tailor-made itineraries designed around your preferences, budget, and dreams — every journey is unique.',
      'Fast and reliable booking for flights, hotels, and more at the best available rates.',
      'Specialized spiritual travel packages for Hajj and Omra with complete guidance and support.',
      'Corporate events, family gatherings, and group travel coordinated with precision and care.',
      'Comfortable and safe transportation solutions including airport transfers and private charters.'
    ],
    servicesIcons: [
      'fa-map-marked-alt','fa-ticket-alt','fa-kaaba','fa-calendar-alt','fa-van-shuttle'
    ],
    destinations: { tag: 'Popular Destinations', title: 'Explore Popular Destinations', discover: 'Discover' },
    cta: { title: 'Ready for Your Next Adventure?', desc: 'Let us plan the perfect trip for you. Contact us today!', btn: 'Contact Us' },
    footer: { desc: 'Your trusted travel partner for unforgettable journeys around the globe.', quickLinks: 'Quick Links', destinations: 'Destinations', contact: 'Contact', rights: '\u00a9 2026 EMI Tours. All rights reserved.' },
    features: { learnMore: 'Learn More', cards: [
      { tag: 'DESTINATIONS', title: 'Discover Amazing Places', desc: 'Explore breathtaking destinations carefully selected to create unforgettable travel experiences around the world.' },
      { tag: 'TOURS', title: 'Tailor-Made Tours', desc: 'Personalized itineraries designed to match your interests, schedule, and travel style.' },
      { tag: 'SUPPORT', title: 'Travel With Confidence', desc: 'Enjoy secure booking, premium service, and 24/7 support from our travel experts.' }
    ] },
    hajj: { tag: 'Sacred Journeys', title: 'Hajj & Omra Gallery', desc: 'Explore the spiritual beauty and sacred moments of Hajj through our curated collection.' },
    about: { hero: { title: 'About EMI Tours', desc: 'Discover our story, mission, and the values that drive every journey we create.' }, story: 'Our Story', storyText: 'Founded in 2003, EMI Tours is a travel agency established by Mrs. Imane Lamrani, who has over 25 years of experience in the tourism and travel industry. In addition to leading EMI Tours as its Founder and Chief Executive Officer, Mrs. Lamrani currently serves as the President of the Association of Travel Agencies of Rabat-Sal\u00e9-K\u00e9nitra. EMI Tours provides a comprehensive range of travel services, including airline ticketing, hotel reservations in Morocco and abroad, organized tours, religious tourism, domestic and international travel, incentive travel, and event management. Licensed by the Moroccan Ministry of Tourism and accredited by IATA, EMI Tours has built a strong reputation for professionalism, reliability, and excellence in customer service.', mission: 'Our Values', missionText: 'At EMI Tours, our clients are at the heart of everything we do. Their expectations guide our work, their feedback drives our continuous improvement, and their preferences inspire the destinations and services we offer. To remain true to this commitment, we embrace a set of core values every day: availability, quality, professionalism, innovation, and tailor-made service. We are dedicated to delivering personalized, reliable, and unforgettable travel experiences while providing exceptional support throughout every stage of our clients\u2019 journeys.', vision: 'Our Vision', visionText: 'To be the most trusted and innovative travel partner in Morocco and beyond, setting the standard for excellence in the travel industry. We envision a world where travel is accessible, transformative, and a force for good — bridging cultures and creating memories that last a lifetime.', stats: { years: 'Years Experience', travelers: 'Happy Travelers', destinations: 'Destinations', support: '24/7 Support' }},
    valuesTag: 'Our Values',
    valuesTitle: 'The Principles That Guide Us',
    valuesDesc: 'Integrity, excellence, innovation, and sustainability — these core values shape every journey we create and every relationship we build.',

    contact: { tag: 'Get In Touch', title: 'Contact Us', desc: 'We would love to hear from you. Reach out to us and let us plan your perfect journey.', info: 'Contact Information', form: 'Send us a Message', name: 'Full Name', email: 'Email', phone: 'Phone Number', destination: 'Destination Interested In', message: 'Message', btn: 'Send via WhatsApp', working: 'Working Hours', workingHours: 'Mon - Fri: 9:00 AM - 18:00 PM<br>Sat: 09:00 AM - 13:00 PM', address: '17 Baht, Rabat 10000, Morocco', phoneVal: '+2125 37777722 /24', whatsappVal: '+212 661-371778', emailVal: 'emitoursmaroc@gmail.com' },
    destinationsPage: { tag: 'Our Destinations', title: 'Discover Amazing Places', desc: 'Explore our handpicked selection of extraordinary destinations worldwide' },
    values: [
      { icon: 'fa-handshake', title: 'Integrity', desc: 'We believe in honest, transparent relationships with every client. No hidden fees, no surprises — just trust built through years of reliable service and ethical practices.' },
      { icon: 'fa-star', title: 'Excellence', desc: 'We hold ourselves to the highest standards in every aspect of travel. From first contact to the journey home, every detail is meticulously crafted for perfection.' },
      { icon: 'fa-lightbulb', title: 'Innovation', desc: 'We embrace modern technology and creative thinking to deliver seamless travel solutions. Our forward-looking approach ensures you benefit from the best the industry has to offer.' },
      { icon: 'fa-leaf', title: 'Sustainability', desc: 'We are committed to responsible tourism that protects our planet and empowers local communities. Every journey is designed to leave a positive footprint on the world.' }
    ]
  },

  fr: {
    nav: { home: 'Accueil', destinations: 'Destinations', about: '\u00c0 Propos', contact: 'Contact' },
    hero: { badge: 'Agence de Voyage Premium', title: 'EMI <span>TOURS</span>', subtitle: 'Nous aimerions avoir de vos nouvelles. Contactez-nous et laissez-nous planifier votre voyage parfait.', btn1: 'Explorer les Destinations', btn2: 'Contactez-Nous' },
    partners: { tag: 'Nos Partenaires', desc: 'Approuv\u00e9s par les plus grandes compagnies a\u00e9riennes' },
    why: { tag: 'Pourquoi Nous Choisir', title: 'Pourquoi EMI Tours ?', cards: [
      { title: 'Planification Professionnelle', desc: 'Chaque d\u00e9tail con\u00e7u \u00e0 la perfection. Vols, h\u00e9bergement, tout est pris en charge.' },
      { title: 'Destinations Mondiales', desc: 'Acc\u00e8s \u00e0 plus de 50 pays avec des exp\u00e9riences de voyage soigneusement s\u00e9lectionn\u00e9es.' },
      { title: 'Service de Confiance', desc: 'Des ann\u00e9es d\u2019excellence reconnues par des milliers de voyageurs satisfaits.' },
      { title: 'Support Client 24/7', desc: 'Nous sommes toujours l\u00e0 pour vous, \u00e0 tout moment, partout.' }
    ]},
    services: { tag: 'Nos Services', title: 'Services de Voyage' },
    servicesList: [
      'Planification de Voyage sur Mesure','Billetterie & R\u00e9servations','Hajj & Omra',
      '\u00c9v\u00e9nements & Groupes','Transport'
    ],
    servicesDesc: [
      'Des itin\u00e9raires sur mesure con\u00e7us autour de vos pr\u00e9f\u00e9rences, votre budget et vos r\u00eaves \u2014 chaque voyage est unique.',
      'R\u00e9servation rapide et fiable de vols, d\u2019h\u00f4tels et plus encore aux meilleurs tarifs disponibles.',
      'Forfaits de voyage spirituel sp\u00e9cialis\u00e9s pour le Hajj et l\u2019Omra avec un accompagnement et un soutien complets.',
      '\u00c9v\u00e9nements d\u2019entreprise, r\u00e9unions familiales et voyages de groupe coordonn\u00e9s avec pr\u00e9cision et attention.',
      'Solutions de transport confortables et s\u00fbres, y compris les transferts a\u00e9roportuaires et les charters priv\u00e9s.'
    ],
    servicesIcons: [
      'fa-map-marked-alt','fa-ticket-alt','fa-kaaba','fa-calendar-alt','fa-van-shuttle'
    ],
    destinations: { tag: 'Destinations Populaires', title: 'Explorez Nos Destinations', discover: 'D\u00e9couvrir' },
    cta: { title: 'Pr\u00eat pour votre Prochaine Aventure ?', desc: 'Laissez-nous planifier le voyage parfait pour vous. Contactez-nous d\u00e8s aujourd\'hui !', btn: 'Contactez-Nous' },
    footer: { desc: 'Votre partenaire de confiance pour des voyages inoubliables autour du globe.', quickLinks: 'Liens Rapides', destinations: 'Destinations', contact: 'Contact', rights: '\u00a9 2026 EMI Tours. Tous droits r\u00e9serv\u00e9s.' },
    features: { learnMore: 'En Savoir Plus', cards: [
      { tag: 'DESTINATIONS', title: 'D\u00e9couvrez des Lieux Magnifiques', desc: 'Explorez des destinations \u00e0 couper le souffle soigneusement s\u00e9lectionn\u00e9es pour cr\u00e9er des exp\u00e9riences de voyage inoubliables \u00e0 travers le monde.' },
      { tag: 'VOYAGES', title: 'Voyages Sur Mesure', desc: 'Des itin\u00e9raires personnalis\u00e9s con\u00e7us pour correspondre \u00e0 vos int\u00e9r\u00eats, votre emploi du temps et votre style de voyage.' },
      { tag: 'SOUTIEN', title: 'Voyagez en Toute Confiance', desc: 'B\u00e9n\u00e9ficiez d\'une r\u00e9servation s\u00e9curis\u00e9e, d\'un service premium et d\'un support 24h/24 de la part de nos experts en voyage.' }
    ] },
    hajj: { tag: 'Voyages Sacr\u00e9s', title: 'Galerie Hajj & Omra', desc: 'D\u00e9couvrez la beaut\u00e9 spirituelle et les moments sacr\u00e9s du Hajj \u00e0 travers notre collection.' },
    about: { hero: { title: '\u00c0 Propos d\'EMI Tours', desc: 'D\u00e9couvrez notre histoire, notre mission et l\u2019\u00e9quipe derri\u00e8re vos voyages.' }, story: 'Notre Histoire', storyText: 'Fond\u00e9e en 2003, EMI Tours est une agence de voyages cr\u00e9\u00e9e par Mme Imane Lamrani, dont l\u2019exp\u00e9rience s\u2019\u00e9l\u00e8ve \u00e0 25 ans dans le secteur du tourisme et des voyages. Par ailleurs, la fondatrice Directrice G\u00e9n\u00e9rale d\u2019Emi Tours est actuellement pr\u00e9sidente de l\u2019Association des Agences de Voyages de Rabat Sal\u00e9 Kenitra. Op\u00e9rant dans toutes les activit\u00e9s li\u00e9es \u00e0 sa profession, \u00e0 savoir : la billetterie, les r\u00e9servations d\u2019h\u00f4tels au Maroc et \u00e0 l\u2019international, les voyages organis\u00e9es, le tourisme religieux, le tourisme interne et international, l\u2019incentive et l\u2019\u00e9v\u00e9nementiel, Emi Tours est une agence agr\u00e9\u00e9e par le Minist\u00e8re du Tourisme et par l\u2019IATA qui jouit d\u2019une r\u00e9putation irr\u00e9prochable.', mission: 'Nos Valeurs', missionText: 'Ayant plac\u00e9 le client au centre de notre activit\u00e9, nous lui accordons donc la priorit\u00e9 supr\u00eame. Ses attentes sont nos axes de travail, ses remarques sont nos pistes d\u2019am\u00e9lioration, et ses go\u00fbts inspirent les destinations et les services que nous proposons. Afin de rester fid\u00e8les \u00e0 cette priorit\u00e9, nous conjuguons au quotidien des valeurs essentielles qui d\u00e9finissent notre identit\u00e9 : la disponibilit\u00e9, la qualit\u00e9, le professionnalisme, l\u2019innovation et le sur-mesure. Chez EMI Tours, nous nous engageons \u00e0 offrir \u00e0 chacun de nos clients une exp\u00e9rience de voyage personnalis\u00e9e, fiable et m\u00e9morable, avec un accompagnement d\u2019excellence \u00e0 chaque \u00e9tape de son voyage.', vision: 'Notre Vision', visionText: '\u00catre le partenaire de voyage le plus fiable et innovant au Maroc et au-del\u00e0, \u00e9tablissant la norme d\u2019excellence dans l\u2019industrie du voyage. Nous envisageons un monde o\u00f9 le voyage est accessible, transformateur et une force pour le bien \u2014 reliant les cultures et cr\u00e9ant des souvenirs qui durent toute une vie.', stats: { years: 'Ann\u00e9es d\'Exp\u00e9rience', travelers: 'Voyageurs Satisfaits', destinations: 'Destinations', support: 'Support 24/7' }},
    valuesTag: 'Nos Valeurs',
    valuesTitle: 'Les Principes Qui Nous Guident',
    valuesDesc: 'Int\u00e9grit\u00e9, excellence, innovation et durabilit\u00e9 \u2014 ces valeurs fondamentales fa\u00e7onnent chaque voyage que nous cr\u00e9ons et chaque relation que nous b\u00e2tissons.',
    contact: { tag: 'Entrez en Contact', title: 'Contactez-Nous', desc: 'Nous aimerions avoir de vos nouvelles. Contactez-nous et laissez-nous planifier votre voyage parfait.', info: 'Informations de Contact', form: 'Envoyez-nous un Message', name: 'Nom Complet', email: 'Email', phone: 'Num\u00e9ro de T\u00e9l\u00e9phone', destination: 'Destination Souhait\u00e9e', message: 'Message', btn: 'Envoyer via WhatsApp', working: 'Heures de Travail', workingHours: 'Lun - Ven: 9:00 - 18:00<br>Sam: 09:00 - 13:00', address: '17 Baht, Rabat 10000, Maroc', phoneVal: '+2125 37777722 /24', whatsappVal: '+212 661-371778', emailVal: 'emitoursmaroc@gmail.com' },
    destinationsPage: { tag: 'Nos Destinations', title: 'D\u00e9couvrez des Endroits Magnifiques', desc: 'Explorez notre s\u00e9lection de destinations extraordinaires dans le monde entier' },
    values: [
      { icon: 'fa-handshake', title: 'Int\u00e9grit\u00e9', desc: 'Nous croyons en des relations honn\u00eates et transparentes avec chaque client. Pas de frais cach\u00e9s, pas de surprises \u2014 juste une confiance b\u00e2tie par des ann\u00e9es de service fiable et de pratiques \u00e9thiques.' },
      { icon: 'fa-star', title: 'Excellence', desc: 'Nous nous imposons les plus hauts standards dans chaque aspect du voyage. Du premier contact au retour \u00e0 la maison, chaque d\u00e9tail est m\u00e9ticuleusement con\u00e7u pour la perfection.' },
      { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Nous adoptons la technologie moderne et la pens\u00e9e cr\u00e9ative pour offrir des solutions de voyage fluides. Notre approche avant-gardiste vous garantit de b\u00e9n\u00e9ficier du meilleur de l\u2019industrie.' },
      { icon: 'fa-leaf', title: 'Durabilit\u00e9', desc: 'Nous nous engageons pour un tourisme responsable qui prot\u00e8ge notre plan\u00e8te et soutient les communaut\u00e9s locales. Chaque voyage est con\u00e7u pour laisser une empreinte positive sur le monde.' }
    ]
  },

  ar: {
    nav: { home: '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', destinations: '\u0627\u0644\u0648\u062c\u0647\u0627\u062a', about: '\u0645\u0646 \u0646\u062d\u0646', contact: '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627' },
    hero: { badge: '\u0648\u0643\u0627\u0644\u0629 \u0633\u0641\u0631 \u0641\u0627\u0626\u0642\u0629', title: 'EMI <span>TOURS</span>', subtitle: '\u0646\u062d\u0646 \u0646\u062a\u0634\u0631\u0641 \u0628\u0627\u0644\u0627\u0633\u062a\u0645\u0627\u0639 \u0625\u0644\u064a\u0643. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0648\u062f\u0639\u0646\u0627 \u0646\u062e\u0637\u0637 \u0644\u0631\u062d\u0644\u062a\u0643 \u0627\u0644\u0645\u062b\u0627\u0644\u064a\u0629.', btn1: '\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u0648\u062c\u0647\u0627\u062a', btn2: '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627' },
    partners: { tag: '\u0634\u0631\u0643\u0627\u0624\u0646\u0627', desc: '\u0645\u0648\u062b\u0648\u0642 \u0645\u0646 \u0642\u0628\u0644 \u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0637\u064a\u0631\u0627\u0646 \u0627\u0644\u0631\u0627\u0626\u062f\u0629 \u0639\u0627\u0644\u0645\u064a\u0627\u064b' },
    why: { tag: '\u0644\u0645\u0627\u0630\u0627 \u062a\u062e\u062a\u0627\u0631\u0646\u0627', title: '\u0644\u0645\u0627\u0630\u0627 \u0625\u064a\u0645\u064a \u062a\u0648\u0631\u0632\u061f', cards: [
      { title: '\u062a\u062e\u0637\u064a\u0637 \u0627\u062d\u062a\u0631\u0627\u0641\u064a', desc: '\u0643\u0644 \u062a\u0641\u0635\u064a\u0644\u0629 \u0645\u0635\u0645\u0645\u0629 \u0628\u0625\u062a\u0642\u0627\u0646. \u0645\u0646 \u0627\u0644\u0631\u062d\u0644\u0627\u062a \u0625\u0644\u0649 \u0627\u0644\u0625\u0642\u0627\u0645\u0629\u060c \u0646\u062d\u0646 \u0646\u062a\u0648\u0644\u0649 \u0643\u0644 \u0634\u064a\u0621.' },
      { title: '\u0648\u062c\u0647\u0627\u062a \u0639\u0627\u0644\u0645\u064a\u0629', desc: '\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0623\u0643\u062b\u0631 \u0645\u0646 50 \u062f\u0648\u0644\u0629 \u0645\u0639 \u062a\u062c\u0627\u0631\u0628 \u0633\u0641\u0631 \u0645\u062e\u062a\u0627\u0631\u0629 \u0628\u0639\u0646\u0627\u064a\u0629.' },
      { title: '\u062e\u062f\u0645\u0629 \u0645\u0648\u062b\u0648\u0642\u0629', desc: '\u0633\u0646\u0648\u0627\u062a \u0645\u0646 \u0627\u0644\u062a\u0645\u064a\u0632 \u0645\u0639\u062a\u0631\u0641 \u0628\u0647\u0627 \u0645\u0646 \u0642\u0628\u0644 \u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064a\u0646 \u0627\u0644\u0633\u0639\u062f\u0627\u0621.' },
      { title: '\u062f\u0639\u0645 \u0639\u0645\u0644\u0627\u0621 24/7', desc: '\u0646\u062d\u0646 \u062f\u0627\u0626\u0645\u0627\u064b \u0647\u0646\u0627 \u0644\u0623\u062c\u0644\u0643\u060c \u0641\u064a \u0623\u064a \u0648\u0642\u062a \u0648\u0623\u064a \u0645\u0643\u0627\u0646.' }
    ]},
    services: { tag: '\u062e\u062f\u0645\u0627\u062a\u0646\u0627', title: '\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0633\u0641\u0631' },
    servicesList: [
      '\u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u0631\u062d\u0644\u0627\u062a \u0627\u0644\u0645\u062e\u0635\u0635','\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u062a\u0630\u0627\u0643\u0631 \u0648\u0627\u0644\u062d\u062c\u0648\u0632\u0627\u062a','\u0627\u0644\u062d\u062c \u0648\u0627\u0644\u0639\u0645\u0631\u0629',
      '\u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0648\u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a','\u0627\u0644\u0646\u0642\u0644'
    ],
    servicesDesc: [
      '\u0645\u0633\u0627\u0631\u0627\u062a \u0645\u0635\u0645\u0645\u0629 \u062d\u0633\u0628 \u0637\u0644\u0628\u0643 \u0648\u062a\u0641\u0636\u064a\u0644\u0627\u062a\u0643 \u0648\u0645\u064a\u0632\u0627\u0646\u064a\u062a\u0643 \u0648\u0623\u062d\u0644\u0627\u0645\u0643 \u2014 \u0643\u0644 \u0631\u062d\u0644\u0629 \u0641\u0631\u064a\u062f\u0629.',
      '\u062d\u062c\u0632 \u0633\u0631\u064a\u0639 \u0648\u0645\u0648\u062b\u0648\u0642 \u0644\u0644\u0631\u062d\u0644\u0627\u062a \u0648\u0627\u0644\u0641\u0646\u0627\u062f\u0642 \u0648\u0627\u0644\u0645\u0632\u064a\u062f \u0628\u0623\u0641\u0636\u0644 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0645\u062a\u0627\u062d\u0629.',
      '\u0628\u0631\u0627\u0645\u062c \u0633\u0641\u0631 \u0631\u0648\u062d\u064a\u0629 \u0645\u062a\u062e\u0635\u0635\u0629 \u0644\u0644\u062d\u062c \u0648\u0627\u0644\u0639\u0645\u0631\u0629 \u0645\u0639 \u062a\u0648\u062c\u064a\u0647 \u0648\u062f\u0639\u0645 \u0643\u0627\u0645\u0644.',
      '\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0634\u0631\u0643\u0627\u062a \u0648\u0627\u062c\u062a\u0645\u0627\u0639\u0627\u062a \u0639\u0627\u0626\u0644\u064a\u0629 \u0648\u0631\u062d\u0644\u0627\u062a \u062c\u0645\u0627\u0639\u064a\u0629 \u0645\u0646\u0633\u0642\u0629 \u0628\u062f\u0642\u0629 \u0648\u0627\u0647\u062a\u0645\u0627\u0645.',
      '\u062d\u0644\u0648\u0644 \u0646\u0642\u0644 \u0645\u0631\u064a\u062d\u0629 \u0648\u0622\u0645\u0646\u0629 \u062a\u0634\u0645\u0644 \u0627\u0644\u0646\u0642\u0644 \u0645\u0646 \u0648\u0625\u0644\u0649 \u0627\u0644\u0645\u0637\u0627\u0631 \u0648\u0627\u0644\u0631\u062d\u0644\u0627\u062a \u0627\u0644\u062e\u0627\u0635\u0629.'
    ],
    servicesIcons: [
      'fa-map-marked-alt','fa-ticket-alt','fa-kaaba','fa-calendar-alt','fa-van-shuttle'
    ],
    destinations: { tag: '\u0627\u0644\u0648\u062c\u0647\u0627\u062a \u0627\u0644\u0634\u0647\u064a\u0631\u0629', title: '\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u0648\u062c\u0647\u0627\u062a \u0627\u0644\u0634\u0647\u064a\u0631\u0629', discover: '\u0627\u0643\u062a\u0634\u0641' },
    cta: { title: '\u0647\u0644 \u0623\u0646\u062a \u0645\u0633\u062a\u0639\u062f \u0644\u0645\u063a\u0627\u0645\u0631\u062a\u0643 \u0627\u0644\u0642\u0627\u062f\u0645\u0629\u061f', desc: '\u062f\u0639\u0646\u0627 \u0646\u062e\u0637\u0637 \u0644\u0644\u0631\u062d\u0644\u0629 \u0627\u0644\u0645\u062b\u0627\u0644\u064a\u0629 \u0644\u0643. \u0627\u062a\u0635\u0644 \u0628\u0646\u0627 \u0627\u0644\u064a\u0648\u0645!', btn: '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627' },
    footer: { desc: '\u0634\u0631\u064a\u0643\u0643 \u0627\u0644\u0645\u0648\u062b\u0648\u0642 \u0641\u064a \u0627\u0644\u0633\u0641\u0631 \u0644\u0631\u062d\u0644\u0627\u062a \u0644\u0627 \u062a\u064f\u0646\u0633\u0649 \u062d\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645.', quickLinks: '\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064a\u0639\u0629', destinations: '\u0627\u0644\u0648\u062c\u0647\u0627\u062a', contact: '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627', rights: '\u00a9 2026 \u0625\u064a\u0645\u064a \u062a\u0648\u0631\u0632. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.' },
    features: { learnMore: '\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064a\u062f', cards: [
      { tag: '\u0627\u0644\u0648\u062c\u0647\u0627\u062a', title: '\u0627\u0643\u062a\u0634\u0641 \u0623\u0645\u0627\u0643\u0646 \u0631\u0627\u0626\u0639\u0629', desc: '\u0627\u0633\u062a\u0643\u0634\u0641 \u0648\u062c\u0647\u0627\u062a \u062e\u0644\u0627\u0628\u0629 \u062a\u0645 \u0627\u062e\u062a\u064a\u0627\u0631\u0647\u0627 \u0628\u0639\u0646\u0627\u064a\u0629 \u0644\u062e\u0644\u0642 \u062a\u062c\u0627\u0631\u0628 \u0633\u0641\u0631 \u0644\u0627 \u062a\u064f\u0646\u0633\u0649 \u062d\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645.' },
      { tag: '\u0627\u0644\u0631\u062d\u0644\u0627\u062a', title: '\u0631\u062d\u0644\u0627\u062a \u0645\u062e\u0635\u0635\u0629', desc: '\u0645\u0633\u0627\u0631\u0627\u062a \u0634\u062e\u0635\u064a\u0629 \u0645\u0635\u0645\u0645\u0629 \u0644\u062a\u0646\u0627\u0633\u0628 \u0627\u0647\u062a\u0645\u0627\u0645\u0627\u062a\u0643 \u0648\u062c\u062f\u0648\u0644\u0643 \u0648\u0623\u0633\u0644\u0648\u0628 \u0633\u0641\u0631\u0643.' },
      { tag: '\u0627\u0644\u062f\u0639\u0645', title: '\u0633\u0627\u0641\u0631 \u0628\u062b\u0642\u0629', desc: '\u0627\u0633\u062a\u0645\u062a\u0639 \u0628\u0627\u0644\u062d\u062c\u0632 \u0627\u0644\u0622\u0645\u0646 \u0648\u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u062a\u0645\u064a\u0632\u0629 \u0648\u0627\u0644\u062f\u0639\u0645 \u0639\u0644\u0649 \u0645\u062f\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629 \u0645\u0646 \u062e\u0628\u0631\u0627\u0621 \u0627\u0644\u0633\u0641\u0631 \u0644\u062f\u064a\u0646\u0627.' }
    ] },
    hajj: { tag: '\u0631\u062d\u0644\u0627\u062a \u0645\u0642\u062f\u0633\u0629', title: '\u0645\u0639\u0631\u0636 \u0627\u0644\u062d\u062c \u0648\u0627\u0644\u0639\u0645\u0631\u0629', desc: '\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u062c\u0645\u0627\u0644 \u0627\u0644\u0631\u0648\u062d\u064a \u0648\u0627\u0644\u0644\u062d\u0638\u0627\u062a \u0627\u0644\u0645\u0642\u062f\u0633\u0629 \u0645\u0646 \u0627\u0644\u062d\u062c \u0645\u0646 \u062e\u0644\u0627\u0644 \u0645\u062c\u0645\u0648\u0639\u062a\u0646\u0627 \u0627\u0644\u0645\u062e\u062a\u0627\u0631\u0629.' },
    about: { hero: { title: '\u0639\u0646 \u0625\u064a\u0645\u064a \u062a\u0648\u0631\u0632', desc: '\u0627\u0643\u062a\u0634\u0641 \u0642\u0635\u062a\u0646\u0627 \u0648\u0631\u0633\u0627\u0644\u062a\u0646\u0627 \u0648\u0627\u0644\u0641\u0631\u064a\u0642 \u0627\u0644\u0630\u064a \u064a\u0642\u0641 \u0648\u0631\u0627\u0621 \u0631\u062d\u0644\u0627\u062a\u0643.' }, story: '\u0642\u0635\u062a\u0646\u0627', storyText: '\u062a\u0623\u0633\u0633\u062a EMI Tours \u0633\u0646\u0629 2003 \u0639\u0644\u0649 \u064a\u062f \u0627\u0644\u0633\u064a\u062f\u0629 \u0625\u064a\u0645\u0627\u0646 \u0627\u0644\u0639\u0645\u0631\u0627\u0646\u064a\u060c \u0627\u0644\u062a\u064a \u062a\u0645\u062a\u0644\u0643 \u0623\u0643\u062b\u0631 \u0645\u0646 25 \u0639\u0627\u0645\u064b\u0627 \u0645\u0646 \u0627\u0644\u062e\u0628\u0631\u0629 \u0641\u064a \u0645\u062c\u0627\u0644 \u0627\u0644\u0633\u064a\u0627\u062d\u0629 \u0648\u0627\u0644\u0633\u0641\u0631. \u0648\u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0643\u0648\u0646\u0647\u0627 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0648\u0627\u0644\u0645\u062f\u064a\u0631\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0634\u0631\u0643\u0629 EMI Tours\u060c \u062a\u0634\u063a\u0644 \u0627\u0644\u0633\u064a\u062f\u0629 \u0625\u064a\u0645\u0627\u0646 \u0627\u0644\u0639\u0645\u0631\u0627\u0646\u064a \u062d\u0627\u0644\u064a\u064b\u0627 \u0645\u0646\u0635\u0628 \u0631\u0626\u064a\u0633\u0629 \u062c\u0645\u0639\u064a\u0629 \u0648\u0643\u0627\u0644\u0627\u062a \u0627\u0644\u0623\u0633\u0641\u0627\u0631 \u0628\u062c\u0647\u0629 \u0627\u0644\u0631\u0628\u0627\u0637 \u0633\u0644\u0627 \u0627\u0644\u0642\u0646\u064a\u0637\u0631\u0629. \u062a\u0642\u062f\u0645 EMI Tours \u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u062a\u0643\u0627\u0645\u0644\u0629 \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0633\u064a\u0627\u062d\u064a\u0629\u060c \u062a\u0634\u0645\u0644 \u062d\u062c\u0632 \u062a\u0630\u0627\u0643\u0631 \u0627\u0644\u0637\u064a\u0631\u0627\u0646\u060c \u0648\u062d\u062c\u0648\u0632\u0627\u062a \u0627\u0644\u0641\u0646\u0627\u062f\u0642 \u062f\u0627\u062e\u0644 \u0627\u0644\u0645\u063a\u0631\u0628 \u0648\u062e\u0627\u0631\u062c\u0647\u060c \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0631\u062d\u0644\u0627\u062a\u060c \u0648\u0627\u0644\u0633\u064a\u0627\u062d\u0629 \u0627\u0644\u062f\u064a\u0646\u064a\u0629\u060c \u0648\u0627\u0644\u0633\u064a\u0627\u062d\u0629 \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0629 \u0648\u0627\u0644\u062f\u0648\u0644\u064a\u0629\u060c \u0648\u0631\u062d\u0644\u0627\u062a \u0627\u0644\u062d\u0648\u0627\u0641\u0632\u060c \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0648\u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0627\u062a. \u0648\u062a\u062d\u0645\u0644 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0639\u062a\u0645\u0627\u062f \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0633\u064a\u0627\u062d\u0629 \u0627\u0644\u0645\u063a\u0631\u0628\u064a\u0629 \u0648\u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u0627\u062a\u062d\u0627\u062f \u0627\u0644\u062f\u0648\u0644\u064a \u0644\u0644\u0646\u0642\u0644 \u0627\u0644\u062c\u0648\u064a (IATA)\u060c \u0645\u0645\u0627 \u064a\u0639\u0643\u0633 \u0645\u0643\u0627\u0646\u062a\u0647\u0627 \u0627\u0644\u0645\u0631\u0645\u0648\u0642\u0629 \u0648\u0633\u0645\u0639\u062a\u0647\u0627 \u0627\u0644\u0645\u062a\u0645\u064a\u0632\u0629 \u0641\u064a \u062a\u0642\u062f\u064a\u0645 \u062e\u062f\u0645\u0627\u062a \u0633\u064a\u0627\u062d\u064a\u0629 \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629 \u0648\u0645\u0648\u062b\u0648\u0642\u0629.', mission: '\u0642\u064a\u0645\u0646\u0627', missionText: '\u0641\u064a EMI Tours \u0646\u0636\u0639 \u0627\u0644\u0639\u0645\u064a\u0644 \u0641\u064a \u0635\u0645\u064a\u0645 \u062c\u0645\u064a\u0639 \u0623\u0639\u0645\u0627\u0644\u0646\u0627\u060c \u0641\u0647\u0648 \u0623\u0648\u0644\u0648\u064a\u062a\u0646\u0627 \u0627\u0644\u0623\u0648\u0644\u0649. \u0625\u0646 \u062a\u0637\u0644\u0639\u0627\u062a\u0647 \u062a\u0648\u062c\u0647 \u062e\u062f\u0645\u0627\u062a\u0646\u0627\u060c \u0648\u0645\u0644\u0627\u062d\u0638\u0627\u062a\u0647 \u062a\u0633\u0627\u0639\u062f\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u062a\u0637\u0648\u0631\u060c \u0648\u0627\u0647\u062a\u0645\u0627\u0645\u0627\u062a\u0647 \u062a\u0644\u0647\u0645\u0646\u0627 \u0641\u064a \u0627\u062e\u062a\u064a\u0627\u0631 \u0623\u0641\u0636\u0644 \u0627\u0644\u0648\u062c\u0647\u0627\u062a \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a. \u0648\u0644\u0644\u062d\u0641\u0627\u0638 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645\u060c \u0646\u0644\u062a\u0632\u0645 \u064a\u0648\u0645\u064a\u064b\u0627 \u0628\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0642\u064a\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0627\u0644\u062a\u064a \u062a\u0645\u064a\u0632\u0646\u0627\u060c \u0648\u0647\u064a: \u0627\u0644\u062a\u0648\u0641\u0631\u060c \u0627\u0644\u062c\u0648\u062f\u0629\u060c \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629\u060c \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631\u060c \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0635\u0645\u0645\u0629 \u062e\u0635\u064a\u0635\u064b\u0627 \u0644\u0643\u0644 \u0639\u0645\u064a\u0644. \u0646\u0633\u0639\u0649 \u0625\u0644\u0649 \u062a\u0642\u062f\u064a\u0645 \u062a\u062c\u0627\u0631\u0628 \u0633\u0641\u0631 \u0645\u0645\u064a\u0632\u0629 \u0648\u0645\u0648\u062b\u0648\u0642\u0629 \u0648\u0645\u062e\u0635\u0635\u0629\u060c \u0645\u0639 \u0645\u0631\u0627\u0641\u0642\u0629 \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629 \u062a\u0636\u0645\u0646 \u0631\u0627\u062d\u0629 \u0639\u0645\u0644\u0627\u0626\u0646\u0627 \u0641\u064a \u0643\u0644 \u0645\u0631\u062d\u0644\u0629 \u0645\u0646 \u0631\u062d\u0644\u062a\u0647\u0645.', vision: '\u0631\u0624\u064a\u062a\u0646\u0627', visionText: '\u0623\u0646 \u0646\u0643\u0648\u0646 \u0634\u0631\u064a\u0643 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0648\u062b\u0648\u0642\u064a\u0629 \u0648\u0627\u0628\u062a\u0643\u0627\u0631\u0627\u064b \u0641\u064a \u0627\u0644\u0645\u063a\u0631\u0628 \u0648\u062e\u0627\u0631\u062c\u0647\u060c \u0648\u0646\u0636\u0639 \u0645\u0639\u064a\u0627\u0631 \u0627\u0644\u062a\u0645\u064a\u0632 \u0641\u064a \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0633\u0641\u0631.', stats: { years: '\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629', travelers: '\u0645\u0633\u0627\u0641\u0631 \u0633\u0639\u064a\u062f', destinations: '\u0648\u062c\u0647\u0629', support: '\u062f\u0639\u0645 24/7' }},
    valuesTag: '\u0642\u064a\u0645\u0646\u0627',
    valuesTitle: '\u0627\u0644\u0645\u0628\u0627\u062f\u0626 \u0627\u0644\u062a\u064a \u062a\u0648\u062c\u0647\u0646\u0627',
    valuesDesc: '\u0627\u0644\u0646\u0632\u0627\u0647\u0629\u060c \u0627\u0644\u062a\u0645\u064a\u0632\u060c \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631\u060c \u0648\u0627\u0644\u0627\u0633\u062a\u062f\u0627\u0645\u0629 \u2014 \u0647\u0630\u0647 \u0627\u0644\u0642\u064a\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u062a\u0634\u0643\u0644 \u0643\u0644 \u0631\u062d\u0644\u0629 \u0646\u0628\u062a\u0643\u0631\u0647\u0627 \u0648\u0643\u0644 \u0639\u0644\u0627\u0642\u0629 \u0646\u0628\u0646\u064a\u0647\u0627.',
    contact: { tag: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627', title: '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627', desc: '\u064a\u0633\u0639\u062f\u0646\u0627 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0648\u062f\u0639\u0646\u0627 \u0646\u062e\u0637\u0637 \u0644\u0631\u062d\u0644\u062a\u0643 \u0627\u0644\u0645\u062b\u0627\u0644\u064a\u0629.', info: '\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644', form: '\u0623\u0631\u0633\u0644 \u0644\u0646\u0627 \u0631\u0633\u0627\u0644\u0629', name: '\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644', email: '\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a', phone: '\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641', destination: '\u0627\u0644\u0648\u062c\u0647\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629', message: '\u0627\u0644\u0631\u0633\u0627\u0644\u0629', btn: '\u0623\u0631\u0633\u0644 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628', working: '\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644', workingHours: '\u0627\u0644\u0625\u062b\u0646\u064a\u0646 - \u0627\u0644\u062c\u0645\u0639\u0629: 9:00 \u0635 - 18:00 \u0645<br>\u0627\u0644\u0633\u0628\u062a: 09:00 \u0635 - 13:00 \u0645', address: '17 \u0628\u0627\u0647\u062a\u0627\u0646\u060c \u0627\u0644\u0631\u0628\u0627\u0637 10000\u060c \u0627\u0644\u0645\u063a\u0631\u0628', phoneVal: '+2125 37777722 /24', whatsappVal: '+212 661-371778', emailVal: 'emitoursmaroc@gmail.com' },
    destinationsPage: { tag: '\u0648\u062c\u0647\u0627\u062a\u0646\u0627', title: '\u0627\u0643\u062a\u0634\u0641 \u0623\u0645\u0627\u0643\u0646 \u0631\u0627\u0626\u0639\u0629', desc: '\u0627\u0633\u062a\u0643\u0634\u0641 \u0645\u062c\u0645\u0648\u0639\u062a\u0646\u0627 \u0627\u0644\u0645\u062e\u062a\u0627\u0631\u0629 \u0645\u0646 \u0627\u0644\u0648\u062c\u0647\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629 \u062d\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645' },
    values: [
      { icon: 'fa-handshake', title: '\u0627\u0644\u0646\u0632\u0627\u0647\u0629', desc: '\u0646\u0624\u0645\u0646 \u0628\u0627\u0644\u0639\u0644\u0627\u0642\u0627\u062a \u0627\u0644\u0635\u0627\u062f\u0642\u0629 \u0648\u0627\u0644\u0634\u0641\u0627\u0641\u0629 \u0645\u0639 \u0643\u0644 \u0639\u0645\u064a\u0644. \u0644\u0627 \u0631\u0633\u0648\u0645 \u0645\u062e\u0641\u064a\u0629\u060c \u0648\u0644\u0627 \u0645\u0641\u0627\u062c\u0622\u062a \u2014 \u0641\u0642\u0637 \u062b\u0642\u0629 \u062a\u064f\u0628\u0646\u0649 \u0639\u0628\u0631 \u0633\u0646\u0648\u0627\u062a \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0648\u062b\u0648\u0642\u0629 \u0648\u0627\u0644\u0645\u0645\u0627\u0631\u0633\u0627\u062a \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a\u0629.' },
      { icon: 'fa-star', title: '\u0627\u0644\u062a\u0645\u064a\u0632', desc: '\u0646\u0644\u062a\u0632\u0645 \u0628\u0623\u0639\u0644\u0649 \u0627\u0644\u0645\u0639\u0627\u064a\u064a\u0631 \u0641\u064a \u0643\u0644 \u062c\u0627\u0646\u0628 \u0645\u0646 \u0627\u0644\u0633\u0641\u0631. \u0645\u0646 \u0623\u0648\u0644 \u0627\u062a\u0635\u0627\u0644 \u062d\u062a\u0649 \u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0648\u0637\u0646\u060c \u0643\u0644 \u062a\u0641\u0635\u064a\u0644 \u0645\u0635\u0645\u0645 \u0628\u0625\u062a\u0642\u0627\u0646 \u0644\u0644\u0643\u0645\u0627\u0644.' },
      { icon: 'fa-lightbulb', title: '\u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631', desc: '\u0646\u062a\u0628\u0646\u0649 \u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0627\u0644\u062d\u062f\u064a\u062b\u0629 \u0648\u0627\u0644\u062a\u0641\u0643\u064a\u0631 \u0627\u0644\u0625\u0628\u062f\u0627\u0639\u064a \u0644\u062a\u0642\u062f\u064a\u0645 \u062d\u0644\u0648\u0644 \u0633\u0641\u0631 \u0645\u062a\u0643\u0627\u0645\u0644\u0629. \u0646\u0647\u062c\u0646\u0627 \u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644\u064a \u064a\u0636\u0645\u0646 \u0644\u0643 \u0623\u0641\u0636\u0644 \u0645\u0627 \u062a\u0642\u062f\u0645\u0647 \u0627\u0644\u0635\u0646\u0627\u0639\u0629.' },
      { icon: 'fa-leaf', title: '\u0627\u0644\u0627\u0633\u062a\u062f\u0627\u0645\u0629', desc: '\u0646\u0644\u062a\u0632\u0645 \u0628\u0627\u0644\u0633\u064a\u0627\u062d\u0629 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u0629 \u0627\u0644\u062a\u064a \u062a\u062d\u0645\u064a \u0643\u0648\u0643\u0628\u0646\u0627 \u0648\u062a\u062f\u0639\u0645 \u0627\u0644\u0645\u062c\u062a\u0645\u0639\u0627\u062a \u0627\u0644\u0645\u062d\u0644\u064a\u0629. \u0643\u0644 \u0631\u062d\u0644\u0629 \u0645\u0635\u0645\u0645\u0629 \u0644\u062a\u062a\u0631\u0643 \u0628\u0635\u0645\u0629 \u0625\u064a\u062c\u0627\u0628\u064a\u0629 \u0639\u0644\u0649 \u0627\u0644\u0639\u0627\u0644\u0645.' }
    ]
  }
};

// ===== STATE =====
let currentLang = 'en';
let currentPage = 'home';

// ===== DESTINATIONS DATA =====
const destinations = [
  { country: 'Morocco', city: 'Marrakech', image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800', desc: { en: 'Discover the magic of Marrakech with its vibrant souks, palaces, and gardens.', fr: 'D\u00e9couvrez la magie de Marrakech avec ses souks vibrants, palais et jardins.', ar: '\u0627\u0643\u062a\u0634\u0641 \u0633\u062d\u0631 \u0645\u0631\u0627\u0643\u0634 \u0628\u0623\u0633\u0648\u0627\u0642\u0647\u0627 \u0627\u0644\u0646\u0627\u0628\u0636\u0629 \u0648\u0642\u0635\u0648\u0631\u0647\u0627 \u0648\u062d\u062f\u0627\u0626\u0642\u0647\u0627.' }, highlights: ['Souks', 'Palaces', 'Gardens', 'Atlas Mountains'], bestTime: 'March - May / September - November' },
  { country: 'Turkey', city: 'Istanbul', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', desc: { en: 'Where East meets West \u2014 explore Istanbul\'s rich history, bazaars, and cuisine.', fr: 'L\u00e0 o\u00f9 l\'Orient rencontre l\'Occident \u2014 explorez l\'histoire riche, les bazars et la cuisine d\'Istanbul.', ar: '\u062d\u064a\u062b \u064a\u0644\u062a\u0642\u064a \u0627\u0644\u0634\u0631\u0642 \u0628\u0627\u0644\u063a\u0631\u0628 \u2014 \u0627\u0633\u062a\u0643\u0634\u0641 \u062a\u0627\u0631\u064a\u062e \u0625\u0633\u0637\u0646\u0628\u0648\u0644 \u0627\u0644\u063a\u0646\u064a \u0648\u0623\u0633\u0648\u0627\u0642\u0647\u0627 \u0648\u0645\u0637\u0639\u0645\u0647\u0627.' }, highlights: ['Hagia Sophia', 'Grand Bazaar', 'Bosphorus', 'Turkish Cuisine'], bestTime: 'April - June / September - November' },
  { country: 'Spain', city: 'Barcelona', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800', desc: { en: 'Experience Gaud\u00ed\'s masterpieces, Mediterranean beaches, and vibrant culture.', fr: 'D\u00e9couvrez les chefs-d\u2019\u0153uvre de Gaud\u00ed, les plages m\u00e9diterran\u00e9ennes et une culture vibrante.', ar: '\u0627\u0633\u062a\u0645\u062a\u0639 \u0628\u0631\u0648\u0627\u0626\u0639 \u063a\u0627\u0648\u062f\u064a \u0648\u0634\u0648\u0627\u0637\u0626 \u0627\u0644\u0628\u062d\u0631 \u0627\u0644\u0623\u0628\u064a\u0636 \u0627\u0644\u0645\u062a\u0648\u0633\u0637 \u0648\u0627\u0644\u062b\u0642\u0627\u0641\u0629 \u0627\u0644\u0646\u0627\u0628\u0636\u0629.' }, highlights: ['Sagrada Familia', 'Park G\u00fcell', 'Beaches', 'Tapas'], bestTime: 'May - June / September - October' },
  { country: 'France', city: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', desc: { en: 'The City of Light awaits \u2014 from the Eiffel Tower to world-class museums.', fr: 'La Ville Lumi\u00e8re vous attend \u2014 de la Tour Eiffel aux mus\u00e9es de classe mondiale.', ar: '\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0646\u0648\u0631 \u0641\u064a \u0627\u0646\u062a\u0638\u0627\u0631\u0643 \u2014 \u0645\u0646 \u0628\u0631\u062c \u0625\u064a\u0641\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u062a\u0627\u062d\u0641 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629.' }, highlights: ['Eiffel Tower', 'Louvre', 'Notre-Dame', 'French Cuisine'], bestTime: 'April - June / September - October' },
  { country: 'Italy', city: 'Rome', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800', desc: { en: 'Walk through 2,000 years of history in the Eternal City.', fr: 'Parcourez 2000 ans d\'histoire dans la Ville \u00c9ternelle.', ar: '\u062a\u062c\u0648\u0644 \u0639\u0628\u0631 2000 \u0639\u0627\u0645 \u0645\u0646 \u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u062e\u0627\u0644\u062f\u0629.' }, highlights: ['Colosseum', 'Vatican', 'Trevi Fountain', 'Italian Cuisine'], bestTime: 'April - June / September - October' },
  { country: 'Greece', city: 'Santorini', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800', desc: { en: 'Iconic white-washed buildings, stunning sunsets, and crystal-clear waters.', fr: 'B\u00e2timents blanchis \u00e0 la chaux, couchers de soleil \u00e9poustouflants et eaux cristallines.', ar: '\u0645\u0628\u0627\u0646\u064a \u0628\u064a\u0636\u0627\u0621 \u0623\u064a\u0642\u0648\u0646\u064a\u0629 \u0648\u063a\u0631\u0648\u0628 \u0634\u0645\u0633 \u062e\u0644\u0627\u0628 \u0648\u0645\u064a\u0627\u0647 \u0635\u0627\u0641\u064a\u0629.' }, highlights: ['Oia Sunset', 'Blue Domes', 'Volcanic Beaches', 'Wine Tasting'], bestTime: 'June - September' },
  { country: 'Egypt', city: 'Cairo & Luxor', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800', desc: { en: 'Uncover ancient wonders, from the Pyramids to the Valley of the Kings.', fr: 'D\u00e9couvrez les merveilles antiques, des Pyramides \u00e0 la Vall\u00e9e des Rois.', ar: '\u0627\u0643\u062a\u0634\u0641 \u0639\u062c\u0627\u0626\u0628 \u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0642\u062f\u064a\u0645\u060c \u0645\u0646 \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062a \u0625\u0644\u0649 \u0648\u0627\u062f\u064a \u0627\u0644\u0645\u0644\u0648\u0643.' }, highlights: ['Pyramids', 'Sphinx', 'Nile Cruise', 'Egyptian Museum'], bestTime: 'October - April' },
  { country: 'Saudi Arabia', city: 'Riyadh & Jeddah', image: 'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=800', desc: { en: 'Discover the rich heritage and modern marvels of the Kingdom.', fr: 'D\u00e9couvrez le riche patrimoine et les merveilles modernes du Royaume.', ar: '\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u062a\u0631\u0627\u062b \u0627\u0644\u063a\u0646\u064a \u0648\u0627\u0644\u0631\u0648\u0627\u0626\u0639 \u0627\u0644\u062d\u062f\u064a\u062b\u0629 \u0644\u0644\u0645\u0645\u0644\u0643\u0629.' }, highlights: ['AlUla', 'Edge of World', 'Red Sea', 'Heritage Sites'], bestTime: 'November - March' },
  { country: 'UAE', city: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', desc: { en: 'A city of superlatives \u2014 luxury shopping, futuristic architecture, and desert adventures.', fr: 'Une ville de superlatifs \u2014 shopping de luxe, architecture futuriste et aventures dans le d\u00e9sert.', ar: '\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u062e\u064a\u0627\u0644 \u2014 \u062a\u0633\u0648\u0642 \u0641\u0627\u062e\u0631 \u0648\u0647\u0646\u062f\u0633\u0629 \u0645\u0633\u062a\u0642\u0628\u0644\u064a\u0629 \u0648\u0645\u063a\u0627\u0645\u0631\u0627\u062a \u0635\u062d\u0631\u0627\u0648\u064a\u0629.' }, highlights: ['Burj Khalifa', 'Palm Jumeirah', 'Desert Safari', 'Dubai Mall'], bestTime: 'November - March' },
  { country: 'Maldives', city: 'Mal\u00e9 Atolls', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800', desc: { en: 'Paradise on earth \u2014 overwater bungalows, turquoise lagoons, and pristine beaches.', fr: 'Le paradis sur terre \u2014 bungalows sur pilotis, lagons turquoise et plages immacul\u00e9es.', ar: '\u0627\u0644\u062c\u0646\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636 \u2014 \u0623\u0643\u0648\u0627\u062e \u0641\u0648\u0642 \u0627\u0644\u0645\u0627\u0621 \u0648\u0628\u062d\u064a\u0631\u0627\u062a \u0641\u064a\u0631\u0648\u0632\u064a\u0629 \u0648\u0634\u0648\u0627\u0637\u0626 \u0646\u0642\u064a\u0629.' }, highlights: ['Overwater Villas', 'Snorkeling', 'Sunset Cruises', 'Spa'], bestTime: 'November - April' },
  { country: 'Indonesia', city: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', desc: { en: 'Tropical paradise with ancient temples, lush rice terraces, and vibrant culture.', fr: 'Paradis tropical avec temples anciens, rizi\u00e8res luxuriantes et culture vibrante.', ar: '\u062c\u0646\u0629 \u0627\u0633\u062a\u0648\u0627\u0626\u064a\u0629 \u0628\u0645\u0639\u0627\u0628\u062f\u0647\u0627 \u0627\u0644\u0642\u062f\u064a\u0645\u0629 \u0648\u0645\u062f\u0631\u062c\u0627\u062a \u0627\u0644\u0623\u0631\u0632 \u0627\u0644\u062e\u0635\u0628\u0629 \u0648\u062b\u0642\u0627\u0641\u062a\u0647\u0627 \u0627\u0644\u0646\u0627\u0628\u0636\u0629.' }, highlights: ['Temples', 'Rice Terraces', 'Beaches', 'Yoga & Wellness'], bestTime: 'April - October' },
  { country: 'Thailand', city: 'Bangkok & Phuket', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800', desc: { en: 'Exotic temples, floating markets, tropical beaches, and legendary street food.', fr: 'Temples exotiques, march\u00e9s flottants, plages tropicales et street food l\u00e9gendaire.', ar: '\u0645\u0639\u0627\u0628\u062f \u063a\u0631\u064a\u0628\u0629 \u0648\u0623\u0633\u0648\u0627\u0642 \u0639\u0627\u0626\u0645\u0629 \u0648\u0634\u0648\u0627\u0637\u0626 \u0627\u0633\u062a\u0648\u0627\u0626\u064a\u0629 \u0648\u0623\u0643\u0644 \u0627\u0644\u0634\u0627\u0631\u0639 \u0627\u0644\u0623\u0633\u0637\u0648\u0631\u064a.' }, highlights: ['Grand Palace', 'Floating Markets', 'Phi Phi Islands', 'Street Food'], bestTime: 'November - March' },
  { country: 'Japan', city: 'Tokyo & Kyoto', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', desc: { en: 'Where tradition meets futurism \u2014 cherry blossoms, temples, and cutting-edge technology.', fr: 'O\u00f9 la tradition rencontre le futurisme \u2014 cerisiers en fleurs, temples et technologie de pointe.', ar: '\u062d\u064a\u062b \u064a\u0644\u062a\u0642\u064a \u0627\u0644\u062a\u0642\u0644\u064a\u062f \u0628\u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644 \u2014 \u0623\u0632\u0647\u0627\u0631 \u0627\u0644\u0643\u0631\u0632 \u0648\u0627\u0644\u0645\u0639\u0627\u0628\u062f \u0648\u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629.' }, highlights: ['Cherry Blossoms', 'Temples', 'Shinkansen', 'Japanese Cuisine'], bestTime: 'March - May / October - December' },
  { country: 'Switzerland', city: 'Zurich & Interlaken', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800', desc: { en: 'Alpine paradise \u2014 snow-capped peaks, pristine lakes, and charming villages.', fr: 'Paradis alpin \u2014 sommets enneig\u00e9s, lacs immacul\u00e9s et villages charmants.', ar: '\u062c\u0646\u0629 \u0627\u0644\u0623\u0644\u0628 \u2014 \u0642\u0645\u0645 \u0645\u063a\u0637\u0627\u0629 \u0628\u0627\u0644\u062b\u0644\u0648\u062c \u0648\u0628\u062d\u064a\u0631\u0627\u062a \u0646\u0642\u064a\u0629 \u0648\u0642\u0631\u0649 \u0633\u0627\u062d\u0631\u0629.' }, highlights: ['Matterhorn', 'Lake Geneva', 'Jungfraujoch', 'Swiss Chocolate'], bestTime: 'June - August / December - March' },
  { country: 'Canada', city: 'Banff & Vancouver', image: 'https://images.unsplash.com/photo-1569418874970-cdcdd741c6dd?w=800', desc: { en: 'Breathtaking national parks, rugged mountains, and vibrant multicultural cities.', fr: 'Parcs nationaux \u00e0 couper le souffle, montagnes escarp\u00e9es et villes multiculturelles vibrantes.', ar: '\u062d\u062f\u0627\u0626\u0642 \u0648\u0637\u0646\u064a\u0629 \u062e\u0644\u0627\u0628\u0629 \u0648\u062c\u0628\u0627\u0644 \u0648\u0639\u0631\u0629 \u0648\u0645\u062f\u0646 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u062b\u0642\u0627\u0641\u0627\u062a \u0646\u0627\u0628\u0636\u0629.' }, highlights: ['Banff National Park', 'Northern Lights', 'Whistler', 'Niagara Falls'], bestTime: 'June - August / December - February' }
];


// ===== HAJJ CAROUSEL =====
function setupHajjCarousel() {
  var container = document.getElementById('hajjCarousel');
  if (!container) return;
  var track = container.querySelector('.hajj-carousel-track');
  var originals = Array.from(track.querySelectorAll('.hajj-slide'));
  var total = originals.length;
  var prevBtn = container.querySelector('.hajj-prev');
  var nextBtn = container.querySelector('.hajj-next');
  var dotsWrap = document.getElementById('hajjDots');
  var visibleCount = 3, idx = 0, busy = false;

  function calcVisible() {
    visibleCount = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
  }

  function addClones() {
    track.querySelectorAll('.hajj-slide-cloned').forEach(function(e) { e.remove(); });
    for (var i = 0; i < visibleCount; i++) {
      var c = originals[i].cloneNode(true);
      c.classList.add('hajj-slide-cloned');
      c.removeAttribute('loading');
      c.setAttribute('aria-hidden', 'true');
      track.appendChild(c);
    }
    for (var i = total - visibleCount; i < total; i++) {
      var c = originals[i].cloneNode(true);
      c.classList.add('hajj-slide-cloned');
      c.removeAttribute('loading');
      c.setAttribute('aria-hidden', 'true');
      track.prepend(c);
    }
  }

  function slideW() {
    var s = track.querySelector('.hajj-slide');
    return s ? s.offsetWidth : 0;
  }

  function maxIdx() {
    return Math.max(0, total - visibleCount);
  }

  function move(animate) {
    track.style.transition = animate ? 'transform 0.6s cubic-bezier(0.4,0,0.2,1)' : 'none';
    track.style.transform = 'translateX(' + (-(idx + visibleCount) * slideW()) + 'px)';
    if (!animate) void track.offsetHeight;
  }

  function renderDots() {
    dotsWrap.innerHTML = '';
    var n = Math.min(7, maxIdx() + 1);
    var step = maxIdx() / Math.max(1, n - 1);
    for (var i = 0; i < n; i++) {
      var d = document.createElement('button');
      d.className = 'hajj-dot';
      var nearest = Math.min(n - 1, Math.round(idx / step));
      if (i === nearest) d.classList.add('active');
      d.setAttribute('aria-label', 'Slide ' + (i + 1));
      (function(target) {
        d.addEventListener('click', function() { go(target); });
      })(Math.min(Math.round(i * step), maxIdx()));
      dotsWrap.appendChild(d);
    }
  }

  function go(newIdx) {
    if (busy) return;
    newIdx = Math.max(0, Math.min(newIdx, maxIdx()));
    if (newIdx === idx) return;
    busy = true;
    idx = newIdx;
    move(true);
    renderDots();
    track.addEventListener('transitionend', function h() {
      track.removeEventListener('transitionend', h);
      busy = false;
    });
  }

  function next() {
    if (busy) return;
    busy = true;
    idx++;
    move(true);
    renderDots();
    track.addEventListener('transitionend', function h() {
      track.removeEventListener('transitionend', h);
      if (idx >= total) {
        idx = 0;
        move(false);
        renderDots();
      }
      busy = false;
    });
  }

  function prev() {
    if (busy) return;
    busy = true;
    idx--;
    move(true);
    renderDots();
    track.addEventListener('transitionend', function h() {
      track.removeEventListener('transitionend', h);
      if (idx < 0) {
        idx = maxIdx();
        move(false);
        renderDots();
      }
      busy = false;
    });
  }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  var tx = 0;
  container.addEventListener('touchstart', function(e) { tx = e.touches[0].clientX; }, { passive: true });
  container.addEventListener('touchend', function(e) {
    var d = tx - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) { d > 0 ? next() : prev(); }
  }, { passive: true });

  var rt;
  window.addEventListener('resize', function() {
    clearTimeout(rt);
    rt = setTimeout(function() {
      calcVisible();
      addClones();
      if (idx > maxIdx()) idx = maxIdx();
      if (idx < 0) idx = 0;
      move(false);
      renderDots();
    }, 150);
  });

  calcVisible();
  addClones();
  idx = 0;
  move(false);
  renderDots();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => document.querySelector('.preloader')?.classList.add('hidden'), 800);
  render();
  setupNavbar();
  setupAnimations();
  setupContactForm();
  setupLangSwitcher();
  setupHamburger();
  setupPageNav();
  setupStatsCounter();
  setupHeroParallax();
  setupHajjCarousel();
  setupHeroAirplaneSize();
});

// ===== RENDER =====
function render() {
  const fns = [renderNav, renderHero, renderWhy, renderServices, renderDestinations, renderCTA, renderFooter, renderAboutPage, renderContactPage, renderDestinationsPage];
  fns.forEach(fn => { try { fn(); } catch (e) { console.warn('Render error:', fn.name, e.message); } });
}

function t(path) {
  const keys = path.split('.');
  let val = i18n[currentLang];
  for (const k of keys) {
    val = val?.[k];
    if (val === undefined) return path;
  }
  return val;
}

// ===== NAV =====
function renderNav() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

// ===== HERO =====
function renderHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  hero.querySelector('.hero-badge').innerHTML = `<i class="fa-solid fa-star"></i> ${t('hero.badge')}`;
  hero.querySelector('.hero-subtitle').textContent = t('hero.subtitle');
}

// ===== WHY US =====
function renderWhy() {
  const section = document.getElementById('why');
  if (!section) return;
  section.querySelector('.section-tag').innerHTML = `<i class="fa-solid fa-circle-info"></i> ${t('why.tag')}`;
  section.querySelector('.section-title').textContent = t('why.title');
  const cards = section.querySelectorAll('.why-card');
  const data = i18n[currentLang].why.cards;
  const icons = ['fa-calendar-check', 'fa-globe', 'fa-shield-halved', 'fa-headset'];
  cards.forEach((card, i) => {
    if (data[i]) {
      card.querySelector('.why-card-icon').innerHTML = `<i class="fa-solid ${icons[i]}"></i>`;
      card.querySelector('h3').textContent = data[i].title;
      card.querySelector('p').textContent = data[i].desc;
    }
  });
}

// ===== SERVICES =====
function renderServices() {
  const section = document.getElementById('services');
  if (!section) return;
  section.querySelector('.section-tag').innerHTML = `<i class="fa-solid fa-concierge-bell"></i> ${t('services.tag')}`;
  section.querySelector('.section-title').textContent = t('services.title');
  const grid = section.querySelector('.services-grid');
  const list = i18n[currentLang].servicesList;
  const descs = i18n[currentLang].servicesDesc;
  const icons = i18n[currentLang].servicesIcons;
  grid.innerHTML = list.map((s, i) =>
    `<div class="service-card fade-in">
      <div class="service-card-icon"><i class="fa-solid ${icons[i] || 'fa-globe'}"></i></div>
      <h4>${s}</h4>
      <p class="service-desc">${descs[i] || ''}</p>
    </div>`
  ).join('');
}

// ===== DESTINATIONS =====
function renderDestinations() {
  const section = document.getElementById('destinations');
  if (!section) return;
  section.querySelector('.section-tag').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t('destinations.tag')}`;
  section.querySelector('.section-title').textContent = t('destinations.title');
  const grid = section.querySelector('.destinations-grid');
  grid.innerHTML = destinations.slice(0, 6).map(d =>
    `<div class="dest-card fade-in">
      <div class="dest-card-image">
        <img src="${d.image}" alt="${d.city}" loading="lazy">
        <div class="dest-card-overlay">
          <div class="country">${d.country}</div>
          <div class="city">${d.city}</div>
        </div>
      </div>
      <div class="dest-card-body">
        <p>${d.desc[currentLang]}</p>
        <div class="highlights">${d.highlights.slice(0,3).map(h => `<span>${h}</span>`).join('')}</div>
        <div class="best-time"><i class="fa-regular fa-calendar"></i> ${d.bestTime}</div>
        <button class="btn-discover" onclick="navigateTo('contact')">${t('destinations.discover')} <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>`
  ).join('');
}

// ===== CTA =====
function renderCTA() {
  const section = document.getElementById('cta');
  if (!section) return;
  section.querySelector('h2').textContent = t('cta.title');
  section.querySelector('p').textContent = t('cta.desc');
  section.querySelector('.btn-primary').innerHTML = `${t('cta.btn')} <i class="fa-solid fa-arrow-right"></i>`;
}

// ===== FOOTER =====
function renderFooter() {
  const brandP = document.querySelector('.footer-brand p');
  const contactH4 = document.querySelector('[data-i18n="footer.contact"]');
  const rightsP = document.querySelector('[data-i18n="footer.rights"]');
  if (brandP) brandP.textContent = t('footer.desc');
  if (contactH4) contactH4.textContent = t('footer.contact');
  if (rightsP) rightsP.textContent = t('footer.rights');
}

// ===== ABOUT PAGE =====
function renderAboutPage() {
  const page = document.getElementById('page-about');
  if (!page) return;

  const heroTitle = page.querySelector('.about-hero h1');
  const heroDesc = page.querySelector('.about-hero p');
  if (heroTitle) heroTitle.textContent = t('about.hero.title');
  if (heroDesc) heroDesc.textContent = t('about.hero.desc');

  const contents = page.querySelectorAll('.about-content');
  if (contents[0]) {
    const h2 = contents[0].querySelector('h2');
    const p = contents[0].querySelector('p');
    const tag = contents[0].querySelector('.section-tag');
    if (h2) h2.textContent = t('about.story');
    if (p) p.textContent = t('about.storyText');
    if (tag) tag.innerHTML = `<i class="fa-solid fa-book-open"></i> ${t('about.story')}`;
  }
  if (contents[1]) {
    const h2 = contents[1].querySelector('h2');
    const p = contents[1].querySelector('p');
    const tag = contents[1].querySelector('.section-tag');
    if (h2) h2.textContent = t('about.mission');
    if (p) p.textContent = t('about.missionText');
    if (tag) tag.innerHTML = `<i class="fa-solid fa-star"></i> ${t('about.mission')}`;
  }
  if (contents[2]) {
    const h2 = contents[2].querySelector('h2');
    const p = contents[2].querySelector('p');
    const tag = contents[2].querySelector('.section-tag');
    if (h2) h2.textContent = t('about.vision');
    if (p) p.textContent = t('about.visionText');
    if (tag) tag.innerHTML = `<i class="fa-solid fa-eye"></i> ${t('about.vision')}`;
  }

  const stats = i18n[currentLang].about.stats;
  const labels = page.querySelectorAll('.stat-item .label');
  if (labels[0]) labels[0].textContent = stats.years;
  if (labels[1]) labels[1].textContent = stats.travelers;
  if (labels[2]) labels[2].textContent = stats.destinations;
  if (labels[3]) labels[3].textContent = stats.support;

  const sections = page.querySelectorAll('.section .section-header');
  if (sections[0]) {
    const tag = sections[0].querySelector('.section-tag');
    const title = sections[0].querySelector('h2');
    const desc = sections[0].querySelector('.section-desc');
    if (tag) tag.innerHTML = `<i class="fa-solid fa-sparkles"></i> ${t('valuesTag')}`;
    if (title) title.textContent = t('valuesTitle');
    if (desc) desc.textContent = t('valuesDesc');
  }

  const valuesGrid = page.querySelector('.values-grid');
  if (valuesGrid) {
    valuesGrid.innerHTML = i18n[currentLang].values.map(v =>
      `<div class="value-item fade-in">
        <div class="icon"><i class="fa-solid ${v.icon}"></i></div>
        <h4>${v.title}</h4>
        <p>${v.desc}</p>
      </div>`
    ).join('');
  }
}

// ===== CONTACT =====
function renderContactPage() {
  const page = document.getElementById('page-contact');
  if (!page) return;
  page.querySelector('.section-tag').innerHTML = `<i class="fa-solid fa-envelope"></i> ${t('contact.tag')}`;
  page.querySelector('.contact-info h2').textContent = t('contact.info');
  page.querySelector('.contact-info > p').textContent = t('contact.desc');
  page.querySelector('.contact-form-wrap h3').textContent = t('contact.form');
  document.getElementById('form-name-label').textContent = t('contact.name');
  document.getElementById('form-email-label').textContent = t('contact.email');
  document.getElementById('form-phone-label').textContent = t('contact.phone');
  document.getElementById('form-destination-label').textContent = t('contact.destination');
  document.getElementById('form-message-label').textContent = t('contact.message');
  page.querySelector('.btn-submit').innerHTML = `<i class="fa-brands fa-whatsapp"></i> ${t('contact.btn')}`;

  const c = i18n[currentLang].contact;
  const infoItems = page.querySelectorAll('.contact-info-item');
  if (infoItems[0]) infoItems[0].querySelector('p').textContent = c.address;
  if (infoItems[1]) infoItems[1].querySelector('p').textContent = c.phoneVal;
  if (infoItems[2]) infoItems[2].querySelector('p').textContent = c.whatsappVal;
  if (infoItems[3]) infoItems[3].querySelector('p').textContent = c.emailVal;
  if (infoItems[4]) infoItems[4].querySelector('p').innerHTML = c.workingHours;
  infoItems.forEach((item, i) => {
    const icons = ['fa-location-dot', 'fa-phone', 'fa-mobile-button', 'fa-envelope', 'fa-clock'];
    item.querySelector('.icon').innerHTML = `<i class="fa-solid ${icons[i] || 'fa-info'}"></i>`;
  });
}

// ===== DESTINATIONS PAGE =====
function renderDestinationsPage() {
  const page = document.getElementById('page-destinations');
  if (!page) return;
  page.querySelector('.section-tag').innerHTML = `<i class="fa-solid fa-globe"></i> ${t('destinationsPage.tag')}`;
  page.querySelector('.section-title').textContent = t('destinationsPage.title');
  const desc = page.querySelector('.section-header p');
  if (desc) desc.textContent = t('destinationsPage.desc');
  const grid = page.querySelector('.destinations-grid');
  if (grid) {
    grid.innerHTML = destinations.map(d =>
      `<div class="dest-card fade-in">
        <div class="dest-card-image">
          <img src="${d.image}" alt="${d.city}" loading="lazy">
          <div class="dest-card-overlay">
            <div class="country">${d.country}</div>
            <div class="city">${d.city}</div>
          </div>
        </div>
        <div class="dest-card-body">
          <p>${d.desc[currentLang]}</p>
          <div class="highlights">${d.highlights.map(h => `<span>${h}</span>`).join('')}</div>
          <div class="best-time"><i class="fa-regular fa-calendar"></i> ${d.bestTime}</div>
          <button class="btn-discover" onclick="navigateTo('contact')">${t('destinations.discover')} <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>`
    ).join('');
  }
}

// ===== NAVIGATION =====
function navigateTo(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  const target = document.getElementById(`page-${page}`);
  if (target) target.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelectorAll('.navbar-links a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  setTimeout(setupAnimations, 100);
}

function setupPageNav() {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(el.dataset.page);
    });
  });
  navigateTo('home');
}

// ===== NAVBAR =====
function setupNavbar() {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ===== HERO PARALLAX =====
function setupHeroParallax() {
  const heroBg = document.querySelector('.hero-bg');
  const heroVideo = document.querySelector('.hero-video');
  if (!heroBg && !heroVideo) return;
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll < window.innerHeight) {
      const offset = `translateY(${scroll * 0.15}px)`;
      if (heroBg) heroBg.style.transform = `scale(1.05) ${offset}`;
      if (heroVideo) heroVideo.style.transform = offset;
    }
  });
}

// ===== ANIMATIONS =====
let animObserver = null;
function setupAnimations() {
  if (animObserver) animObserver.disconnect();
  animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale').forEach(el => animObserver.observe(el));
}

// ===== LANG SWITCHER =====
function setupLangSwitcher() {
  const toggle = document.getElementById('langToggle');
  const dropdown = document.getElementById('langDropdown');
  if (!toggle || !dropdown) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });

  document.addEventListener('click', () => dropdown.classList.remove('show'));

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.lang-opt').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      currentLang = opt.dataset.lang;
      const html = document.documentElement;
      html.lang = currentLang;
      html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
      render();
      setTimeout(setupAnimations, 100);
      navigateTo(currentPage);
      dropdown.classList.remove('show');
    });
  });
}

// ===== HAMBURGER =====
function setupHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const links = document.querySelector('.navbar-links');
  if (!hamburger || !links) return;

  function openMenu() {
    hamburger.classList.add('active');
    links.classList.add('open');
  }
  function closeMenu() {
    hamburger.classList.remove('active');
    links.classList.remove('open');
  }

  hamburger.addEventListener('click', () => {
    if (links.classList.contains('open')) closeMenu();
    else openMenu();
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
}

// ===== CONTACT FORM =====
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const dest = form.querySelector('[name="destination"]').value.trim();
    const msg = form.querySelector('[name="message"]').value.trim();
    const fullMsg = `Hello EMI Tours,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDestination: ${dest}\nMessage: ${msg}`;
    window.open(`https://wa.me/212661371778?text=${encodeURIComponent(fullMsg)}`, '_blank');
  });
}

// ===== STATS COUNTER =====
function setupStatsCounter() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.number').forEach(el => {
          const target = parseInt(el.dataset.count);
          let count = 0;
          const step = Math.ceil(target / 60);
          const interval = setInterval(() => {
            count += step;
            if (count >= target) { count = target; clearInterval(interval); }
            el.textContent = count.toLocaleString() + (el.dataset.suffix || '');
          }, 25);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  const stats = document.querySelector('.stats-grid');
  if (stats) observer.observe(stats);
}

// ===== HERO AIRPLANE SIZE =====
function setupHeroAirplaneSize() {
  const container = document.getElementById('heroTitleReveal');
  const text = document.getElementById('heroTitleText');
  if (!container || !text) return;

  function measure() {
    const w = text.offsetWidth;
    if (w > 0) container.style.setProperty('--tw', w + 'px');
  }

  measure();
  window.addEventListener('resize', measure);
}
