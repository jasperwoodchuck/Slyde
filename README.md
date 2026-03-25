# Obsidian Sample Plugin

A minimal Obsidian plugin built from scratch using TypeScript and esbuild (no official template).


## Development

Install dependencies:

```bash
npm install
```

Start development (watch mode):

```bash
npm run dev
```

Build plugin:

```bash
npm run build
```

Lint code:

```bash
npm run lint
```

## Structure

```
obsidian-sample-plugin/
├── src
│   ├── main.ts
│   └── settings.ts
├── esbuild.config.mjs
├── eslint.config.mjs
├── LICENSE
├── manifest.json
├── package-lock.json
├── package.json
├── README.md
├── styles.css
├── tsconfig.json
└── versions.json
```

## Installation

1. Copy this folder to:

   ```
   .obsidian/plugins/your-plugin-id/
   ```
2. Run build:

   ```bash
   npm run build
   ```
3. Enable plugin in Obsidian settings
