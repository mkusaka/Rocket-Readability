# Rocket Readability

A Chrome/Edge extension that makes web pages more readable using Mozilla's Readability library.

## Features

- Converts any web page into a clean, readable format
- Removes distracting elements and focuses on the main content
- Modern, comfortable reading experience with clean typography
- Easy to toggle back to the original page view
- Built with TypeScript and modern web technologies

## Installation

1. Clone this repository
2. Install dependencies:
```bash
pnpm install
```
3. Build the extension:
```bash
pnpm build
```
4. Load the extension:
   - Open Chrome/Edge and navigate to `chrome://extensions`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` directory

## Usage

1. Navigate to any web page you want to read
2. Click the Rocket Readability icon in your browser toolbar
3. The page will be instantly converted to a clean, readable format
4. To return to the original page view, click the "Return to Original" button in the bottom right corner

## Development

- `pnpm dev`: Start development mode
- `pnpm build`: Build the extension
- `pnpm type-check`: Run TypeScript type checking

## Technologies

- TypeScript
- Vite
- Mozilla Readability
- Chrome Extensions Manifest V3

## License

MIT 
