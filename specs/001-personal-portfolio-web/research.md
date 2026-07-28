# Research: Personal Portfolio Web

**Date**: 2026-07-27
**Feature**: 001-personal-portfolio-web

## Decisions

### 1. Build Tool: Vite

**Decision**: Use Vite as the build tool and development server.

**Rationale**:
- User explicitly requested Vite
- Fast hot module replacement (HMR) for development
- Optimized production builds with Rollup
- Native TypeScript and JSX support
- Excellent React ecosystem integration

**Alternatives considered**:
- Create React App: Deprecated, slower builds
- Next.js: Overkill for static portfolio, SSR not needed
- Webpack: More complex configuration, slower HMR

---

### 2. UI Framework: React 18

**Decision**: Use React 18 with functional components and hooks.

**Rationale**:
- Bryan has React experience (from CV)
- Component-based architecture suits portfolio sections
- Large ecosystem for future enhancements
- TypeScript support excellent

**Alternatives considered**:
- Vue.js: Good but Bryan's experience is React
- Svelte: Smaller ecosystem, less familiar
- Astro: Better for content-heavy sites, but React skills transfer better

---

### 3. Styling: Tailwind CSS 3

**Decision**: Use Tailwind CSS for styling.

**Rationale**:
- Utility-first approach enables rapid development
- Built-in responsive design utilities (mobile-first)
- Accessibility utilities available
- Small production bundle with purging
- No CSS-in-JS runtime overhead

**Alternatives considered**:
- CSS Modules: More verbose, slower development
- Styled Components: Runtime overhead, larger bundle
- Bootstrap: Less customizable, heavier

---

### 4. Deployment: Cloudflare Pages

**Decision**: Deploy to Cloudflare Pages.

**Rationale**:
- User explicitly requested
- Free tier sufficient for static portfolio
- Global CDN for fast loading
- Automatic HTTPS
- Git integration for CI/CD

**Alternatives considered**:
- Vercel: Good but user chose Cloudflare
- Netlify: Similar features, user preference
- GitHub Pages: Limited features

---

### 5. Language: TypeScript

**Decision**: Use TypeScript for type safety.

**Rationale**:
- Catches errors at compile time
- Better IDE support and autocomplete
- Industry standard for React projects
- Constitution requires documentation, types serve as documentation

**Alternatives considered**:
- JavaScript: Less type safety, more runtime errors

---

### 6. Testing: Vitest

**Decision**: Use Vitest for unit and integration testing.

**Rationale**:
- Vite-native test runner
- Compatible with Jest API
- Fast execution
- React Testing Library integration

**Alternatives considered**:
- Jest: Slower with Vite, requires configuration
- Cypress: E2E only, overkill for unit tests

---

### 7. Linting: ESLint + Prettier

**Decision**: Use ESLint for code quality and Prettier for formatting.

**Rationale**:
- Industry standard
- Prevents code style issues
- Constitution requires clean code
- Integrates with CI/CD

**Alternatives considered**:
- Biome: Newer, less ecosystem support

---

### 8. SEO: React Helmet

**Decision**: Use react-helmet-async for meta tags.

**Rationale**:
- Manages document head for SEO
- Open Graph tags for social sharing
- Constitution requires metadata (FR-009)

**Alternatives considered**:
- Next.js built-in: Not using Next.js
- Manual meta tags: More error-prone

---

### 9. Animations: Framer Motion

**Decision**: Use Framer Motion for animations (optional, minimal use).

**Rationale**:
- Purposeful animations per constitution
- Respects prefers-reduced-motion
- Lightweight alternative to full animation libraries

**Alternatives considered**:
- CSS animations: Limited control
- React Spring: More complex API
- No animations: Possible, but animations improve UX

---

### 10. Icons: Lucide React

**Decision**: Use Lucide React for icons.

**Rationale**:
- Tree-shakeable (only imports used icons)
- Consistent design
- Lightweight
- Good React support

**Alternatives considered**:
- Font Awesome: Heavier, requires font loading
- Heroicons: Good but fewer icons
- Material Icons: Google-branded, not ideal

---

## Best Practices Identified

### Performance
- Use lazy loading for images (native `loading="lazy"`)
- Implement code splitting with React.lazy
- Optimize images to WebP format
- Use semantic HTML for better SEO and accessibility

### Accessibility
- Use semantic elements (header, nav, main, section, footer)
- Implement ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Touch targets minimum 44x44px
- Flexible layouts with CSS Grid and Flexbox
- Test on multiple viewport sizes

### Content Management
- Separate data from components
- Use TypeScript interfaces for type safety
- Keep data files flat and easy to update
- Document how to update content

## Research Sources

- Vite documentation: https://vitejs.dev/
- Tailwind CSS documentation: https://tailwindcss.com/
- React documentation: https://react.dev/
- Cloudflare Pages documentation: https://developers.cloudflare.com/pages/
- WCAG 2.1 guidelines: https://www.w3.org/WAI/WCAG21/quickref/