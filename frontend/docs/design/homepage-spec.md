# IMPLEMENTATION SPEC — Homepage FDS vNext

## Global layout rules
- Desktop content width: 1180–1280px.
- Hero and statement sections có thể full-bleed.
- Dense section vertical padding: ~96–120px.
- Rest section: 140–220px padding hoặc min-height 60–80svh.
- Không wrap mọi section trong cùng một `max-width + heading + grid`.
- Chuyển section bằng: whitespace, torn-paper divider, bleed image, shared line motif, hoặc statement; không chỉ đổi background.

## Section map

### 01 — Hero
Composition: 42/58 split.
Left: slogan, positioning, CTA, proof strip.
Right: wireframe hand/sphere + subtle technical annotations.
Hero không chứa paragraph lịch sử dài.

### 02 — Humans of FDS
Composition:
- 5-column or 12-column asymmetrical editorial grid.
- Profile #1 chiếm 5–6 columns và cao nhất.
- #2/#3 đặt staggered ở phải.
- #4 chỉ peek / teaser để thúc click.
- Không dùng 4 cards bằng nhau.
Interaction:
- hover: image translate 4–8px; metadata reveal.
- click -> `/people/[slug]` hoặc `/people`.
Content:
- one achievement / person.
- photo + name + concise proof + optional quote.

### 03 — Rest 01
60–80svh.
Big type:
`DIFFERENT PEOPLE.`
`SAME AMBITION.`
or Vietnamese equivalent.
Max 1–2 supporting sentences.
One group photo / monochrome crop / technical note.
Không card.

### 04 — What FDS Does
Pillars: Competition / Career(Grow) / Knowledge(Learn) / Project(Build).
Composition: vertical journey / staggered zig-zag.
Each pillar can be a different format:
- Compete: large photo + big 01 + short copy.
- Grow: text + metric / alumni note.
- Learn: workshop photo strip.
- Build: project visual / diagram.
Avoid 2x2 grid if possible.

### 05 — Rest 02
Image-led full-width band.
Single quote or short statement.
Purpose: reset visual density before flagship proof.

### 06 — FDS Summer Challenge
Asymmetric case study:
- left: title + description + stats.
- center/right: one candid photo.
- overlapping poster/chart component.
- stats can be horizontal, not boxed cards.
CTA to initiative detail.
All numbers must come from verified source or placeholders.

### 07 — FDS in Action
Loose photo collage.
Different photo sizes.
Metadata tags and hand annotations.
No cards.

### 08 — Growth Ecosystem
One continuous curve/path.
Nodes: alumni → core → new member → next generation OR knowledge → skill → opportunity → impact.
Use `svg/flow-path.svg` as starting motif.
Content can live along the path instead of in boxes.

### 09 — Data is Only Half the Story
Cinematic split / strong contrast.
Left: technical work.
Right: people/community.
This is an emotional peak, not an info grid.

### 10 — Find Your Place
Avoid three equal cards.
Preferred:
- one large `Chuyên môn` editorial panel.
- two smaller supporting `Truyền thông – Đối ngoại` and `Văn hóa`.
Alternative: vertical accordion on desktop; stacked accordion mobile.

### 11 — Legacy
Airy timeline.
No card shells around each year.
Only dots, line, year, one short sentence each.

### 12 — Explore FDS
One large tile: Humans of FDS.
Two or three smaller tiles: Initiatives, About, Social/Stories.
Vary sizes.
No 4 equal tiles.

## Rest-section principle
Rest section DOES NOT mean empty padding only.
Allowed:
- Big type.
- One image.
- One verified stat.
- One short quote.
- One motion visual.
But information density must drop strongly.

## Interaction signature
Use max 2–3 signatures across whole homepage:
1. Pointer-responsive network nodes in hero (subtle).
2. Editorial photo hover / reveal in People.
3. Scroll path progression in ecosystem.
Do not animate every section.

## Mobile
- No horizontal website.
- Cards become stacked editorial blocks.
- Rest sections remain as breathing room, but min-height can reduce to 45–60svh.
- Preserve visual hierarchy, not exact desktop geometry.
- Sticky CTA only when recruitment campaign is active.
