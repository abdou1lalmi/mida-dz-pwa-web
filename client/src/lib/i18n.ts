/**
 * MIDA DZ — Saffron Field Notes localization system.
 * UI language is lightweight, local-first, and preserves the editorial recipe voice.
 */
import type { Recipe } from "@/data/recipes";

export type Language = "en" | "fr" | "ar";

export type UiCopy = {
  nav: { home: string; discover: string; saved: string; profile: string };
  languageName: string;
  languageLabel: string;
  kitchenNotes: string;
  kitchenOpen: string;
  date: string;
  homeLead: string;
  homeAccent: string;
  explore: string;
  fieldRecipe: string;
  fromAlgiers: string;
  archiveNote: string;
  archiveCopy: string;
  gathered: string;
  geography: string;
  cookBy: string;
  regions: string;
  familiarTable: string;
  madeFor: string;
  week: string;
  viewAll: string;
  kitchenNote: string;
  sauceLead: string;
  sauceAccent: string;
  sauceCopy: string;
  makeChorba: string;
  findRecipe: string;
  cravingLead: string;
  cravingAccent: string;
  searchPlaceholder: string;
  searchAria: string;
  filters: string;
  course: string;
  place: string;
  notesFromKitchen: string;
  clearSelection: string;
  nothing: string;
  tryAnother: string;
  yourNotes: string;
  savedLead: string;
  savedAccent: string;
  heldClose: string;
  shelfClear: string;
  savePrompt: string;
  privateCollection: string;
  collectionTitle: string;
  collectionCopy: string;
  yourKitchen: string;
  profileTitle: string;
  profileAccent: string;
  profileCopy: string;
  addDevice: string;
  defaultServings: string;
  people: string;
  interfaceLanguage: string;
  offline: string;
  offlineTitle: string;
  offlineCopy: string;
  installHint: string;
  savedNotice: string;
  removedNotice: string;
  back: string;
  saveRecipe: string;
  removeRecipe: string;
  minutes: string;
  mise: string;
  ingredients: string;
  decrease: string;
  increase: string;
  takeSlowly: string;
  method: string;
  ready: string;
  startCooking: string;
  exit: string;
  cookingMode: string;
  forPeople: string;
  keepNearby: string;
  tableReady: string;
  made: string;
  backToRecipe: string;
  previous: string;
  next: string;
  finish: string;
  all: string;
};

export const copy: Record<Language, UiCopy> = {
  en: {
    nav: { home: "Home", discover: "Discover", saved: "Saved", profile: "Profile" },
    languageName: "English", languageLabel: "Interface language", kitchenNotes: "Algerian kitchen notes", kitchenOpen: "The kitchen is open",
    date: "Thursday, 16 August", homeLead: "What will make", homeAccent: "the house warm?", explore: "Explore the pantry", fieldRecipe: "Field recipe 01", fromAlgiers: "From Algiers, slowly",
    archiveNote: "Archive note / A city bowl", archiveCopy: "Every kitchen writes couscous differently. This version began with a shared Friday table in Algiers.", gathered: "Gathered for MIDA DZ",
    geography: "A little geography", cookBy: "Cook by", regions: "regions", familiarTable: "A familiar table", madeFor: "Made for", week: "this week", viewAll: "View all",
    kitchenNote: "Kitchen note 17", sauceLead: "Let the sauce", sauceAccent: "take its time.", sauceCopy: "The best part of a slow evening is that dinner does not need to hurry.", makeChorba: "Make chorba frik",
    findRecipe: "Find a recipe", cravingLead: "What are you", cravingAccent: "craving?", searchPlaceholder: "Try chorba, bread, Oran…", searchAria: "Search recipes", filters: "Filters", course: "Course", place: "Place", notesFromKitchen: "notes from the kitchen", clearSelection: "Clear selection", nothing: "Nothing here just yet.", tryAnother: "Try another ingredient, place, or course.",
    yourNotes: "Your kitchen notes", savedLead: "Saved for", savedAccent: "later.", heldClose: "held close", shelfClear: "Your shelf is clear.", savePrompt: "Save a recipe to keep it close to the stove.", privateCollection: "Private collection", collectionTitle: "“When the family comes”", collectionCopy: "Keep Sunday dishes together in your next version of MIDA DZ.",
    yourKitchen: "Your kitchen", profileTitle: "Abdou’s", profileAccent: "table", profileCopy: "Quietly collecting good things.", addDevice: "Add MIDA DZ to your device", defaultServings: "Default servings", people: "people", interfaceLanguage: "Interface language", offline: "Offline-ready", offlineTitle: "Your recipes stay with you.", offlineCopy: "Saved notes are kept on this device, and the app shell is prepared for a quieter connection.", installHint: "On iPhone: Safari → Share → Add to Home Screen. On Windows: use the install icon in Chrome or Edge.", savedNotice: "Saved to your kitchen notes", removedNotice: "Removed from your saved kitchen notes",
    back: "Back", saveRecipe: "Save recipe", removeRecipe: "Remove recipe", minutes: "min", mise: "Mise en place", ingredients: "Ingredients", decrease: "Decrease servings", increase: "Increase servings", takeSlowly: "Take it slowly", method: "Method", ready: "Ready when you are", startCooking: "Start Cooking Mode", exit: "Exit", cookingMode: "Cooking mode", forPeople: "For", keepNearby: "Keep nearby", tableReady: "The table is ready", made: "You made", backToRecipe: "Back to recipe", previous: "Previous", next: "Next step", finish: "Finish", all: "All",
  },
  fr: {
    nav: { home: "Accueil", discover: "Explorer", saved: "Enregistrés", profile: "Profil" },
    languageName: "Français", languageLabel: "Langue de l’interface", kitchenNotes: "Carnet de cuisine algérienne", kitchenOpen: "La cuisine est ouverte",
    date: "Jeudi 16 août", homeLead: "Qu’est-ce qui rendra", homeAccent: "la maison chaleureuse ?", explore: "Explorer le garde-manger", fieldRecipe: "Recette de terrain 01", fromAlgiers: "D’Alger, tout doucement",
    archiveNote: "Note d’archive / Un bol de ville", archiveCopy: "Chaque cuisine écrit le couscous à sa façon. Cette version est née d’une table partagée un vendredi à Alger.", gathered: "Recueilli pour MIDA DZ",
    geography: "Un peu de géographie", cookBy: "Cuisiner par", regions: "régions", familiarTable: "Une table familière", madeFor: "Pensé pour", week: "cette semaine", viewAll: "Tout voir",
    kitchenNote: "Note de cuisine 17", sauceLead: "Laissez la sauce", sauceAccent: "prendre son temps.", sauceCopy: "Le meilleur d’une soirée lente, c’est que le dîner n’a pas besoin de se presser.", makeChorba: "Préparer la chorba frik",
    findRecipe: "Trouver une recette", cravingLead: "De quoi avez-vous", cravingAccent: "envie ?", searchPlaceholder: "Essayez chorba, pain, Oran…", searchAria: "Rechercher des recettes", filters: "Filtres", course: "Type", place: "Lieu", notesFromKitchen: "notes de cuisine", clearSelection: "Effacer la sélection", nothing: "Rien ici pour le moment.", tryAnother: "Essayez un autre ingrédient, lieu ou type.",
    yourNotes: "Vos notes de cuisine", savedLead: "Gardé pour", savedAccent: "plus tard.", heldClose: "gardée(s) précieusement", shelfClear: "Votre étagère est vide.", savePrompt: "Enregistrez une recette pour la garder près de la cuisinière.", privateCollection: "Collection privée", collectionTitle: "« Quand la famille vient »", collectionCopy: "Gardez les plats du dimanche ensemble dans votre prochaine version de MIDA DZ.",
    yourKitchen: "Votre cuisine", profileTitle: "La table", profileAccent: "d’Abdou", profileCopy: "Collecter doucement les bonnes choses.", addDevice: "Ajouter MIDA DZ à votre appareil", defaultServings: "Portions par défaut", people: "personnes", interfaceLanguage: "Langue de l’interface", offline: "Prêt hors ligne", offlineTitle: "Vos recettes restent avec vous.", offlineCopy: "Les notes enregistrées restent sur cet appareil et l’application est prête pour une connexion plus calme.", installHint: "Sur iPhone : Safari → Partager → Sur l’écran d’accueil. Sur Windows : utilisez l’icône d’installation dans Chrome ou Edge.", savedNotice: "Enregistré dans vos notes de cuisine", removedNotice: "Retiré de vos notes de cuisine",
    back: "Retour", saveRecipe: "Enregistrer la recette", removeRecipe: "Retirer la recette", minutes: "min", mise: "Mise en place", ingredients: "Ingrédients", decrease: "Réduire les portions", increase: "Augmenter les portions", takeSlowly: "Prenez votre temps", method: "Méthode", ready: "Quand vous êtes prêt", startCooking: "Commencer le mode cuisine", exit: "Quitter", cookingMode: "Mode cuisine", forPeople: "Pour", keepNearby: "À garder près de vous", tableReady: "La table est prête", made: "Vous avez préparé", backToRecipe: "Retour à la recette", previous: "Précédent", next: "Étape suivante", finish: "Terminer", all: "Tout",
  },
  ar: {
    nav: { home: "الرئيسية", discover: "اكتشف", saved: "المحفوظات", profile: "الملف" },
    languageName: "العربية", languageLabel: "لغة الواجهة", kitchenNotes: "مذكرات المطبخ الجزائري", kitchenOpen: "المطبخ مفتوح",
    date: "الخميس، 16 أغسطس", homeLead: "ما الذي سيجعل", homeAccent: "البيت دافئاً؟", explore: "استكشف المؤن", fieldRecipe: "وصفة ميدانية 01", fromAlgiers: "من الجزائر العاصمة، على مهل",
    archiveNote: "ملاحظة أرشيفية / طبق من المدينة", archiveCopy: "لكل مطبخ طريقته الخاصة في كتابة الكسكس. بدأت هذه النسخة من مائدة جمعة مشتركة في الجزائر العاصمة.", gathered: "جُمعت لأجل ميدة دي زد",
    geography: "قليل من الجغرافيا", cookBy: "اطبخ حسب", regions: "مناطق", familiarTable: "مائدة مألوفة", madeFor: "مناسب لـ", week: "هذا الأسبوع", viewAll: "عرض الكل",
    kitchenNote: "ملاحظة المطبخ 17", sauceLead: "دع الصلصة", sauceAccent: "تأخذ وقتها.", sauceCopy: "أجمل ما في المساء الهادئ هو أن العشاء لا يحتاج إلى عجلة.", makeChorba: "حضّر شربة الفريك",
    findRecipe: "ابحث عن وصفة", cravingLead: "ماذا تشتهي", cravingAccent: "اليوم؟", searchPlaceholder: "جرّب شربة، خبز، وهران…", searchAria: "البحث في الوصفات", filters: "تصفية", course: "النوع", place: "المكان", notesFromKitchen: "ملاحظات من المطبخ", clearSelection: "مسح الاختيار", nothing: "لا شيء هنا حتى الآن.", tryAnother: "جرّب مكوناً أو مكاناً أو نوعاً آخر.",
    yourNotes: "ملاحظات مطبخك", savedLead: "محفوظ", savedAccent: "لوقت لاحق.", heldClose: "وصفة محفوظة", shelfClear: "رفّك فارغ.", savePrompt: "احفظ وصفة لتبقى قريبة من الموقد.", privateCollection: "مجموعة خاصة", collectionTitle: "« عندما تأتي العائلة »", collectionCopy: "اجمع أطباق الأحد في النسخة القادمة من ميدة دي زد.",
    yourKitchen: "مطبخك", profileTitle: "مائدة", profileAccent: "عبدو", profileCopy: "نجمع الأشياء الجميلة بهدوء.", addDevice: "أضف ميدة دي زد إلى جهازك", defaultServings: "عدد الحصص الافتراضي", people: "أشخاص", interfaceLanguage: "لغة الواجهة", offline: "جاهز دون اتصال", offlineTitle: "وصفاتك تبقى معك.", offlineCopy: "تُحفظ الملاحظات على هذا الجهاز، والتطبيق جاهز لاتصال أهدأ.", installHint: "على iPhone: Safari ← مشاركة ← إضافة إلى الشاشة الرئيسية. على Windows: استخدم رمز التثبيت في Chrome أو Edge.", savedNotice: "حُفظت في ملاحظات مطبخك", removedNotice: "أُزيلت من ملاحظات مطبخك",
    back: "رجوع", saveRecipe: "حفظ الوصفة", removeRecipe: "إزالة الوصفة", minutes: "د", mise: "التحضير", ingredients: "المكونات", decrease: "تقليل الحصص", increase: "زيادة الحصص", takeSlowly: "خذ وقتك", method: "الطريقة", ready: "عندما تكون جاهزاً", startCooking: "ابدأ وضع الطبخ", exit: "خروج", cookingMode: "وضع الطبخ", forPeople: "لـ", keepNearby: "أبقها قريبة", tableReady: "المائدة جاهزة", made: "لقد حضرت", backToRecipe: "العودة للوصفة", previous: "السابق", next: "الخطوة التالية", finish: "إنهاء", all: "الكل",
  },
};

const categoryLabels: Record<string, Record<Language, string>> = {
  "All": { en: "All", fr: "Tout", ar: "الكل" },
  "Main dishes": { en: "Main dishes", fr: "Plats principaux", ar: "أطباق رئيسية" },
  "Breakfast": { en: "Breakfast", fr: "Petit-déjeuner", ar: "فطور" },
  "Soups": { en: "Soups", fr: "Soupes", ar: "شوربات" },
  "Breads & pastries": { en: "Breads & pastries", fr: "Pains et pâtisseries", ar: "خبز ومعجنات" },
  "Sweet things": { en: "Sweet things", fr: "Douceurs", ar: "حلويات" },
};

const regionLabels: Record<string, Record<Language, string>> = {
  "Algiers": { en: "Algiers", fr: "Alger", ar: "الجزائر العاصمة" },
  "Oran": { en: "Oran", fr: "Oran", ar: "وهران" },
  "Constantine": { en: "Constantine", fr: "Constantine", ar: "قسنطينة" },
  "Tlemcen": { en: "Tlemcen", fr: "Tlemcen", ar: "تلمسان" },
  "Biskra": { en: "Biskra", fr: "Biskra", ar: "بسكرة" },
};

const difficultyLabels: Record<string, Record<Language, string>> = {
  Easy: { en: "Easy", fr: "Facile", ar: "سهل" },
  Medium: { en: "Medium", fr: "Intermédiaire", ar: "متوسط" },
  Slow: { en: "Slow", fr: "Lent", ar: "Lent" },
};

const descriptionTranslations: Record<Language, Record<string, string>> = {
  en: {},
  fr: {
    "couscous-royaal": "Semoule dorée, poulet tendre et légumes qui ont pris leur temps dans un bouillon au safran.",
    "msemen-honey": "Un pli patient, une poêle chaude et une fine brillance de miel sur des couches croustillantes et tendres.",
    "weekend-chakchouka": "Des œufs fondants dans une sauce tomate poivrée, faite pour le pain déchiré et une matinée sans hâte.",
    "chorba-frik": "Un bouillon de tomate parfumé au blé vert concassé, aux herbes et à la chaleur d’une longue table.",
    "makrout-dates": "Une pâtisserie de semoule beurrée, garnie de dattes épicées et d’un sirop de fleur d’oranger.",
  },
  ar: {
    "couscous-royaal": "سميد ذهبي، دجاج طري وخضار أخذت وقتها في مرق الزعفران.",
    "msemen-honey": "طيّ هادئ، مقلاة ساخنة ولمعة عسل رقيقة فوق طبقات مقرمشة وطرية.",
    "weekend-chakchouka": "بيض طري في صلصة طماطم بالفلفل، مناسب للخبز ومساء لا يعرف العجلة.",
    "chorba-frik": "مرق طماطم عطري مع قمح أخضر مجروش وأعشاب ودفء مائدة طويلة.",
    "makrout-dates": "حلوى سميد بالزبدة محشوة بتمر متبل وملامسة بشراب ماء الزهر.",
  },
};

export const categoryLabel = (value: string, language: Language) => categoryLabels[value]?.[language] ?? value;
export const regionLabel = (value: string, language: Language) => regionLabels[value]?.[language] ?? value;
export const difficultyLabel = (value: string, language: Language) => difficultyLabels[value]?.[language] ?? value;
export const recipeTitle = (recipe: Recipe, language: Language) => language === "ar" ? recipe.arabic : recipe.title;
export const recipeSecondaryTitle = (recipe: Recipe, language: Language) => language === "ar" ? recipe.title : recipe.arabic;
export const recipeDescription = (recipe: Recipe, language: Language) => descriptionTranslations[language][recipe.id] ?? recipe.description;
