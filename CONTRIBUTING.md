# Contributing to CarbonMint

Thanks for your interest in improving the CarbonMint demo frontend. This guide
covers the conventions we follow so contributions stay consistent.

## Getting started

```bash
npm install
npm run dev
```

The app runs entirely on mock data, so no backend or wallet setup is required.

## Project conventions

- **Components** live in `src/components/`, one folder-free pair of
  `Component.jsx` + `Component.css` each. Keep styling in the colocated CSS file
  and use the CSS variables defined in `src/index.css` rather than hard-coded
  colours.
- **Hooks** live in `src/hooks/` and are named `useThing.js` with a named
  export. Document each with a JSDoc block.
- **Utilities** live in `src/utils/` and should be pure and unit-testable.
- **Constants** live in `src/constants/` for static catalogs and config.
- Prefer small, focused changes and accessible markup (labels, roles, keyboard
  support).

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/), e.g.
`feat: add Pagination component` or `docs: expand README`.

## Before opening a pull request

- Run `npm run build` to make sure the project compiles.
- Update the `CHANGELOG.md` under the `Unreleased` section.
- Keep unrelated changes in separate commits.
