# Feature Specification: Text-Only Mode & Dark Mode Toggle

**Feature Branch**: `002-text-only-dark-mode`

**Created**: 2026-07-27

**Status**: Draft

**Input**: User description: "Elimina todos los items que requieran imagenes. Solo lo haremos con texto. Añade además un modo claro/oscuro"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Remove Image Dependencies (Priority: P1)

As a visitor, I want to see the portfolio content without any images so that the site loads faster and works reliably on slow connections or when images fail to load.

**Why this priority**: This is the primary request - making the site text-only. It simplifies maintenance (no need to source/manage images) and improves performance.

**Independent Test**: Can be fully tested by loading the homepage and verifying all sections display correctly without any image elements.

**Acceptance Scenarios**:

1. **Given** a visitor loads the homepage, **When** the page renders, **Then** no image elements (img tags, background images, profile photos) are present
2. **Given** a visitor views the Hero section, **When** they look for the profile photo, **Then** they see a text-based avatar or initial instead
3. **Given** a visitor views the Projects section, **When** they look for project screenshots, **Then** they see project cards with text-only content (title, description, technologies)
4. **Given** a visitor views any section, **When** they inspect the page, **Then** all visual elements are achieved through CSS/text only

---

### User Story 2 - Dark Mode Toggle (Priority: P2)

As a visitor, I want to switch between light and dark modes so that I can view the portfolio in my preferred color scheme, especially in low-light environments.

**Why this priority**: Dark mode improves readability in dark environments, reduces eye strain, and is a modern UX expectation. It respects user preferences.

**Independent Test**: Can be tested by clicking the theme toggle button and verifying the color scheme changes correctly across all sections.

**Acceptance Scenarios**:

1. **Given** a visitor loads the portfolio, **When** they look for a theme toggle, **Then** they find a visible button/icon to switch between light and dark modes
2. **Given** a visitor is in light mode, **When** they click the dark mode toggle, **Then** all sections instantly switch to dark color scheme (dark background, light text)
3. **Given** a visitor is in dark mode, **When** they click the light mode toggle, **Then** all sections instantly switch to light color scheme (light background, dark text)
4. **Given** a visitor selects a mode, **When** they refresh the page, **Then** their preference is remembered and applied
5. **Given** a visitor has system dark mode enabled, **When** they first visit the site, **Then** the site automatically matches their system preference

---

### User Story 3 - Text-Based Visual Enhancements (Priority: P3)

As a visitor, I want the text-only design to still look professional and visually appealing through typography, spacing, and color rather than relying on images.

**Why this priority**: A text-only design can still be beautiful and professional. This ensures the portfolio doesn't look plain or incomplete.

**Independent Test**: Can be tested by visually inspecting the site and confirming it uses typography hierarchy, icons, and color to create visual interest.

**Acceptance Scenarios**:

1. **Given** a visitor views any section, **When** they look at the design, **Then** they see clear typography hierarchy (headings, subheadings, body text)
2. **Given** a visitor views the Skills section, **When** they look at skill categories, **Then** they see icons (Lucide) representing each category
3. **Given** a visitor views the Experience timeline, **When** they look at the visual elements, **Then** they see dots, lines, and color coding to distinguish entries
4. **Given** a visitor views the site in dark mode, **When** they look at the color scheme, **Then** they see sufficient contrast for readability (WCAG AA compliant)

---

### Edge Cases

- What happens when a visitor's browser doesn't support CSS custom properties? The site should fall back to light mode
- What happens when localStorage is disabled? The site should use system preference or default to light mode
- How does the theme toggle work on first visit before JavaScript loads? The site should briefly show a neutral state or use CSS to detect system preference
- What happens when the visitor prints the page? A print stylesheet should use light mode for readability

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST remove all img tags, background-image CSS properties, and image-based visual elements from all components
- **FR-002**: System MUST replace profile photo with a text-based avatar (initials or icon) in the Hero section
- **FR-003**: System MUST remove project images from the Projects section cards
- **FR-004**: System MUST provide a visible toggle button for switching between light and dark modes
- **FR-005**: System MUST persist user's theme preference in localStorage
- **FR-006**: System MUST detect and respect the user's system color scheme preference (prefers-color-scheme)
- **FR-007**: System MUST apply theme changes instantly without page reload
- **FR-008**: System MUST ensure all text meets WCAG 2.1 AA contrast requirements in both light and dark modes
- **FR-009**: System MUST use CSS custom properties (variables) for theme colors to enable easy switching
- **FR-010**: System MUST include a print stylesheet that defaults to light mode for printing

### Key Entities

- **Theme Preference**: User's selected color scheme (light/dark/system)
- **Color Palette**: Set of colors defined for each theme mode

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The portfolio loads without any image requests (0 image HTTP requests)
- **SC-002**: Theme toggle switches between light and dark mode in under 100ms
- **SC-003**: Theme preference persists across page reloads and browser sessions
- **SC-004**: All text achieves WCAG 2.1 AA contrast ratio (4.5:1 for normal text) in both themes
- **SC-005**: The site automatically matches system dark/light preference on first visit
- **SC-006**: Print output always uses light mode for readability

## Assumptions

- The existing portfolio codebase is the starting point for modifications
- All image references (profile photo, project images, background images) will be removed
- The text-based avatar will use Bryan's initials ("BB")
- Icons from Lucide React will replace any image-based visual indicators
- The theme toggle will be placed in the header/navigation for easy access
- Dark mode will use a carefully designed color palette that maintains readability
- The system preference detection will use the CSS media query `prefers-color-scheme`
- localStorage will be used for persistence (not cookies or server-side storage)