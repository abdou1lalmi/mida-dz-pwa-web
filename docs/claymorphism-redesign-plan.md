# MIDA DZ — Claymorphism Redesign Plan

## Executive Direction

The redesigned MIDA DZ will become an **Algerian gastronomic object**: a composed, high-end recipe PWA that borrows the restraint of a fine-dining editorial still life and the material intelligence of a contemporary ceramic studio. It will retain real, appetising food photography and regional Algerian content, while replacing both flat journal-page affordances and generic “AI clay” tropes with selective tactile depth, calm sculptural surfaces, and a clearly installed-app shell.

The objective is not to make the product playful at the expense of cooking utility. Material will communicate **provenance, confidence, and warmth**. Reading, search, accessibility, Arabic RTL layout, and recipe comprehension will continue to use high-contrast type, unmistakable controls, and generous touch targets.

## Design Movement

The proposed movement is **Algerian Gastronomic Modernism**. It uses only the most useful part of claymorphism—soft physical hierarchy—to frame an art-directed visual world of hand-thrown stoneware, burnished brass, washed linen, sun-bleached plaster, and honest food photography. The result should feel closer to a collector’s culinary monograph than a 3D illustration pack.

## Core Principles

| Principle | Application |
| --- | --- |
| Tactile hierarchy | The most important decisions—begin cooking, save a recipe, switch a region, and choose a step—look pressed, elevated, or inset. Supporting information stays quieter. |
| Ceramic restraint | Surfaces use a narrow family of clay, cream, olive, and saffron rather than a rainbow of pastels. |
| Food stays photographic | Food images remain rich and real. The clay system frames them rather than turning food content into illustrated blobs. |
| Legibility over effect | Text, labels, focus states, and semantic cues survive even if every shadow is removed. |

## Color Philosophy

The base canvas moves from parchment to a very light **apricot clay**. A near-white **milk glaze** lifts large cards. **Terracotta** grounds structural surfaces, while deep **olive ink** carries all body text and critical symbols. **Burnt saffron** is reserved for a small number of meaningful moments: active navigation, saved state, recipe progress, and primary actions. A restrained **date-palm green** acts as the kitchen’s calm counterweight.

| Token | Role | Proposed value |
| --- | --- | --- |
| Apricot clay | Page canvas | `#F4DCC8` |
| Milk glaze | Main elevated surface | `#FFF7EF` |
| Terracotta | Strong support surface | `#C96D4B` |
| Burnt saffron | Functional highlight only | `#C78314` |
| Palm olive | Readable body and utility ink | `#263B2B` |
| Glaze shadow | Lower-right depth | `rgba(130, 73, 48, .22)` |
| Light slip | Upper-left highlight | `rgba(255, 255, 255, .84)` |

## Layout Paradigm

Desktop will use a **floating kitchen shelf** rather than a fixed paper rail. The navigation becomes a tall clay control stack separated from the content by generous open space. The page’s featured recipe sits in an oversized sculpted tray, with rounded food imagery nested in a recessed well. Content sections are arranged as offset pottery shelves: region chips, recipe objects, and note trays carry different elevations.

Mobile will use a compact, detachable clay header and an elevated four-button dock. Recipe cards will use a tactile split layout that maintains fast scanning. The cooking mode will remain intentionally focused, with only the progress bead, recipe step, and primary forward action receiving heavy depth.

## Component System

| Component | Visual treatment | Interaction behavior |
| --- | --- | --- |
| App canvas | Apricot clay, radial highlight, subtle grain | No decoration that competes with copy |
| Navigation shelf | Milk-glaze panel with 24–30px corners and paired shadows | Active item is a saffron inset capsule; items compress on press |
| Recipe card | Clay tray with an inset food-image well | Raises 4px on hover; saved action is a small separate clay button |
| Region chip | Organic pill/tile with small numbered accent | Selected state uses saffron fill plus dark ink label |
| Search | Concave glazed control with an explicit outlined focus ring | Keyboard focus is visible and not shadow-dependent |
| CTA | Terracotta or saffron raised button, thick text, clear icon | Press state moves 2px down and reduces the shadow |
| Language selector | Cream clay compact control | Direct text labels, never flags alone |
| Cooking progression | A sequence of glazed, high-contrast step controls | Progress is textual and visual; previous and next are always labeled |

## Motion and Accessibility

All lifting, pressing, and state transitions will remain under 220ms and animate only `transform`, `box-shadow`, and `opacity`. The system will respect `prefers-reduced-motion`. Hover effects will never be the only way to reveal actions. Every sculpted button will remain distinguishable through text, border, icon, and color contrast, meeting the documented claymorphism accessibility safeguards.[1] [2]

## Typography

The primary interface face will become **Plus Jakarta Sans** for its soft geometric structure and strong legibility at small sizes. **Fraunces** will provide a few crafted editorial recipe headlines, not every page title. Arabic remains **Noto Naskh Arabic** with expanded line-height and reduced ornament. The hierarchy uses large but not oversized recipe titles, medium-weight functional labels, and compact uppercase coordinates only where language-appropriate.

## Premium Asset Direction and Quality Gates

The replacement asset set will not be a multi-page mood board and will not use generic toy-like 3D clay, floating food, pastel gradients, stock-restaurant staging, overdecorated Arabic motifs, or synthetic text. Every asset must carry one clear material truth: either food, ceramic, linen, brass, plaster, or shadow. Cultural specificity will come from ingredient, vessel, and atmosphere—not from cliché iconography.

| Asset | Art direction | Composition and material | Required quality gate |
| --- | --- | --- | --- |
| Hero tableau | A quiet Algerian lunch at a contemporary chef’s studio | Overhead or 35-degree editorial food photograph of couscous, hand-thrown cream stoneware, folded raw linen, a small burnished-brass spoon, and a plaster worktop; generous quiet negative space for live app copy | Food is the only strong focal point; light feels like indirect late-afternoon window light; no type baked into the image; no visual “clay render” effect |
| Brand mark | An ownable kiln-stamp symbol | A simple burnt-saffron imprint of a sun/plate/seed abstracted to a single rounded form, supplied with transparent background | Recognisable at favicon scale; no AI-generated wordmark; no gradients or ornamental complexity |
| Recipe image surround | Quiet, physical framing—not decoration | A cropped, tactile edge of off-white stoneware and fine linen intended to sit behind food photography | The frame must not compete with the dish; it cannot resemble a generic mobile template or a sticker |
| Cooking mode atmosphere | A nocturnal private kitchen, not a “dark mode” illustration | Low-key still life of blackened olive wood, a deep olive ceramic vessel, restrained brass glint, and shadowed plaster, with a deliberately uncluttered text-safe field | Dark enough to sustain light text without a heavy overlay; intimate and quiet; no flame, neon, or cinematic gimmick |
| Regional motifs | Modern maker’s stamps | Five minimal one-colour signs, each based on a distinct abstracted regional cue and used only at small scale | Geometric, legible, and consistent as a family; never literal maps, flags, or tourism badges |

### Asset Production Rules

Each image will be generated or curated as an individual final deliverable at its intended crop, rather than created as one combined board. The hero and cooking visuals will be high-resolution photographic art direction; the brand mark and regional motifs will remain simple symbolic graphics. App copy will always be live HTML so English, French, and Arabic remain correct and accessible.

The acceptance test is deliberately strict: if an image could plausibly belong to a generic recipe template, a colourful claymorphism starter kit, or an unrelated Mediterranean travel advert, it will be rejected. The approved visuals must instead appear commissioned for MIDA DZ, with refined negative space, credible materials, and a clear relationship to the actual cooking experience.

## Implementation Sequence

The asset work starts only after this plan is committed to the project record. The PWA will then receive the new global tokens, navigation surface, hero tray, region controls, recipe cards, search/filter controls, detail page, and cooking mode. Language switching, local persistence, and RTL orientation will remain untouched functionally while their control surfaces are restyled.

## Acceptance Criteria

The redesign will be accepted when the desktop and iPhone layouts clearly read as one branded claymorphism system; primary actions remain obvious without relying on shadows; English, French, and Arabic layouts remain readable; and all existing recipe interactions continue working. The final revision will be type-checked, production-built, visually captured at desktop and mobile breakpoints, reviewed as a holistic design, checkpointed, and synchronized to GitHub.

## References

[1]: <https://www.setproduct.com/blog/claymorphism-design-guide> "Claymorphism UI design: soft depth, pastel palettes, AI recipes"

[2]: <https://www.smashingmagazine.com/2022/03/claymorphism-css-ui-design-trend/> "Claymorphism: Will It Stick Around?"
