# Tasks: Personal Portfolio Web

**Input**: Design documents from `/specs/001-personal-portfolio-web/`

**Prerequisites**: plan.md, spec.md, data-model.md, contracts/

**Tests**: Not explicitly requested in specification. Test tasks are optional.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `public/` at repository root
- Paths follow Vite + React structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Vite project with React and TypeScript in project root
- [x] T002 Install and configure Tailwind CSS 3.x in tailwind.config.js
- [x] T003 [P] Configure ESLint and Prettier in .eslintrc.cjs and .prettierrc
- [x] T004 [P] Create project directory structure (src/components, src/data, src/hooks, public/images)
- [x] T005 [P] Configure TypeScript paths in tsconfig.json for @/ imports

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Create TypeScript interfaces in src/types/index.ts (Profile, SkillCategory, Project, WorkExperience, Education, NavItem)
- [x] T007 [P] Create profile data file in src/data/profile.ts with Bryan's information
- [x] T008 [P] Create skills data file in src/data/skills.ts with 4 categories
- [x] T009 [P] Create projects data file in src/data/projects.ts with 2 featured projects
- [x] T010 [P] Create experience data file in src/data/experience.ts with 4 work entries
- [x] T011 [P] Create education data file in src/data/education.ts with degree and certifications
- [x] T012 [P] Create navigation data file in src/data/navigation.ts with 6 items
- [x] T013 Set up global styles in src/styles/globals.css with Tailwind directives
- [x] T014 Create main App.tsx component structure with section routing
- [x] T015 [P] Create UI components: Button.tsx, Card.tsx, Badge.tsx, Timeline.tsx in src/components/ui/

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Professional Profile Presentation (Priority: P1) 🎯 MVP

**Goal**: Display Bryan's professional profile with hero section and contact information

**Independent Test**: Load homepage and verify all profile elements visible and contact links work

### Implementation for User Story 1

- [x] T016 [P] [US1] Create Hero.tsx component in src/components/sections/Hero.tsx
- [x] T017 [P] [US1] Create Contact.tsx component in src/components/sections/Contact.tsx
- [x] T018 [US1] Create Header.tsx layout component in src/components/layout/Header.tsx
- [x] T019 [US1] Create Navigation.tsx component in src/components/layout/Navigation.tsx
- [x] T020 [US1] Create Footer.tsx component in src/components/layout/Footer.tsx
- [x] T021 [US1] Integrate Hero, Header, Footer into App.tsx
- [x] T022 [US1] Add profile photo placeholder in public/images/profile.jpg
- [x] T023 [US1] Configure SEO metadata (title, description, OG tags) in index.html

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Skills Showcase (Priority: P2)

**Goal**: Display technical skills organized by category

**Independent Test**: Scroll to skills section and verify all categories and items displayed

### Implementation for User Story 2

- [x] T024 [P] [US2] Create Skills.tsx component in src/components/sections/Skills.tsx
- [x] T025 [US2] Import Lucide icons for skill categories (Code, Database, Wrench, Users)
- [x] T026 [US2] Integrate Skills section into App.tsx after Hero section

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Project Portfolio (Priority: P3)

**Goal**: Showcase featured projects with descriptions and technologies

**Independent Test**: Navigate to projects section and verify project cards display correctly

### Implementation for User Story 3

- [x] T027 [P] [US3] Create Projects.tsx component in src/components/sections/Projects.tsx
- [x] T028 [US3] Create ProjectCard sub-component for individual project display
- [x] T029 [US3] Add project images placeholder in public/images/projects/
- [x] T030 [US3] Integrate Projects section into App.tsx after Skills section

**Checkpoint**: At this point, User Stories 1, 2, AND 3 should all work independently

---

## Phase 6: User Story 4 - Professional Experience Timeline (Priority: P4)

**Goal**: Display work experience in timeline format

**Independent Test**: Scroll to experience section and verify timeline displays correctly

### Implementation for User Story 4

- [x] T031 [P] [US4] Create Experience.tsx component in src/components/sections/Experience.tsx
- [x] T032 [US4] Integrate Timeline component from src/components/ui/Timeline.tsx
- [x] T033 [US4] Integrate Experience section into App.tsx after Projects section

**Checkpoint**: At this point, User Stories 1-4 should all work independently

---

## Phase 7: User Story 5 - Education and Certifications (Priority: P5)

**Goal**: Display educational background and certifications

**Independent Test**: Scroll to education section and verify degree and certifications displayed

### Implementation for User Story 5

- [x] T034 [P] [US5] Create Education.tsx component in src/components/sections/Education.tsx
- [x] T035 [US5] Integrate Education section into App.tsx after Experience section
- [x] T036 [US5] Add Contact section after Education in App.tsx

**Checkpoint**: At this point, User Stories 1-5 should all work independently

---

## Phase 8: User Story 6 - Responsive Mobile Experience (Priority: P6)

**Goal**: Ensure portfolio displays correctly on all devices

**Independent Test**: Resize browser or use device emulation to verify responsive layout

### Implementation for User Story 6

- [x] T037 [P] [US6] Create useScrollSpy.ts hook in src/hooks/useScrollSpy.ts for active section tracking
- [x] T038 [US6] Add responsive navigation hamburger menu for mobile viewports
- [x] T039 [US6] Verify touch targets meet 44x44px minimum on mobile components
- [x] T040 [US6] Test responsive breakpoints: 320px, 768px, 1024px, 1440px

**Checkpoint**: All user stories should now be independently functional

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T041 [P] Add lazy loading to all images using native loading="lazy" attribute
- [x] T042 [P] Add smooth scroll behavior for navigation links
- [x] T043 [P] Create favicon.ico and apple-touch-icon in public/
- [x] T044 Add print stylesheet for clean printing
- [x] T045 Add noscript fallback message for JavaScript-disabled browsers
- [x] T046 Configure Cloudflare Pages deployment in wrangler.toml or via dashboard
- [ ] T047 Run Lighthouse audit and verify scores: Performance ≥ 90, Accessibility ≥ 90
- [x] T048 Create README.md with setup instructions and project documentation
- [x] T049 Create CHANGELOG.md for versioning (constitution requirement)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-8)**: All depend on Foundational phase completion
  - User stories can proceed in parallel (if team capacity allows)
  - Or sequentially in priority order (P1 → P2 → P3 → P4 → P5 → P6)
- **Polish (Phase 9)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent of US1
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Independent of US1, US2
- **User Story 4 (P4)**: Can start after Foundational (Phase 2) - Independent of US1-3
- **User Story 5 (P5)**: Can start after Foundational (Phase 2) - Independent of US1-4
- **User Story 6 (P6)**: Depends on all other stories being complete (verifies responsive behavior)

### Within Each User Story

- Data files created in Phase 2 (shared across all stories)
- UI components before section components
- Section components before integration into App.tsx
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, user stories 1-5 can start in parallel
- All section components can be developed simultaneously by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all layout components for User Story 1 together:
Task: "Create Hero.tsx component in src/components/sections/Hero.tsx"
Task: "Create Contact.tsx component in src/components/sections/Contact.tsx"
Task: "Create Header.tsx layout component in src/components/layout/Header.tsx"
Task: "Create Navigation.tsx component in src/components/layout/Navigation.tsx"
Task: "Create Footer.tsx component in src/components/layout/Footer.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy to Cloudflare Pages if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 (Hero + Contact) → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 (Skills) → Test independently → Deploy/Demo
4. Add User Story 3 (Projects) → Test independently → Deploy/Demo
5. Add User Story 4 (Experience) → Test independently → Deploy/Demo
6. Add User Story 5 (Education) → Test independently → Deploy/Demo
7. Add User Story 6 (Responsive verification) → Final validation
8. Polish phase → Production-ready

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Hero + Contact + Navigation)
   - Developer B: User Story 2 (Skills) + User Story 3 (Projects)
   - Developer C: User Story 4 (Experience) + User Story 5 (Education)
3. Stories complete and integrate independently
4. Team validates User Story 6 (Responsive) together

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence

## Task Summary

| Phase | Task Count | Parallel Tasks |
|-------|------------|----------------|
| Phase 1: Setup | 5 | 3 |
| Phase 2: Foundational | 10 | 6 |
| Phase 3: US1 - Hero | 8 | 2 |
| Phase 4: US2 - Skills | 3 | 1 |
| Phase 5: US3 - Projects | 4 | 1 |
| Phase 6: US4 - Experience | 3 | 1 |
| Phase 7: US5 - Education | 3 | 1 |
| Phase 8: US6 - Responsive | 4 | 1 |
| Phase 9: Polish | 9 | 3 |
| **Total** | **49** | **19** |
