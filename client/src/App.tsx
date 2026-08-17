/**
 * MIDA DZ — Algerian Gastronomic Modernism application shell.
 * Editorial food photography, quiet ceramic hierarchy, live multilingual copy, and accessible installed-app utility.
 */
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowLeft, Check, ChevronLeft, ChevronRight, Clock3, Download, Heart,
  Home, Languages, ListFilter, MapPin, Minus, Plus, Search, Settings2, Sparkles,
  Utensils, X,
} from "lucide-react";
import { RecipeCard } from "@/components/RecipeCard";
import {
  categories, cookingImage, heroImage, logoImage, recipes, regions, type Recipe,
} from "@/data/recipes";
import { categoryLabel, copy, difficultyLabel, type Language, regionLabel, recipeDescription, recipeTitle, type UiCopy } from "@/lib/i18n";

type Tab = "home" | "discover" | "saved" | "profile";
type Screen = Tab | "detail" | "cooking";

const readSaved = () => {
  try { return JSON.parse(localStorage.getItem("mida-dz-saved") || "[]") as string[]; }
  catch { return []; }
};
const readLanguage = (): Language => {
  const stored = localStorage.getItem("mida-dz-language");
  return stored === "fr" || stored === "ar" ? stored : "en";
};

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [selected, setSelected] = useState<Recipe>(recipes[0]);
  const [saved, setSaved] = useState<string[]>(readSaved);
  const [language, setLanguage] = useState<Language>(readLanguage);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [region, setRegion] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [servings, setServings] = useState(recipes[0].servings);
  const [cookingStep, setCookingStep] = useState(0);
  const [showIngredients, setShowIngredients] = useState(false);
  const [notice, setNotice] = useState("");
  const t = copy[language];

  useEffect(() => { localStorage.setItem("mida-dz-saved", JSON.stringify(saved)); }, [saved]);
  useEffect(() => {
    localStorage.setItem("mida-dz-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 3200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const visibleRecipes = useMemo(() => {
    const term = query.toLowerCase().trim();
    return recipes.filter((recipe) => {
      const words = [recipe.title, recipe.arabic, recipe.region, recipe.category, ...recipe.tags].join(" ").toLowerCase();
      return (!term || words.includes(term)) && (category === "All" || recipe.category === category) && (region === "All" || recipe.region === region);
    });
  }, [category, query, region]);

  const changeTab = (tab: Tab) => { setScreen(tab); setFiltersOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const openRecipe = (recipe: Recipe) => { setSelected(recipe); setServings(recipe.servings); setScreen("detail"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const toggleSaved = (id: string) => setSaved((current) => {
    const isAlreadySaved = current.includes(id);
    setNotice(isAlreadySaved ? t.removedNotice : t.savedNotice);
    return isAlreadySaved ? current.filter((item) => item !== id) : [...current, id];
  });
  const startCooking = () => { setCookingStep(0); setShowIngredients(false); setScreen("cooking"); window.scrollTo(0, 0); };
  const installHint = () => setNotice(t.installHint);

  let content: ReactNode;
  if (screen === "detail") content = <RecipeDetail t={t} language={language} recipe={selected} saved={saved.includes(selected.id)} servings={servings} onServings={setServings} onBack={() => setScreen("discover")} onToggleSave={toggleSaved} onCooking={startCooking} />;
  else if (screen === "cooking") content = <CookingMode t={t} language={language} recipe={selected} servings={servings} step={cookingStep} setStep={setCookingStep} showIngredients={showIngredients} setShowIngredients={setShowIngredients} onExit={() => setScreen("detail")} />;
  else if (screen === "discover") content = <DiscoverPage t={t} language={language} recipes={visibleRecipes} query={query} setQuery={setQuery} category={category} setCategory={setCategory} region={region} setRegion={setRegion} filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} saved={saved} onOpen={openRecipe} onToggleSave={toggleSaved} />;
  else if (screen === "saved") content = <SavedPage t={t} language={language} savedRecipes={recipes.filter((recipe) => saved.includes(recipe.id))} onOpen={openRecipe} onToggleSave={toggleSaved} />;
  else if (screen === "profile") content = <ProfilePage t={t} language={language} setLanguage={setLanguage} onInstallHint={installHint} />;
  else content = <HomePage t={t} language={language} saved={saved} onOpen={openRecipe} onToggleSave={toggleSaved} onDiscover={() => changeTab("discover")} onPickRegion={(nextRegion) => { setRegion(nextRegion); setCategory("All"); changeTab("discover"); }} />;

  return <div className="app-shell">
    <aside className="side-rail" aria-label="Primary navigation">
      <button className="brand brand--rail" onClick={() => changeTab("home")} aria-label="MIDA DZ home"><img src={logoImage} alt="" /><span><b>MIDA</b><em>DZ</em></span></button>
      <div className="rail-brand-stamp"><span className="rail-brand-stamp__sun" aria-hidden="true" /><p>{t.kitchenNotes}</p><small>EST. 2026</small></div>
      <div className="side-rail__line" />
      <nav className="rail-nav">
        <NavButton active={screen === "home"} icon={<Home size={19} />} label={t.nav.home} onClick={() => changeTab("home")} />
        <NavButton active={screen === "discover"} icon={<Search size={19} />} label={t.nav.discover} onClick={() => changeTab("discover")} />
        <NavButton active={screen === "saved"} icon={<Heart size={19} />} label={t.nav.saved} onClick={() => changeTab("saved")} />
        <NavButton active={screen === "profile"} icon={<Settings2 size={19} />} label={t.nav.profile} onClick={() => changeTab("profile")} />
      </nav>
      <LanguageControl t={t} language={language} setLanguage={setLanguage} rail />
      <div className="rail-note"><span>{t.kitchenOpen}</span><b>05:42 PM</b></div>
    </aside>
    <div className="app-canvas">
      <header className="mobile-header"><button className="brand" onClick={() => changeTab("home")} aria-label="MIDA DZ home"><img src={logoImage} alt="" /><span><b>MIDA</b><em>DZ</em></span></button><LanguageControl t={t} language={language} setLanguage={setLanguage} compact /><button className="icon-button icon-button--ink" onClick={installHint} aria-label="How to install MIDA DZ"><Download size={18} /></button></header>
      <main>{content}</main>
      {(["home", "discover", "saved", "profile"] as Screen[]).includes(screen) && <nav className="mobile-tabbar" aria-label="Primary navigation">
        <NavButton active={screen === "home"} icon={<Home size={20} />} label={t.nav.home} onClick={() => changeTab("home")} />
        <NavButton active={screen === "discover"} icon={<Search size={20} />} label={t.nav.discover} onClick={() => changeTab("discover")} />
        <NavButton active={screen === "saved"} icon={<Heart size={20} />} label={t.nav.saved} onClick={() => changeTab("saved")} />
        <NavButton active={screen === "profile"} icon={<Settings2 size={20} />} label={t.nav.profile} onClick={() => changeTab("profile")} />
      </nav>}
    </div>
    {notice && <div className="toast" role="status"><Check size={16} /> {notice}</div>}
  </div>;
}

function LanguageControl({ t, language, setLanguage, rail = false, compact = false }: { t: UiCopy; language: Language; setLanguage: (language: Language) => void; rail?: boolean; compact?: boolean }) {
  return <label className={`language-control ${rail ? "language-control--rail" : ""} ${compact ? "language-control--compact" : ""}`}><Languages size={rail ? 17 : 16} /><span className="sr-only">{t.languageLabel}</span><select aria-label={t.languageLabel} value={language} onChange={(event) => setLanguage(event.target.value as Language)}><option value="en">English</option><option value="fr">Français</option><option value="ar">العربية</option></select></label>;
}

function NavButton({ active, icon, label, onClick }: { active: boolean; icon: ReactNode; label: string; onClick: () => void }) {
  return <button className={`nav-button ${active ? "is-active" : ""}`} onClick={onClick}>{icon}<span>{label}</span></button>;
}

function BrandContext() {
  return <div className="page-brand-context" aria-label="MIDA DZ Algerian Kitchen Notes"><img src={logoImage} alt="" /><span><b>MIDA</b><i>DZ</i></span><em>ALGERIAN KITCHEN NOTES</em></div>;
}

function HomePage({ t, language, saved, onOpen, onToggleSave, onDiscover, onPickRegion }: { t: UiCopy; language: Language; saved: string[]; onOpen: (recipe: Recipe) => void; onToggleSave: (id: string) => void; onDiscover: () => void; onPickRegion: (region: string) => void }) {
  const featured = recipes[0];
  return <>
    <section className="page-head page-head--home"><BrandContext /><p className="eyebrow">{t.date}</p><h1>{t.homeLead}<br /><i>{t.homeAccent}</i></h1><button className="quiet-action" onClick={onDiscover}>{t.explore} <ArrowLeft size={16} /></button></section>
    <section className="hero-feature"><img src={heroImage} alt="A bowl of Algerian couscous with vegetables" /><div className="hero-feature__shade" /><div className="hero-feature__label"><span>{t.fieldRecipe}</span><p>36°45′N · 03°03′E</p></div><div className="hero-feature__content"><p className="eyebrow eyebrow--light">{t.fromAlgiers}</p><h2>{recipeTitle(featured, language)}</h2><p>{recipeDescription(featured, language)}</p><button onClick={() => onOpen(featured)}>{t.backToRecipe} <ArrowLeft size={17} /></button></div></section>
    <div className="field-caption"><span>{t.archiveNote}</span><p>{t.archiveCopy}</p><i>{t.gathered}</i></div>
    <section className="content-section content-section--regions"><div className="section-heading"><div><p className="eyebrow">{t.geography}</p><h2>{t.cookBy} <i>{t.regions}</i></h2></div><span className="section-count">05 {t.regions}</span></div><div className="region-strip">{regions.map((item, index) => <button className="region-chip" key={item} onClick={() => onPickRegion(item)}><span>0{index + 1}</span>{regionLabel(item, language)}</button>)}</div></section>
    <section className="content-section"><div className="section-heading"><div><p className="eyebrow">{t.familiarTable}</p><h2>{t.madeFor} <i>{t.week}</i></h2></div><button className="link-button" onClick={onDiscover}>{t.viewAll} <ArrowLeft size={15} /></button></div><div className="recipe-grid recipe-grid--authored">{recipes.slice(1, 4).map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} language={language} saved={saved.includes(recipe.id)} onOpen={onOpen} onToggleSave={onToggleSave} />)}</div></section>
    <section className="journal-callout"><img src={cookingImage} alt="A simmering pot in a home kitchen" /><div><p className="eyebrow eyebrow--light">{t.kitchenNote}</p><h2>{t.sauceLead}<br /><i>{t.sauceAccent}</i></h2><p>{t.sauceCopy}</p><button onClick={() => onOpen(recipes[3])}>{t.makeChorba} <ArrowLeft size={16} /></button></div></section>
  </>;
}

function DiscoverPage({ t, language, recipes: visible, query, setQuery, category, setCategory, region, setRegion, filtersOpen, setFiltersOpen, saved, onOpen, onToggleSave }: { t: UiCopy; language: Language; recipes: Recipe[]; query: string; setQuery: (value: string) => void; category: string; setCategory: (value: string) => void; region: string; setRegion: (value: string) => void; filtersOpen: boolean; setFiltersOpen: (value: boolean) => void; saved: string[]; onOpen: (recipe: Recipe) => void; onToggleSave: (id: string) => void }) {
  return <section className="page page--discover"><div className="page-head"><BrandContext /><p className="eyebrow">{t.findRecipe}</p><h1>{t.cravingLead}<br /><i>{t.cravingAccent}</i></h1></div><div className="search-row"><label className="search-box"><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.searchPlaceholder} aria-label={t.searchAria} />{query && <button onClick={() => setQuery("")} aria-label={t.clearSelection}><X size={16} /></button>}</label><button className={`filter-trigger ${filtersOpen ? "is-open" : ""}`} onClick={() => setFiltersOpen(!filtersOpen)} aria-expanded={filtersOpen}><ListFilter size={18} /> {t.filters}</button></div><div className={`filter-drawer ${filtersOpen ? "is-open" : ""}`}><div><p>{t.course}</p><div className="filter-options">{categories.map((item) => <button className={category === item ? "selected" : ""} key={item} onClick={() => setCategory(item)}>{item === "All" ? t.all : categoryLabel(item, language)}</button>)}</div></div><div><p>{t.place}</p><div className="filter-options">{["All", ...regions].map((item) => <button className={region === item ? "selected" : ""} key={item} onClick={() => setRegion(item)}>{item === "All" ? t.all : regionLabel(item, language)}</button>)}</div></div></div><div className="discover-summary"><span>{visible.length.toString().padStart(2, "0")} {t.notesFromKitchen}</span>{(category !== "All" || region !== "All" || query) && <button onClick={() => { setQuery(""); setCategory("All"); setRegion("All"); }}>{t.clearSelection}</button>}</div>{visible.length ? <div className="recipe-grid recipe-grid--discover">{visible.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} language={language} saved={saved.includes(recipe.id)} onOpen={onOpen} onToggleSave={onToggleSave} />)}</div> : <div className="empty-state"><Sparkles size={26} /><h2>{t.nothing}</h2><p>{t.tryAnother}</p></div>}</section>;
}

function SavedPage({ t, language, savedRecipes, onOpen, onToggleSave }: { t: UiCopy; language: Language; savedRecipes: Recipe[]; onOpen: (recipe: Recipe) => void; onToggleSave: (id: string) => void }) {
  return <section className="page page--saved"><div className="page-head"><BrandContext /><p className="eyebrow">{t.yourNotes}</p><h1>{t.savedLead}<br /><i>{t.savedAccent}</i></h1></div><div className="saved-intro"><Heart size={18} fill="currentColor" /><span>{savedRecipes.length} {t.heldClose}</span></div>{savedRecipes.length ? <div className="recipe-grid recipe-grid--discover">{savedRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} language={language} saved onOpen={onOpen} onToggleSave={onToggleSave} />)}</div> : <div className="empty-state empty-state--warm"><Heart size={28} /><h2>{t.shelfClear}</h2><p>{t.savePrompt}</p></div>}<section className="collection-note"><span>{t.privateCollection}</span><h3>{t.collectionTitle}</h3><p>{t.collectionCopy}</p></section></section>;
}

function ProfilePage({ t, language, setLanguage, onInstallHint }: { t: UiCopy; language: Language; setLanguage: (language: Language) => void; onInstallHint: () => void }) {
  return <section className="page page--profile"><div className="page-head page-head--profile"><BrandContext /></div><div className="profile-card"><div className="profile-card__avatar">A</div><div><p className="eyebrow">{t.yourKitchen}</p><h1>{t.profileTitle} <i>{t.profileAccent}</i></h1><span>{t.profileCopy}</span></div></div><div className="profile-list"><button onClick={onInstallHint}><span><Download size={19} /> {t.addDevice}</span><ChevronRight size={18} /></button><button><span><Utensils size={19} /> {t.defaultServings} <small>4 {t.people}</small></span><ChevronRight size={18} /></button><div className="profile-language"><span><Languages size={19} /> {t.interfaceLanguage}</span><LanguageControl t={t} language={language} setLanguage={setLanguage} /></div></div><div className="offline-card"><span>{t.offline}</span><h2>{t.offlineTitle}</h2><p>{t.offlineCopy}</p></div></section>;
}

function RecipeDetail({ t, language, recipe, saved, servings, onServings, onBack, onToggleSave, onCooking }: { t: UiCopy; language: Language; recipe: Recipe; saved: boolean; servings: number; onServings: (value: number) => void; onBack: () => void; onToggleSave: (id: string) => void; onCooking: () => void }) {
  const ratio = servings / recipe.servings;
  return <section className="detail-page"><div className="detail-hero"><img src={recipe.image} alt="" /><div className="detail-hero__shade" /><button className="back-button" onClick={onBack}><ChevronLeft size={20} /> {t.back}</button><button className={`detail-save ${saved ? "is-saved" : ""}`} onClick={() => onToggleSave(recipe.id)} aria-label={saved ? t.removeRecipe : t.saveRecipe}><Heart size={20} fill={saved ? "currentColor" : "none"} /></button><div className="detail-hero__text"><p className="eyebrow eyebrow--light">{regionLabel(recipe.region, language)} · {categoryLabel(recipe.category, language)}</p><h1>{recipeTitle(recipe, language)}</h1><span>{language === "ar" ? recipe.title : recipe.arabic}</span></div></div><div className="detail-body"><p className="detail-lead">{recipeDescription(recipe, language)}</p><div className="detail-meta"><span><Clock3 size={16} /> {recipe.minutes} {t.minutes}</span><span><MapPin size={16} /> {difficultyLabel(recipe.difficulty, language)}</span><span><Utensils size={16} /> {servings} {t.people}</span></div><div className="detail-rule" /><section className="ingredient-section"><div className="section-heading"><div><p className="eyebrow">{t.mise}</p><h2>{t.ingredients}</h2></div><div className="serving-control" aria-label={t.people}><button onClick={() => onServings(Math.max(1, servings - 1))} aria-label={t.decrease}><Minus size={15} /></button><b>{servings}</b><button onClick={() => onServings(Math.min(12, servings + 1))} aria-label={t.increase}><Plus size={15} /></button></div></div><ul className="ingredient-list">{recipe.ingredients.map((item) => <li key={item.name}><span>{item.name}</span><b>{Number.isInteger(item.amount * ratio) ? item.amount * ratio : (item.amount * ratio).toFixed(1)} {item.unit}</b></li>)}</ul></section><section className="steps-section"><p className="eyebrow">{t.takeSlowly}</p><h2>{t.method}</h2>{recipe.steps.map((step, index) => <div className="method-step" key={step}><span>0{index + 1}</span><p>{step}</p></div>)}</section><button className="cooking-cta" onClick={onCooking}><span><small>{t.ready}</small><b>{t.startCooking}</b></span><ArrowLeft size={20} /></button></div></section>;
}

function CookingMode({ t, language, recipe, servings, step, setStep, showIngredients, setShowIngredients, onExit }: { t: UiCopy; language: Language; recipe: Recipe; servings: number; step: number; setStep: (value: number) => void; showIngredients: boolean; setShowIngredients: (value: boolean) => void; onExit: () => void }) {
  const done = step === recipe.steps.length;
  const progress = Math.min((step / recipe.steps.length) * 100, 100);
  return <section className="cooking-page"><img src={cookingImage} alt="" className="cooking-page__image" /><div className="cooking-page__shade" /><header><button className="back-button back-button--light" onClick={onExit}><X size={19} /> {t.exit}</button><span>{t.cookingMode}</span><button className="ingredients-toggle" onClick={() => setShowIngredients(!showIngredients)} aria-expanded={showIngredients}>{t.ingredients}</button></header>{showIngredients && <aside className="cooking-ingredients"><div><p className="eyebrow">{t.forPeople} {servings} {t.people}</p><h2>{t.keepNearby}</h2></div>{recipe.ingredients.map((item) => <p key={item.name}>{item.name}</p>)}</aside>}<div className="cooking-page__core"><div className="cooking-progress"><span>STEP {Math.min(step + 1, recipe.steps.length).toString().padStart(2, "0")} / {recipe.steps.length.toString().padStart(2, "0")}</span><div><i style={{ width: `${progress}%` }} /></div></div>{done ? <div className="cooking-finish"><Sparkles size={30} /><p className="eyebrow eyebrow--light">{t.tableReady}</p><h1>{t.made}<br /><i>{recipeTitle(recipe, language)}.</i></h1><button onClick={onExit}>{t.backToRecipe} <ArrowLeft size={17} /></button></div> : <div className="cooking-step"><p className="eyebrow eyebrow--light">{recipeTitle(recipe, language)}</p><h1>{recipe.steps[step]}</h1></div>}<div className="cooking-controls"><button disabled={step === 0} onClick={() => setStep(step - 1)}><ChevronLeft size={20} /> {t.previous}</button><button className="next-step" onClick={() => setStep(step + 1)}>{step === recipe.steps.length - 1 ? t.finish : t.next} <ChevronRight size={20} /></button></div></div></section>;
}

export default App;
