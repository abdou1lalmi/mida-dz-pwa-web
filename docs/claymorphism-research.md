# MIDA DZ Claymorphism Research Notes

> **Study purpose:** Move MIDA DZ from a paper-journal surface toward a premium, tactile food companion while preserving clear hierarchy, multilingual readability, and the existing Algerian identity.

## Findings

Claymorphism is a soft three-dimensional interface style in which components read as rounded, inflated surfaces with a paired light and dark shadow. Its useful contribution for MIDA DZ is **tactile invitation**: recipe controls can feel like pottery pieces, spice tiles, or small kitchen tools rather than generic rectangular UI. [1]

The strongest claymorphism systems reserve the dimensional effect for meaningful surfaces rather than treating every element as a button. Excessive use makes non-interactive cards appear tappable and weakens the information hierarchy. MIDA DZ should therefore limit the deepest elevation to primary actions, featured recipes, selection controls, and the mobile navigation dock. [2]

Accessible claymorphism depends on retaining clear contrast, explicit labels, visible focus states, and non-shadow affordances. Low-contrast pastel-on-pastel designs repeat the weaknesses associated with neumorphism. The MIDA DZ redesign will use a deep olive text color, a high-contrast burnt-saffron action color, an outlined focus state, and text labels alongside every functional icon. [1] [2]

## Applied Design Rules

| System area | Research-informed redesign rule | MIDA DZ application |
| --- | --- | --- |
| Canvas | Use a quiet, slightly tinted base so the shadows have room to read. | Warm apricot-clay background with a faint grain field, not a sterile white page. |
| Surfaces | Use broad radii, double shadows, and a slightly lighter top-left highlight. | Recipe cards become rounded food tiles; filters become plump chips; sections become soft trays. |
| Hierarchy | Give only primary, meaningful surfaces the strongest elevation. | The featured recipe and Start Cooking action receive the deepest depth; supporting content stays flatter. |
| Action color | Use one high-contrast accent as a functional signal, not decoration. | Burnt saffron indicates the current tab, saved state, step progress, and the primary action. |
| Typography | Keep body text crisp and conventional against tactile surfaces. | Maintain a readable sans-serif for interfaces, support Arabic with Noto Naskh Arabic, and use a restrained display face only for recipe moments. |
| Motion | Animate transform and opacity only; preserve interaction clarity. | Buttons compress slightly on press; recipe tiles lift a few pixels on hover; reduced-motion users receive immediate state changes. |
| RTL | Keep visual object placement intentional while mirroring reading order and controls. | Arabic moves utility controls and progression directions while food imagery stays compositionally balanced. |

## Current PWA Audit

The present desktop experience is a restrained editorial food journal. Its strengths are the Algerian food photography, strong typography, generous rhythm, and clear entry into the featured recipe. The composition is highly flat, however: region links, recipe cards, search controls, and navigation mostly share a thin-paper treatment. The redesign should preserve the imagery and content pacing but give touch targets and information groups a more immediately tactile, high-end sense of hierarchy.

The mobile experience carries the visual language well but presents three practical opportunities. First, the header and tab dock could become distinct soft-clay objects with stronger installed-app presence. Second, the compact recipe rows can use bolder depth and an easier thumb target for saved state. Finally, region chips need a more expressive selection state than a simple outlined rectangle. The claymorphism system will solve these concerns without making the page toy-like: surfaces will be warm, dense, and ceramic rather than candy-colored.

## Source Review

The 2026 practical claymorphism guide emphasizes puffy geometry, paired shadows, and pastel surface colors as the core visual language. It also flags contrast as the central accessibility concern. [1]

Smashing Magazine differentiates claymorphism from more restrictive neumorphism and warns that low contrast and an “everything is interactive” visual language damage usability. Its discussion supports a hybrid approach: retain conventional layout, typography, and semantic cues, then layer tactile depth onto selective components. [2]

Canva’s MCP policy requires clear user purpose, accessibility-conscious output, data minimization, and respecting the boundary between Canva content and non-Canva implementation. The asset workflow will create original MIDA DZ visual outputs in Canva; it will not extract Canva Brand Kit data or template internals for this website. [3]

## References

[1]: <https://www.setproduct.com/blog/claymorphism-design-guide> "Claymorphism UI design: soft depth, pastel palettes, AI recipes"

[2]: <https://www.smashingmagazine.com/2022/03/claymorphism-css-ui-design-trend/> "Claymorphism: Will It Stick Around?"

[3]: <https://www.canva.dev/docs/mcp/usage-policy/> "Canva MCP Usage Policy"
