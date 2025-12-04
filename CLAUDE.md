# CLAUDE.md

This file provides guidance for AI assistants (like Claude) working with this repository.

## Repository Overview

**Duurzame-Vlaggen.nl** - A sustainable flags e-commerce website built with the "Bold Disruptor" design philosophy. This repository is configured with Claude Code integration for AI-assisted development.

### Project Philosophy

- **Bold Disruptor** - Unified Typography System
- Geometric structure (Sora everywhere except body)
- Friendly communication (Manrope body only)
- Craft character (Bricolage Grotesque eyebrows only)

## Claude Code Integration

This repository uses the [Claude Code GitHub Action](https://github.com/anthropics/claude-code-action) to enable AI-assisted development.

- **Trigger**: Mention `@claude` in any issue comment or PR review comment
- **Permissions**: Write access to contents, pull requests, and issues

## Development Guidelines

### For AI Assistants

1. **Read Before Modifying**: Always read and understand existing files before making changes
2. **Follow the Style Guide**: Adhere strictly to the design system documented below
3. **Follow the Tone of Voice**: Use jij-vorm, avoid greenwashing language
4. **Minimal Changes**: Make only the changes necessary to complete the requested task
5. **Clear Commits**: Use descriptive commit messages
6. **Security First**: Never introduce security vulnerabilities

### Branch Strategy

- Develop on feature branches prefixed with `claude/`
- Push changes to the designated branch before creating pull requests

### Commit Message Format

```
<type>: <short description>

[optional longer description]
```

Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `style`

---

# Sitemap Overview

**Domain:** duurzame-vlaggen.nl | **Total Pages:** ~30

## URL Structure

| Section | URLs |
|---------|------|
| **Homepage** | `/` |
| **Configurator** | `/bestel/`, `/bestel/mastvlaggen/`, `/bestel/gevelvlaggen/`, `/bestel/baniervlaggen/`, `/bestel/beachvlaggen/` |
| **B2B Landings** | `/voor-bedrijven/`, `/voor-gemeenten/`, `/voor-verenigingen/`, `/offerte-aanvragen/` |
| **Materiaal** | `/materiaal/`, `/materiaal/flag-ciclo-technologie/`, `/materiaal/certificeringen/` |
| **CSRD Hub** | `/csrd/`, `/csrd/wat-is-csrd/`, `/csrd/vlaggen-en-csrd/`, `/csrd/microplastics-probleem/` |
| **Tools** | `/bereken-besparing/`, `/offerte-aanvragen/` |
| **Blog** | `/blog/`, `/blog/[slug]/` |
| **Bedrijfsinfo** | `/over-ons/`, `/contact/`, `/veelgestelde-vragen/` |
| **WooCommerce** | `/winkelwagen/`, `/afrekenen/`, `/mijn-account/` |

---

# Tone of Voice & Messaging

**Core Principle:** Data-driven. Direct. Menselijk. Jij-vorm.

## Brand Voice DNA

```
WE ARE:                          WE ARE NOT:
├─ Data-Driven                   ├─ Hippie-Duurzaam ("Red de planeet!")
├─ Direct                        ├─ Corporate-Saai
├─ Expert                        ├─ Tech-Arrogant
├─ Innovatief                    ├─ Greenwashing
└─ Menselijk (jij-vorm)          └─ Vaag
```

## Jij-Vorm Rules (ALWAYS)

```
✅ USE:                          ❌ NEVER:
- "Bereken je CSRD-impact"       - "Bereken uw impact"
- "Vraag je offerte aan"         - "Vraagt u een offerte aan"
- "Check je besparing"           - Formal u-vorm

Always lowercase 'j' (except at start of sentence)
```

## Greenwashing Rules - BANNED WORDS

**NEVER use these vague terms:**
- "Eco-friendly"
- "Groen" (as description)
- "Milieuvriendelijk"
- "Duurzaam" (without specification)
- "Goed voor de planeet"
- "Natuurlijk" (as selling point)
- "Groene keuze"

**Replace with concrete language:**

| Banned | Use Instead |
|--------|-------------|
| "Eco-friendly" | "Lost op in 2-3 jaar zonder microplastics" |
| "Milieuvriendelijk" | "0% microplastic residue. Geen sporen." |
| "Duurzaam" | "Biologisch afbreekbaar volgens ASTM D6866" |
| "Groen" | "CSRD-compliant. Voldoet aan ESRS E2-5." |
| "Goed voor de planeet" | "Bespaart 700.000 microplastic deeltjes per vlag" |

## Primary Messages (Use 2 of 3 on every page)

1. **ZERO MICROPLASTIC**: "0% microplastic residue. Geen sporen."
2. **CSRD COMPLIANT**: "Voldoet aan ESRS E2-5 rapportage-eisen."
3. **BIOLOGISCH AFBREEKBAAR**: "Lost volledig op in 2-3 jaar."

## Copy Formulas

**Headlines (H1):** `[PROBLEEM OPLOSSEN] + [CONCRETE BELOFTE]`
```
✅ "Vlaggen die verdwijnen. Zero plastic."
✅ "CSRD-compliant binnen 2 weken. Inclusief certificaten."
❌ "Samen bouwen aan een duurzame toekomst"
```

**Subheadlines:** `[SPECIFICATIE] + [MEETBAAR RESULTAAT]`
```
✅ "Lost op in 2-3 jaar. Geen microplastics. Klaar."
❌ "Superduurzaam en eco-vriendelijk"
```

**CTA Buttons:** `[WERKWOORD] + [CONCREET RESULTAAT]`
```
✅ "Bereken je besparing"
✅ "Vraag offerte aan"
✅ "Download CSRD checklist"
❌ "Ontdek meer"
❌ "Klik hier"
```

**Feature Lists:** Meetbare specs only
```
✅ Lost op in 2-3 jaar
✅ 0% microplastic residue
✅ Bespaart 700.000 deeltjes per vlag
❌ Superduurzaam
❌ Eco-friendly
```

## Tone Per Context

| Context | Tone Level | Example |
|---------|------------|---------|
| Homepage/Hero | Bold 90/100 | "Vlaggen die verdwijnen. Zero plastic." |
| Product Pages | Informative 70/100 | "Lost volledig op in 2-3 jaar." |
| CSRD Hub | Expert 85/100 | "Voldoet aan ESRS E2-5 rapportage-eisen" |
| Blog | Educational 60/100 | "CSRD verplicht bedrijven..." |
| Forms | Simple 40/100 | "Bedrijfsnaam" (not "Hoe heet je bedrijf?") |
| Errors | Helpful 50/100 | "Check even je e-mailadres" |

## Microcopy Patterns

**Form Labels:** Short, no questions
```
✅ "Bedrijfsnaam" | "E-mailadres" | "Aantal vlaggen"
❌ "Hoe heet je bedrijf?" | "Wat is je e-mailadres?"
```

**Placeholders:** Concrete examples
```
✅ placeholder="Green Solutions BV"
❌ placeholder="Vul hier je bedrijfsnaam in"
```

**Error Messages:** Problem + Solution
```
✅ "Check even je e-mailadres (bijv. naam@bedrijf.nl)"
❌ "Invalid email format"
```

**Success Messages:** Confirmation + Next step
```
✅ "Offerte verstuurd! Check je inbox binnen 5 minuten."
❌ "Success!"
```

## Target Audience Tone

| Audience | Key Message | Tone |
|----------|-------------|------|
| Grote Bedrijven (250+) | "Voldoe aan ESRS E2-5" | Expert 85/100 |
| MKB (50-250) | "CSRD-proof voor als het verplicht wordt" | Pragmatic 70/100 |
| Gemeenten | "Geef het goede voorbeeld" | Public Value 75/100 |
| Verenigingen/Events | "Event zonder plastic sporen" | Energetic 60/100 |

---

# Design System - Styleguide V5.0 (Sora Edition)

**Status**: Production Ready
**Version**: 5.0.0 (Full Sora System)

## Core CSS Variables

```css
:root {
    /* ===== COLORS ===== */
    --color-forest: #2C5F4F;
    --color-terracotta: #C66B4E;
    --color-sage-blue: #5C8A9D;
    --color-copper-rust: #A46B4A;
    --color-sage-purple: #8B7BA8;
    --color-white: #FFFFFF;
    --color-off-white: #F7F5F2;
    --color-charcoal: #3A3A3A;
    --color-stone: #8B8D7A;

    /* ===== FONTS ===== */
    --font-eyebrow: 'Bricolage Grotesque', system-ui, sans-serif;
    --font-heading: 'Sora', system-ui, sans-serif;
    --font-button: 'Sora', system-ui, sans-serif;
    --font-body: 'Manrope', system-ui, sans-serif;
    --font-ui: 'Sora', system-ui, sans-serif;

    /* ===== SPACING SCALE ===== */
    --space-xs: 8px;
    --space-sm: 16px;
    --space-md: 24px;
    --space-lg: 32px;
    --space-xl: 48px;
    --space-2xl: 64px;
    --space-3xl: 96px;
    --space-4xl: 128px;

    /* ===== BORDER RADIUS ===== */
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 14px;
    --radius-xl: 20px;
    --radius-2xl: 28px;

    /* ===== SHADOWS ===== */
    --shadow-xs: 0 1px 3px rgba(44, 95, 79, 0.08);
    --shadow-sm: 0 2px 8px rgba(44, 95, 79, 0.12);
    --shadow-md: 0 4px 16px rgba(44, 95, 79, 0.15);
    --shadow-lg: 0 8px 24px rgba(44, 95, 79, 0.25);
    --shadow-xl: 0 12px 32px rgba(44, 95, 79, 0.35);
    --shadow-2xl: 0 20px 60px rgba(44, 95, 79, 0.4);

    /* Color-specific shadows */
    --shadow-terracotta-md: 0 8px 24px rgba(198, 107, 78, 0.25);
    --shadow-sage-md: 0 8px 24px rgba(92, 138, 157, 0.25);
    --shadow-copper: 0 4px 20px rgba(164, 107, 74, 0.3);
    --shadow-purple: 0 4px 16px rgba(139, 123, 168, 0.2);

    /* ===== Z-INDEX SCALE ===== */
    --z-base: 1;
    --z-dropdown: 100;
    --z-sticky: 200;
    --z-overlay: 300;
    --z-modal: 400;
    --z-toast: 500;

    /* ===== ANIMATION ===== */
    --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
    --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --duration-fast: 150ms;
    --duration-base: 300ms;
    --duration-slow: 500ms;

    /* ===== BREAKPOINTS ===== */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
    --breakpoint-2xl: 1600px;

    /* ===== CONTAINER ===== */
    --container-max: 1600px;
    --container-padding: var(--space-2xl);
}
```

## Color Opacity Scales

```css
:root {
    /* Forest Green */
    --forest-3: rgba(44, 95, 79, 0.04);
    --forest-6: rgba(44, 95, 79, 0.12);
    --forest-8: rgba(44, 95, 79, 0.2);
    --forest-15: rgba(44, 95, 79, 0.15);

    /* Terracotta */
    --terracotta-3: rgba(198, 107, 78, 0.04);
    --terracotta-6: rgba(198, 107, 78, 0.12);
    --terracotta-8: rgba(198, 107, 78, 0.2);
    --terracotta-15: rgba(198, 107, 78, 0.15);

    /* Sage Blue */
    --sage-blue-3: rgba(92, 138, 157, 0.04);
    --sage-blue-6: rgba(92, 138, 157, 0.12);
    --sage-blue-8: rgba(92, 138, 157, 0.2);
    --sage-blue-15: rgba(92, 138, 157, 0.15);

    /* Copper Rust */
    --copper-rust-3: rgba(164, 107, 74, 0.04);
    --copper-rust-6: rgba(164, 107, 74, 0.12);
    --copper-rust-8: rgba(164, 107, 74, 0.2);
    --copper-rust-15: rgba(164, 107, 74, 0.15);

    /* Sage Purple */
    --sage-purple-3: rgba(139, 123, 168, 0.04);
    --sage-purple-6: rgba(139, 123, 168, 0.12);
    --sage-purple-8: rgba(139, 123, 168, 0.2);
    --sage-purple-15: rgba(139, 123, 168, 0.15);
}
```

## Color Usage Guide

| Purpose | Color | Hex |
|---------|-------|-----|
| Primary actions, trust | Forest Green | `#2C5F4F` |
| Energy, conversion, warmth | Terracotta | `#C66B4E` |
| Secondary actions, success | Sage Blue | `#5C8A9D` |
| Premium craft (eyebrows only, 3%) | Copper Rust | `#A46B4A` |
| Personal elements (profiles, 5%) | Sage Purple | `#8B7BA8` |
| Body text | Charcoal | `#3A3A3A` |
| Subtle text | Stone | `#8B8D7A` |

## Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Bricolage Grotesque - Eyebrow badges ONLY -->
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&display=swap" rel="stylesheet">

<!-- Sora - Headings, Buttons, UI, Forms, Everything -->
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Manrope - Body text ONLY -->
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap" rel="stylesheet">
```

## Typography Quick Reference

| Element | Font | Weight | Size | Transform |
|---------|------|--------|------|-----------|
| Eyebrow Badge | Bricolage Grotesque | 700 | 13px | none |
| Hero H1 | Sora | 800 | 48-88px | none |
| Section H2 | Sora | 700 | 36-60px | none |
| Subsection H3 | Sora | 600 | 24-32px | none |
| Card Title H4 | Sora | 600 | 20px | none |
| Buttons | Sora | 800 | 15px | none |
| Body Text | Manrope | 400 | 16-18px | none |
| Small Text | Manrope | 400 | 15px | none |
| Caption | Manrope | 500 | 13px | none |
| Form Labels | Sora | 700 | 12px | UPPERCASE |
| Form Inputs | Sora | 500 | 15px | none |
| Stat Values | Sora | 800 | 28px | none |
| Stat Labels | Sora | 700 | 10px | UPPERCASE |
| Small Badges | Sora | 700 | 11px | UPPERCASE |

## Button Decision Tree

```
NEED A BUTTON?
├─ Main conversion? → .btn-primary
│  └─ Forest (#2C5F4F) → Terracotta hover, Sora 800, white text
├─ Alternative action? → .btn-secondary
│  └─ White → Sage Blue hover, Sora 800, white text on hover
└─ Low priority? → .btn-tertiary
   └─ Transparent → Forest hover, Sora 800, white text on hover
```

### Button Base CSS

```css
.btn {
    font-family: var(--font-button);
    font-weight: 800;
    font-size: 15px;
    letter-spacing: -0.01em;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 20px 36px;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    cursor: pointer;
    transition: all var(--duration-base) var(--ease-out);
    border: none;
}

.btn-primary {
    background: var(--color-forest);
    color: white;
}

.btn-primary:hover {
    background: var(--color-terracotta);
    color: white !important;
    transform: translateY(-3px);
    box-shadow: var(--shadow-terracotta-md);
}

.btn-secondary {
    background: white;
    color: var(--color-forest);
    border: 3px solid var(--forest-6);
}

.btn-secondary:hover {
    background: var(--color-sage-blue);
    color: white !important;
    border-color: var(--color-sage-blue);
    transform: translateY(-3px);
}

.btn-tertiary {
    background: transparent;
    color: var(--color-charcoal);
    border: 2px solid var(--terracotta-6);
}

.btn-tertiary:hover {
    background: var(--color-forest);
    color: white !important;
    border-color: var(--color-forest);
}
```

### Button Sizes

```css
.btn-sm { font-size: 14px; padding: 14px 24px; border-radius: var(--radius-md); }
.btn-lg { font-size: 16px; padding: 24px 44px; border-radius: var(--radius-xl); }
.btn-full { width: 100%; justify-content: center; }
```

## Badge Decision Tree

```
NEED A BADGE?
├─ Hero/premium message? → .badge-eyebrow
│  └─ Copper Rust, Bricolage 700
├─ Important classification? → .badge-primary
│  └─ Forest, Sora 700 uppercase
├─ Success indicator? → .badge-success
│  └─ Sage Blue, Sora 700 uppercase
├─ Personal content? → .badge-personal
│  └─ Sage Purple, Sora 700 uppercase
├─ Metadata/specs? → .badge-detail
│  └─ Sage Purple, Sora 600 uppercase
└─ Subtle info? → .badge-outline
   └─ Transparent, Sora 600 uppercase
```

### Badge Usage

| Badge | Color | Use For |
|-------|-------|---------|
| `.badge-eyebrow` | Copper Rust | Premium messaging, hero sections |
| `.badge-primary` | Forest | CSRD, compliance, categories |
| `.badge-success` | Sage Blue | Verified, in stock, approved |
| `.badge-personal` | Sage Purple | User profiles, favorites, bookmarks |
| `.badge-detail` | Sage Purple | Delivery time, specs, metadata |
| `.badge-outline` | Transparent | Blog tags, filter chips |

## Form Styling

```css
/* All form inputs use Sora */
input, textarea, select {
    font-family: var(--font-ui);
    font-weight: 500;
    font-size: 15px;
    padding: var(--space-sm) 20px;
    border: 2px solid var(--forest-6);
    border-radius: var(--radius-md);
    transition: all var(--duration-base) var(--ease-out);
}

input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: var(--color-forest);
    box-shadow: 0 0 0 4px var(--forest-3);
}

/* Labels - Sora uppercase */
label {
    font-family: var(--font-ui);
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
```

## Spacing Scale

| Variable | Value | Use For |
|----------|-------|---------|
| `--space-xs` | 8px | Icon gaps, tight padding |
| `--space-sm` | 16px | Form padding, close elements |
| `--space-md` | 24px | Card padding, element gaps |
| `--space-lg` | 32px | Section elements, grid gaps |
| `--space-xl` | 48px | Component spacing |
| `--space-2xl` | 64px | Section padding, containers |
| `--space-3xl` | 96px | Major section breaks |
| `--space-4xl` | 128px | Hero sections |

## Container System

```css
.container {
    max-width: var(--container-max); /* 1600px */
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-2xl);
    padding-right: var(--space-2xl);
}

.container-narrow { max-width: 680px; }
.container-medium { max-width: 960px; }
```

## Animation Defaults

- **Duration**: 300ms (base), 150ms (fast), 500ms (slow)
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out default)
- **Hover transforms**: `translateY(-3px)` for buttons
- **Float animation**: 4s infinite for stat cards

## Key Interaction Rules

1. **Always white text on button hover** - Never change to another color
2. **Smooth transitions** - 300ms default for all interactive elements
3. **Subtle elevation** - Use translateY for hover states
4. **Tech grid backgrounds** - For hero sections
5. **Glassmorphism** - Use backdrop-filter for elevated cards

## Font Distribution

- **Sora**: 70% (headings, buttons, UI, forms, badges, stats)
- **Manrope**: 25% (body text, captions, helper text)
- **Bricolage Grotesque**: 5% (eyebrow badges only)

---

# Quick Reference Checklist

## Before Publishing Any Copy

- [ ] Is it in jij-vorm? (lowercase j)
- [ ] Is it data-driven? (numbers, facts)
- [ ] Is it specific? (no vague claims)
- [ ] Have I avoided greenwashing words?
- [ ] Does it include at least 1 primary message?
- [ ] Does the tone match the context?
- [ ] Is there a clear next step (CTA)?

## The Golden Rules

1. **DATA > EMOTION**: "700.000 deeltjes bespaard" not "Goed voor de natuur"
2. **SPECIFIC > VAGUE**: "Lost op in 2-3 jaar" not "Duurzaam"
3. **JIJ-VORM > U-VORM**: "Bereken je besparing" not "Bereken uw besparing"
4. **DIRECT > FLUFFY**: "Zero plastic. Klaar." not "Een stap richting een betere toekomst"
5. **PROOF > CLAIMS**: "Voldoet aan ESRS E2-5" not "Beste keuze voor het milieu"

---

*Design System: V5.0.0 | Tone of Voice: V1.0 | Last updated: December 2024*
