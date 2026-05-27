export type Lang = 'fr' | 'ar' | 'en';
export type FeatureId =
  | 'work-orders'
  | 'equipment'
  | 'preventive-maintenance'
  | 'inventory'
  | 'kpi-dashboard'
  | 'maintenance-calendar'
  | 'reporting'
  | 'roles';

interface FeatureLang {
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
  benefits: { title: string; desc: string }[];
  cta: string;
}

export type FeatureContent = Record<FeatureId, Record<Lang, FeatureLang>>;

export const featureContent: FeatureContent = {
  'work-orders': {
    fr: {
      badge: "Bons de travail",
      title: "Gestion complète des bons de travail",
      subtitle: "De la demande à la clôture, en quelques clics.",
      desc: "Créez, assignez et clôturez chaque intervention en temps réel depuis mobile ou bureau. Fini les bons perdus et les équipes dans le flou.",
      benefits: [
        { title: "Création rapide", desc: "Lancez un bon de travail en moins de 30 secondes depuis l'app ou le portail web." },
        { title: "Attribution intelligente", desc: "Routage automatique selon la spécialité et la disponibilité du technicien." },
        { title: "Suivi en temps réel", desc: "Statut en direct, notifications push, photos avant/après intégrées." },
        { title: "Historique complet", desc: "Chaque intervention archivée avec temps passé, pièces utilisées et signature électronique." },
      ],
      cta: "Démarrer l'essai gratuit",
    },
    ar: {
      badge: "أوامر العمل",
      title: "إدارة شاملة لأوامر العمل",
      subtitle: "من الطلب إلى الإغلاق، بنقرات معدودة.",
      desc: "أنشئ وعيّن وأغلق كل تدخل في الوقت الفعلي من الهاتف أو الحاسوب. لا مزيد من الأوراق الضائعة أو الفرق التائهة.",
      benefits: [
        { title: "إنشاء سريع", desc: "أطلق أمر عمل في أقل من 30 ثانية من التطبيق أو بوابة الويب." },
        { title: "تعيين ذكي", desc: "توجيه تلقائي حسب التخصص وتوفر الفني." },
        { title: "تتبع في الوقت الفعلي", desc: "حالة مباشرة، إشعارات فورية، صور قبل وبعد مدمجة." },
        { title: "سجل كامل", desc: "كل تدخل مؤرشف مع الوقت المستغرق والقطع المستخدمة والتوقيع الإلكتروني." },
      ],
      cta: "ابدأ التجربة المجانية",
    },
    en: {
      badge: "Work Orders",
      title: "Complete Work Order Management",
      subtitle: "From request to closure, in just a few clicks.",
      desc: "Create, assign, and close every intervention in real time from mobile or desktop. No more lost tickets or teams in the dark.",
      benefits: [
        { title: "Fast creation", desc: "Launch a work order in under 30 seconds from the app or web portal." },
        { title: "Smart assignment", desc: "Automatic routing by technician specialty and availability." },
        { title: "Real-time tracking", desc: "Live status, push notifications, integrated before/after photos." },
        { title: "Full history", desc: "Every job archived with time spent, parts used, and electronic signature." },
      ],
      cta: "Start free trial",
    },
  },

  'equipment': {
    fr: {
      badge: "Gestion des équipements",
      title: "Maîtrisez votre parc d'équipements",
      subtitle: "Tous vos actifs, centralisés et traçables.",
      desc: "Enregistrez, classifiez et suivez l'état de chaque machine, véhicule ou installation. Scannez le QR code pour accéder instantanément à l'historique complet.",
      benefits: [
        { title: "Inventaire numérique", desc: "Fiche équipement complète : spécifications, fournisseur, date d'installation, garantie." },
        { title: "Scan QR Code", desc: "Chaque machine dispose d'un QR code — scannez pour voir l'historique et ouvrir un BT." },
        { title: "Alertes de conformité", desc: "Rappels automatiques pour les contrôles périodiques, les révisions et les certifications." },
        { title: "Coût total de possession", desc: "Calculez le coût réel de chaque actif : pannes, pièces, heures technicien." },
      ],
      cta: "Démarrer l'essai gratuit",
    },
    ar: {
      badge: "إدارة المعدات",
      title: "أتقن إدارة أسطول معداتك",
      subtitle: "جميع أصولك، مركزية وقابلة للتتبع.",
      desc: "سجّل وصنّف وتتبع حالة كل آلة أو مركبة أو منشأة. امسح رمز QR للوصول الفوري إلى السجل الكامل.",
      benefits: [
        { title: "جرد رقمي", desc: "بطاقة معدة كاملة: المواصفات، المورد، تاريخ التركيب، الضمان." },
        { title: "مسح QR Code", desc: "كل آلة لها رمز QR — امسحه لعرض السجل وفتح أمر عمل." },
        { title: "تنبيهات الامتثال", desc: "تذكيرات تلقائية للفحوصات الدورية والصيانة والشهادات." },
        { title: "التكلفة الإجمالية للملكية", desc: "احسب التكلفة الفعلية لكل أصل: الأعطال والقطع وساعات الفني." },
      ],
      cta: "ابدأ التجربة المجانية",
    },
    en: {
      badge: "Asset Management",
      title: "Master Your Equipment Fleet",
      subtitle: "All your assets, centralized and traceable.",
      desc: "Register, classify, and track the status of every machine, vehicle, or facility. Scan the QR code for instant access to the full history.",
      benefits: [
        { title: "Digital inventory", desc: "Full equipment profile: specs, supplier, installation date, warranty." },
        { title: "QR Code scan", desc: "Every machine has a QR code — scan it to view history and open a WO." },
        { title: "Compliance alerts", desc: "Automatic reminders for periodic inspections, overhauls, and certifications." },
        { title: "Total cost of ownership", desc: "Calculate the real cost of each asset: failures, parts, technician hours." },
      ],
      cta: "Start free trial",
    },
  },

  'preventive-maintenance': {
    fr: {
      badge: "Maintenance préventive",
      title: "Planifiez, anticipez, zéro surprise",
      subtitle: "Passez d'une posture réactive à une approche proactive.",
      desc: "Programmez des tournées récurrentes par calendrier ou compteur. MAINTevo génère automatiquement les bons de travail et alertes avant que la panne survienne.",
      benefits: [
        { title: "Plans de maintenance", desc: "Définissez des gammes d'entretien et associez-les à vos équipements en quelques clics." },
        { title: "Déclencheurs multiples", desc: "Planification par date, horomètre, kilomètres ou cycles — ou une combinaison." },
        { title: "Calendrier visuel", desc: "Vue hebdomadaire/mensuelle glisser-déposer pour ajuster la charge de vos équipes." },
        { title: "Réduction des pannes", desc: "Nos clients constatent en moyenne 30 à 40 % de pannes imprévues en moins dès le 1er mois." },
      ],
      cta: "Démarrer l'essai gratuit",
    },
    ar: {
      badge: "الصيانة الوقائية",
      title: "خطط، توقع، لا مفاجآت",
      subtitle: "انتقل من الاستجابة للأعطال إلى الوقاية منها.",
      desc: "برمج جولات دورية حسب التقويم أو العدادات. يولّد MAINTevo تلقائياً أوامر العمل والتنبيهات قبل وقوع العطل.",
      benefits: [
        { title: "خطط الصيانة", desc: "حدد نطاقات الصيانة وربطها بمعداتك ببضع نقرات." },
        { title: "محفزات متعددة", desc: "برمجة بالتاريخ أو عداد الساعات أو الكيلومترات أو الدورات — أو مزيج منها." },
        { title: "تقويم مرئي", desc: "عرض أسبوعي/شهري بالسحب والإفلات لضبط عبء عمل فرقك." },
        { title: "تقليص الأعطال", desc: "يلاحظ عملاؤنا في المتوسط تراجع 30-40٪ في الأعطال غير المتوقعة منذ الشهر الأول." },
      ],
      cta: "ابدأ التجربة المجانية",
    },
    en: {
      badge: "Preventive Maintenance",
      title: "Plan, anticipate, zero surprises",
      subtitle: "Switch from a reactive posture to a proactive approach.",
      desc: "Schedule recurring rounds by calendar or counter. MAINTevo automatically generates work orders and alerts before a failure happens.",
      benefits: [
        { title: "Maintenance plans", desc: "Define maintenance routines and link them to your assets in a few clicks." },
        { title: "Multiple triggers", desc: "Scheduling by date, hour meter, mileage, or cycles — or a combination." },
        { title: "Visual calendar", desc: "Drag-and-drop weekly/monthly view to adjust your team's workload." },
        { title: "Failure reduction", desc: "Our clients see an average 30-40% drop in unplanned breakdowns from the first month." },
      ],
      cta: "Start free trial",
    },
  },

  'inventory': {
    fr: {
      badge: "Gestion des stocks",
      title: "Stock optimisé, zéro rupture critique",
      subtitle: "La bonne pièce, au bon endroit, au bon moment.",
      desc: "Suivez chaque pièce en temps réel, configurez des seuils d'alerte et générez automatiquement des bons de commande. Fini les arrêts prolongés pour pièce manquante.",
      benefits: [
        { title: "Inventaire en temps réel", desc: "Entrées et sorties en un scan. Votre stock est toujours à jour." },
        { title: "Alertes de réapprovisionnement", desc: "Seuil minimum configurable par article — notification automatique avant rupture." },
        { title: "Consommation par machine", desc: "Identifiez les équipements les plus gourmands et anticipez les besoins." },
        { title: "Bons de commande automatiques", desc: "Générez et validez les commandes fournisseur directement depuis la plateforme." },
      ],
      cta: "Démarrer l'essai gratuit",
    },
    ar: {
      badge: "إدارة المخزون",
      title: "مخزون محسّن، لا نفاد حرج",
      subtitle: "القطعة المناسبة، في المكان المناسب، في الوقت المناسب.",
      desc: "تتبع كل قطعة في الوقت الفعلي، اضبط حدود التنبيه وأنشئ أوامر الشراء تلقائياً. لا مزيد من التوقفات الطويلة بسبب نقص القطع.",
      benefits: [
        { title: "جرد في الوقت الفعلي", desc: "المداخل والمخارج بمسح واحد. مخزونك محدّث دائماً." },
        { title: "تنبيهات إعادة التموين", desc: "حد أدنى قابل للضبط لكل صنف — إشعار تلقائي قبل النفاد." },
        { title: "الاستهلاك حسب الآلة", desc: "حدد المعدات الأكثر استهلاكاً وتوقع الاحتياجات مسبقاً." },
        { title: "أوامر شراء تلقائية", desc: "أنشئ وصادق على طلبات المورد مباشرة من المنصة." },
      ],
      cta: "ابدأ التجربة المجانية",
    },
    en: {
      badge: "Inventory Management",
      title: "Optimized stock, zero critical shortages",
      subtitle: "The right part, in the right place, at the right time.",
      desc: "Track every part in real time, set alert thresholds, and automatically generate purchase orders. No more extended downtime for a missing part.",
      benefits: [
        { title: "Real-time inventory", desc: "Ins and outs with one scan. Your stock is always up to date." },
        { title: "Reorder alerts", desc: "Configurable minimum threshold per item — automatic notification before stockout." },
        { title: "Consumption by machine", desc: "Identify the most parts-hungry equipment and anticipate future needs." },
        { title: "Automatic purchase orders", desc: "Generate and approve supplier orders directly from the platform." },
      ],
      cta: "Start free trial",
    },
  },

  'kpi-dashboard': {
    fr: {
      badge: "Tableau de bord KPI",
      title: "Pilotez votre maintenance par les données",
      subtitle: "Tout ce qui compte, en un seul écran.",
      desc: "Suivez en temps réel vos indicateurs clés : TRS, MTBF, MTTR, taux d'intervention préventive et coût maintenance. Prenez de meilleures décisions, plus vite.",
      benefits: [
        { title: "KPIs industriels standards", desc: "TRS, MTBF, MTTR, OEE — calculés automatiquement à partir de vos données réelles." },
        { title: "Tableaux de bord personnalisables", desc: "Ajoutez, retirez ou réorganisez les widgets selon votre rôle." },
        { title: "Rapports automatiques", desc: "Export PDF ou Excel hebdomadaire ou mensuel, envoyé automatiquement par e-mail." },
        { title: "Alertes sur seuil", desc: "Soyez notifié quand un KPI dépasse un seuil critique que vous avez défini." },
      ],
      cta: "Démarrer l'essai gratuit",
    },
    ar: {
      badge: "لوحة مؤشرات الأداء",
      title: "قُد صيانتك بالبيانات",
      subtitle: "كل ما يهم، في شاشة واحدة.",
      desc: "تابع مؤشراتك الرئيسية في الوقت الفعلي: TRS وMTBF وMTTR ومعدل التدخل الوقائي وتكلفة الصيانة. اتخذ قرارات أفضل وأسرع.",
      benefits: [
        { title: "مؤشرات صناعية معيارية", desc: "TRS وMTBF وMTTR وOEE — تُحسب تلقائياً من بياناتك الفعلية." },
        { title: "لوحات قيادة قابلة للتخصيص", desc: "أضف أو أزل أو رتب مكونات العرض حسب دورك." },
        { title: "تقارير تلقائية", desc: "تصدير PDF أو Excel أسبوعي أو شهري، يُرسل تلقائياً بالبريد الإلكتروني." },
        { title: "تنبيهات على حد", desc: "كن أول من يعلم عندما يتجاوز مؤشر حداً حرجاً حددته أنت." },
      ],
      cta: "ابدأ التجربة المجانية",
    },
    en: {
      badge: "KPI Dashboard",
      title: "Drive your maintenance with data",
      subtitle: "Everything that matters, on one screen.",
      desc: "Track your key indicators in real time: OEE, MTBF, MTTR, preventive ratio, and maintenance cost. Make better decisions, faster.",
      benefits: [
        { title: "Standard industrial KPIs", desc: "OEE, MTBF, MTTR — automatically calculated from your real data." },
        { title: "Customizable dashboards", desc: "Add, remove, or rearrange widgets based on your role." },
        { title: "Automated reports", desc: "Weekly or monthly PDF/Excel export, automatically emailed to stakeholders." },
        { title: "Threshold alerts", desc: "Get notified the moment a KPI crosses a critical threshold you've defined." },
      ],
      cta: "Start free trial",
    },
  },

  'maintenance-calendar': {
    fr: {
      badge: "Calendrier de maintenance",
      title: "Une vision claire de votre planning",
      subtitle: "Organisez, visualisez et optimisez la charge de vos équipes.",
      desc: "Le calendrier MAINTevo centralise toutes les interventions planifiées et correctives. Glissez-déposez pour réorganiser en quelques secondes.",
      benefits: [
        { title: "Vue multi-équipe", desc: "Affichez simultanément le planning de tous vos techniciens sur un seul écran." },
        { title: "Drag & drop intuitif", desc: "Réaffectez une intervention en glissant-déposant — le technicien est notifié instantanément." },
        { title: "Filtres avancés", desc: "Filtrez par site, équipe, type d'intervention ou statut pour ne voir que ce qui compte." },
        { title: "Synchronisation mobile", desc: "Le calendrier est synchronisé en temps réel sur l'app mobile de chaque technicien." },
      ],
      cta: "Démarrer l'essai gratuit",
    },
    ar: {
      badge: "تقويم الصيانة",
      title: "رؤية واضحة لجدولك الزمني",
      subtitle: "نظّم وتصوّر وحسّن عبء عمل فرقك.",
      desc: "يجمع تقويم MAINTevo جميع التدخلات المجدولة والتصحيحية في مكان واحد. استخدم السحب والإفلات لإعادة التنظيم في ثوانٍ.",
      benefits: [
        { title: "عرض متعدد الفرق", desc: "اعرض جداول جميع تقنييك في وقت واحد على شاشة واحدة." },
        { title: "سحب وإفلات بديهي", desc: "أعد توزيع التدخلات بالسحب والإفلات — يتلقى الفني إشعاراً فورياً." },
        { title: "فلاتر متقدمة", desc: "رشّح حسب الموقع أو الفريق أو نوع التدخل أو الحالة." },
        { title: "مزامنة مع الهاتف", desc: "التقويم متزامن في الوقت الفعلي على تطبيق الهاتف لكل فني." },
      ],
      cta: "ابدأ التجربة المجانية",
    },
    en: {
      badge: "Maintenance Calendar",
      title: "A clear view of your schedule",
      subtitle: "Organize, visualize, and optimize your team's workload.",
      desc: "The MAINTevo calendar centralizes all planned and corrective interventions. Drag and drop to reorganize in seconds.",
      benefits: [
        { title: "Multi-team view", desc: "Display all your technicians' schedules simultaneously on one screen." },
        { title: "Intuitive drag & drop", desc: "Reassign an intervention by dragging — the technician is instantly notified." },
        { title: "Advanced filters", desc: "Filter by site, team, intervention type, or status to see only what matters." },
        { title: "Mobile sync", desc: "The calendar syncs in real time to each technician's mobile app." },
      ],
      cta: "Start free trial",
    },
  },

  'reporting': {
    fr: {
      badge: "Rapports & Audit",
      title: "Toujours prêt pour l'audit",
      subtitle: "Traçabilité complète, rapports en un clic.",
      desc: "Chaque bon de travail, chaque pièce consommée, chaque heure technicien est enregistrée et exportable. Préparez un audit ISO ou client en quelques minutes.",
      benefits: [
        { title: "Piste d'audit complète", desc: "Historique immuable de toutes les actions : qui a fait quoi, quand et pourquoi." },
        { title: "Rapports personnalisés", desc: "Créez vos propres modèles de rapport et partagez-les avec votre direction." },
        { title: "Export multi-format", desc: "PDF, Excel, CSV — vos données toujours portables." },
        { title: "Conformité ISO 9001", desc: "Structure conçue pour satisfaire les exigences documentaires des référentiels qualité." },
      ],
      cta: "Démarrer l'essai gratuit",
    },
    ar: {
      badge: "التقارير والتدقيق",
      title: "مستعد للتدقيق في أي وقت",
      subtitle: "إمكانية تتبع كاملة، تقارير بنقرة واحدة.",
      desc: "كل أمر عمل وكل قطعة مستهلكة وكل ساعة فني مسجّلة وقابلة للتصدير. جهّز تدقيقاً ISO أو تدقيق عميل في دقائق.",
      benefits: [
        { title: "مسار تدقيق كامل", desc: "سجل دائم لجميع الإجراءات: من فعل ماذا، متى ولماذا." },
        { title: "تقارير مخصصة", desc: "أنشئ نماذج تقاريرك الخاصة وشاركها مع إدارتك." },
        { title: "تصدير متعدد الصيغ", desc: "PDF وExcel وCSV — بياناتك دائماً قابلة للنقل." },
        { title: "مطابقة ISO 9001", desc: "هيكل مصمم لاستيفاء المتطلبات الوثائقية لمراجع الجودة." },
      ],
      cta: "ابدأ التجربة المجانية",
    },
    en: {
      badge: "Reporting & Audit",
      title: "Always audit-ready",
      subtitle: "Full traceability, reports in one click.",
      desc: "Every work order, every part consumed, every technician hour is recorded and exportable. Prepare an ISO or client audit in minutes.",
      benefits: [
        { title: "Complete audit trail", desc: "Immutable history of all actions: who did what, when, and why." },
        { title: "Custom reports", desc: "Build your own report templates and share them with management." },
        { title: "Multi-format export", desc: "PDF, Excel, CSV — your data is always portable." },
        { title: "ISO 9001 compliance", desc: "Structure designed to satisfy documentary requirements of quality standards." },
      ],
      cta: "Start free trial",
    },
  },

  'roles': {
    fr: {
      badge: "Rôles & Permissions",
      title: "Le bon accès, pour la bonne personne",
      subtitle: "Contrôlez qui peut voir, créer ou approuver quoi.",
      desc: "Définissez des profils granulaires pour vos managers, techniciens et demandeurs. Chaque utilisateur accède uniquement aux données et actions qui le concernent.",
      benefits: [
        { title: "Rôles prédéfinis", desc: "Manager, Technicien, Demandeur — activez les rôles standards en un clic." },
        { title: "Permissions granulaires", desc: "Ajustez chaque permission : lire, créer, modifier, approuver, exporter." },
        { title: "Multi-sites", desc: "Limitez les accès d'un technicien à un site ou un atelier spécifique." },
        { title: "Journal d'activité", desc: "Toutes les actions des utilisateurs sont enregistrées pour assurer la traçabilité." },
      ],
      cta: "Démarrer l'essai gratuit",
    },
    ar: {
      badge: "الأدوار والصلاحيات",
      title: "الوصول المناسب للشخص المناسب",
      subtitle: "تحكم في من يمكنه رؤية أو إنشاء أو اعتماد ماذا.",
      desc: "حدّد ملفات تعريف دقيقة لمديريك وتقنييك وطالبي خدماتك. يصل كل مستخدم فقط إلى البيانات والإجراءات التي تخصه.",
      benefits: [
        { title: "أدوار محددة مسبقاً", desc: "مدير وفني وطالب — فعّل الأدوار المعيارية بنقرة واحدة." },
        { title: "صلاحيات دقيقة", desc: "اضبط كل صلاحية: القراءة والإنشاء والتعديل والاعتماد والتصدير." },
        { title: "متعدد المواقع", desc: "قيّد وصول الفني إلى موقع أو ورشة محددة." },
        { title: "سجل النشاط", desc: "جميع إجراءات المستخدمين مسجّلة لضمان التتبع الكامل." },
      ],
      cta: "ابدأ التجربة المجانية",
    },
    en: {
      badge: "Roles & Permissions",
      title: "The right access, for the right person",
      subtitle: "Control who can see, create, or approve what.",
      desc: "Define granular profiles for your managers, technicians, and requesters. Each user accesses only the data and actions relevant to them.",
      benefits: [
        { title: "Predefined roles", desc: "Manager, Technician, Requester — activate standard roles in one click." },
        { title: "Granular permissions", desc: "Adjust each permission: read, create, edit, approve, export." },
        { title: "Multi-site", desc: "Restrict a technician's access to a specific site or workshop." },
        { title: "Activity log", desc: "All user actions are logged to ensure full traceability." },
      ],
      cta: "Start free trial",
    },
  },
};
