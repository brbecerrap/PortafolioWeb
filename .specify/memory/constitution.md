<!-- Sync Impact Report
Version change: 0.0.0 → 1.0.0 (initial constitution)
Added sections: All (initial creation)
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ reviewed
  - .specify/templates/spec-template.md ✅ reviewed
  - .specify/templates/tasks-template.md ✅ reviewed
Follow-up TODOs: None
-->

# Portafolio Web Constitution

## Core Principles

### I. Accessibility

All user-facing interfaces MUST comply with WCAG 2.1 Level AA standards. Semantic HTML5 elements MUST be used for document structure. Interactive elements MUST be keyboard-navigable with visible focus indicators. All images MUST have descriptive alt text. Color contrast ratios MUST meet minimum requirements (4.5:1 for normal text, 3:1 for large text).

### II. Performance

Core Web Vitals MUST meet "Good" thresholds: LCP < 2.5s, FID < 100ms, CLS < 0.1. Images MUST be optimized and use modern formats (WebP/AVIF) with lazy loading. JavaScript bundles MUST be code-split and tree-shaken. Third-party scripts MUST be loaded asynchronously or deferred.

### III. Responsive Design

Layouts MUST follow mobile-first design principles. Breakpoints MUST target common device viewports (320px, 768px, 1024px, 1440px). Touch targets MUST be minimum 44x44px on mobile. Content MUST reflow without horizontal scrolling at any viewport width.

### IV. Simplicity

Code MUST follow YAGNI principles—implement only current requirements. Dependencies MUST be justified and minimal. Component complexity MUST be kept manageable (prefer small, focused components). Dead code and unused dependencies MUST be removed promptly.

### V. Versioning

Releases MUST follow Semantic Versioning (MAJOR.MINOR.PATCH). A CHANGELOG.md MUST be maintained documenting all notable changes. Breaking changes MUST increment MAJOR version. New features MUST increment MINOR version. Bug fixes MUST increment PATCH version.

## Technology Stack Requirements

Frontend framework and build tools MUST be documented in README.md. All dependencies MUST have pinned versions in lock files. Development environment MUST be reproducible via standard tooling (npm/yarn/pnpm). Deployment targets MUST be specified and consistent across environments.

## Content & Design Guidelines

Portfolio content MUST be accurate and current. Visual design MUST maintain consistent typography, color palette, and spacing. Animations MUST be purposeful and respect prefers-reduced-motion. Metadata (title, description, OG tags) MUST be present for SEO and social sharing.

## Governance

This constitution supersedes all other development practices for the Portafolio Web project. All pull requests and code reviews MUST verify compliance with these principles. Amendments to this constitution require documented justification, approval, and a migration plan for existing code. Complexity beyond these principles MUST be explicitly justified in code comments or documentation.

**Version**: 1.0.0 | **Ratified**: 2026-07-27 | **Last Amended**: 2026-07-27