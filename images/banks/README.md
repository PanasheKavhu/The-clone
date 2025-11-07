# Bank Partner Logos

This directory should contain the logos of your bank partners for the carousel animation.

## Required Images

Please place the following bank logo images in this directory:

1. **fbc.png** - FBC Bank logo
2. **nbs.png** - NBS Bank logo
3. **cbz.png** - CBZ Bank logo
4. **nmb.png** - NMB Bank logo

## Image Specifications

For best results, your logo images should meet these specifications:

- **Format**: PNG (preferred) or JPG
- **Background**: Transparent PNG is recommended
- **Dimensions**: Approximately 300-500px wide (will be scaled automatically)
- **File Size**: Keep under 100KB for optimal loading
- **Quality**: High resolution for crisp display on all devices

## Adding More Logos

To add more bank logos to the carousel:

1. Add the image file to this directory
2. Open `index.html`
3. In the partners section, add two new logo divs (one in each set):

```html
<div class="partner-logo">
    <img src="images/banks/your-bank.png" alt="Your Bank">
</div>
```

4. Update the animation in `css/components.css` if needed (adjust the calculation in the `@keyframes scroll` section)

## Current Status

The carousel is currently working with **placeholder SVG files** that display the bank names. 

To replace them with actual logos:
1. Save your logo files as PNG with the same filenames (fbc.png, nbs.png, cbz.png, nmb.png)
2. Update the references in `index.html` from `.svg` to `.png`
3. Refresh your browser to see the changes

The animation is fully functional and will automatically scroll the logos horizontally with a smooth infinite loop effect.

