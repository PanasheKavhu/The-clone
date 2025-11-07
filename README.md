# POS Cloud Website

A modern, responsive static website redesign for POS Cloud, inspired by Yoco's clean and professional design aesthetic. Built with pure HTML, CSS, and JavaScript featuring smooth on-scroll animations.

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional design inspired by Yoco
- **Dark Mode**: Toggle between light and dark themes with preference saving
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Performance**: Optimized static site with fast load times
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 📁 Project Structure

```
poscloud-website/
├── index.html              # Homepage
├── about.html             # About page
├── services.html          # Services page
├── contact.html           # Contact page
├── css/
│   ├── main.css          # Global styles & variables
│   ├── components.css    # Reusable components
│   └── responsive.css    # Mobile responsive styles
├── js/
│   ├── main.js          # Navigation & main functionality
│   ├── theme.js         # Dark mode toggle functionality
│   ├── animations.js    # AOS initialization & custom animations
│   └── forms.js         # Form validation & handling
├── images/              # Image assets (add your images here)
└── README.md           # This file
```

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Add your images** to the `images/` folder
3. **Open** `index.html` in your browser
4. **Customize** content, colors, and images as needed

## 🎯 Pages Included

### Homepage (index.html)
- Hero section with call-to-action
- Features showcase
- Product cards (Mobile Reader, Smart Terminal, Full POS System)
- How it works (3-step process)
- Customer testimonials
- Call-to-action section

### About Page (about.html)
- Mission statement
- Core values
- Company statistics
- Team members

### Services Page (services.html)
- Detailed hardware solutions
- Software services
- Feature comparison table

### Contact Page (contact.html)
- Contact form with validation
- Contact information cards
- Business hours
- Social media links
- Map placeholder

## 🎨 Customization

### Colors
Edit CSS variables in `css/main.css`:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #10b981;
    --accent-color: #f59e0b;
    /* Add more custom colors */
}
```

### Typography
Fonts are loaded from Google Fonts:
- **Headings**: Poppins (600, 700, 800)
- **Body**: Inter (300, 400, 500, 600, 700)

To change fonts, update the Google Fonts link in the HTML files.

### Images
Replace placeholder icons with your actual images:
1. Add images to the `images/` folder
2. Update image references in HTML files
3. Recommended image formats: WebP for best performance, with JPEG/PNG fallbacks

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 1024px

## 🔧 Features & Functionality

### Navigation
- Sticky navigation bar
- Mobile hamburger menu
- Active page highlighting
- Smooth scroll to sections
- Dark mode toggle with localStorage persistence

### Animations
- Fade-in on scroll
- Slide animations
- Counter animations for statistics
- Card hover effects
- Parallax effects (desktop only)

### Forms
- Real-time validation
- Character counter
- Auto-save (localStorage)
- Honeypot spam protection
- Inline error messages

### Performance
- Lazy loading images
- Optimized animations
- Reduced motion support
- Hardware acceleration

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 External Dependencies

1. **AOS (Animate On Scroll)** - v2.3.1
   - CDN: `https://unpkg.com/aos@2.3.1/dist/aos.css`
   - JS: `https://unpkg.com/aos@2.3.1/dist/aos.js`

2. **Font Awesome** - v6.4.0
   - CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

3. **Google Fonts**
   - Inter: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700`
   - Poppins: `https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800`

## 🚀 Deployment

### Option 1: GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify
1. Create account at netlify.com
2. Drag and drop your folder
3. Site is live instantly with custom domain support

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts to deploy

### Option 4: Traditional Hosting
1. Upload all files via FTP/SFTP
2. Ensure proper file permissions
3. Test all pages and links

## ✅ Checklist Before Going Live

- [ ] Replace all placeholder content with actual content
- [ ] Add real images to `/images` folder
- [ ] Update contact information (phone, email, address)
- [ ] Test all forms (contact form submission endpoint)
- [ ] Verify all links work correctly
- [ ] Test on mobile devices
- [ ] Check page load speeds
- [ ] Add Google Analytics (optional)
- [ ] Set up proper meta tags for SEO
- [ ] Create favicon and add to all pages
- [ ] Test cross-browser compatibility

## 📝 Content Guidelines

### Images
- **Hero images**: 1920x1080px or larger
- **Product images**: 800x800px square
- **Team photos**: 400x400px square
- **Icons**: Use Font Awesome or SVG
- **Format**: WebP recommended, JPEG/PNG as fallback

### Text
- **Headlines**: Clear, benefit-focused
- **Body copy**: Concise, scannable
- **CTAs**: Action-oriented (e.g., "Get Started Free", "Contact Us")

## 🔒 Security Notes

- Form submissions should be processed server-side
- Implement CAPTCHA for production contact forms
- Use HTTPS for all production deployments
- Sanitize all user inputs on the backend

## 📞 Support & Customization

For custom development or support:
- Email: info@poscloud.co.zw
- Phone: +263 242 123 456

## 📄 License

This project is proprietary to POS Cloud Zimbabwe.

## 🙏 Credits

- Design inspiration: Yoco (https://www.yoco.com/za/)
- Icons: Font Awesome
- Animations: AOS Library
- Fonts: Google Fonts

---

**Built with ❤️ for POS Cloud Zimbabwe**

Last updated: November 2025

