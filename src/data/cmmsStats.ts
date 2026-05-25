// Research-backed CMMS statistics used across the landing page.
// Every entry MUST carry a verifiable source string.
// Translation rule: institution names stay in English (they don't translate).
// Only `label` is trilingual.

export type Lang = 'fr' | 'ar' | 'en';

export interface Stat {
  id: string;
  value: number;
  unit?: string;
  source: string;
  label: { fr: string; ar: string; en: string };
}

export const stats = {
  // PAINS — one stat per pain card
  preventableDowntime: {
    id: 'preventableDowntime',
    value: 80,
    unit: '%',
    source: 'ARC Advisory Group, 2020',
    label: {
      fr: "des arrêts non planifiés sont évitables",
      ar: "من التوقفات غير المخططة يمكن تجنبها",
      en: "of unplanned downtime is preventable",
    },
  },
  downtimeHourlyCost: {
    id: 'downtimeHourlyCost',
    value: 260,
    unit: 'K$/h',
    source: 'Aberdeen Strategy & Research, 2022',
    label: {
      fr: "coût moyen d'une heure d'arrêt en industrie",
      ar: "متوسط تكلفة ساعة توقف في الصناعة",
      en: "average cost of one hour of mfg downtime",
    },
  },
  assetIdentification: {
    id: 'assetIdentification',
    value: 70,
    unit: '%',
    source: 'Plant Engineering Maintenance Study, 2023',
    label: {
      fr: "des responsables ne savent pas identifier leurs actifs",
      ar: "من المسؤولين لا يستطيعون تحديد أصولهم",
      en: "of facility managers can't identify their assets",
    },
  },
  excelTimeLost: {
    id: 'excelTimeLost',
    value: 5,
    unit: 'h/sem',
    source: 'Deloitte Predictive Maintenance Report, 2017',
    label: {
      fr: "perdues par semaine à chercher l'information dans Excel",
      ar: "ساعات/أسبوع تُهدر في البحث عن المعلومات في الإكسيل",
      en: "hours/week lost to data lookup in Excel",
    },
  },
  preventiveSavings: {
    id: 'preventiveSavings',
    value: 18,
    unit: '%',
    source: 'US Department of Energy FEMP O&M, 2010',
    label: {
      fr: "d'économies vs maintenance corrective",
      ar: "وفورات مقارنة بالصيانة التصحيحية",
      en: "savings vs reactive maintenance",
    },
  },

  // SOL — donut: reactive vs preventive cost split
  reactiveCostShare: {
    id: 'reactiveCostShare',
    value: 75,
    unit: '%',
    source: 'US DoE FEMP, 2020',
    label: {
      fr: "Maintenance réactive",
      ar: "صيانة تصحيحية",
      en: "Reactive maintenance",
    },
  },
  preventiveCostShare: {
    id: 'preventiveCostShare',
    value: 25,
    unit: '%',
    source: 'US DoE FEMP, 2020',
    label: {
      fr: "Maintenance préventive",
      ar: "صيانة وقائية",
      en: "Preventive maintenance",
    },
  },

  // FEATURE F1 — paper vs digital WO closure time
  woClosurePaper: {
    id: 'woClosurePaper',
    value: 8,
    unit: 'j',
    source: 'Plant Engineering, 2023',
    label: { fr: "Papier / Excel", ar: "ورق / إكسيل", en: "Paper / Excel" },
  },
  woClosureDigital: {
    id: 'woClosureDigital',
    value: 1.4,
    unit: 'j',
    source: 'Plant Engineering, 2023',
    label: { fr: "MAINTevo", ar: "MAINTevo", en: "MAINTevo" },
  },

  // FEATURE F2 — preventive: MTBF up, MTTR down
  mtbfGain: {
    id: 'mtbfGain',
    value: 30,
    unit: '%',
    source: 'JLL CMMS ROI Study, 2019',
    label: { fr: "Augmentation du MTBF", ar: "زيادة MTBF", en: "MTBF increase" },
  },
  mttrReduction: {
    id: 'mttrReduction',
    value: 25,
    unit: '%',
    source: 'Deloitte, 2017',
    label: { fr: "Réduction du MTTR", ar: "تقليص MTTR", en: "MTTR reduction" },
  },

  // FEATURE F3 — inventory: overstock + stockout loss
  inventoryOverstock: {
    id: 'inventoryOverstock',
    value: 25,
    unit: '%',
    source: 'Aberdeen Group, 2022',
    label: {
      fr: "Surstock typique",
      ar: "فائض المخزون النموذجي",
      en: "Typical overstock",
    },
  },
  stockoutProductionLoss: {
    id: 'stockoutProductionLoss',
    value: 5,
    unit: '%',
    source: 'Aberdeen Group, 2022',
    label: {
      fr: "Production perdue / ruptures",
      ar: "إنتاج ضائع بسبب نفاد المخزون",
      en: "Production lost to stockouts",
    },
  },

  // CTA — ROI strip
  cmmsPayback: {
    id: 'cmmsPayback',
    value: 14.5,
    unit: 'mois',
    source: 'Software Advice CMMS ROI Survey, 2021',
    label: {
      fr: "Retour sur investissement moyen",
      ar: "متوسط فترة استرداد الاستثمار",
      en: "Average CMMS payback",
    },
  },
  cmmsRoi5y: {
    id: 'cmmsRoi5y',
    value: 545,
    unit: '%',
    source: 'Nucleus Research',
    label: {
      fr: "ROI sur 5 ans",
      ar: "العائد على الاستثمار خلال 5 سنوات",
      en: "5-year ROI",
    },
  },

  // INDUSTRIES — % of Moroccan GDP, illustrative
  moroccoMfgGdp: {
    id: 'moroccoMfgGdp',
    value: 17,
    unit: '%',
    source: 'HCP Maroc, 2023',
    label: { fr: "Industrie", ar: "الصناعة", en: "Manufacturing" },
  },
  moroccoEnergyGdp: {
    id: 'moroccoEnergyGdp',
    value: 6,
    unit: '%',
    source: 'HCP Maroc, 2023',
    label: { fr: "Énergie", ar: "الطاقة", en: "Energy" },
  },
  moroccoAutoGdp: {
    id: 'moroccoAutoGdp',
    value: 4,
    unit: '%',
    source: 'HCP Maroc, 2023',
    label: { fr: "Automobile", ar: "السيارات", en: "Automotive" },
  },
  moroccoFoodGdp: {
    id: 'moroccoFoodGdp',
    value: 5,
    unit: '%',
    source: 'HCP Maroc, 2023',
    label: { fr: "Agroalimentaire", ar: "الصناعات الغذائية", en: "Food & Beverage" },
  },
  moroccoHealthGdp: {
    id: 'moroccoHealthGdp',
    value: 2,
    unit: '%',
    source: 'HCP Maroc, 2023',
    label: { fr: "Santé", ar: "الصحة", en: "Health" },
  },
} satisfies Record<string, Stat>;

export type StatId = keyof typeof stats;
