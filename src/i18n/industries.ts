// Centralized trilingual content for all 8 industry pages.
// IndustryPage looks up content by id + current language.

export type IndustryId =
  | 'fabrication' | 'energie' | 'automobile' | 'sante'
  | 'agroalimentaire' | 'immobilier' | 'transport' | 'mines';

export type Lang = 'fr' | 'ar' | 'en';

export interface IndustryContent {
  name: string;
  subtitle: string;
  benefits: string[];
  featuresRow: { title: string; desc: string }[];
  testimonial: { quote: string; author: string; role: string };
}

type AllContent = Record<IndustryId, Record<Lang, IndustryContent>>;

export const industryContent: AllContent = {
  fabrication: {
    en: {
      name: "Manufacturing",
      subtitle: "Reduce unplanned downtime and optimize your Overall Equipment Effectiveness (OEE) with a modern maintenance solution.",
      benefits: [
        "Switch from reactive to preventive maintenance.",
        "Manage critical spare parts to avoid stockouts.",
        "Digitize safety procedures (LOTO) directly in work orders.",
        "Analyze the MTBF (Mean Time Between Failures) of your machines."
      ],
      featuresRow: [
        { title: "Shutdown Planning", desc: "Coordinate machine shutdowns with production to minimize impact." },
        { title: "IoT Alerts", desc: "Connect vibration or temperature sensors to trigger WOs automatically." },
        { title: "Vendor Management", desc: "Manage subcontractors and contracts directly from the app." }
      ],
      testimonial: {
        quote: "We reduced our downtime by 22% in the first year by switching from Excel to MAINTevo.",
        author: "Karim Belhaj",
        role: "Maintenance Manager, Casablanca Plant"
      }
    },
    fr: {
      name: "Fabrication",
      subtitle: "Réduisez les arrêts non planifiés et optimisez votre TRS (Taux de Rendement Synthétique) grâce à une solution de maintenance moderne.",
      benefits: [
        "Passez de la maintenance corrective à la maintenance préventive.",
        "Gérez les pièces critiques pour éviter les ruptures de stock.",
        "Digitalisez les procédures de sécurité (LOTO) dans les bons de travail.",
        "Analysez le MTBF (temps moyen entre pannes) de vos machines."
      ],
      featuresRow: [
        { title: "Planification d'arrêts", desc: "Coordonnez les arrêts machines avec la production pour minimiser l'impact." },
        { title: "Alertes IoT", desc: "Connectez des capteurs de vibration ou de température pour déclencher des BT automatiquement." },
        { title: "Gestion fournisseurs", desc: "Pilotez sous-traitants et contrats directement depuis l'application." }
      ],
      testimonial: {
        quote: "Nous avons réduit nos arrêts de 22 % la première année en passant d'Excel à MAINTevo.",
        author: "Karim Belhaj",
        role: "Responsable Maintenance, Usine de Casablanca"
      }
    },
    ar: {
      name: "الصناعة والتحويل",
      subtitle: "قلّل التوقفات غير المخططة وحسّن الفعالية الإجمالية لمعداتك (OEE) بحل صيانة عصري.",
      benefits: [
        "انتقل من الصيانة التصحيحية إلى الصيانة الوقائية.",
        "أدر قطع الغيار الحرجة لتجنب نفاد المخزون.",
        "رقمن إجراءات الأمان (LOTO) داخل أوامر العمل.",
        "حلل MTBF (متوسط الزمن بين الأعطال) لآلاتك."
      ],
      featuresRow: [
        { title: "تخطيط التوقفات", desc: "نسّق توقفات الآلات مع الإنتاج لتقليل الأثر." },
        { title: "تنبيهات IoT", desc: "اربط مستشعرات الاهتزاز أو الحرارة لتوليد أوامر عمل تلقائياً." },
        { title: "إدارة الموردين", desc: "أدر المتعاقدين والعقود مباشرة من التطبيق." }
      ],
      testimonial: {
        quote: "خفّضنا توقفاتنا بنسبة 22٪ في السنة الأولى بعد الانتقال من الإكسيل إلى MAINTevo.",
        author: "كريم بلحاج",
        role: "مسؤول الصيانة، مصنع الدار البيضاء"
      }
    }
  },

  energie: {
    en: {
      name: "Energy & Utilities",
      subtitle: "Ensure the continuous availability of critical infrastructure (wind, solar, nuclear, water networks).",
      benefits: [
        "Planning of geolocated inspection rounds.",
        "Total traceability for security and regulatory audits.",
        "Manage technical clearances and certifications.",
        "Mobile app functional offline for remote areas."
      ],
      featuresRow: [
        { title: "Mapping & GIS", desc: "Precisely locate your distributed equipment across the territory." },
        { title: "Regulatory Reports", desc: "Generate compliant inspection reports in one click." },
        { title: "Certification Management", desc: "Ensure only qualified personnel intervene on high-voltage equipment." }
      ],
      testimonial: {
        quote: "The offline functionality lets our technicians document interventions even at the foot of an isolated wind turbine.",
        author: "Sophie Martin",
        role: "Director of Operations, EcoEnergy"
      }
    },
    fr: {
      name: "Énergie & Utilities",
      subtitle: "Assurez la disponibilité continue des infrastructures critiques (éolien, solaire, nucléaire, réseaux d'eau).",
      benefits: [
        "Planification de tournées d'inspection géolocalisées.",
        "Traçabilité totale pour les audits sécurité et réglementaires.",
        "Gestion des habilitations techniques et certifications.",
        "Application mobile fonctionnelle hors ligne pour les zones isolées."
      ],
      featuresRow: [
        { title: "Cartographie & SIG", desc: "Localisez précisément vos équipements distribués sur le territoire." },
        { title: "Rapports réglementaires", desc: "Générez des rapports d'inspection conformes en un clic." },
        { title: "Gestion des certifications", desc: "Garantissez que seuls les personnels qualifiés interviennent sur le haute tension." }
      ],
      testimonial: {
        quote: "Le mode hors ligne permet à nos techniciens de documenter les interventions même au pied d'une éolienne isolée.",
        author: "Sophie Martin",
        role: "Directrice des opérations, EcoÉnergie"
      }
    },
    ar: {
      name: "الطاقة والمرافق",
      subtitle: "اضمن التوفر المستمر للبنية التحتية الحيوية (طاقة الرياح، الشمسية، النووية، شبكات المياه).",
      benefits: [
        "تخطيط جولات تفتيش بإحداثيات GPS.",
        "تتبع كامل لعمليات التدقيق الأمني والتنظيمي.",
        "إدارة التراخيص التقنية والشهادات.",
        "تطبيق جوال يعمل بدون إنترنت للمناطق النائية."
      ],
      featuresRow: [
        { title: "خرائط ونظم GIS", desc: "حدد مواقع معداتك الموزعة بدقة عبر التراب الوطني." },
        { title: "تقارير تنظيمية", desc: "أصدر تقارير تفتيش متوافقة بنقرة واحدة." },
        { title: "إدارة الشهادات", desc: "تأكد من أن المؤهلين فقط هم من يتدخل على المعدات عالية الضغط." }
      ],
      testimonial: {
        quote: "وضع العمل بدون إنترنت يتيح لتقنيينا توثيق التدخلات حتى قرب توربين رياح معزول.",
        author: "صوفي مارتن",
        role: "مديرة العمليات، EcoÉnergie"
      }
    }
  },

  automobile: {
    en: {
      name: "Automotive",
      subtitle: "Increase production line reliability with a responsive and connected CMMS.",
      benefits: [
        "Drastic reduction of line micro-stops.",
        "Improved communication with line supervisors (Andon).",
        "Digitalization of complex preventive maintenance routines.",
        "Interoperability with MES and ERP (SAP) systems."
      ],
      featuresRow: [
        { title: "API Integration", desc: "Connect MAINTevo to your Manufacturing Execution System (MES)." },
        { title: "Multi-site Management", desc: "Standardize your maintenance processes across all your plants." },
        { title: "Advanced Analytics", desc: "Visualize bottlenecks for your critical assets." }
      ],
      testimonial: {
        quote: "In automotive, every minute of downtime costs thousands. MAINTevo lets us be proactive.",
        author: "Thomas Lefevre",
        role: "Plant Manager, AutoParts Group"
      }
    },
    fr: {
      name: "Automobile",
      subtitle: "Augmentez la fiabilité de vos lignes de production avec une GMAO réactive et connectée.",
      benefits: [
        "Réduction drastique des micro-arrêts de ligne.",
        "Communication améliorée avec les superviseurs de ligne (Andon).",
        "Digitalisation des routines de maintenance préventive complexes.",
        "Interopérabilité avec les systèmes MES et ERP (SAP)."
      ],
      featuresRow: [
        { title: "Intégration API", desc: "Connectez MAINTevo à votre Manufacturing Execution System (MES)." },
        { title: "Gestion multi-sites", desc: "Standardisez vos processus de maintenance sur toutes vos usines." },
        { title: "Analytique avancée", desc: "Visualisez les goulots d'étranglement sur vos actifs critiques." }
      ],
      testimonial: {
        quote: "Dans l'automobile, chaque minute d'arrêt coûte des milliers d'euros. MAINTevo nous permet d'être proactifs.",
        author: "Thomas Lefevre",
        role: "Directeur d'usine, AutoParts Group"
      }
    },
    ar: {
      name: "السيارات",
      subtitle: "ارفع موثوقية خطوط إنتاجك مع نظام GMAO سريع الاستجابة ومتصل.",
      benefits: [
        "تقليص جذري لتوقفات الخط الصغيرة.",
        "تواصل أفضل مع مشرفي الخط (Andon).",
        "رقمنة روتينات الصيانة الوقائية المعقدة.",
        "التشغيل البيني مع أنظمة MES و ERP (SAP)."
      ],
      featuresRow: [
        { title: "تكامل API", desc: "اربط MAINTevo بنظام تنفيذ التصنيع (MES) لديك." },
        { title: "إدارة متعددة المواقع", desc: "وحّد عمليات الصيانة عبر جميع مصانعك." },
        { title: "تحليلات متقدمة", desc: "تصوّر اختناقات أصولك الحرجة." }
      ],
      testimonial: {
        quote: "في قطاع السيارات، كل دقيقة توقف تكلف آلاف اليوروات. MAINTevo يجعلنا استباقيين.",
        author: "توماس لوفيفر",
        role: "مدير المصنع، AutoParts Group"
      }
    }
  },

  sante: {
    en: {
      name: "Health & Pharma",
      subtitle: "Meet strict FDA and ISO requirements with total equipment traceability.",
      benefits: [
        "FDA 21 CFR Part 11 compliance (electronic signatures).",
        "Inviolable audit trail.",
        "Rigorous calibration process for biomedical equipment.",
        "Cleanroom maintenance management (HVAC, filtration)."
      ],
      featuresRow: [
        { title: "Automated Compliance", desc: "Be always ready for surprise audits with impeccable records." },
        { title: "Validation & Calibration", desc: "Track calibration certificates and block non-compliant equipment." },
        { title: "Electronic Signatures", desc: "Validate every critical step with a secure double approval." }
      ],
      testimonial: {
        quote: "The traceability required in pharma is a nightmare on paper. MAINTevo turned our audits into a formality.",
        author: "Dr. Elena Rossi",
        role: "Biomedical Manager, Northern Clinic"
      }
    },
    fr: {
      name: "Santé & Pharma",
      subtitle: "Répondez aux exigences strictes FDA et ISO avec une traçabilité totale de vos équipements.",
      benefits: [
        "Conformité FDA 21 CFR Part 11 (signatures électroniques).",
        "Piste d'audit inviolable.",
        "Processus rigoureux de calibration des équipements biomédicaux.",
        "Gestion de la maintenance des salles blanches (CVC, filtration)."
      ],
      featuresRow: [
        { title: "Conformité automatisée", desc: "Soyez toujours prêts aux audits surprises grâce à des dossiers impeccables." },
        { title: "Validation & calibration", desc: "Suivez les certificats de calibration et bloquez les équipements non conformes." },
        { title: "Signatures électroniques", desc: "Validez chaque étape critique par une double approbation sécurisée." }
      ],
      testimonial: {
        quote: "La traçabilité exigée en pharma est un cauchemar sur papier. MAINTevo a transformé nos audits en formalité.",
        author: "Dr. Elena Rossi",
        role: "Responsable biomédical, Clinique du Nord"
      }
    },
    ar: {
      name: "الصحة والصيدلة",
      subtitle: "استوفِ متطلبات FDA و ISO الصارمة مع تتبع كامل للمعدات.",
      benefits: [
        "الامتثال لـ FDA 21 CFR Part 11 (التوقيعات الإلكترونية).",
        "مسار تدقيق غير قابل للتلاعب.",
        "عملية معايرة صارمة للمعدات الطبية الحيوية.",
        "إدارة صيانة الغرف النظيفة (التكييف، الترشيح)."
      ],
      featuresRow: [
        { title: "امتثال آلي", desc: "كن دائماً جاهزاً لعمليات التدقيق المفاجئة بسجلات لا تشوبها شائبة." },
        { title: "التحقق والمعايرة", desc: "تتبع شهادات المعايرة وامنع المعدات غير المطابقة." },
        { title: "التوقيعات الإلكترونية", desc: "صدّق على كل خطوة حرجة بموافقة مزدوجة آمنة." }
      ],
      testimonial: {
        quote: "التتبع المطلوب في الصيدلة كابوس على الورق. MAINTevo حوّل عمليات التدقيق لدينا إلى إجراء شكلي.",
        author: "د. إيلينا روسي",
        role: "مسؤولة الطب الحيوي، عيادة الشمال"
      }
    }
  },

  agroalimentaire: {
    en: {
      name: "Food & Beverage",
      subtitle: "Maintain strict hygiene standards and guarantee the cold chain through digitized processes.",
      benefits: [
        "Compliance with HACCP and IFS/BRC standards.",
        "Traceability of food-grade lubricants.",
        "Preventive cleaning and disinfection rounds.",
        "Rapid analysis of failures affecting cooling units."
      ],
      featuresRow: [
        { title: "Hygiene Rounds", desc: "Detailed checklists for cleaning equipment before production." },
        { title: "Temperature Alerts", desc: "Interoperate with your cold-chain sensors to react immediately." },
        { title: "Easy Audits", desc: "Full intervention history to prove your sanitary compliance." }
      ],
      testimonial: {
        quote: "HACCP documentation is now fully integrated into our work orders. We no longer hunt for information.",
        author: "Jerome Fabre",
        role: "Plant Director, BioFood"
      }
    },
    fr: {
      name: "Agroalimentaire",
      subtitle: "Maintenez des standards d'hygiène stricts et garantissez la chaîne du froid grâce à des processus digitalisés.",
      benefits: [
        "Conformité avec les normes HACCP et IFS/BRC.",
        "Traçabilité des lubrifiants de qualité alimentaire.",
        "Tournées préventives de nettoyage et de désinfection.",
        "Analyse rapide des pannes affectant les groupes froid."
      ],
      featuresRow: [
        { title: "Tournées hygiène", desc: "Checklists détaillées pour le nettoyage des équipements avant production." },
        { title: "Alertes température", desc: "Interopérabilité avec vos capteurs de chaîne du froid pour réagir immédiatement." },
        { title: "Audits faciles", desc: "Historique complet des interventions pour prouver votre conformité sanitaire." }
      ],
      testimonial: {
        quote: "La documentation HACCP est désormais entièrement intégrée à nos bons de travail. Nous ne cherchons plus l'information.",
        author: "Jérôme Fabre",
        role: "Directeur d'usine, BioFood"
      }
    },
    ar: {
      name: "الصناعات الغذائية",
      subtitle: "حافظ على معايير نظافة صارمة واضمن سلسلة التبريد عبر إجراءات رقمية.",
      benefits: [
        "الامتثال لمعايير HACCP و IFS/BRC.",
        "تتبع المُزَلِّقات الصالحة للطعام.",
        "جولات وقائية للتنظيف والتطهير.",
        "تحليل سريع للأعطال التي تمسّ وحدات التبريد."
      ],
      featuresRow: [
        { title: "جولات النظافة", desc: "قوائم تحقق مفصلة لتنظيف المعدات قبل الإنتاج." },
        { title: "تنبيهات الحرارة", desc: "تفاعل فوري مع مستشعرات سلسلة التبريد لديك." },
        { title: "تدقيق سهل", desc: "تاريخ كامل للتدخلات لإثبات امتثالك الصحي." }
      ],
      testimonial: {
        quote: "وثائق HACCP مدمجة الآن بالكامل في أوامر العمل. لم نعد نبحث عن المعلومات.",
        author: "جيروم فابر",
        role: "مدير المصنع، BioFood"
      }
    }
  },

  immobilier: {
    en: {
      name: "Real Estate & Facilities",
      subtitle: "Manage maintenance of dozens of buildings and centralize requests from tenants or occupants.",
      benefits: [
        "Tenant portal to centralize tickets (leaks, heating...).",
        "Tracking of external providers and commercial SLAs.",
        "Planning of regulatory controls (elevators, fire).",
        "Consolidated multi-building view of maintenance costs."
      ],
      featuresRow: [
        { title: "Requester Portal", desc: "Let occupants scan a QR code to report a problem." },
        { title: "Subcontracting", desc: "Track progress and billing of your cleaning and maintenance vendors." },
        { title: "Dashboards", desc: "Compare operating costs (OPEX) across your properties." }
      ],
      testimonial: {
        quote: "We manage over 40 tertiary buildings. MAINTevo structured all our incoming requests.",
        author: "Alice Morel",
        role: "Facility Manager, Tertia Real Estate"
      }
    },
    fr: {
      name: "Immobilier & Facilities",
      subtitle: "Pilotez la maintenance de dizaines de bâtiments et centralisez les demandes des locataires ou occupants.",
      benefits: [
        "Portail locataires pour centraliser les tickets (fuites, chauffage...).",
        "Suivi des prestataires externes et des SLA commerciaux.",
        "Planification des contrôles réglementaires (ascenseurs, incendie).",
        "Vue consolidée multi-bâtiments des coûts de maintenance."
      ],
      featuresRow: [
        { title: "Portail demandeurs", desc: "Permettez aux occupants de scanner un QR code pour signaler un problème." },
        { title: "Sous-traitance", desc: "Suivez la progression et la facturation de vos prestataires nettoyage et maintenance." },
        { title: "Tableaux de bord", desc: "Comparez les coûts d'exploitation (OPEX) entre vos différents biens." }
      ],
      testimonial: {
        quote: "Nous gérons plus de 40 bâtiments tertiaires. MAINTevo a structuré toutes nos demandes entrantes.",
        author: "Alice Morel",
        role: "Facility Manager, Tertia Real Estate"
      }
    },
    ar: {
      name: "العقارات والمرافق",
      subtitle: "أدر صيانة عشرات المباني واجمع طلبات المستأجرين أو الشاغلين في مكان واحد.",
      benefits: [
        "بوابة للمستأجرين لجمع التذاكر (تسربات، تدفئة...).",
        "متابعة مقدمي الخدمات الخارجيين واتفاقيات SLA التجارية.",
        "تخطيط عمليات المراقبة التنظيمية (المصاعد، الحرائق).",
        "عرض موحّد لتكاليف الصيانة عبر عدة مبانٍ."
      ],
      featuresRow: [
        { title: "بوابة الطلبات", desc: "اسمح للشاغلين بمسح رمز QR للإبلاغ عن أي مشكلة." },
        { title: "إدارة المقاولين", desc: "تتبع تقدم وفوترة مزودي خدمات التنظيف والصيانة." },
        { title: "لوحات قيادة", desc: "قارن تكاليف التشغيل (OPEX) بين عقاراتك المختلفة." }
      ],
      testimonial: {
        quote: "نحن نُدير أكثر من 40 مبنى. MAINTevo نظّم كل طلباتنا الواردة.",
        author: "أليس موريل",
        role: "مديرة المرافق، Tertia Real Estate"
      }
    }
  },

  transport: {
    en: {
      name: "Transport & Logistics",
      subtitle: "Keep your fleet and sorting centers operational so you always deliver on time.",
      benefits: [
        "Preventive maintenance based on mileage or hours of use.",
        "Fleet management for trucks, forklifts, and conveyors.",
        "Mobile app designed for pre-trip vehicle inspections.",
        "Detailed tracking of fuel costs, tire wear, and parts."
      ],
      featuresRow: [
        { title: "Meter Triggers", desc: "Maintenance is scheduled automatically after X kilometers." },
        { title: "Quick Inspections", desc: "Digital checklist that the driver fills in on their smartphone." },
        { title: "TCO Analysis", desc: "Know exactly when it is more profitable to replace a forklift than repair it." }
      ],
      testimonial: {
        quote: "Forklift availability went from 85% to 98%. A real game changer.",
        author: "Nicolas Blanc",
        role: "Warehouse Manager, Express Logistics"
      }
    },
    fr: {
      name: "Transport & Logistique",
      subtitle: "Maintenez votre flotte et vos centres de tri opérationnels pour toujours livrer à temps.",
      benefits: [
        "Maintenance préventive basée sur le kilométrage ou les heures d'usage.",
        "Gestion de flotte pour camions, chariots élévateurs et convoyeurs.",
        "Application mobile conçue pour les inspections pré-départ des véhicules.",
        "Suivi détaillé des coûts carburant, de l'usure des pneus et des pièces."
      ],
      featuresRow: [
        { title: "Déclencheurs au compteur", desc: "La maintenance est planifiée automatiquement après X kilomètres." },
        { title: "Inspections rapides", desc: "Checklist digitale que le chauffeur remplit sur son smartphone." },
        { title: "Analyse TCO", desc: "Sachez précisément quand il est plus rentable de remplacer un chariot que de le réparer." }
      ],
      testimonial: {
        quote: "La disponibilité de nos chariots élévateurs est passée de 85 % à 98 %. Un vrai game changer.",
        author: "Nicolas Blanc",
        role: "Responsable d'entrepôt, Express Logistics"
      }
    },
    ar: {
      name: "النقل واللوجستيك",
      subtitle: "حافظ على تشغيل أسطولك ومراكز الفرز لديك لتسلّم في الموعد دائماً.",
      benefits: [
        "صيانة وقائية مبنية على الكيلومترات أو ساعات الاستخدام.",
        "إدارة الأسطول للشاحنات والرافعات الشوكية والناقلات.",
        "تطبيق جوال مصمم لفحوصات ما قبل الرحلة.",
        "تتبع مفصل لتكاليف الوقود وتآكل الإطارات والقطع."
      ],
      featuresRow: [
        { title: "مشغلات العداد", desc: "تُجدول الصيانة تلقائياً بعد X كيلومتر." },
        { title: "فحوصات سريعة", desc: "قائمة تحقق رقمية يملؤها السائق من هاتفه." },
        { title: "تحليل TCO", desc: "اعرف بدقة متى يصبح استبدال الرافعة أوفر من إصلاحها." }
      ],
      testimonial: {
        quote: "ارتفعت جاهزية رافعاتنا الشوكية من 85٪ إلى 98٪. تحوّل حقيقي.",
        author: "نيكولا بلانك",
        role: "مسؤول المستودع، Express Logistics"
      }
    }
  },

  mines: {
    en: {
      name: "Mining & Extraction",
      subtitle: "Master the wear and tear of your heavy equipment in the toughest environments.",
      benefits: [
        "Software resilient to intermittent internet connections (offline-first).",
        "Safety first: integrated work permits and risk analyses.",
        "Maintenance of heavy machinery (shovels, dumpers, crushers).",
        "Planning of major overhauls (processing-plant shutdowns)."
      ],
      featuresRow: [
        { title: "Robust Offline Mode", desc: "Data syncs automatically when you're back at base." },
        { title: "Work Permits", desc: "Manage confined-space or blasting permits directly on the work order." },
        { title: "Component Tracking", desc: "Track lifespan of subsystems (engine, transmission) separately from the chassis." }
      ],
      testimonial: {
        quote: "At the bottom of the mine, there's no internet and no time for paper. MAINTevo offline is formidable.",
        author: "Serge K.",
        role: "Technical Director, North Gold Mine"
      }
    },
    fr: {
      name: "Mines & Extraction",
      subtitle: "Maîtrisez l'usure de vos équipements lourds dans les environnements les plus difficiles.",
      benefits: [
        "Logiciel résistant aux connexions internet intermittentes (offline-first).",
        "Sécurité d'abord : permis de travail et analyses de risques intégrés.",
        "Maintenance de la machinerie lourde (pelles, tombereaux, concasseurs).",
        "Planification des grandes révisions (arrêts d'usine de traitement)."
      ],
      featuresRow: [
        { title: "Mode hors ligne robuste", desc: "Les données se synchronisent automatiquement au retour à la base." },
        { title: "Permis de travail", desc: "Gérez les autorisations en espace confiné ou de tir directement sur le BT." },
        { title: "Suivi composants", desc: "Suivez la durée de vie des sous-systèmes (moteur, transmission) séparément du châssis." }
      ],
      testimonial: {
        quote: "Au fond de la mine, pas d'internet et pas de temps à perdre avec le papier. MAINTevo hors ligne est redoutable.",
        author: "Serge K.",
        role: "Directeur technique, Mine d'Or Nord"
      }
    },
    ar: {
      name: "المناجم والاستخراج",
      subtitle: "تحكّم في تآكل معداتك الثقيلة في أصعب البيئات.",
      benefits: [
        "برنامج مقاوم لانقطاع الإنترنت (يعمل أولاً دون اتصال).",
        "السلامة أولاً: تصاريح عمل وتحليلات مخاطر مدمجة.",
        "صيانة الآلات الثقيلة (الجرافات، القلابات، الكسارات).",
        "تخطيط المراجعات الكبرى (توقفات وحدات المعالجة)."
      ],
      featuresRow: [
        { title: "وضع أوفلاين قوي", desc: "تتزامن البيانات تلقائياً عند العودة إلى القاعدة." },
        { title: "تصاريح العمل", desc: "أدر تصاريح الأماكن الضيقة أو التفجير مباشرة على أمر العمل." },
        { title: "تتبع المكونات", desc: "تتبع عمر الأنظمة الفرعية (المحرك، ناقل الحركة) بشكل مستقل عن الهيكل." }
      ],
      testimonial: {
        quote: "في قاع المنجم لا يوجد إنترنت ولا وقت للورق. MAINTevo بدون إنترنت رهيب.",
        author: "سيرج ك.",
        role: "المدير التقني، منجم الذهب الشمالي"
      }
    }
  }
};

// Surrounding UI labels used by the IndustryPage template itself.
export const industryLabels = {
  fr: {
    sector: "Secteur :",
    demo: "Réserver une démo",
    challenges: "Défis du secteur. Nos solutions.",
    testimonial: "Témoignage",
    keyFeatures: "Fonctionnalités clés pour",
    ready: "Prêt à moderniser vos opérations ?",
    discover: "Découvrir la solution en direct",
    h1Prefix: "GMAO pour",
    metaTitle: (name: string) => `GMAO pour ${name} | MAINTevo`,
    metaDesc:  (name: string, subtitle: string) => `Découvrez comment MAINTevo optimise la maintenance dans le secteur ${name}. ${subtitle}`,
  },
  ar: {
    sector: "القطاع :",
    demo: "طلب عرض حي",
    challenges: "تحديات القطاع. حلولنا.",
    testimonial: "شهادة",
    keyFeatures: "الميزات الرئيسية لـ",
    ready: "هل أنت جاهز لتحديث عملياتك؟",
    discover: "اكتشف الحل مباشرة",
    h1Prefix: "GMAO لقطاع",
    metaTitle: (name: string) => `GMAO لقطاع ${name} | MAINTevo`,
    metaDesc:  (name: string, subtitle: string) => `اكتشف كيف يُحسّن MAINTevo الصيانة في قطاع ${name}. ${subtitle}`,
  },
  en: {
    sector: "Sector:",
    demo: "Book a Demo",
    challenges: "Industry challenges. Our solutions.",
    testimonial: "Testimonial",
    keyFeatures: "Key features for",
    ready: "Ready to modernize your operations?",
    discover: "Discover the solution live",
    h1Prefix: "CMMS for",
    metaTitle: (name: string) => `CMMS for ${name} | MAINTevo`,
    metaDesc:  (name: string, subtitle: string) => `Discover how MAINTevo optimizes maintenance in the ${name} sector. ${subtitle}`,
  }
} as const;
