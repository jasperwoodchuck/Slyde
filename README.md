# Slyde

A lightweight Obsidian plugin that lets you **adjust the readable line length (RLL)** of your notes in real time.

## Features

* Adjustable readable line length using a **slider in the status bar**
* Set a **default width** with one click
* Automatically adapts to **window resizing**
* Option to **persist width** across sessions
* Clean and minimal UI


## How it works

Slyde modifies Obsidian’s internal CSS variables:

* `--line-width`
* `--file-line-width`

This allows you to dynamically control how wide your text appears in the editor.


## Installation

### Manual Installation

1. Download the following files from the latest release:

   * `main.js`
   * `manifest.json`
   * `styles.css` (if available)

2. Create a folder inside your vault:

```
.obsidian/plugins/slyde/
```

3. Place the files inside that folder.

4. Restart Obsidian.

5. Enable **Slyde** in:

   ```
   Settings → Community Plugins
   ```


## Usage

* Use the **slider in the status bar** to adjust line width.
* Click the displayed value (button) to reset to your default width.
* The width is applied instantly.


## Settings

You can configure:

* **Default RLL** – The width used when resetting
* **Current RLL** – Your active width
* **Persistent Width** – Prevents auto-adjustment on resize


## Behavior Notes

* The plugin automatically:

  * Hides itself when no Markdown file is open
  * Adjusts maximum width based on editor size
* Width is constrained to avoid overflow issues


## Development

### Build

```bash
npm install
npm run build
```

### Files included in release

```
main.js
manifest.json
styles.css (optional)
```


## Compatibility

* Requires Obsidian version specified in `manifest.json`
* Works with standard Markdown views


## License

[MIT License](License)
