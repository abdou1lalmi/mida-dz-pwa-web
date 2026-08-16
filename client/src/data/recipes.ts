export type Ingredient = {
  name: string;
  amount: number;
  unit: string;
};

export type Recipe = {
  id: string;
  title: string;
  arabic: string;
  region: string;
  category: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Slow";
  description: string;
  image: string;
  accent: string;
  servings: number;
  ingredients: Ingredient[];
  steps: string[];
  tags: string[];
};

export const heroImage = "/manus-storage/mida-dz-hero_2066a330.jpg";
export const cookingImage = "/manus-storage/mida-dz-cooking_c26ec23f.jpg";
export const msemenImage = "/manus-storage/mida-dz-msemen_037aa498.jpg";
export const chakchoukaImage = "/manus-storage/mida-dz-chakchouka_ddffa6a8.jpg";
export const logoImage = "/manus-storage/mida-dz-logo_adcc1e0c.png";

export const recipes: Recipe[] = [
  {
    id: "couscous-royaal",
    title: "Couscous Royal",
    arabic: "كسكس بالخضار",
    region: "Algiers",
    category: "Main dishes",
    minutes: 75,
    difficulty: "Slow",
    description:
      "Golden semolina, tender chicken, and vegetables that have taken their time in a saffron broth.",
    image: heroImage,
    accent: "#c07a25",
    servings: 4,
    ingredients: [
      { name: "couscous semolina", amount: 360, unit: "g" },
      { name: "chicken thighs", amount: 4, unit: "pieces" },
      { name: "carrots", amount: 3, unit: "whole" },
      { name: "zucchini", amount: 2, unit: "whole" },
      { name: "cooked chickpeas", amount: 240, unit: "g" },
      { name: "ras el hanout", amount: 2, unit: "tsp" },
    ],
    steps: [
      "Warm olive oil in a wide pot. Season the chicken with salt and ras el hanout, then brown gently on both sides.",
      "Add the carrots, chickpeas, and enough water to come halfway up the chicken. Simmer covered for 25 minutes.",
      "Add zucchini and continue cooking until every vegetable yields easily to a knife.",
      "Steam the semolina until light and separate. Spoon over the broth, then serve the vegetables and chicken on top.",
    ],
    tags: ["Family table", "Weekend", "One pot"],
  },
  {
    id: "msemen-honey",
    title: "Honey Msemen",
    arabic: "مسمن بالعسل",
    region: "Tlemcen",
    category: "Breads & pastries",
    minutes: 45,
    difficulty: "Medium",
    description:
      "A patient fold, a hot pan, and a thin shine of honey over crisp, tender layers.",
    image: msemenImage,
    accent: "#d9901a",
    servings: 4,
    ingredients: [
      { name: "fine semolina", amount: 180, unit: "g" },
      { name: "plain flour", amount: 180, unit: "g" },
      { name: "warm water", amount: 220, unit: "ml" },
      { name: "butter", amount: 80, unit: "g" },
      { name: "runny honey", amount: 4, unit: "tbsp" },
    ],
    steps: [
      "Bring semolina, flour, salt, and water together into a smooth, rested dough.",
      "Divide into small rounds. Coat your hands and work surface with melted butter.",
      "Stretch one round into a thin sheet, fold into a square, and rest while the pan heats.",
      "Cook on medium heat until deeply spotted and crisp at the edges. Serve warm with honey.",
    ],
    tags: ["Breakfast", "Tea time", "Vegetarian"],
  },
  {
    id: "weekend-chakchouka",
    title: "Weekend Chakchouka",
    arabic: "شكشوكة",
    region: "Oran",
    category: "Breakfast",
    minutes: 30,
    difficulty: "Easy",
    description:
      "Soft eggs in a peppery tomato sauce, built for torn bread and a late, unhurried morning.",
    image: chakchoukaImage,
    accent: "#b95036",
    servings: 2,
    ingredients: [
      { name: "eggs", amount: 4, unit: "whole" },
      { name: "ripe tomatoes", amount: 5, unit: "whole" },
      { name: "sweet peppers", amount: 2, unit: "whole" },
      { name: "ground cumin", amount: 1, unit: "tsp" },
      { name: "village bread", amount: 1, unit: "loaf" },
    ],
    steps: [
      "Soften the peppers in olive oil until their edges take on colour.",
      "Add grated tomato, cumin, salt, and pepper. Cook until the sauce is thick and sweet.",
      "Make four little wells and crack an egg into each. Cover until whites are set and yolks remain soft.",
      "Finish with parsley and put the skillet straight on the table with warm bread.",
    ],
    tags: ["Fast", "Vegetarian", "One pan"],
  },
  {
    id: "chorba-frik",
    title: "Chorba Frik",
    arabic: "شوربة فريك",
    region: "Constantine",
    category: "Soups",
    minutes: 55,
    difficulty: "Easy",
    description:
      "A fragrant tomato broth with cracked green wheat, herbs, and enough warmth for a long table.",
    image: cookingImage,
    accent: "#596a3e",
    servings: 4,
    ingredients: [
      { name: "lamb shoulder", amount: 300, unit: "g" },
      { name: "frik", amount: 160, unit: "g" },
      { name: "tomato passata", amount: 400, unit: "ml" },
      { name: "celery stalks", amount: 2, unit: "whole" },
      { name: "fresh cilantro", amount: 1, unit: "handful" },
    ],
    steps: [
      "Brown lamb with onion, celery, black pepper, and a pinch of cinnamon.",
      "Stir in tomato passata and water. Simmer until the lamb is almost tender.",
      "Rinse the frik, add it to the pot, and cook until the grains are soft but still have a little bite.",
      "Finish with cilantro and a squeeze of lemon just before serving.",
    ],
    tags: ["Ramadan", "Comfort", "One pot"],
  },
  {
    id: "makrout-dates",
    title: "Date Makrout",
    arabic: "مقروط بالتمر",
    region: "Biskra",
    category: "Sweet things",
    minutes: 65,
    difficulty: "Medium",
    description:
      "Buttery semolina pastry wrapped around spiced dates and kissed with orange blossom syrup.",
    image: msemenImage,
    accent: "#8d613c",
    servings: 8,
    ingredients: [
      { name: "medium semolina", amount: 420, unit: "g" },
      { name: "pitted dates", amount: 260, unit: "g" },
      { name: "orange blossom water", amount: 2, unit: "tbsp" },
      { name: "ground cinnamon", amount: 1, unit: "tsp" },
      { name: "honey", amount: 160, unit: "ml" },
    ],
    steps: [
      "Rub melted butter into the semolina until every grain is coated. Rest briefly.",
      "Mash dates with orange blossom water and cinnamon, then roll them into a slender log.",
      "Wrap the semolina dough around the filling, cut into diamonds, and bake until golden.",
      "Dip warm pieces into thinned honey and leave to set before serving.",
    ],
    tags: ["Celebration", "Make ahead", "Sweet"],
  },
];

export const regions = ["Algiers", "Oran", "Constantine", "Tlemcen", "Biskra"];
export const categories = [
  "All",
  "Main dishes",
  "Breakfast",
  "Soups",
  "Breads & pastries",
  "Sweet things",
];
