import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Factory, 
  Zap, 
  TrendingUp, 
  Smartphone, 
  Users, 
  ShieldCheck, 
  X, 
  Languages, 
  MapPin, 
  Calculator,
  AlertTriangle,
  FileSearch,
  MessageSquare,
  Wrench,
  Calendar,
  Package
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  HeroDashboard,
  Donut,
  HorizontalBarRace,
  CompareBars,
  Gauge,
  StatRibbon,
  IndustryStackBar,
  RadialHub,
  AnimatedCounter,
  Sparkline,
  ChartFrame,
} from '../components/charts';
import { stats } from '../data/cmmsStats';

const translations = {
  fr: {
    hero: {
      badge: "Programme Pilote — Places limitées 🇲🇦",
      title: "GMAO professionnelle pour les PME industrielles marocaines",
      titleStatic: "La GMAO qui rend votre équipe",
      phrases: [
        "30 % plus productive.",
        "prête pour les audits.",
        "libre de l'Excel.",
        "opérationnelle en 30 min.",
        "soutenue depuis le Maroc.",
      ],
      titleAccent: "",
      desc: "Fini Excel et le papier — Gérez votre maintenance comme un leader mondial. Réduisez les arrêts de 30 à 40 % sans déploiement complexe ni budget entreprise.",
      ctaPrimary: "Rejoindre le Programme Pilote",
      ctaSecondary: "Réserver une démo",
      trust: "Programme pilote en cours · Sites industriels en test",
      trialInfo: "Sans carte bancaire · Déploiement rapide · Données exportables"
    },
    socialProof: {
      title: "Programme Pilote 2026",
      subtitle: "Actuellement en phase de test avec les premiers adopteurs au Maroc",
      stats: ["✓ Sites à Casablanca", "✓ Sites à Tanger", "✓ Sites à Kénitra"]
    },
    pains: {
      title: "Reconnaissez-vous ces problèmes ?",
      subtitle: "Les PME marocaines perdent typiquement 15 à 20 % de leur capacité de production à cause d'arrêts non planifiés.",
      items: [
        { title: "Chaos organisationnel", problem: "Bons papier perdus, WhatsApp, Excel...", consequence: "Impossible de savoir qui fait quoi. Perte d'efficacité quotidienne massive." },
        { title: "Arrêts coûteux", problem: "Panne surprise = machine arrêtée", consequence: "Recherche laborieuse de techniciens et de pièces pendant que la ligne est à l'arrêt." },
        { title: "Audits stressants", problem: "Reconstitution d'historique", consequence: "Des jours de préparation avant chaque audit ISO 9001 ou client pour tout justifier." },
        { title: "Barrière de la langue", problem: "Équipes déconnectées", consequence: "Vos techniciens parlent arabe, votre logiciel est en anglais. Ils retournent au papier." },
        { title: "Budget gaspillé", problem: "Réparations d'urgence", consequence: "Le correctif coûte 3 fois plus que le préventif. Vous payez cher l'imprévu." }
      ]
    },
    sol: {
      title: "L'avantage MAINTevo",
      subtitle: "Pourquoi les professionnels au Maroc nous choisissent",
      items: [
        { title: "Conçu pour le Maroc", text: "Support local qui comprend votre réalité (équipes 3×8, ruptures de pièces)." },
        { title: "Réellement trilingue", text: "Français, arabe et anglais pensés pour le terrain, pas une traduction automatique." },
        { title: "Mobile d'abord", text: "Fonctionne en atelier sans WiFi. Synchronisation automatique dès que possible." },
        { title: "Déploiement rapide", text: "Importez vos équipements depuis Excel et créez vos premiers BT en 30 minutes." }
      ]
    },
    features: {
      title: "Des modules au service de vos équipes",
      subtitle: "Des solutions concrètes à vos vrais problèmes.",
      f1: {
        badge: "Bons de travail",
        title: "Adieu les ",
        titleAccent: "bons de travail papier.",
        desc: "Problème : bons perdus, aucun suivi. Solution : créez, assignez et suivez chaque intervention depuis le mobile. Historique complet 24/7.",
        list: ["Photos avant/après", "Scan QR Code machine", "Notifications push"]
      },
      f2: {
        badge: "Maintenance préventive",
        title: "Passez du réactif au ",
        titleAccent: "proactif.",
        desc: "Problème : urgences permanentes. Solution : planification automatique par compteur ou calendrier. Alertes avant la panne.",
        list: ["Calendrier visuel de maintenance", "Checklists de maintenance", "Alertes automatiques"]
      },
      f3: {
        badge: "Gestion des stocks",
        title: "Zéro rupture sur les ",
        titleAccent: "pièces critiques.",
        desc: "Problème : arrêts prolongés faute de pièces. Solution : suivi du stock en temps réel et seuils d'alerte.",
        list: ["Inventaire mobile", "Alertes de réapprovisionnement", "Consommation par machine"]
      }
    },
    industries: {
      title: "Toutes les industries, une seule plateforme",
      items: [
        "🏭 Industrie & Transformation",
        "⚡ Énergie & Utilities",
        "🚗 Équipementiers Automobile",
        "🏥 Santé & Pharma",
        "🥖 Agroalimentaire",
        "🏗️ Facilities & Immobilier",
        "🔧 Services Industriels",
        "💧 Traitement de l'Eau"
      ]
    },
    pricing: {
      title: "Tarifs transparents — Aucune surprise",
      subtitle: "Des plans flexibles à partir de 390 MAD/mois/utilisateur (facturation annuelle). Conçus pour grandir avec votre entreprise, sans engagement caché.",
      plans: [
        { name: "Starter", price: "390", period: "/mois/utilisateur (annuel)", features: ["Jusqu'à 15 utilisateurs", "Bons de travail + App mobile", "Interface FR / AR", "Support par e-mail"] },
        { name: "Premium", price: "890", period: "/mois/utilisateur (annuel)", features: ["Utilisateurs illimités", "Maintenance préventive", "Gestion des stocks", "Support WhatsApp"] },
        { name: "Enterprise", price: "Sur devis", period: "", features: ["Tout Premium inclus", "Intégrations ERP (SAP, Sage)", "Multi-sites", "Formation sur site"] }
      ],
      trial: "💳 14 jours d'essai gratuit sur tous les plans — Sans engagement"
    },
    roi: {
      title: "Combien pouvez-vous économiser ?",
      subtitle: "Calculez le ROI concret avec MAINTevo.",
      metric: "Les GMAO réduisent typiquement les arrêts de 30 à 40 % selon les études industrielles.",
      cta: "Calculer mes économies"
    },
    tech: {
      title: "Sécurité & Fiabilité",
      subtitle: "Infrastructure de classe mondiale",
      items: [
        { title: "Hébergement sécurisé", text: "Données hébergées sur une infrastructure certifiée ISO 27001 en Europe." },
        { title: "Mode hors ligne", text: "L'application fonctionne sans internet, synchronisation automatique." },
        { title: "Sauvegardes quotidiennes", text: "Sauvegardes automatiques quotidiennes, données exportables à tout moment." }
      ]
    },
    integrations: {
       title: "Intégrations",
       subtitle: "API REST pour vous connecter à vos systèmes",
       desc: "Notre API permet l'intégration avec votre ERP (SAP, Sage, Odoo, Oracle), outils IoT et systèmes RH.",
       cta: "Documentation API"
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        { q: "Est-ce trop compliqué pour nos équipes ?", a: "Non. Si vos techniciens utilisent WhatsApp, ils sauront utiliser MAINTevo. Formation en moins d'1h." },
        { q: "Combien ça coûte réellement ?", a: "À partir de 390 MAD/mois/utilisateur (facturation annuelle). 14 jours d'essai gratuit pour tester sans risque." },
        { q: "Mes données sont-elles en sécurité ?", a: "Oui, hébergement aux standards européens, sauvegardes quotidiennes, et vous pouvez exporter vos données à tout moment." }
      ]
    },
    cta: {
      title: "Passez à la maintenance professionnelle",
      btnPrimary: "Démarrer l'essai gratuit",
      sub: "✓ Sans carte bancaire | ✓ Déploiement rapide | ✓ Données exportables",
      discuss: "Besoin d'aide ?",
      emailLabel: "E-mail :",
      email: "contact@maintevo.ma",
      location: "📍 Support basé à Casablanca, Maroc"
    },
    charts: {
      heroDash: {
        kpiOpenWO: "BT ouverts",
        kpiPreventiveDue: "Préventifs à faire",
        kpiStockLow: "Stock bas",
        kpiThisWeek: "BT clôturés cette semaine",
        gaugeLabel: "Taux à temps",
        statusLive: "En direct",
        weekdays: ["L", "M", "M", "J", "V", "S", "D"],
        chartTitle: "Aperçu du tableau de bord MAINTevo",
      },
      painsBannerTitle: "Les chiffres derrière vos pannes",
      painsBannerSub: "Données issues d'études CMMS internationales",
      solDonutTitle: "Où part votre budget maintenance aujourd'hui ?",
      solDonutCaption: "Sans GMAO, l'essentiel passe à réagir aux pannes — pas à les éviter.",
      solDonutAria: "Répartition du coût : maintenance réactive vs préventive",
      solDonutCenterValue: "3–4×",
      solDonutCenterLabel: "Surcoût du réactif",
      f1ChartTitle: "Délai moyen de clôture d'un bon de travail",
      f1ChartCaption: "Une GMAO digitale divise le temps de traitement par 5.",
      f1ChartAria: "Délai de clôture des BT, papier vs numérique",
      f1Unit: "j",
      f2ChartTitle: "Gains de fiabilité avec la maintenance préventive",
      f2ChartCaption: "Plus de temps entre les pannes, moins de temps pour les réparer.",
      f2GaugeLabel: "Couverture préventive",
      f2BeforeLabel: "Avant MAINTevo",
      f2AfterLabel: "Avec MAINTevo",
      f3ChartTitle: "Le coût caché d'un mauvais stock",
      f3ChartCaption: "Une GMAO réduit le surstock tout en évitant les ruptures.",
      ctaRoiTitle: "Les chiffres derrière la transition",
      ctaPaybackLabel: "Retour sur investissement moyen",
      ctaRoiLabel: "ROI sur 5 ans",
      ctaMonthsUnit: " mois",
      indStackTitle: "PIB industriel par secteur — Maroc",
      indStackCaption: "MAINTevo est conçu pour les secteurs qui font tourner l'industrie marocaine.",
      indStackAria: "PIB industriel marocain par secteur",
      intHubTitle: "Connectez MAINTevo à votre stack",
      intHubCaption: "Une API. Tous vos outils.",
      spSites: "Sites pilotes",
      spCities: "Villes",
      spLanguages: "Langues",
      spUptime: "Disponibilité plateforme",
    }
  },
  ar: {
    hero: {
      badge: "البرنامج التجريبي - أماكن محدودة 🇲🇦",
      title: "GMAO احترافي للمقاولات الصناعية المغربية",
      titleStatic: "نظام GMAO يجعل فريقكم",
      phrases: [
        "أكثر إنتاجية بـ 30٪.",
        "جاهزاً للتدقيق دائماً.",
        "حراً من فوضى الإكسيل.",
        "جاهزاً في 30 دقيقة.",
        "مدعوماً من المغرب.",
      ],
      titleAccent: "",
      desc: "وداعاً لـ Excel والورق — قم بتدبير صيانتك مثل الشركات الكبرى. خفض فترات التوقف بنسبة 30-40٪ بدون تعقيدات الأنظمة الكبرى.",
      ctaPrimary: "انضم للبرنامج التجريبي",
      ctaSecondary: "احجز عرضاً حياً",
      trust: "البرنامج التجريبي قيد التنفيذ · مواقع صناعية قيد الاختبار",
      trialInfo: "بدون بطاقة بنكية · تفعيل سريع · بيانات قابلة للتصدير"
    },
    socialProof: {
      title: "البرنامج التجريبي 2026",
      subtitle: "حالياً في مرحلة الاختبار مع مستخدمين أوائل في المغرب",
      stats: ["✓ مواقع في الدار البيضاء", "✓ مواقع في طنجة", "✓ مواقع في القنيطرة"]
    },
    pains: {
      title: "هل تواجه هذه المشاكل؟",
      subtitle: "تفقد المقاولات الصغرى والمتوسطة المغربية عادة 15-20٪ من قدرتها الإنتاجية بسبب الأعطال المفاجئة.",
      items: [
        { title: "فوضى تنظيمية", problem: "أوراق ضائعة، واتساب، إكسيل...", consequence: "من المستحيل معرفة من يفعل ماذا. فقدان كبير للفعالية يومياً." },
        { title: "توقفات مكلفة", problem: "عطل مفاجئ = آلة متوقفة", consequence: "البحث عن التقني والقطع بينما الإنتاج متوقف والطلبات تتراكم." },
        { title: "تدقيقات مرهقة", problem: "صعوبة بناء سجل الصيانة", consequence: "أيام من التحضير قبل كل تدقيق ISO 9001 أو تدقيق الزبناء لتبرير كل شيء." },
        { title: "عائق اللغة", problem: "صعوبات في التواصل التقني", consequence: "تقنيوك يتحدثون العربية، والبرنامج بالإنجليزية. النتيجة: العودة للورق." },
        { title: "ميزانية ضائعة", problem: "إصلاحات مستعجلة دائمة", consequence: "الإصلاح المستعجل يكلف 3 أضعاف الوقائي. تدفع ثمن المفاجآت غالياً." }
      ]
    },
    sol: {
      title: "مميزات MAINTevo",
      subtitle: "لماذا يختارنا المحترفون في المغرب",
      items: [
        { title: "مصمم للمغرب", text: "دعم محلي يفهم واقعكم (نظام 3x8، نقص القطع، ثقافة الورشة)." },
        { title: "ثلاثي اللغات حقيقي", text: "الفرنسية، العربية والإنجليزية مصممة للميدان، وليس مجرد ترجمة آلية." },
        { title: "الهاتف أولاً", text: "يعمل في الورشة بدون واي فاي. مزامنة تلقائية فور توفر الاتصال." },
        { title: "سريع التفعيل", text: "استورد معداتك من إكسيل وأنشئ أولى أوامر الصيانة في 30 دقيقة." }
      ]
    },
    features: {
      title: "وحدات في خدمة فرقكم",
      subtitle: "حلول ملموسة لمشاكلكم الحقيقية.",
      f1: {
        badge: "أوامر العمل",
        title: "وداعاً لـ ",
        titleAccent: "أوامر العمل الورقية.",
        desc: "المشكلة: ضياع الأوراق وغياب التتبع. الحل: أنشئ، عين وتتبع كل تدخل من الهاتف. سجل كامل 24/7.",
        list: ["صور قبل وبعد", "مسح رمز QR على الآلة", "إشعارات فورية"]
      },
      f2: {
        badge: "الصيانة الوقائية",
        title: "انتقل من رد الفعل إلى ",
        titleAccent: "الاستباق.",
        desc: "المشكلة: حالات مستعجلة دائمة. الحل: برمجة تلقائية حسب العدادات أو التقويم. تنبيهات قبل العطل.",
        list: ["تقويم صيانة مرئي", "قوائم تفقد الصيانة", "تنبيهات تلقائية"]
      },
      f3: {
        badge: "تدبير المخزون",
        title: "لا توقف بسبب ",
        titleAccent: "القطع الحيوية.",
        desc: "المشكلة: توقفات مطولة لنقص القطع. الحل: تتبع المخزون في الوقت الفعلي وتنبيهات مستويات الطلب.",
        list: ["جرد بالهاتف", "تنبيهات إعادة التموين", "الاستهلاك حسب الآلة"]
      }
    },
    industries: {
      title: "جميع الصناعات، منصة واحدة",
      items: [
        "🏭 التصنيع والتحويل",
        "⚡ الطاقة والمرافق",
        "🚗 السيارات والموردون",
        "🏥 الصحة والصيدلة",
        "🥖 الصناعات الغذائية",
        "🏗️ المرافق والعقارات",
        "🔧 الخدمات الصناعية",
        "💧 معالجة المياه"
      ]
    },
    pricing: {
      title: "تسعير شفاف — بدون مفاجآت",
      subtitle: "خطط مرنة تبدأ من 390 درهم/شهر/مستخدم (فوترة سنوية). مصممة لتنمو مع مقاولتكم.",
      plans: [
        { name: "Starter", price: "390", period: "/شهر/مستخدم (سنوي)", features: ["حتى 15 مستخدماً", "أوامر العمل + تطبيق الجوال", "واجهة FR / AR", "دعم عبر البريد"] },
        { name: "Premium", price: "890", period: "/شهر/مستخدم (سنوي)", features: ["مستخدمين غير محدودين", "صيانة وقائية", "إدارة المخزون", "دعم عبر واتساب"] },
        { name: "Enterprise", price: "عند الطلب", period: "", features: ["كل ميزات Premium +", "تكامل مع ERP (SAP، Sage)", "عدة مواقع", "تدريب ميداني"] }
      ],
      trial: "💳 تجربة مجانية 14 يوماً على جميع الخطط — بدون التزام"
    },
    roi: {
      title: "كم يمكنك أن توفر؟",
      subtitle: "احسب العائد على الاستثمار مع MAINTevo.",
      metric: "تخفض أنظمة GMAO عادةً أوقات التوقف بنسبة 30-40٪ حسب الدراسات الصناعية.",
      cta: "احسب وفوراتك في دقيقتين"
    },
    tech: {
      title: "الأمن والاعتمادية",
      subtitle: "بنية تحتية عالمية",
      items: [
        { title: "استضافة آمنة", text: "البيانات مستضافة على بنية تحتية معتمدة ISO 27001 في أوروبا." },
        { title: "نمط بدون إنترنت", text: "التطبيق يعمل بدون إنترنت مع مزامنة تلقائية لاحقة." },
        { title: "نسخ احتياطي يومي", text: "نسخ تلقائي يومي والبيانات قابلة للتصدير في أي وقت." }
      ]
    },
    integrations: {
       title: "التكاملات",
       subtitle: "API REST للربط مع أنظمتكم",
       desc: "تسمح واجهتنا البرمجية بالربط مع أنظمة ERP (مثل SAP و Odoo) وأجهزة IoT.",
       cta: "وثائق API"
    },
    faq: {
      title: "أسئلة شائعة",
      items: [
        { q: "هل هو معقد لفرقنا؟", a: "لا. إذا كان تقنيوك يستخدمون واتساب، فهم يعرفون استخدام MAINTevo. التدريب في أقل من ساعة." },
        { q: "كم يكلف حقاً؟", a: "ابتداءً من 390 درهم/شهر/مستخدم (فوترة سنوية). تجربة مجانية لـ 14 يوماً بدون مخاطرة." },
        { q: "هل بياناتي في أمان؟", a: "نعم، استضافة في أوروبا، نسخ احتياطي يومي ويمكنكم تصدير بياناتكم في أي وقت." }
      ]
    },
    cta: {
      title: "انتقل إلى الصيانة الاحترافية",
      btnPrimary: "بدء التجربة المجانية",
      sub: "✓ بدون بطاقة بنكية | ✓ تفعيل سريع | ✓ بيانات قابلة للتصدير",
      discuss: "تحتاج لمساعدة؟",
      emailLabel: "البريد الإلكتروني:",
      email: "contact@maintevo.ma",
      location: "📍 الدعم الفني مقره الدار البيضاء، المغرب"
    },
    charts: {
      heroDash: {
        kpiOpenWO: "أوامر مفتوحة",
        kpiPreventiveDue: "وقائيات مستحقة",
        kpiStockLow: "مخزون منخفض",
        kpiThisWeek: "أوامر مغلقة هذا الأسبوع",
        gaugeLabel: "نسبة الإنجاز في الوقت",
        statusLive: "مباشر",
        weekdays: ["إث", "ثل", "أر", "خم", "جم", "سب", "أح"],
        chartTitle: "نظرة على لوحة تحكم MAINTevo",
      },
      painsBannerTitle: "الأرقام وراء أعطالك",
      painsBannerSub: "بيانات من دراسات GMAO دولية",
      solDonutTitle: "أين يذهب ميزانية الصيانة لديك اليوم ؟",
      solDonutCaption: "بدون GMAO، يُصرف الجزء الأكبر على رد الفعل بدل تفادي الأعطال.",
      solDonutAria: "توزيع التكلفة : صيانة تصحيحية مقابل وقائية",
      solDonutCenterValue: "×3-4",
      solDonutCenterLabel: "الزيادة في تكلفة التصحيحية",
      f1ChartTitle: "متوسط وقت إغلاق أمر العمل",
      f1ChartCaption: "نظام GMAO رقمي يقسّم الوقت على 5.",
      f1ChartAria: "وقت إغلاق أوامر العمل، ورق مقابل رقمي",
      f1Unit: " ي",
      f2ChartTitle: "مكاسب الموثوقية مع الصيانة الوقائية",
      f2ChartCaption: "وقت أطول بين الأعطال، ووقت أقل لإصلاحها.",
      f2GaugeLabel: "تغطية وقائية",
      f2BeforeLabel: "قبل MAINTevo",
      f2AfterLabel: "مع MAINTevo",
      f3ChartTitle: "التكلفة الخفية لسوء المخزون",
      f3ChartCaption: "GMAO يقلّص فائض المخزون ويتجنّب النفاد.",
      ctaRoiTitle: "الأرقام وراء الانتقال",
      ctaPaybackLabel: "متوسط فترة استرداد الاستثمار",
      ctaRoiLabel: "العائد على 5 سنوات",
      ctaMonthsUnit: " شهر",
      indStackTitle: "الناتج الصناعي حسب القطاع — المغرب",
      indStackCaption: "MAINTevo مصمم للقطاعات التي تحرّك الصناعة المغربية.",
      indStackAria: "الناتج الصناعي المغربي حسب القطاع",
      intHubTitle: "اربط MAINTevo بمنظومتك",
      intHubCaption: "واجهة واحدة. كل أدواتك.",
      spSites: "مواقع تجريبية",
      spCities: "مدن",
      spLanguages: "لغات",
      spUptime: "توفر المنصة",
    }
  },
  en: {
    hero: {
      badge: "Pilot Program - Limited Spots 🇲🇦",
      title: "Professional CMMS for Moroccan Industrial SMEs",
      titleStatic: "The CMMS that makes your team",
      phrases: [
        "30% more productive.",
        "always audit-ready.",
        "free from Excel chaos.",
        "live in under 30 minutes.",
        "locally supported in Morocco.",
      ],
      titleAccent: "",
      desc: "No more Excel and paper — Manage your maintenance like a global leader. Reduce downtime by 30-40% without complex deployment or enterprise budgets.",
      ctaPrimary: "Join the Pilot Program",
      ctaSecondary: "Book a Demo",
      trust: "Pilot program in progress · Industrial sites in testing",
      trialInfo: "No credit card · Fast deployment · Exportable data"
    },
    socialProof: {
      title: "2026 Pilot Program",
      subtitle: "Currently in testing phase with early adopters in Morocco",
      stats: ["✓ Sites in Casablanca", "✓ Sites in Tangier", "✓ Sites in Kenitra"]
    },
    pains: {
      title: "Do you recognize these problems?",
      subtitle: "Moroccan SMEs typically lose 15-20% of their production capacity to unplanned breakdowns.",
      items: [
        { title: "Organizational Chaos", problem: "Lost paper orders, WhatsApp, Excel...", consequence: "Impossible to know who's doing what. Major daily efficiency loss." },
        { title: "Costly Downtime", problem: "Surprise breakdown = machine stopped", consequence: "Laborious search for technicians and parts while the line stalls." },
        { title: "Stressful Audits", problem: "History reconstruction", consequence: "Days of preparation before every ISO 9001 or client audit to justify everything." },
        { title: "Language Barrier", problem: "Disconnected teams", consequence: "Your techs speak Arabic, your software is in English. They go back to paper." },
        { title: "Wasted Budget", problem: "Emergency repairs", consequence: "Corrective costs 3x more than preventive. You pay the high price of the unexpected." }
      ]
    },
    sol: {
      title: "The MAINTevo Advantage",
      subtitle: "Why professionals in Morocco choose us",
      items: [
        { title: "Built for Morocco", text: "Local support that understands your reality (3x8 shifts, spare parts shortages)." },
        { title: "Truly Trilingual", text: "French, Arabic, and English thought out for the job, not just auto-translation." },
        { title: "Mobile-First", text: "Works in the workshop without WiFi. Auto-syncing as soon as possible." },
        { title: "Fast to Deploy", text: "Import equipment from Excel and create first orders in 30 minutes." }
      ]
    },
    features: {
      title: "Modules Serving Your Teams",
      subtitle: "Concrete solutions for your real problems.",
      f1: {
        badge: "Work Orders",
        title: "Say goodbye to ",
        titleAccent: "paper work orders.",
        desc: "Problem: Lost orders and no tracking. Solution: Create, assign and track every intervention from mobile. Full history 24/7.",
        list: ["Before/after photos", "QR Code machine scan", "Push notifications"]
      },
      f2: {
        badge: "Preventive Maintenance",
        title: "Switch from reactive to ",
        titleAccent: "proactive.",
        desc: "Problem: Constant emergencies. Solution: Automatic scheduling by counters or calendar. Alerts before the breakdown.",
        list: ["Visual maintenance calendar", "Maintenance checklists", "Automatic alerts"]
      },
      f3: {
        badge: "Stock Management",
        title: "Zero stockouts on ",
        titleAccent: "critical parts.",
        desc: "Problem: Stoppages extended by lack of parts. Solution: Real-time stock tracking and alert thresholds.",
        list: ["Mobile inventory", "Restock alerts", "Consumption by machine"]
      }
    },
    industries: {
      title: "All industries, one platform",
      items: [
        "🏭 Manufacturing & Transformation",
        "⚡ Energy & Utilities",
        "🚗 Automotive Suppliers",
        "🏥 Health & Pharma",
        "🥖 Food & Beverage",
        "🏗️ Facilities & Real Estate",
        "🔧 Industrial Services",
        "💧 Water Treatment"
      ]
    },
    pricing: {
      title: "Transparent Pricing — No Surprises",
      subtitle: "Flexible plans designed to grow with your business",
      plans: [
        { name: "Starter", price: "990", period: "/mo", features: ["Up to 50 assets", "3 users", "Mobile + Web", "Email Support"] },
        { name: "Professional", price: "2,490", period: "/mo", features: ["Unlimited assets", "Unlimited users", "Preventive maintenance", "WhatsApp Support"] },
        { name: "Enterprise", price: "On Quote", period: "", features: ["All Professional +", "ERP Integrations", "Multi-site", "On-site training"] }
      ],
      trial: "💳 30-day free trial on all plans — No commitment"
    },
    roi: {
      title: "How Much Can You Save?",
      subtitle: "Calculate the concrete ROI with MAINTevo.",
      metric: "CMMS typically reduce downtime by 30-40% according to industrial studies.",
      cta: "Simulate Your Savings in 2 Minutes"
    },
    tech: {
      title: "Security & Reliability",
      subtitle: "World-class Infrastructure",
      items: [
        { title: "Secure Hosting", text: "Data hosted on ISO 27001 certified infrastructure in Europe." },
        { title: "Offline Mode", text: "The app works without internet, automatic synchronization." },
        { title: "Daily Backups", text: "Automatic daily backups, data exportable at any time." }
      ]
    },
    integrations: {
       title: "Integrations",
       subtitle: "REST API to connect with your systems",
       desc: "Our API allows integration with your ERP (SAP, Sage, Odoo, Oracle), IoT tools and HR systems.",
       cta: "API Documentation"
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Is it too complicated for our teams?", a: "No. If your techs use WhatsApp, they know how to use MAINTevo. Training in < 1h." },
        { q: "How much does it really cost?", a: "From 390 MAD/month/user (annual billing). 14-day free trial to test without risk." },
        { q: "Is my data secure?", a: "Yes, European standard hosting, daily backups, and you can export your data anytime." }
      ]
    },
    cta: {
      title: "Switch to Professional Maintenance",
      btnPrimary: "Start Free Trial",
      sub: "✓ No credit card | ✓ Fast deployment | ✓ Exportable data",
      discuss: "Need help?",
      emailLabel: "Email:",
      email: "contact@maintevo.ma",
      location: "📍 Support based in Casablanca, Morocco"
    },
    charts: {
      heroDash: {
        kpiOpenWO: "Open WOs",
        kpiPreventiveDue: "Preventive due",
        kpiStockLow: "Low stock",
        kpiThisWeek: "WOs closed this week",
        gaugeLabel: "On-time rate",
        statusLive: "Live",
        weekdays: ["M", "T", "W", "T", "F", "S", "S"],
        chartTitle: "MAINTevo dashboard preview",
      },
      painsBannerTitle: "The numbers behind your downtime",
      painsBannerSub: "Data from international CMMS research",
      solDonutTitle: "Where your maintenance budget goes today",
      solDonutCaption: "Without a CMMS, most of your budget is spent reacting — not preventing.",
      solDonutAria: "Maintenance cost split: reactive vs preventive",
      solDonutCenterValue: "3–4×",
      solDonutCenterLabel: "Reactive cost premium",
      f1ChartTitle: "Average work-order closure time",
      f1ChartCaption: "Digital CMMS cuts WO turnaround time by ~80%.",
      f1ChartAria: "Work order closure time, paper vs digital",
      f1Unit: "d",
      f2ChartTitle: "Reliability gains from preventive scheduling",
      f2ChartCaption: "More time between failures, less time fixing them.",
      f2GaugeLabel: "Preventive coverage",
      f2BeforeLabel: "Before MAINTevo",
      f2AfterLabel: "With MAINTevo",
      f3ChartTitle: "The hidden cost of poor inventory",
      f3ChartCaption: "A CMMS reduces overstock while preventing stockouts.",
      ctaRoiTitle: "The numbers behind switching",
      ctaPaybackLabel: "Average CMMS payback",
      ctaRoiLabel: "5-year ROI",
      ctaMonthsUnit: " mo",
      indStackTitle: "Industrial GDP per sector — Morocco",
      indStackCaption: "MAINTevo is built for the sectors that drive Moroccan industry.",
      indStackAria: "Moroccan industrial GDP by sector",
      intHubTitle: "Connect MAINTevo to your stack",
      intHubCaption: "One API. All your tools.",
      spSites: "Pilot sites",
      spCities: "Cities",
      spLanguages: "Languages",
      spUptime: "Platform uptime",
    }
  }
};

export default function Home() {
  const scrollAnim = useScrollAnimation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  // Typewriter state
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset when language changes
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setPhraseIdx(0);
    setDisplayed('');
    setDeleting(false);
  }, [language]);

  // Typewriter loop
  useEffect(() => {
    const phrases = t.hero.phrases;
    const phrase = phrases[phraseIdx];

    const schedule = (fn: () => void, ms: number) => {
      timerRef.current = setTimeout(fn, ms);
    };

    if (!deleting) {
      if (displayed.length < phrase.length) {
        schedule(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 65);
      } else {
        schedule(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        schedule(() => setDisplayed(phrase.slice(0, displayed.length - 1)), 32);
      } else {
        setDeleting(false);
        setPhraseIdx(i => (i + 1) % phrases.length);
      }
    }

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [displayed, deleting, phraseIdx, t.hero.phrases]);

  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%', maxWidth: '900px',
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, background: 'rgba(25, 118, 210, 0.1)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
              <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                <Play size={64} color="var(--color-primary)" />
                <p style={{ color: '#FFF', fontSize: '1.25rem', fontWeight: 600 }}>MAINTevo demo in preparation</p>
                <p style={{ color: 'var(--color-muted)' }}>Coming soon for 2026 launch</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="section" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(25, 118, 210, 0.15), var(--color-bg))',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }} className="hero-top">
                <Badge variant="outline" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                  {t.hero.badge}
                </Badge>
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.2, marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                {t.hero.titleStatic}
                <br />
                <span style={{ color: 'var(--color-primary)' }}>
                  {displayed}
                  <span className="typewriter-cursor" aria-hidden="true" />
                </span>
              </h1>
              
              <p style={{ fontSize: '1.25rem', color: 'var(--color-muted)', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '600px' }}>
                {t.hero.desc}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }} className="hero-buttons">
                <Button size="lg" asLink to="/demo" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                  {t.hero.ctaPrimary} <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                </Button>
                <Button variant="secondary" size="lg" onClick={() => setIsVideoOpen(true)} style={{ background: 'transparent', border: '1px solid var(--color-border)' }}>
                  {t.hero.ctaSecondary} <Play size={20} style={{ marginLeft: '0.5rem' }} />
                </Button>
              </div>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', marginBottom: '3rem' }}>
                {t.hero.trialInfo}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="trust-signal">
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                    <MapPin size={16} color="var(--color-primary)" />
                    <span>{t.hero.trust}</span>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-visual"
              style={{ position: 'relative' }}
            >
              <HeroDashboard labels={t.charts.heroDash} dir={language === 'ar' ? 'rtl' : 'ltr'} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof (Honest Pilot Phase) */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {t.socialProof.title}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            maxWidth: 900, margin: '0 auto',
          }}>
            {[
              { value: 3, suffix: '', label: t.charts.spSites, spark: [1, 1, 2, 2, 3, 3, 3] },
              { value: 3, suffix: '', label: t.charts.spCities, spark: [1, 1, 2, 2, 2, 3, 3] },
              { value: 3, suffix: '', label: t.charts.spLanguages, spark: [1, 2, 2, 3, 3, 3, 3] },
              { value: 99.9, suffix: '%', label: t.charts.spUptime, spark: [99.7, 99.8, 99.8, 99.9, 99.9, 99.9, 99.9], decimals: 1 },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '1.25rem 1rem',
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: 12,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
              }}>
                <AnimatedCounter
                  value={s.value} suffix={s.suffix} decimals={(s as any).decimals ?? 0}
                  style={{ fontSize: '1.9rem', color: 'var(--color-primary)' }}
                />
                <span style={{ fontSize: '0.72rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                  {s.label}
                </span>
                <Sparkline points={s.spark} color="var(--color-primary)" width={100} height={28} />
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginTop: '1.5rem' }}>
            {t.socialProof.subtitle}
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <SectionHeader 
            centered 
            title={t.pains.title} 
            subtitle={t.pains.subtitle}
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            {t.pains.items.map((item, i) => {
              const painStat = [
                stats.preventableDowntime,
                stats.downtimeHourlyCost,
                stats.assetIdentification,
                stats.excelTimeLost,
                stats.preventiveSavings,
              ][i];
              const accentColors = ['var(--color-primary)', '#EF4444', 'var(--color-primary)', 'var(--color-primary)', '#10B981'];
              return (
                <motion.div
                  key={i}
                  style={{ background: 'var(--color-surface)', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}
                  whileHover={{ y: -5, borderColor: 'var(--color-primary)' }}
                >
                  <div style={{ marginBottom: '1.5rem' }}>
                    {i === 0 && <Users size={32} color="var(--color-primary)" />}
                    {i === 1 && <AlertTriangle size={32} color="#EF4444" />}
                    {i === 2 && <FileSearch size={32} color="var(--color-primary)" />}
                    {i === 3 && <Languages size={32} color="var(--color-primary)" />}
                    {i === 4 && <Zap size={32} color="#10B981" />}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-text)', fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{item.problem}</p>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.25rem', flex: 1 }}>{item.consequence}</p>
                  {painStat && (
                    <StatRibbon
                      value={painStat.value}
                      suffix={painStat.unit ?? ''}
                      label={painStat.label[language as 'fr'|'ar'|'en']}
                      source={painStat.source}
                      decimals={painStat.value % 1 !== 0 ? 1 : 0}
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                      accent={accentColors[i]}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The MAINTevo Advantage */}
      <section className="section" style={{ background: 'var(--color-surface-2)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeader 
            centered 
            title={t.sol.title} 
            subtitle={t.sol.subtitle}
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
             {t.sol.items.map((diff, i) => (
                <div key={i} style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    {i === 0 && <MapPin color="var(--color-primary)" />}
                    {i === 1 && <Languages color="var(--color-primary)" />}
                    {i === 2 && <Smartphone color="var(--color-primary)" />}
                    {i === 3 && <Zap color="var(--color-primary)" />}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                      {i === 0 && (language === 'ar' ? '🇲🇦 ' : '🇲🇦 ')}
                      {i === 1 && (language === 'ar' ? '💬 ' : '💬 ')}
                      {i === 2 && (language === 'ar' ? '📱 ' : '📱 ')}
                      {i === 3 && (language === 'ar' ? '⚡ ' : '⚡ ')}
                      {diff.title}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--color-muted)', lineHeight: 1.6 }}>{diff.text}</p>
                </div>
             ))}
          </div>

          {/* Donut: where maintenance budget goes today (research-backed) */}
          <div style={{ marginTop: '5rem', maxWidth: 480, marginInline: 'auto' }}>
            <ChartFrame
              title={t.charts.solDonutTitle}
              caption={t.charts.solDonutCaption}
              source={stats.reactiveCostShare.source}
              ariaLabel={t.charts.solDonutAria}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              <Donut
                segments={[
                  { value: stats.reactiveCostShare.value, label: stats.reactiveCostShare.label[language as 'fr'|'ar'|'en'], color: '#EF4444' },
                  { value: stats.preventiveCostShare.value, label: stats.preventiveCostShare.label[language as 'fr'|'ar'|'en'], color: 'var(--color-primary)' },
                ]}
                size={220}
                centerValue={t.charts.solDonutCenterValue}
                centerLabel={t.charts.solDonutCenterLabel}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </ChartFrame>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
             <Button asLink to="/about" variant="outline">{language === 'ar' ? 'اكتشف قصتنا' : 'Learn about our mission'}</Button>
          </div>
        </div>
      </section>

      {/* Features Section (Teaser) */}
      <section className="section" id="features">
        <div className="container">
          <SectionHeader 
            centered 
            title={t.features.title} 
            subtitle={t.features.subtitle}
          />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', marginTop: '5rem' }}>
             {[t.features.f1, t.features.f2, t.features.f3].map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr', gap: '4rem', alignItems: 'center' }} className="feature-row">
                   {i % 2 !== 0 && (
                      <div className="feature-visual">
                         <FeatureChart index={i} t={t} dir={language === 'ar' ? 'rtl' : 'ltr'} />
                      </div>
                   )}
                   <div style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
                      <Badge className="mb-4">{f.badge}</Badge>
                      <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                         {f.title} <span style={{ color: 'var(--color-primary)' }}>{f.titleAccent}</span>
                      </h3>
                      <p style={{ color: 'var(--color-muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>{f.desc}</p>
                      <ul style={{ display: 'grid', gap: '1rem', marginBottom: '2.5rem' }}>
                         {f.list.map((item, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                               <CheckCircle2 size={20} color="var(--color-primary)" />
                               <span>{item}</span>
                            </li>
                         ))}
                      </ul>
                      <Link to="/features" style={{ color: 'var(--color-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                         {language === 'ar' ? 'اكتشف المزيد' : 'Learn more'} <ArrowRight size={16} />
                      </Link>
                   </div>
                   {i % 2 === 0 && (
                      <div className="feature-visual">
                         <FeatureChart index={i} t={t} dir={language === 'ar' ? 'rtl' : 'ltr'} />
                      </div>
                   )}
                </div>
             ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '6rem' }}>
             <Button asLink to="/features" variant="outline" size="lg">{language === 'ar' ? 'عرض جميع الميزات' : 'See All Features'}</Button>
          </div>
        </div>
        <style>{`
           @media (max-width: 900px) {
              .feature-row { grid-template-columns: 1fr !important; gap: 3rem !important; text-align: center !important; }
              .feature-visual { order: 2; }
           }
        `}</style>
      </section>

      {/* Security & Infrastructure Section */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
         <div className="container">
           <SectionHeader centered title={t.tech.title} subtitle={t.tech.subtitle} />
           <div className="glass-card" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
              <div style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {t.tech.items.map((item, i) => (
                       <div key={i}>
                          <h4 style={{ fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                             {i === 0 && <ShieldCheck size={20} color="var(--color-primary)" />}
                             {i === 1 && <Smartphone size={20} color="var(--color-primary)" />}
                             {i === 2 && <TrendingUp size={20} color="var(--color-primary)" />}
                             {item.title}
                          </h4>
                          <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>{item.text}</p>
                       </div>
                    ))}
                 </div>
                 <div style={{ marginTop: '3rem' }}>
                    <Button asLink to="/security" variant="outline">
                       {language === 'ar' ? 'سياسة الأمن' : 'Learn more about security'}
                    </Button>
                 </div>
              </div>
              <div style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{t.integrations.title}</h4>
                  <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '0.95rem' }}>{t.integrations.desc}</p>
                  <RadialHub
                    centerLabel="MAINTevo"
                    nodes={[
                      { label: 'SAP' },
                      { label: 'Sage' },
                      { label: 'Odoo' },
                      { label: 'IoT' },
                    ]}
                    size={280}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                  <div style={{ marginTop: '1.5rem' }}>
                    <Button asLink to="/integrations" variant="outline" size="sm">
                       {t.integrations.cta}
                    </Button>
                  </div>
              </div>
           </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
         <div className="container" style={{ maxWidth: '800px' }}>
            <SectionHeader centered title={t.faq.title} />
            <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: language === 'ar' ? 'right' : 'left' }}>
               {t.faq.items.map((faq, i) => (
                  <div key={i} className="glass-card" style={{ padding: '1.5rem' }}>
                     <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{faq.q}</h4>
                     <p style={{ color: 'var(--color-muted)', lineHeight: 1.6 }}>{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-primary-glow) 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div {...scrollAnim}>
             <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem' }}>{t.cta.title}</h2>

             <CtaRoiStrip t={t} dir={language === 'ar' ? 'rtl' : 'ltr'} />

             <div style={{ background: 'var(--color-surface)', padding: '3.5rem 2.5rem', borderRadius: '32px', border: '1px solid var(--color-primary)', boxShadow: '0 20px 50px rgba(25, 118, 210, 0.2)' }}>
                <Button size="lg" asLink to="/demo" style={{ padding: '1.25rem 3.5rem', fontSize: '1.25rem', marginBottom: '1.5rem' }}>{t.cta.btnPrimary} </Button>
                <p style={{ fontSize: '1rem', color: 'var(--color-muted)', marginBottom: '2.5rem' }}>{t.cta.sub}</p>
                
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
                   <div style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
                     <p style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.25rem' }}>{t.cta.discuss}</p>
                     <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.1rem' }}>{t.cta.emailLabel} {t.cta.email}</p>
                   </div>
                   <div style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
                     <p style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.25rem' }}>{language === 'ar' ? 'الموقع:' : 'Location:'}</p>
                     <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.1rem' }}>{t.cta.location}</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Industries — Moroccan industrial GDP per sector (research-backed) */}
      <section style={{ padding: '3.5rem 0', background: 'var(--color-surface-2)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <ChartFrame
            title={t.charts.indStackTitle}
            caption={t.charts.indStackCaption}
            source={stats.moroccoMfgGdp.source}
            ariaLabel={t.charts.indStackAria}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <IndustryStackBar
              segments={[
                { label: stats.moroccoMfgGdp.label[language as 'fr'|'ar'|'en'],    pct: stats.moroccoMfgGdp.value,    color: 'var(--color-primary)' },
                { label: stats.moroccoEnergyGdp.label[language as 'fr'|'ar'|'en'], pct: stats.moroccoEnergyGdp.value, color: '#F59E0B' },
                { label: stats.moroccoFoodGdp.label[language as 'fr'|'ar'|'en'],   pct: stats.moroccoFoodGdp.value,   color: '#10B981' },
                { label: stats.moroccoAutoGdp.label[language as 'fr'|'ar'|'en'],   pct: stats.moroccoAutoGdp.value,   color: '#8B5CF6' },
                { label: stats.moroccoHealthGdp.label[language as 'fr'|'ar'|'en'], pct: stats.moroccoHealthGdp.value, color: '#EF4444' },
              ]}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            />
          </ChartFrame>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Button asLink to="/industries" variant="outline" size="sm">
              {language === 'ar' ? 'استكشف القطاعات' : language === 'fr' ? 'Explorer les secteurs' : 'Explore industries'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------
// Section visual helpers (charts in their own component for readability)
// ---------------------------------------------------------------

function FeatureChart({ index, t, dir }: { index: number; t: any; dir: 'ltr' | 'rtl' }) {
  if (index === 0) {
    // F1 — Work Orders: paper vs digital WO closure time
    return (
      <ChartFrame
        title={t.charts.f1ChartTitle}
        caption={t.charts.f1ChartCaption}
        source={`${stats.woClosurePaper.source}`}
        ariaLabel={t.charts.f1ChartAria}
        dir={dir}
      >
        <HorizontalBarRace
          bars={[
            { label: stats.woClosurePaper.label[dir === 'rtl' ? 'ar' : 'en'], value: stats.woClosurePaper.value, color: 'var(--color-muted)' },
            { label: stats.woClosureDigital.label[dir === 'rtl' ? 'ar' : 'en'], value: stats.woClosureDigital.value, color: 'var(--color-primary)', highlight: true },
          ]}
          unit={t.charts.f1Unit}
          decimals={1}
          dir={dir}
        />
      </ChartFrame>
    );
  }
  if (index === 1) {
    // F2 — Preventive: gauge + before/after MTBF & MTTR
    return (
      <ChartFrame
        title={t.charts.f2ChartTitle}
        caption={t.charts.f2ChartCaption}
        source={`${stats.mtbfGain.source} / ${stats.mttrReduction.source}`}
        ariaLabel={t.charts.f2ChartTitle}
        dir={dir}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '1.5rem', alignItems: 'center' }}>
          <Gauge value={62} max={100} label={t.charts.f2GaugeLabel} unit="%" size={140} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <CompareBars
              before={{ label: `MTBF · ${t.charts.f2BeforeLabel}`, value: 100 }}
              after={{ label: `MTBF · ${t.charts.f2AfterLabel}`, value: 100 + stats.mtbfGain.value }}
              unit=""
              dir={dir}
              betterIsHigher
            />
            <CompareBars
              before={{ label: `MTTR · ${t.charts.f2BeforeLabel}`, value: 100 }}
              after={{ label: `MTTR · ${t.charts.f2AfterLabel}`, value: 100 - stats.mttrReduction.value }}
              unit=""
              dir={dir}
              betterIsHigher={false}
            />
          </div>
        </div>
      </ChartFrame>
    );
  }
  // F3 — Stocks: overstock + stockout loss
  return (
    <ChartFrame
      title={t.charts.f3ChartTitle}
      caption={t.charts.f3ChartCaption}
      source={stats.inventoryOverstock.source}
      ariaLabel={t.charts.f3ChartTitle}
      dir={dir}
    >
      <HorizontalBarRace
        bars={[
          { label: stats.inventoryOverstock.label[dir === 'rtl' ? 'ar' : 'en'], value: stats.inventoryOverstock.value, color: '#F59E0B' },
          { label: stats.stockoutProductionLoss.label[dir === 'rtl' ? 'ar' : 'en'], value: stats.stockoutProductionLoss.value, color: '#EF4444' },
        ]}
        unit="%"
        max={30}
        dir={dir}
      />
    </ChartFrame>
  );
}

// CTA ROI strip — two big numbers, one source
export function CtaRoiStrip({ t, dir }: { t: any; dir: 'ltr' | 'rtl' }) {
  return (
    <div
      dir={dir}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        padding: '1.75rem 1.5rem',
        margin: '2rem auto 2rem auto',
        maxWidth: 720,
        background: 'linear-gradient(135deg, var(--color-surface), var(--color-surface-2))',
        border: '1px solid var(--color-primary)',
        borderRadius: 16,
        boxShadow: '0 0 40px var(--color-primary-glow)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: 'var(--color-text)' }}>
          <AnimatedCounter value={stats.cmmsPayback.value} suffix={t.charts.ctaMonthsUnit} decimals={1}
            style={{ fontSize: '2.4rem' }} />
        </div>
        <div style={{ color: 'var(--color-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>
          {t.charts.ctaPaybackLabel}
        </div>
        <div style={{ color: 'var(--color-muted)', fontSize: '0.65rem', marginTop: '0.3rem', fontFamily: 'var(--font-mono)' }}>
          {dir === 'rtl' ? `المصدر: ${stats.cmmsPayback.source}` : `Source: ${stats.cmmsPayback.source}`}
        </div>
      </div>
      <div style={{ textAlign: 'center', borderInlineStart: '1px solid var(--color-border)', paddingInlineStart: '1.5rem' }}>
        <div style={{ color: 'var(--color-primary)' }}>
          <AnimatedCounter value={stats.cmmsRoi5y.value} suffix="%"
            style={{ fontSize: '2.4rem' }} />
        </div>
        <div style={{ color: 'var(--color-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>
          {t.charts.ctaRoiLabel}
        </div>
        <div style={{ color: 'var(--color-muted)', fontSize: '0.65rem', marginTop: '0.3rem', fontFamily: 'var(--font-mono)' }}>
          {dir === 'rtl' ? `المصدر: ${stats.cmmsRoi5y.source}` : `Source: ${stats.cmmsRoi5y.source}`}
        </div>
      </div>
    </div>
  );
}
