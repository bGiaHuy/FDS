# FDS homepage vNext — implementation report

## Asset organization — 05/10/2026

The handoff folder has now been deleted at the owner's request after preserving all 420 newly supplied images. Originals were moved into the ignored local `asset/photos/fds/` archive in 31 subject collections, renamed consistently, and verified using SHA-256 before and after migration. `asset/photos/catalog.json` retains portable provenance without old machine-specific paths. Its README explains local archive transfer and publication workflow.

The eight existing published photographs were moved from `public/fds/club-images/` into `public/fds/photos/{community,learning,identity,events}` without changing their contents. One selected Prom reception photograph from the new collection was optimized to WebP and used in Humans. `lib/fds-photos.ts` now provides stable keys shared by homepage and history components. `public/fds/photos/manifest.json` documents all nine published photographs and source paths. Existing provisional images remain explicitly separate.

Useful design context/spec were retained in `docs/design/`; unused handoff SVGs and prompt scaffolding were removed with the pack. The current application does not depend on the local original archive. Prior sections below describe earlier implementation stages and their then-current folder paths.

## Revision from saved review comments — 05/10/2026

- Ambition uses the authentic club gathering photograph as a full-width background with a navy scrim and readable white text. Both the original unanchored comment and the later anchored clarification are covered.
- Achievement label is a heading above the two numerical facts; no third statistic was fabricated.
- Fields, Activities and Community descriptions are directly under their respective titles. Activities heading now reads “Sinh hoạt, sự kiện và những lần gặp nhau.”
- Grow has a unified photograph/text composition, with the detached motivational aside removed. Build uses community teaching photography instead of the abstract text diagram.
- Bootcamp and Prom now include club photographs with captions. The Bootcamp photograph is labeled general teaching activity because the repository manifest does not verify its exact event date.
- Rotated collage photographs have white frames, blue tape and subtle shadows using the existing public decoration asset.
- Homepage Legacy now combines a photograph, concise milestones and an explicit link to `/about`. The new history page contains four chapters, eight captioned photographs and a sticky reading progress indicator. Percentages represent page reading progress only. Contemporary photographs are not passed off as historical 2018/2020 evidence.
- Recruitment disclosure is a complete horizontal control beneath the heading and introduction, with an aligned plus indicator.
- Added `components/home/ReadingProgress.tsx`, `app/about/page.tsx`, `app/about/history.css`; allowed local review comments on `/about`.
- Build and TypeScript pass. Homepage passes responsive/asset/anchor/keyboard/menu/search checks at 360, 375, 768, 1024 and 1440px. History passes 360, 375, 768 and 1440px with progress changing from 0% to 100%. Screenshots are in `scratch/redesign/`, including `ambition-375.png`, `activities-1440.png`, `about-1440.png`, `journey-1440.png`, `history-1440.png` and `history-375.png`.
- Existing handoff exclusion remains active. No commit or push was performed.

## 1. Repo findings

- Homepage: `frontend/app/page.tsx`, Next.js App Router, React 19, Tailwind 4.
- Existing fonts retained: Playfair Display, Be Vietnam Pro, IBM Plex Mono from `app/layout.tsx`.
- Existing global styles and navbar had uncommitted user changes; those were preserved. New homepage styles are scoped in `app/editorial.css`.
- Existing equal grids: four discipline cards, three achievement cards, three department cards. No approved individual profile data was found.
- Reused authentic FDS wordmarks, wireframe hand, lettering, paper texture and all eight optimized club photographs from `public/fds/club-images`. No generated photographs or added dependencies.
- Content source: owner-provided `CONTENT_BRIEF.md`. Personal achievements are not presented as club awards. No new statistics were invented. The brief was read, not independently verified against each publication.
- Reviewed [UET Innovation Space](https://uetis.framer.website/) for changing composition and content rhythm; FDS identity and fonts were retained.

## 2. Changes made

| File | Change and purpose |
| --- | --- |
| `.gitignore` | Excludes the root `FDS_Codex_Redesign_Pack_v1/` handoff folder. No runtime imports reference that folder. |
| `app/page.tsx` | Keeps hero, brand assets, navbar, footer, contacts and social links; shortens hero copy and relocates historical context into Legacy; composes the new homepage sections and adds a skip link. |
| `components/home/HomepageEditorial.tsx` | Editorial Humans, achievement strip, four value pillars, both rest sections, Summer Challenge case study, Bootcamp and Prom, photo collage, growth path, cinematic split, departments, Legacy, recruitment disclosure and varied Explore links. Preserves existing subjects and domain descriptions through native disclosure. |
| `components/home/EditorialMotifs.tsx` | Adapts `flow-path.svg` and `scribble-underline.svg` from the handoff into inline React SVG components in the application's component folder. Uses inherited CSS tokens rather than duplicated SVG files. |
| `app/editorial.css` | Navy/blue/off-white tokens; subdued existing paper texture; asymmetrical layouts; desktop/tablet/mobile styles; photo hover, focus indicators and reduced-motion handling. |
| `app/people/page.tsx` | Working Humans destination with a home link and collective stories. Explicitly identifies individual profiles as pending. |
| `components/Navbar.tsx` | Updates section tracking for the new content order, adds Humans navigation and changes recruitment wording to Đồng hành. Fixes tablet menu visibility from the old `md:hidden` to `lg:hidden`. Preserves pre-existing user edits. |
| `components/SearchModal.tsx` | Aligns search descriptions with the public brief: Big Data instead of unsupported official Research/Data Engineering categories; workshop/training/Club Fair/Prom. |
| `verify-redesign.js` | Repeatable responsive, image, anchor, disclosure, menu, search, route and reduced-motion checks; saves evidence outside tracked app assets. |

No commit, staging, push or deployment was performed. The handoff remains locally available and ignored. The original ProjectShowcase component is preserved, but its initiative content is now represented in the homepage case study and supporting initiative stories.

## 3. Layout decisions

- Humans: large featured collective story, two staggered supporting stories, an open teaser link. Approved portraits/names are unavailable, so no identity or achievement is inferred from a photograph.
- What FDS Does: Competition → Career → Knowledge → Project, using photo split, typographic statement, workshop strip and a knowledge-to-impact diagram. The four existing discipline descriptions remain in a keyboard-operable disclosure.
- Rest 01: large ambition statement, 70svh desktop / 55svh mobile minimum, inherited blue scribble. Rest 02: single full-width community photograph and statement, 65svh / 55svh minimum.
- Summer Challenge: 40/60 case study, existing candid photograph explicitly captioned as club learning imagery, overlapping editorial note instead of an invented result chart. Only the 2024 and 2025 themes from the brief are shown.
- Moments: uneven photograph sizes and restrained rotation; Growth: one continuous inline SVG path with a vertical node line on mobile; Data half-story: cinematic work/community split.
- Departments: one large Chuyên môn article with two smaller supporting articles. Legacy: unboxed line and milestone dots. Recruitment: native disclosure, no expired application form. Explore: one photographic feature and three smaller links.

## 4. Verification

- `npm --prefix frontend run build`: PASS; compilation, TypeScript and static generation. Routes `/`, `/auth`, `/people` and existing icon/404 output generated.
- `FDS_PREVIEW_URL=http://localhost:3101 node frontend/verify-redesign.js`: PASS against the production build.
- Desktop/tablet checked: 1440, 1024, 768px. Mobile checked: 375, 360px.
- At every width: zero broken images, failed FDS asset responses, broken internal anchors, uncaught page errors or overflowing editorial elements; one H1. Document width matches viewport width.
- Keyboard Enter opens both the discipline and recruitment disclosures. Mobile/tablet navigation opens visibly and closes on selection. Search finds Big Data and closes on Escape. `/people` has a working home link.
- Reduced motion: image transition duration is `0s`. Visible focus rules and a skip link are included. Meaningful images have descriptive Vietnamese alt text; SVG decoration is hidden from accessibility APIs.
- Rest heights: 630px and 585px at 900px desktop viewport height; 461px and 447px at 812px mobile viewport height.
- Screenshots visually reviewed: desktop Humans, Summer Challenge and full page; mobile full page. Paper texture was softened after the first review.
- No lint script is configured. No Lighthouse score or automated screen-reader/contrast certification is claimed.
- Backend session tracking is independent of these layout checks; backend connectivity and authentication workflows were not part of this redesign validation.

## 5. Remaining content/data TODO

- Three source-linked academic profiles and a Nguyễn Hải Anh club tribute are now published. The eight Gen 8 introduction cards remain limited to names and visible roles; personal quotations and fuller biographies remain pending.
- The three technical-bloc valedictorians are now attributed to FDS's September 2026 post. Removed the unverified count of five NITORI recipients.
- Authentic Summer Challenge event photography/poster, official participant/result counts. Current photograph is clearly labeled general club imagery. No participant numbers are fabricated.
- Real software project descriptions, screenshots and source/demo links. Community initiatives are not labeled software products.
- Confirm Gen 8 leadership inconsistencies in the owner brief before publishing leadership profiles.
- Next recruitment dates and live form; exact YouTube URL; approved testimonials; official establishment decision. None are guessed.
- Pointer-responsive hero nodes and scroll-driven path animation were not added. The retained hero is static; the ecosystem path remains fully readable without animation.

## 6. Screenshots

Evidence lives under ignored `scratch/redesign/`:

- `full-1440.png`: desktop full page.
- `full-375.png`: mobile full page.
- `humans-1440.png` and `humans-375.png`: Humans.
- `fields-1440.png`: What FDS Does.
- `ambition-1440.png`: statement rest section.
- `projects-1440.png`: flagship case study.
- `verification.json`: responsive check results.

Regenerate using the verification script with `FDS_PREVIEW_URL` set to the running local production preview URL.

## 7. Owner-supplied photographs and Humans page

- Published 20 additional optimized photographs/artworks from the local FDS source archive, in themed `public/fds/photos/` folders with source mappings in the manifest.
- Replaced the repeated homepage photographs with distinct member introductions, Prom moments, Ba Vì teambuilding, PDP activities and competition images. Added photographs to all three department articles.
- `/people` now has a photographic introduction, eight named member cards, department filters, a four-image moments gallery and a recruitment link. Homepage Humans cards link to the corresponding member anchors.
- Preserve the full member artwork rather than cropping away its name. Roles are presented in the context of the original publication; no biographies or quotes are invented.
- `/about` now shows actual Digital Race 2023 imagery with its date explicitly stated, and a Ba Vì teambuilding photo.
- Corrected the former seminar photo attribution: its source belongs to Prom. Summer Challenge currently uses explicitly captioned Digital Race competition archive imagery while authentic Summer Challenge imagery remains pending.
- Production build and responsive checks pass. The Humans page was additionally checked at 1440, 768, 375 and 360px: all 14 images load, no horizontal overflow, all department filters return the expected cards and the individual member anchor scrolls into view. Desktop/mobile screenshots were reviewed.

## 8. Facebook context audit

- Added the three owner-provided posts: Vũ Thanh Lâm (Gen 6 president), Dương Văn Hiệp (Gen 6 communications/external relations lead) and the four ALPS Alpine recipients. Published two alumni stories with original-post links and a scholarship section; homepage adds links to Hiệp and the scholarship story.
- Addressed blurred imagery: replaced the 206px Huawei thumbnail with a matching 2048px source and three 590px Club Day thumbnails with 2048px photos from the recap. Retrieved full-size Lâm (2048px) and Hiệp (1436px) artwork. Member/valedictorian poster delivery retains original dimensions and avoids a second compression on Humans.
- Build passes; desktop/mobile browser checks show the two new alumni stories and ALPS Alpine section, loaded artwork, valid homepage links and no horizontal overflow. Evidence: ignored `scratch/fds-lam-hiep-desktop.jpg`. Removed obsolete generated thumbnails where a replacement is published; source originals remain in the ignored archive.

- Continued through the public album feeds: read the three-valedictorian tribute, AI Agent talkshow recap, Spring 2026 Capstone message and semester awards post. Homepage Humans now leads with the verified named achievement posters; `/people` retains the cultural stories below three source-linked academic profiles.
- Published three optimized supplied valedictorian posters and one original talkshow group photo retrieved from the recap. Extended the catalog for all four Facebook-downloaded photos (three Club Day, one talkshow). Replaced generic learning imagery with the dated talkshow photo.
- Production build passes. Browser checks at 1440px and 375px show three academic profiles, loaded new images and no horizontal overflow. Tested the homepage link to Nguyễn Minh Đức's profile. Current desktop evidence: ignored `scratch/fds-context-desktop.jpg`; earlier screenshots in section 6 predate this content update.

- Read the public fanpage introduction, the Nguyễn Hải Anh Humans post, Club Day 2026 recap and FDS × F-LOGI Mid-Autumn recap directly in the browser. Full feed collection was blocked by Facebook's login requirement; this is a bounded editorial audit, not a complete crawl.
- Added three source-linked stories to `/people` and surfaced them in homepage Humans. The birthday tribute is summarized as a club tribute, not presented as a quote or an invented interview.
- Retrieved three actual images from the Club Day post and recorded the original post in their manifest entries. The supplied Hải Anh introduction portrait remains distinct from the birthday post's artwork.
- Updated academic copy around member-led training, learning through competitions and taking different roles; clarified the role of Ban Chủ nhiệm. The official FPT University article was used for cross-checking.
- Source notes and remaining access limitations: `docs/design/facebook-context-audit.md`; reusable source URLs: `lib/fds-stories.ts`.
