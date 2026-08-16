# MIDA DZ PWA — Design Direction

## Three stylistic approaches

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| Saffron Field Notes | A warm culinary journal with museum-label typography, textured paper, and close-up food imagery. It should feel collected from kitchens across Algeria rather than produced by a generic recipe platform. | 0.06 |
| Casbah Tile Archive | A graphic, architectural direction inspired by sun-faded zellige tiles, carved archways, and a more structured editorial rhythm. It is cultural without turning into costume. | 0.04 |
| Midnight Market | A nocturnal street-food atmosphere with charcoal surfaces, brass accents, and luminous photography. It prioritizes drama and discovery over domestic calm. | 0.08 |

## Chosen approach: Saffron Field Notes

### Design Movement

Contemporary **culinary editorial design** with the material restraint of an independent travel journal. The PWA should retain native-app clarity while borrowing the asymmetric, image-led pacing of an art-directed food publication.

### Core Principles

1. **Ingredient-led storytelling:** every surface should make the food and its origins feel tangible.
2. **Calm native utility:** interactions remain obvious, short, and touch-friendly; decoration never obscures task completion.
3. **Collected-not-catalogued:** small archival labels, handwritten-style accents, and regional references imply a living recipe notebook.
4. **Deliberate asymmetry:** feature content is offset and layered, avoiding generic centered-card grids.

### Color Philosophy

The base is warm bone paper and deep olive ink, so food photography carries the visual intensity. Saffron is the ownable signal color: a small, high-value flash used for active states, timers, and calls to action. Clay and fig brown add warmth without resorting to loud national-color symbolism.

### Layout Paradigm

The application uses a **field-journal rail**: a narrow, persistent desktop index becomes a floating mobile tab bar. Content moves through a sequence of margins, oversized imagery, labels, and inset panels rather than a uniform card grid.

### Signature Elements

1. A circular **saffron sun** mark with an offset seed motif.
2. Fine, numbered recipe metadata lines that resemble editorial captions.
3. A soft paper-grain overlay and small regional coordinate labels.

### Interaction Philosophy

Actions use clear tactile response: favorites fill, filters slide into view, and Cooking Mode narrows attention to one step. The PWA remembers personal choices locally and never makes users sign in to save a recipe.

### Animation

Use short 160–240 ms opacity and transform transitions with a custom ease-out. Recipe panels emerge with a slight vertical lift; favorite and save controls use a restrained 0.97 active press. Respect `prefers-reduced-motion` by removing non-essential motion.

### Typography System

Use **DM Serif Display** for editorial recipe titles and **Manrope** for interface copy and metadata. Titles are large but fluid; functional labels use high-contrast, compact uppercase tracking. Arabic content relies on the system Arabic stack rather than forcing the Latin display font.

### Brand Essence

**MIDA DZ is an offline-ready Algerian kitchen companion for people who want regional recipes with the calm guidance of a trusted family notebook.**

Personality: **grounded, attentive, generous**.

### Brand Voice

Headlines are vivid and specific; CTAs sound like kitchen prompts instead of startup commands.

Example lines:

> “Tonight, let the sauce take its time.”

> “Keep this one close to the stove.”

### Wordmark & Logo

The wordmark pairs a generous serif “MIDA” with compact “DZ” letters. The standalone logo is a saffron sun with a small offset olive seed: an abstract plate, spice bloom, and gathering point in one shape.

### Signature Brand Color

**Saffron Signal — `#D9901A`**

## Style Decisions

- The PWA follows Saffron Field Notes across every page and component.
- Keep controls familiar and platform-neutral; do not imitate iOS controls literally in the browser.
- Use full-color imagery only in high-impact discovery moments; everything else uses paper, ink, and restrained color.
- Preserve comfortable 44 px touch targets and support keyboard navigation.
- Keep the MIDA DZ wordmark and saffron sun mark visibly anchored in the primary desktop rail and mobile header.
- Use coordinate labels, archive notes, and regional captions to make the recipe collection feel documented rather than catalogued.
- Reserve Saffron Signal `#D9901A` for actions, active states, numerical indices, and intentional editorial emphasis.
- Break recipe-card sections with authored offsets or inset notes; avoid a uniform grid as the only discovery rhythm.
