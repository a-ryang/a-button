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
<button class="a-btn disabled">Label</button>
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
<link rel="stylesheet" href="https://unpkg.com/a-button@latest/dist/index.css" />
```

## Override Style

To customize the style of `a-button`, you can create a separate CSS file and override the CSS variables defined in the component. This method allows you to maintain your custom styles separately and apply them easily across your application.

1. Create a new CSS file (e.g., custom-button-styles.css).
2. Add your custom styles to this file, overriding the default variables and styles of a-button.

### custom-button-styles.css

```css
/* Override default button styles */
.a-btn {
  --a-btn-h: 2.5rem; /* Change the height */
  --a-btn-px: 1.5rem; /* Change the horizontal padding */
  --a-btn-bg: #f0f0f0; /* Change the background color */
  --a-btn-bd: #ff0000; /* Change the border color */
  --a-btn-bd-radius: 0.5rem; /* Change the border radius */
  --a-btn-fs: 1rem; /* Change the font size */
  --a-btn-color: #0000ff; /* Change the font color */
}

/* Customizing the small button */
.a-btn\:sm {
  --a-btn-h: 1.25rem;
  --a-btn-px: 0.5rem;
}

/* Customizing the large button */
.a-btn\:lg {
  --a-btn-h: 3rem;
  --a-btn-px: 2rem;
}

/* Customizing the active state of the button */
.a-btn:not(.disabled):not([disabled]):active {
  --a-btn-bg: rgba(0, 128, 0, 0.2); /* Change the background color on active state */
  transform: scale(1.05); /* Change the scale on active state */
}

/* Customizing the disabled state of the button */
.a-btn:disabled,
.a-btn.disabled {
  --a-btn-bg: rgba(128, 128, 128, 0.3); /* Change the background color for disabled state */
  --a-btn-color: rgba(255, 255, 255, 0.5); /* Change the font color for disabled state */
}
```

3. Include this CSS file in your HTML or import it into your JavaScript entry file.

```js
import "a-button";
import "./custom-button-styles.css";
```
