# a-button

Modern Button CSS

## How to usage

```html
<button class="a-btn">Label</button>

<!-- size -->
<button class="a-btn a-btn:sm">Label</button>
<button class="a-btn a-btn:md">Label</button>
<button class="a-btn a-btn:lg">Label</button>

<!-- disabled -->
<button class="a-btn" disabled>Label</button>
```

## Installation

### Using NPM

```bash
npm install a-button
```

After installing, you can import a-button CSS in your JavaScript file:

```js
import "a-button";
```

### Using CDN

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/a-button@latest/dist/index.css" />
```

## Override Style

To customize the style of `a-button`, you can create a separate CSS file and override the CSS variables defined in the component. This method allows you to maintain your custom styles separately and apply them easily across your application.

1. Create a new CSS file (e.g., custom-button-styles.css).
2. Add your custom styles to this file, overriding the default variables and styles of a-button.

### custom-button-styles.css

```css
/* Override default button styles */
.a-btn {
  --a-btn-fw: 500; /* font weight */

  /* a-btn:sm */
  --a-btn-fs-sm: 0.875rem; /* font size */
  --a-btn-h-sm: 2rem; /* height */
  --a-btn-px-sm: 1rem; /* padding left, right */
  --a-btn-bd-radius-sm: 0.3rem; /* border radius */

  --a-btn-fs-md: 0.875rem;
  --a-btn-h-md: 2rem;
  --a-btn-px-md: 1rem;
  --a-btn-bd-radius-md: 0.375rem;

  --a-btn-fs-lg: 1rem;
  --a-btn-h-lg: 2.5rem;
  --a-btn-px-lg: 1.375rem;
  --a-btn-bd-radius-lg: 0.45rem;

  --a-btn-color: #111827d0;
  --a-btn-bg: #ffffff;
  --a-btn-bg-active: rgba(40, 40, 40, 0.07);
  --a-btn-bd-width: 1px; /* border */
  --a-btn-bd-style: solid;
  --a-btn-bd-color: #dee3e6;
  --a-btn-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.03), 0px 2px 2px -1px rgba(0, 0, 0, 0.04),
    0px -1px 4px 0px rgba(0, 0, 0, 0.01);

  /* disabled */
  --a-btn-color-disabled: #11182774;
  --a-btn-bd-color-disabled: #e9ecef;
  --a-btn-bg-disabled: rgba(40, 40, 40, 0.043);
}
```

3. Include this CSS file in your HTML or import it into your JavaScript entry file.

```js
import "a-button";
import "./custom-button-styles.css";
```
