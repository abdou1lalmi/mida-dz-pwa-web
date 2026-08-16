/**
 * MIDA DZ — Saffron Field Notes application shell.
 * Warm editorial food imagery, deep olive utility, saffron-only active signals.
 */
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowLeft, Check, ChevronLeft, ChevronRight, Clock3, Download, Heart,
  Home, ListFilter, MapPin, Minus, Plus, Search, Settings2, Sparkles,
  Utensils, X,
} from "lucide-react";
import { RecipeCard } from "@/components/RecipeCard";
import {
  categories, cookingImage, heroImage, logoImage, recipes, regions, type Recipe,
} from "@/data/recipes";

type Tab = "home" | "discover" | "saved" | "profile";
type Screen = Tab | "detail" | "cooking";

const readSaved = () => {
  try { return JSON.parse(localStorage.getItem("mida-dz-saved") || "[]") as string[]; }
  catch { return []; }
};

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [selected, setSelected] = useState<Recipe>(recipes[0]);
  const [saved, setSaved] = useState<string[]>(readSaved);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [region, setRegion] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [servings, setServings] = useState(recipes[0].servings);
  const [cookingStep, setCookingStep] = useState(0);
  const [showIngredients, setShowIngredients] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => { localStorage.setItem("mida-dz-saved", JSON.stringify(saved)); }, [saved]);
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
    setNotice(isAlreadySaved ? "Removed from your saved kitchen notes" : "Saved to your kitchen notes");
    return isAlreadySaved ? current.filter((item) => item !== id) : [...current, id];
  });
  const startCooking = () => { setCookingStep(0); setShowIngredients(false); setScreen("cooking"); window.scrollTo(0, 0); };
  const installHint = () => setNotice("On iPhone: Safari → Share → Add to Home Screen. On Windows: use the install icon in Chrome or Edge.");

  let content: ReactNode;
  if (screen === "detail") content = <RecipeDetail recipe={selected} saved={saved.includes(selected.id)} servings={servings} onServings={setServings} onBack={() => setScreen("discover")} onToggleSave={toggleSaved} onCooking={startCooking} />;
  else if (screen === "cooking") content = <CookingMode recipe={selected} servings={servings} step={cookingStep} setStep={setCookingStep} showIngredients={showIngredients} setShowIngredients={setShowIngredients} onExit={() => setScreen("detail")} />;
  else if (screen === "discover") content = <DiscoverPage recipes={visibleRecipes} query={query} setQuery={setQuery} category={category} setCategory={setCategory} region={region} setRegion={setRegion} filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} saved={saved} onOpen={openRecipe} onToggleSave={toggleSaved} />;
  else if (screen === "saved") content = <SavedPage savedRecipes={recipes.filter((recipe) => saved.includes(recipe.id))} onOpen={openRecipe} onToggleSave={toggleSaved} />;
  else if (screen === "profile") content = <ProfilePage onInstallHint={installHint} />;
  else content = <HomePage saved={saved} onOpen={openRecipe} onToggleSave={toggleSaved} onDiscover={() => changeTab("discover")} onPickRegion={(nextRegion) => { setRegion(nextRegion); setCategory("All"); changeTab("discover"); }} />;

  return <div className="app-shell">
    <aside className="side-rail" aria-label="Primary navigation">
      <button className="brand brand--rail" onClick={() => changeTab("home")} aria-label="MIDA DZ home"><img src={logoImage} alt="" /><span><b>MIDA</b><em>DZ</em></span></button>
      <div className="rail-brand-stamp"><span className="rail-brand-stamp__sun" aria-hidden="true" /><p>ALGERIAN<br />KITCHEN NOTES</p><small>EST. 2026</small></div>
      <div className="side-rail__line" />
      <nav className="rail-nav">
        <NavButton active={screen === "home"} icon={<Home size={19} />} label="Home" onClick={() => changeTab("home")} />
        <NavButton active={screen === "discover"} icon={<Search size={19} />} label="Discover" onClick={() => changeTab("discover")} />
        <NavButton active={screen === "saved"} icon={<Heart size={19} />} label="Saved" onClick={() => changeTab("saved")} />
        <NavButton active={screen === "profile"} icon={<Settings2 size={19} />} label="Profile" onClick={() => changeTab("profile")} />
      </nav>
      <div className="rail-note"><span>THE KITCHEN IS OPEN</span><b>05:42 PM</b></div>
    </aside>
    <div className="app-canvas">
      <header className="mobile-header"><button className="brand" onClick={() => changeTab("home")} aria-label="MIDA DZ home"><img src={logoImage} alt="" /><span><b>MIDA</b><em>DZ</em></span></button><button className="icon-button icon-button--ink" onClick={installHint} aria-label="How to install MIDA DZ"><Download size={18} /></button></header>
      <main>{content}</main>
      {(["home", "discover", "saved", "profile"] as Screen[]).includes(screen) && <nav className="mobile-tabbar" aria-label="Primary navigation">
        <NavButton active={screen === "home"} icon={<Home size={20} />} label="Home" onClick={() => changeTab("home")} />
        <NavButton active={screen === "discover"} icon={<Search size={20} />} label="Discover" onClick={() => changeTab("discover")} />
        <NavButton active={screen === "saved"} icon={<Heart size={20} />} label="Saved" onClick={() => changeTab("saved")} />
        <NavButton active={screen === "profile"} icon={<Settings2 size={20} />} label="Profile" onClick={() => changeTab("profile")} />
      </nav>}
    </div>
    {notice && <div className="toast" role="status"><Check size={16} /> {notice}</div>}
  </div>;
}

function NavButton({ active, icon, label, onClick }: { active: boolean; icon: ReactNode; label: string; onClick: () => void }) {
  return <button className={`nav-button ${active ? "is-active" : ""}`} onClick={onClick}>{icon}<span>{label}</span></button>;
}

function HomePage({ saved, onOpen, onToggleSave, onDiscover, onPickRegion }: { saved: string[]; onOpen: (recipe: Recipe) => void; onToggleSave: (id: string) => void; onDiscover: () => void; onPickRegion: (region: string) => void }) {
  const featured = recipes[0];
  return <>
    <section className="page-head page-head--home"><p className="eyebrow">Thursday, 16 August</p><h1>What will make<br /><i>the house warm?</i></h1><button className="quiet-action" onClick={onDiscover}>Explore the pantry <ArrowLeft size={16} /></button></section>
    <section className="hero-feature"><img src={heroImage} alt="A bowl of Algerian couscous with vegetables" /><div className="hero-feature__shade" /><div className="hero-feature__label"><span>FIELD RECIPE 01</span><p>36°45′N · 03°03′E</p></div><div className="hero-feature__content"><p className="eyebrow eyebrow--light">From Algiers, slowly</p><h2>{featured.title}</h2><p>{featured.description}</p><button onClick={() => onOpen(featured)}>Read the recipe <ArrowLeft size={17} /></button></div></section>
    <div className="field-caption"><span>ARCHIVE NOTE / A city bowl</span><p>Every kitchen writes couscous differently. This version began with a shared Friday table in Algiers.</p><i>Gathered for MIDA DZ</i></div>
    <section className="content-section content-section--regions"><div className="section-heading"><div><p className="eyebrow">A little geography</p><h2>Cook by <i>region</i></h2></div><span className="section-count">05 regions</span></div><div className="region-strip">{regions.map((item, index) => <button className="region-chip" key={item} onClick={() => onPickRegion(item)}><span>0{index + 1}</span>{item}</button>)}</div></section>
    <section className="content-section"><div className="section-heading"><div><p className="eyebrow">A familiar table</p><h2>Made for <i>this week</i></h2></div><button className="link-button" onClick={onDiscover}>View all <ArrowLeft size={15} /></button></div><div className="recipe-grid recipe-grid--authored">{recipes.slice(1, 4).map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} saved={saved.includes(recipe.id)} onOpen={onOpen} onToggleSave={onToggleSave} />)}</div></section>
    <section className="journal-callout"><img src={cookingImage} alt="A simmering pot in a home kitchen" /><div><p className="eyebrow eyebrow--light">Kitchen note 17</p><h2>Let the sauce<br /><i>take its time.</i></h2><p>The best part of a slow evening is that dinner does not need to hurry.</p><button onClick={() => onOpen(recipes[3])}>Make chorba frik <ArrowLeft size={16} /></button></div></section>
  </>;
}

function DiscoverPage({ recipes: visible, query, setQuery, category, setCategory, region, setRegion, filtersOpen, setFiltersOpen, saved, onOpen, onToggleSave }: { recipes: Recipe[]; query: string; setQuery: (value: string) => void; category: string; setCategory: (value: string) => void; region: string; setRegion: (value: string) => void; filtersOpen: boolean; setFiltersOpen: (value: boolean) => void; saved: string[]; onOpen: (recipe: Recipe) => void; onToggleSave: (id: string) => void }) {
  return <section className="page page--discover"><div className="page-head"><p className="eyebrow">Find a recipe</p><h1>What are you<br /><i>craving?</i></h1></div><div className="search-row"><label className="search-box"><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try chorba, bread, Oran…" aria-label="Search recipes" />{query && <button onClick={() => setQuery("")} aria-label="Clear search"><X size={16} /></button>}</label><button className={`filter-trigger ${filtersOpen ? "is-open" : ""}`} onClick={() => setFiltersOpen(!filtersOpen)} aria-expanded={filtersOpen}><ListFilter size={18} /> Filters</button></div><div className={`filter-drawer ${filtersOpen ? "is-open" : ""}`}><div><p>Course</p><div className="filter-options">{categories.map((item) => <button className={category === item ? "selected" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div></div><div><p>Place</p><div className="filter-options">{["All", ...regions].map((item) => <button className={region === item ? "selected" : ""} key={item} onClick={() => setRegion(item)}>{item}</button>)}</div></div></div><div className="discover-summary"><span>{visible.length.toString().padStart(2, "0")} notes from the kitchen</span>{(category !== "All" || region !== "All" || query) && <button onClick={() => { setQuery(""); setCategory("All"); setRegion("All"); }}>Clear selection</button>}</div>{visible.length ? <div className="recipe-grid recipe-grid--discover">{visible.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} saved={saved.includes(recipe.id)} onOpen={onOpen} onToggleSave={onToggleSave} />)}</div> : <div className="empty-state"><Sparkles size={26} /><h2>Nothing here just yet.</h2><p>Try another ingredient, place, or course.</p></div>}</section>;
}

function SavedPage({ savedRecipes, onOpen, onToggleSave }: { savedRecipes: Recipe[]; onOpen: (recipe: Recipe) => void; onToggleSave: (id: string) => void }) {
  return <section className="page page--saved"><div className="page-head"><p className="eyebrow">Your kitchen notes</p><h1>Saved for<br /><i>later.</i></h1></div><div className="saved-intro"><Heart size={18} fill="currentColor" /><span>{savedRecipes.length} recipe{savedRecipes.length === 1 ? "" : "s"} held close</span></div>{savedRecipes.length ? <div className="recipe-grid recipe-grid--discover">{savedRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} saved onOpen={onOpen} onToggleSave={onToggleSave} />)}</div> : <div className="empty-state empty-state--warm"><Heart size={28} /><h2>Your shelf is clear.</h2><p>Save a recipe to keep it close to the stove.</p></div>}<section className="collection-note"><span>PRIVATE COLLECTION</span><h3>“When the family comes”</h3><p>Keep Sunday dishes together in your next version of MIDA DZ.</p></section></section>;
}

function ProfilePage({ onInstallHint }: { onInstallHint: () => void }) {
  return <section className="page page--profile"><div className="profile-card"><div className="profile-card__avatar">A</div><div><p className="eyebrow">Your kitchen</p><h1>Abdou’s <i>table</i></h1><span>Quietly collecting good things.</span></div></div><div className="profile-list"><button onClick={onInstallHint}><span><Download size={19} /> Add MIDA DZ to your device</span><ChevronRight size={18} /></button><button><span><Utensils size={19} /> Default servings <small>4 people</small></span><ChevronRight size={18} /></button><button><span><MapPin size={19} /> Recipe language <small>English · العربية · Français</small></span><ChevronRight size={18} /></button></div><div className="offline-card"><span>OFFLINE-READY</span><h2>Your recipes stay with you.</h2><p>Saved notes are kept on this device, and the app shell is prepared for a quieter connection.</p></div></section>;
}

function RecipeDetail({ recipe, saved, servings, onServings, onBack, onToggleSave, onCooking }: { recipe: Recipe; saved: boolean; servings: number; onServings: (value: number) => void; onBack: () => void; onToggleSave: (id: string) => void; onCooking: () => void }) {
  const ratio = servings / recipe.servings;
  return <section className="detail-page"><div className="detail-hero"><img src={recipe.image} alt="" /><div className="detail-hero__shade" /><button className="back-button" onClick={onBack}><ChevronLeft size={20} /> Back</button><button className={`detail-save ${saved ? "is-saved" : ""}`} onClick={() => onToggleSave(recipe.id)} aria-label="Save recipe"><Heart size={20} fill={saved ? "currentColor" : "none"} /></button><div className="detail-hero__text"><p className="eyebrow eyebrow--light">{recipe.region} · {recipe.category}</p><h1>{recipe.title}</h1><span>{recipe.arabic}</span></div></div><div className="detail-body"><p className="detail-lead">{recipe.description}</p><div className="detail-meta"><span><Clock3 size={16} /> {recipe.minutes} min</span><span><MapPin size={16} /> {recipe.difficulty}</span><span><Utensils size={16} /> {servings} people</span></div><div className="detail-rule" /><section className="ingredient-section"><div className="section-heading"><div><p className="eyebrow">Mise en place</p><h2>Ingredients</h2></div><div className="serving-control" aria-label="Servings"><button onClick={() => onServings(Math.max(1, servings - 1))} aria-label="Decrease servings"><Minus size={15} /></button><b>{servings}</b><button onClick={() => onServings(Math.min(12, servings + 1))} aria-label="Increase servings"><Plus size={15} /></button></div></div><ul className="ingredient-list">{recipe.ingredients.map((item) => <li key={item.name}><span>{item.name}</span><b>{Number.isInteger(item.amount * ratio) ? item.amount * ratio : (item.amount * ratio).toFixed(1)} {item.unit}</b></li>)}</ul></section><section className="steps-section"><p className="eyebrow">Take it slowly</p><h2>Method</h2>{recipe.steps.map((step, index) => <div className="method-step" key={step}><span>0{index + 1}</span><p>{step}</p></div>)}</section><button className="cooking-cta" onClick={onCooking}><span><small>READY WHEN YOU ARE</small><b>Start Cooking Mode</b></span><ArrowLeft size={20} /></button></div></section>;
}

function CookingMode({ recipe, servings, step, setStep, showIngredients, setShowIngredients, onExit }: { recipe: Recipe; servings: number; step: number; setStep: (value: number) => void; showIngredients: boolean; setShowIngredients: (value: boolean) => void; onExit: () => void }) {
  const done = step === recipe.steps.length;
  const progress = Math.min((step / recipe.steps.length) * 100, 100);
  return <section className="cooking-page"><img src={cookingImage} alt="" className="cooking-page__image" /><div className="cooking-page__shade" /><header><button className="back-button back-button--light" onClick={onExit}><X size={19} /> Exit</button><span>COOKING MODE</span><button className="ingredients-toggle" onClick={() => setShowIngredients(!showIngredients)} aria-expanded={showIngredients}>Ingredients</button></header>{showIngredients && <aside className="cooking-ingredients"><div><p className="eyebrow">For {servings} people</p><h2>Keep nearby</h2></div>{recipe.ingredients.map((item) => <p key={item.name}>{item.name}</p>)}</aside>}<div className="cooking-page__core"><div className="cooking-progress"><span>STEP {Math.min(step + 1, recipe.steps.length).toString().padStart(2, "0")} / {recipe.steps.length.toString().padStart(2, "0")}</span><div><i style={{ width: `${progress}%` }} /></div></div>{done ? <div className="cooking-finish"><Sparkles size={30} /><p className="eyebrow eyebrow--light">The table is ready</p><h1>You made<br /><i>{recipe.title}.</i></h1><button onClick={onExit}>Back to recipe <ArrowLeft size={17} /></button></div> : <div className="cooking-step"><p className="eyebrow eyebrow--light">{recipe.title}</p><h1>{recipe.steps[step]}</h1></div>}<div className="cooking-controls"><button disabled={step === 0} onClick={() => setStep(step - 1)}><ChevronLeft size={20} /> Previous</button><button className="next-step" onClick={() => setStep(step + 1)}>{step === recipe.steps.length - 1 ? "Finish" : "Next step"} <ChevronRight size={20} /></button></div></div></section>;
}

export default App;
