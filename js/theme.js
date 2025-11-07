/* ========================================
   POS Cloud - Theme Toggle (Dark Mode)
   ======================================== */

(function() {
    'use strict';

    // Get theme from localStorage or default to 'light'
    const getTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // Check if user prefers dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    };

    // Set theme on the document
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update aria-label for accessibility
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.setAttribute('aria-label', 
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
    };

    // Toggle between light and dark themes
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        
        // Add a small animation effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    };

    // Initialize theme on page load
    const initTheme = () => {
        const theme = getTheme();
        setTheme(theme);
    };

    // Set up event listener when DOM is ready
    const setupThemeToggle = () => {
        const toggleBtn = document.getElementById('theme-toggle');
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
            
            // Add keyboard support (Enter and Space)
            toggleBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTheme();
                }
            });
            
            // Make it focusable
            toggleBtn.setAttribute('tabindex', '0');
        }
    };

    // Listen for system theme changes
    const watchSystemTheme = () => {
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a preference
                if (!localStorage.getItem('theme')) {
                    setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    };

    // Initialize everything when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
            setupThemeToggle();
            watchSystemTheme();
        });
    } else {
        // DOM already loaded
        initTheme();
        setupThemeToggle();
        watchSystemTheme();
    }

    // Expose toggle function globally for potential external use
    window.toggleTheme = toggleTheme;

})();

