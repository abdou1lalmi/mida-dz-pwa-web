/**
 * MIDA DZ — Saffron Field Notes component reminder:
 * keep food imagery tactile, metadata editorial, and interaction immediately legible.
 */
import { Clock3, Heart, MapPin } from "lucide-react";
import type { Recipe } from "@/data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
  saved: boolean;
  onOpen: (recipe: Recipe) => void;
  onToggleSave: (id: string) => void;
  featured?: boolean;
};

export function RecipeCard({
  recipe,
  saved,
  onOpen,
  onToggleSave,
  featured = false,
}: RecipeCardProps) {
  return (
    <article className={`recipe-card ${featured ? "recipe-card--featured" : ""}`}>
      <button
        className="recipe-card__image-button"
        onClick={() => onOpen(recipe)}
        aria-label={`Open ${recipe.title}`}
      >
        <img src={recipe.image} alt="" className="recipe-card__image" />
        <span className="recipe-card__image-scrim" />
        <span className="recipe-card__region">{recipe.region}</span>
      </button>
      <div className="recipe-card__body">
        <div className="recipe-card__eyebrow">
          <span>{recipe.category}</span>
          <button
            className={`icon-button icon-button--paper ${saved ? "is-saved" : ""}`}
            onClick={() => onToggleSave(recipe.id)}
            aria-label={saved ? `Remove ${recipe.title} from saved recipes` : `Save ${recipe.title}`}
            aria-pressed={saved}
          >
            <Heart size={17} fill={saved ? "currentColor" : "none"} />
          </button>
        </div>
        <button className="recipe-card__title" onClick={() => onOpen(recipe)}>
          <span>{recipe.title}</span>
          <small>{recipe.arabic}</small>
        </button>
        <p>{recipe.description}</p>
        <div className="recipe-card__meta" aria-label={`${recipe.minutes} minutes, ${recipe.difficulty}`}>
          <span><Clock3 size={14} /> {recipe.minutes} min</span>
          <span><MapPin size={14} /> {recipe.difficulty}</span>
        </div>
      </div>
    </article>
  );
}
