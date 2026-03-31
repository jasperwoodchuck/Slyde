# Slyde

Slyde allows you to control readable line length using a simple slider in the status bar. It improves readability by letting you adjust how wide your text appears in real time.

## Features

* Adjustable line width via a status bar slider
* Real-time updates while dragging the slider
* Optional persistent width setting
* Automatically adapts to window resizing
* Quick reset to default width

## Installation

### Manual

1. Download the latest release files:

   * `main.js`
   * `manifest.json`
   * `styles.css` (if included)
2. Create a folder inside your vault:

   ```
   .obsidian/plugins/slyde
   ```
3. Place the files into that folder
4. Enable the plugin in **Settings → Community Plugins**

## Usage

* Use the **slider in the status bar** to adjust line width
* Click the **value button** to reset to default
* Changes are applied instantly

## Settings

* **Default Line Length**: Value used when resetting
* **Current Line Length**: Last used width
* **Persistent Width**: Prevents automatic resizing when the window changes size

## How It Works

Slyde dynamically updates the following CSS variables:

* `--line-width`
* `--file-line-width`

These are applied to the document body to control the maximum readable line width.

## License

This Plugin is licensed under [AGPL-3.0](LICENSE).
