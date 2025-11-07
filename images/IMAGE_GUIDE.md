# Image Assets Guide for POS Cloud Website

## 📸 Required Images

Add your images to this folder and update the HTML references.

### Recommended Image Sizes

#### Homepage
- **Hero Image**: 1920x1080px (landscape)
  - Modern POS terminal or payment processing scene
  - Update: `index.html` line 84

- **Product Images**: 800x800px (square)
  - Mobile card reader device
  - Smart POS terminal
  - Full POS system setup

#### About Page
- **Mission/About Image**: 1200x800px
  - Office photo or team working
  - Update: `about.html` line 63

- **Team Photos**: 400x400px (square, headshots)
  - CEO/Founder
  - CTO
  - Operations Manager
  - Customer Success Manager
  - Update: `about.html` lines 158-201

#### Services Page
- **Service Detail Images**: 600x600px (square)
  - Close-up of mobile reader
  - Smart terminal in use
  - Full system setup
  - Update: `services.html` lines 98, 139, 180

#### General Assets
- **Logo**: 
  - Main: 200x60px (transparent PNG)
  - Favicon: 32x32px, 16x16px (ICO or PNG)

- **Icons/Graphics**:
  - Currently using Font Awesome icons
  - Can be replaced with custom SVG icons

### Image Optimization Tips

1. **Format**:
   - Use WebP for modern browsers (smaller file size)
   - Provide JPEG/PNG fallback
   - Use PNG for logos/icons with transparency

2. **Compression**:
   - Aim for under 200KB per image
   - Use tools like:
     - [TinyPNG](https://tinypng.com)
     - [Squoosh](https://squoosh.app)
     - [ImageOptim](https://imageoptim.com)

3. **Responsive Images**:
   ```html
   <picture>
     <source srcset="images/hero.webp" type="image/webp">
     <source srcset="images/hero.jpg" type="image/jpeg">
     <img src="images/hero.jpg" alt="Description">
   </picture>
   ```

### Color Scheme for Photos

To match the website design, images should feature:
- Clean, modern environments
- Colors: Purple/Indigo (#6366f1), Green (#10b981), White backgrounds
- Professional, well-lit photography
- Minimal backgrounds

### Stock Photo Resources

If you need placeholder images:
- [Unsplash](https://unsplash.com) - Free high-quality images
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images and videos

Search terms: "payment terminal", "pos system", "card reader", "retail technology", "payment processing"

## 🎨 Current Placeholder System

The website currently uses Font Awesome icons as placeholders:
- `<i class="fas fa-cash-register"></i>`
- `<i class="fas fa-mobile-screen-button"></i>`
- `<i class="fas fa-tablet-screen-button"></i>`
- `<i class="fas fa-desktop"></i>`

These should be replaced with actual product images once available.

## 📝 Naming Convention

Suggested file naming:
```
hero-main.jpg
product-mobile-reader.jpg
product-smart-terminal.jpg
product-full-system.jpg
team-ceo.jpg
team-cto.jpg
about-mission.jpg
logo-main.png
favicon.ico
```

## 🔧 Implementation Example

Replace this placeholder:
```html
<div class="hero-image-placeholder">
    <i class="fas fa-cash-register"></i>
</div>
```

With actual image:
```html
<div class="hero-image">
    <img src="images/hero-main.jpg" alt="POS Cloud Payment Terminal" loading="lazy">
</div>
```

Remember to update CSS accordingly if changing from placeholder to image!

---

**Need professional photography?** Consider hiring a local photographer to capture your actual products and team for the most authentic representation.




