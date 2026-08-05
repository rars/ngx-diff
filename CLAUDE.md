# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ngx-diff** is an Angular component library for displaying text diffs with support for multiple visualization formats (unified, side-by-side, and inline). It's built on `diff-match-patch-ts` for diff calculation and supports performance optimization via Web Workers and comprehensive theming via CSS variables.

## Project Structure

- **projects/ngx-diff/**: The main library code
  - `src/lib/components/`: Three diff components (unified-diff, side-by-side-diff, inline-diff)
  - `src/lib/services/`: Core services (DiffMatchPatchService for diff calculation, StyleCalculatorService for styling)
  - `src/lib/pipes/`: Utilities like LineNumberPipe
  - `src/lib/common/`: Interfaces and types for diff data structures
  - `src/public-api.ts`: Public exports
  - `ng-package.json`: ng-packagr configuration
- **src/**: Demo application showcasing the components
- **dist/ngx-diff/**: Built library output

## Development Commands

### Building & Running

```bash
# Start dev server (demo app)
npm start

# Build library for distribution
npm run build

# Run tests (no-watch mode)
npm test

# Lint code
npm lint
```

### Running Tests

The project uses Vitest. Run with Angular build system:
```bash
npm test  # Runs all tests
ng test ngx-diff  # Alternative syntax
```

To run tests in watch mode or see options:
```bash
ng test ngx-diff --watch
ng test ngx-diff --help
```

Single test file:
```bash
ng test ngx-diff --include='**/*.spec.ts'
```

## Architecture & Key Components

### Core Components

1. **UnifiedDiffComponent** (`src/lib/components/unified-diff/`)
   - Traditional unified diff format (single column, context lines)
   - Most compact representation

2. **SideBySideDiffComponent** (`src/lib/components/side-by-side-diff/`)
   - Two-column layout (before/after)
   - Better for visual comparison

3. **InlineDiffComponent** (`src/lib/components/inline-diff/`)
   - Deprecated as of v8.0.0, replaced by UnifiedDiffComponent
   - May still be used in some demos/old code

All three components accept:
- `before` / `after`: Input strings to diff
- `lineContextSize`: Number of context lines around changes
- `intraLineDiffMode`: Type of intra-line highlighting ('none', 'chars', 'words', 'lines')
- `selectedLineChange`: Output event for line selection

### Services

**DiffMatchPatchService** (`src/lib/services/diff-match-patch/`)
- Wraps `diff-match-patch-ts` library
- Handles diff calculation and optionally delegates to Web Worker
- Supports custom `IDiffWebWorkerFactory` via DI token `NGX_DIFF_WEB_WORKER_FACTORY`
- Key public methods compute diffs at line and character level

**StyleCalculatorService** (`src/lib/services/style-calculator/`)
- Computes inline CSS styles for individual diff segments
- Handles CSS class and style application for highlighting

### Diff Data Structures

- **LineDiff**: Represents a single line in the diff with type (insert/delete/equal/none), line numbers, content, and optional intra-line segments
- **InlineSegment**: Character-level diff details for intra-line highlighting
- **DiffMatchPatch** types from `diff-match-patch-ts`: `Diff`, `DiffOp`

## Styling & Theming

The library uses CSS variables for all styling. Default theme is in `projects/ngx-diff/src/styles/`.

### Key CSS Variables
```
--ngx-diff-border-color
--ngx-diff-font-size
--ngx-diff-insert-color
--ngx-diff-delete-color
--ngx-diff-equal-color
--ngx-diff-line-number-width
--ngx-diff-line-number-font-color
```

Two built-in themes:
- `ngx-diff-light-theme` (light mode)
- `ngx-diff-dark-theme` (dark mode)

Custom themes can override any CSS variable. Users can create custom theme classes and apply them to components.

## Performance Considerations

1. **Web Workers**: For large diffs (>100ms to compute), configure a Web Worker factory via `NGX_DIFF_WEB_WORKER_FACTORY` injection token to offload computation from main thread
2. **Line Context**: The `lineContextSize` input controls how many unchanged lines surround changes—smaller values improve performance
3. **Intra-line Diffs**: Character-level highlighting (`intraLineDiffMode` != 'none') adds computation cost; use judiciously for large diffs

## Testing

- Uses **Vitest** with Angular testing utilities
- Component tests are in `*.spec.ts` files alongside components
- Service tests validate diff logic and styling
- Mock diff-match-patch or inject test data for reproducible results

## Code Standards

- **Linting**: ESLint with TypeScript ESLint, Prettier for formatting
- **Naming**: Angular component prefix is `ngx-` (e.g., `ngx-unified-diff`)
- **Imports**: Organized by Angular core, then library services/components/common, then external (diff-match-patch-ts, rxjs)
- **Change Detection**: Components use signals and computed properties (Angular 22+); older patterns may still appear in demo code

## Angular Version & Dependencies

- **Angular**: 22.0.1+
- **diff-match-patch-ts**: 2.0.0+ (main dependency for diff algorithm)
- **RxJS**: 7.8.2+ (for reactive state in components)
- **ng-packagr**: 22.0.0+ (library build tool)

## Release & Versioning

Releases use `commit-and-tag-version` (`npm run release`). Follows semantic versioning.
Version compatibility table in README.md correlates Angular versions to ngx-diff releases.

## Recent Architecture Changes

- **v8+**: Unified the inline-diff and regular diff components; InlineDiffComponent deprecated
- **v13.1+**: Added Web Worker support for performance
- **v13+**: Switched to CSS variable-based theming
- **Angular 22+**: Uses signals and computed properties for reactivity

## Common Gotchas

1. **Web Worker factory optional**: If not provided, diff calculation runs on main thread—not a failure, just potentially slower for large inputs
2. **Intra-line highlighting cost**: Be aware character-level diffs are more expensive than line-level
3. **Standalone components**: Components are standalone as of recent versions; import directly instead of in NgModule
4. **CSS variable fallbacks**: Ensure custom theme overrides include all relevant variables or use light/dark theme as base
