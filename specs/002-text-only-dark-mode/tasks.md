# Tasks: Text-Only Mode & Dark Mode Toggle

**Input**: Design documents from `/specs/002-text-only-dark-mode/`

**Prerequisites**: spec.md (existing codebase as starting point)

**Tests**: Not explicitly requested in specification. Test tasks are optional.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Existing project**: `src/` at repository root
- Paths follow existing Vite + React structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Minimal setup for new feature (project already exists)

- [x] T001 [P] Create ThemeContext in src/contexts/ThemeContext.tsx for theme state management
- [x] T002 [P] Create useTheme hook in src/hooks/useTheme.ts for theme access
- [x] T003 [P] Define light/dark color palettes in src/styles/themes.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Add CSS custom properties for light theme in src/styles/globals.css
- [x] T005 Add CSS custom properties for dark theme in src/styles/globals.css
- [x] T006 Add media query for prefers-color-scheme in src/styles/globals.css
- [x] T007 Add print stylesheet (light mode only) in src/styles/globals.css
- [x] T008 Wrap App with ThemeProvider in src/App.tsx
- [x] T009 Add localStorage persistence logic in src/contexts/ThemeContext.tsx
- [x] T010 Add system preference detection in src/contexts/ThemeContext.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Remove Image Dependencies (Priority: P1) 🎯 MVP

**Goal**: Remove all image elements and replace with text-based alternatives

**Independent Test**: Load homepage and verify no img tags or background images exist

### Implementation for User Story 1

- [x] T011 [P] [US1] Remove profile photo img from Hero.tsx, replace with text avatar using initials "BB"
- [x] T012 [P] [US1] Remove project image img from Projects.tsx project cards
- [x] T013 [US1] Remove any background-image CSS from globals.css or component styles
- [x] T014 [US1] Remove image-related imports (if any) from components
- [x] T015 [US1] Verify no img tags remain in any component using build check

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Dark Mode Toggle (Priority: P2)

**Goal**: Add toggle button to switch between light and dark modes

**Independent Test**: Click toggle button and verify color scheme changes across all sections

### Implementation for User Story 2

- [x] T016 [P] [US2] Create ThemeToggle.tsx component in src/components/ui/ThemeToggle.tsx
- [x] T017 [US2] Add Sun/Moon icons from Lucide to ThemeToggle component
- [x] T018 [US2] Integrate ThemeToggle into Header.tsx navigation
- [x] T019 [US2] Apply theme classes to Hero.tsx component
- [x] T020 [US2] Apply theme classes to Skills.tsx component
- [x] T021 [US2] Apply theme classes to Projects.tsx component
- [x] T022 [US2] Apply theme classes to Experience.tsx component
- [x] T023 [US2] Apply theme classes to Education.tsx component
- [x] T024 [US2] Apply theme classes to Contact.tsx component
- [x] T025 [US2] Apply theme classes to Footer.tsx component
- [x] T026 [US2] Apply theme classes to Navigation.tsx component

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Text-Based Visual Enhancements (Priority: P3)

**Goal**: Ensure text-only design looks professional with typography and icons

**Independent Test**: Visually inspect site for typography hierarchy and icon usage

### Implementation for User Story 3

- [x] T027 [P] [US3] Verify typography hierarchy in all section components
- [x] T028 [P] [US3] Add/verify Lucide icons for skill categories in Skills.tsx
- [x] T029 [P] [US3] Verify timeline visual elements (dots, lines) in Experience.tsx
- [x] T030 [US3] Test color contrast ratios in both light and dark modes
- [x] T031 [US3] Add focus indicators for keyboard navigation (accessibility)

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T032 [P] Add smooth transition animation for theme switching (0.2s ease)
- [x] T033 [P] Add aria-label to theme toggle for screen readers
- [x] T034 [P] Test theme persistence across page reloads
- [x] T035 [P] Test system preference detection on fresh visit
- [x] T036 Test print output defaults to light mode
- [x] T037 Run build and verify no TypeScript errors
- [x] T038 Update CHANGELOG.md with new feature

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User stories can proceed in parallel (if team capacity allows)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent of US1
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Independent of US1, US2

### Within Each User Story

- UI components before integration
- Section components before App.tsx changes
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, user stories 1-3 can start in parallel
- All section theme application tasks can be done simultaneously

---

## Parallel Example: User Story 2

```bash
# Launch all theme application tasks for User Story 2 together:
Task: "Apply theme classes to Hero.tsx component"
Task: "Apply theme classes to Skills.tsx component"
Task: "Apply theme classes to Projects.tsx component"
Task: "Apply theme classes to Experience.tsx component"
Task: "Apply theme classes to Education.tsx component"
Task: "Apply theme classes to Contact.tsx component"
Task: "Apply theme classes to Footer.tsx component"
Task: "Apply theme classes to Navigation.tsx component"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test text-only mode independently
5. Deploy if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 (Remove Images) → Test independently → Deploy (MVP!)
3. Add User Story 2 (Dark Mode) → Test independently → Deploy
4. Add User Story 3 (Visual Enhancements) → Test independently → Deploy
5. Polish phase → Production-ready

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Remove Images)
   - Developer B: User Story 2 (Dark Mode Toggle)
   - Developer C: User Story 3 (Visual Enhancements)
3. Stories complete and integrate independently
4. Team validates Polish phase together

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
| Phase 1: Setup | 3 | 3 |
| Phase 2: Foundational | 7 | 0 |
| Phase 3: US1 - Remove Images | 5 | 2 |
| Phase 4: US2 - Dark Mode | 11 | 1 |
| Phase 5: US3 - Visual Enhancements | 5 | 3 |
| Phase 6: Polish | 7 | 4 |
| **Total** | **38** | **13** |