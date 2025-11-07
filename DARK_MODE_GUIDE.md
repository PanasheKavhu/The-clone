# Dark Mode Feature Guide

## Overview

Your POS Cloud website now includes a fully functional dark mode toggle that allows users to switch between light and dark themes based on their preference.

## Features

✅ **Toggle Button** - Smooth animated toggle in the navigation bar  
✅ **localStorage Persistence** - Theme preference is saved across sessions  
✅ **System Preference Detection** - Automatically detects user's system theme preference  
✅ **Smooth Transitions** - All elements transition smoothly between themes  
✅ **Accessible** - Keyboard navigation support and proper ARIA labels  
✅ **Responsive** - Works perfectly on all screen sizes  

## How It Works

### For Users

1. **Toggle Location**: The sun/moon toggle button is located in the navigation bar
2. **Click to Switch**: Click the toggle to switch between light and dark modes
3. **Automatic Save**: Your preference is automatically saved and restored on next visit
4. **Keyboard Support**: Press Tab to focus, then Enter or Space to toggle

### For Developers

#### Files Modified

1. **css/main.css**
   - Added dark mode CSS variables
   - Dark theme color palette
   - Toggle button styles

2. **css/responsive.css**
   - Mobile responsive styles for toggle

3. **js/theme.js** (NEW)
   - Theme switching logic
   - localStorage management
   - System preference detection

4. **All HTML files**
   - Added toggle button to navigation
   - Added theme.js script reference

#### Color Scheme

**Light Mode:**
- Background: White (#ffffff)
- Text: Dark Gray (#1f2937)
- Cards: Light Gray (#f9fafb)

**Dark Mode:**
- Background: Dark Gray (#1f2937)
- Text: Light Gray (#f9fafb)
- Cards: Darker Gray (#111827)

## Customization

### Changing Dark Mode Colors

Edit `css/main.css` - lines 84-100:

```css
[data-theme="dark"] {
    --text-primary: #f9fafb;      /* Main text color */
    --text-secondary: #d1d5db;    /* Secondary text */
    --bg-white: #1f2937;          /* Main background */
    --bg-light: #111827;          /* Cards background */
    --bg-gray: #374151;           /* Alternate backgrounds */
    --border-color: #4b5563;      /* Borders */
}
```

### Toggle Button Position

To move the toggle button, edit the navigation structure in each HTML file.

Current position: Before "Get Started" button in nav menu

### Changing Toggle Style

Edit `.theme-toggle` styles in `css/main.css` (lines 578-641)

## Technical Details

### localStorage Key
- **Key**: `theme`
- **Values**: `'light'` or `'dark'`

### HTML Attribute
- **Attribute**: `data-theme` on `<html>` element
- **Values**: `'light'` or `'dark'`

### System Preference Detection
The feature detects user's system preference using:
```javascript
window.matchMedia('(prefers-color-scheme: dark)')
```

### Browser Support
- ✅ Chrome 76+
- ✅ Firefox 67+
- ✅ Safari 12.1+
- ✅ Edge 79+
- ✅ All modern mobile browsers

## Accessibility

- **ARIA Label**: Toggle button includes descriptive aria-label
- **Keyboard Navigation**: Full keyboard support (Tab, Enter, Space)
- **Focus Visible**: Clear focus indicator for keyboard users
- **Screen Readers**: Properly announces current state and action

## Testing Checklist

✅ Toggle switches between light and dark modes  
✅ Theme persists after page reload  
✅ Works on all pages (Home, Services, About, Contact)  
✅ Responsive on mobile devices  
✅ Keyboard navigation works  
✅ No console errors  
✅ Smooth transitions  
✅ All text remains readable  
✅ Images and icons display properly  

## Troubleshooting

### Toggle Not Working
- Check browser console for JavaScript errors
- Verify `theme.js` is loaded before other scripts
- Clear browser cache and reload

### Theme Not Saving
- Check if localStorage is enabled in browser
- Some browsers in private/incognito mode may block localStorage
- Check browser console for storage errors

### Colors Look Wrong
- Clear browser cache
- Hard refresh (Ctrl + F5 or Cmd + Shift + R)
- Check if custom CSS is overriding theme variables

### Mobile Issues
- Test on actual device, not just browser DevTools
- Check if hamburger menu is working properly
- Verify toggle button is visible in mobile menu

## Future Enhancements

Possible additions you could make:

1. **Auto-toggle based on time**: Switch to dark mode at night
2. **Multiple themes**: Add more color schemes (blue, green, etc.)
3. **Contrast adjustment**: Allow users to increase contrast
4. **Custom colors**: Let users pick their own colors
5. **Animation options**: Allow users to reduce motion

## Performance

- **Zero impact on load time**: CSS variables are instant
- **Minimal JavaScript**: < 2KB minified
- **No external dependencies**: Pure vanilla JavaScript
- **Optimized transitions**: GPU-accelerated when possible

---

**Built with accessibility and user experience in mind!** 🌓

Last updated: November 2025

