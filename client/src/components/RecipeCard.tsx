/**
 * MIDA DZ — Saffron Field Notes recipe card.
 * Keeps food imagery tactile while respecting selected language and Arabic RTL reading order.
 */
import { Clock3, Heart, MapPin } from "lucide-react";
import type { Recipe } from "@/data/recipes";
import { categoryLabel, difficultyLabel, type Language, regionLabel, recipeDescription, recipeSecondaryTitle, recipeTitle } from "@/lib/i18n";

type RecipeCardProps = {
  recipe: Recipe;
  language: Language;
  saved: boolean;
  onOpen: (recipe: Recipe) => void;
  onToggleSave: (id: string) => void;
  featured?: boolean;
};

export function RecipeCard({ recipe, language, saved, onOpen, onToggleSave, featured = false }: RecipeCardProps) {
  const title = recipeTitle(recipe, language);
  return <article className={`recipe-card ${featured ? "recipe-card--featured" : ""}`}>
    <button className="recipe-card__image-button" onClick={() => onOpen(recipe)} aria-label={`Open ${title}`}>
      <img src={recipe.image} alt="" className="recipe-card__image" />
      <span className="recipe-card__image-scrim" />
      <span className="recipe-card__region">{regionLabel(recipe.region, language)}</span>
    </button>
    <div className="recipe-card__body">
      <div className="recipe-card__eyebrow"><span>{categoryLabel(recipe.category, language)}</span><button className={`icon-button icon-button--paper ${saved ? "is-saved" : ""}`} onClick={() => onToggleSave(recipe.id)} aria-label={saved ? `Remove ${title}` : `Save ${title}`} aria-pressed={saved}><Heart size={17} fill={saved ? "currentColor" : "none"} /></button></div>
      <button className="recipe-card__title" onClick={() => onOpen(recipe)}><span>{title}</span><small>{recipeSecondaryTitle(recipe, language)}</small></button>
      <p>{recipeDescription(recipe, language)}</p>
      <div className="recipe-card__meta" aria-label={`${recipe.minutes} minutes, ${recipe.difficulty}`}><span><Clock3 size={14} /> {recipe.minutes} {language === "ar" ? "د" : "min"}</span><span><MapPin size={14} /> {difficultyLabel(recipe.difficulty, language)}</span></div>
    </div>
  </article>;
}
