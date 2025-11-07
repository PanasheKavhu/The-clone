/**
 * POS Cloud - Main JavaScript
 * Handles navigation, mobile menu, and general interactions
 */

(function() {
    'use strict';
    
    // ========================================
    // DOM Elements
    // ========================================
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Initial check
    handleNavbarScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleNavbarScroll);
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbar.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // Active Navigation Link
    // ========================================
    function updateActiveNavLink() {
        const currentPath = window.location.pathname;
        const fileName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            
            if (linkPath === fileName || 
                (fileName === '' && linkPath === 'index.html') ||
                (fileName === '/' && linkPath === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    updateActiveNavLink();
    
    // ========================================
    // Back to Top Button (Optional)
    // ========================================
    function createBackToTopButton() {
        // Create button element
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: var(--primary-color);
                color: white;
                border: none;
                cursor: pointer;
                display: none;
                align-items: center;
                justify-content: center;
                font-size: 1.25rem;
                box-shadow: var(--shadow-lg);
                transition: all 0.3s ease;
                z-index: 999;
            }
            
            .back-to-top:hover {
                background: var(--primary-dark);
                transform: translateY(-5px);
            }
            
            .back-to-top.show {
                display: flex;
            }
            
            @media (max-width: 768px) {
                .back-to-top {
                    width: 45px;
                    height: 45px;
                    bottom: 20px;
                    right: 20px;
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(backToTopBtn);
        
        // Show/hide based on scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top on click
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Initialize back to top button
    createBackToTopButton();
    
    // ========================================
    // Lazy Loading Images (Optional Enhancement)
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ========================================
    // Handle Resize Events
    // ========================================
    let resizeTimer;
    window.addEventListener('resize', function() {
        // Clear previous timer
        clearTimeout(resizeTimer);
        
        // Set new timer
        resizeTimer = setTimeout(function() {
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }, 250);
    });
    
    // ========================================
    // Prevent FOUC (Flash of Unstyled Content)
    // ========================================
    document.addEventListener('DOMContentLoaded', function() {
        document.body.classList.add('loaded');
    });
    
    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c POS Cloud ', 'background: #6366f1; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
    console.log('%c Modern Payment Solutions for Zimbabwe ', 'color: #6366f1; font-size: 14px;');
    
})();




