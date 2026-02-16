# Specification

## Summary
**Goal:** Build a scholarly, museum-like multi-page heritage archive website for the Regal Sharma family, featuring structured historical content, lineage visualization, timeline, archives browsing, and a contributions contact form with persisted submissions.

**Planned changes:**
- Create a multi-page site with top navigation and routes: Home, Founding Era, Akhnoor Sovereignty, Forts & Residences, Lineage & Family Tree, Royal Administration & Legacy, Post-1947 Transition, Current Generation, Gallery & Archives, Timeline, and Contact / Family Contributions.
- Apply a historically grounded visual design (elegant typography, subtle parchment/archival textures, deep red and gold accents) with calm, subtle animations that respect reduced-motion preferences.
- Populate pages with the provided historical narrative and add clearly labeled placeholders for future research, citations, sources, and oral histories.
- Implement the Home page with a hero banner (dignified tagline), brief lineage introduction, and 3–6 highlight links to deeper sections.
- Build an interactive, expandable family tree for the direct lineage (Lakshmandev Singh Sharma → … → Aarav Sharma) with selectable nodes showing biographical note placeholders and an explicit note that Aarav Sharma represents the present generation.
- Create an interactive timeline with chronological milestones, expandable entry details, and per-entry citations/sources placeholders; ensure keyboard navigation.
- Add a Gallery & Archives viewer with category browsing (Photographs, Letters, Documents, Artifacts) and an item detail view showing metadata fields (title, date/period, description, source/citation, notes).
- Add a Current Generation page profiling Rawal/Raja Tilak Raj Singh Sharma, Kunwar Rajkumar Singh Sharma, and Bhanwar Aarav Singh Sharma, plus a continuity-of-traditions section (placeholders allowed).
- Implement a Contact / Family Contributions form (name, email, relationship/affiliation, message, optional attachment metadata field, consent checkbox) and persist submissions in a single Motoko actor; provide a backend method to list submissions.
- Implement a consistent “Sources / Citations” UI block across relevant pages (history pages, timeline entries, archive item detail) with empty-state placeholders and safe external-link behavior.
- Ensure mobile responsiveness, accessibility (semantic headings, focus states, contrast, alt text, keyboard operability), and per-route SEO essentials (titles/meta descriptions and proper heading hierarchy).

**User-visible outcome:** Visitors can navigate a cohesive heritage archive site, read structured historical sections, explore an interactive family tree and timeline, browse archive categories and item details, and submit family/research contributions via a form that is stored for later review.
