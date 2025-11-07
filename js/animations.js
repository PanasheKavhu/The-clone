/**
 * POS Cloud - Animations JavaScript
 * Initializes and configures AOS (Animate On Scroll) library
 */

(function() {
    'use strict';
    
    // ========================================
    // Initialize AOS
    // ========================================
    document.addEventListener('DOMContentLoaded', function() {
        // Check if AOS is loaded
        if (typeof AOS !== 'undefined') {
            AOS.init({
                // Global settings
                duration: 800,           // Animation duration in milliseconds
                easing: 'ease-in-out',   // Easing function
                once: true,              // Whether animation should happen only once
                mirror: false,           // Whether elements should animate out while scrolling past them
                offset: 100,             // Offset (in px) from the original trigger point
                delay: 0,                // Delay animation (in ms)
                anchorPlacement: 'top-bottom', // Defines which position of the element should trigger animation
                
                // Disable on mobile for better performance (optional)
                disable: function() {
                    // Disable animations on mobile devices under 768px
                    return window.innerWidth < 768;
                }
            });
            
            console.log('AOS animations initialized');
        } else {
            console.warn('AOS library not loaded');
        }
    });
    
    // ========================================
    // Refresh AOS on Dynamic Content
    // ========================================
    window.refreshAnimations = function() {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    };
    
    // ========================================
    // Custom Scroll Animations for Stats
    // ========================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16); // 60 FPS
        
        const timer = setInterval(function() {
            start += increment;
            
            if (start >= target) {
                element.textContent = formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(start));
            }
        }, 16);
    }
    
    function formatNumber(num) {
        // Format numbers with appropriate suffixes
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    }
    
    // ========================================
    // Observe Stats for Counter Animation
    // ========================================
    if ('IntersectionObserver' in window) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    const statElement = entry.target.querySelector('h3, h2');
                    
                    if (statElement) {
                        const text = statElement.textContent.trim();
                        const numberMatch = text.match(/[\d.]+/);
                        
                        if (numberMatch) {
                            const number = parseFloat(numberMatch[0]);
                            const suffix = text.replace(/[\d.]+/, '').trim();
                            
                            // Calculate target value
                            let target = number;
                            if (suffix.includes('K') || suffix.includes('+')) {
                                target = number * 1000;
                            } else if (suffix.includes('M')) {
                                target = number * 1000000;
                            } else if (suffix.includes('%')) {
                                target = number;
                            }
                            
                            // Animate from 0
                            statElement.textContent = '0';
                            
                            setTimeout(() => {
                                animateCounterWithSuffix(statElement, target, suffix, 1500);
                            }, 200);
                            
                            entry.target.classList.add('animated');
                        }
                    }
                }
            });
        }, {
            threshold: 0.5
        });
        
        // Observe all stat elements
        document.querySelectorAll('.stat, .stat-large').forEach(stat => {
            statsObserver.observe(stat);
        });
    }
    
    function animateCounterWithSuffix(element, target, suffix, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(function() {
            start += increment;
            
            if (start >= target) {
                if (suffix.includes('K')) {
                    element.textContent = (target / 1000).toFixed(0) + suffix;
                } else if (suffix.includes('M')) {
                    element.textContent = (target / 1000000).toFixed(1) + suffix;
                } else if (suffix.includes('%')) {
                    element.textContent = target.toFixed(1) + suffix;
                } else {
                    element.textContent = target + suffix;
                }
                clearInterval(timer);
            } else {
                if (suffix.includes('K')) {
                    element.textContent = (start / 1000).toFixed(0) + suffix;
                } else if (suffix.includes('M')) {
                    element.textContent = (start / 1000000).toFixed(1) + suffix;
                } else if (suffix.includes('%')) {
                    element.textContent = start.toFixed(1) + suffix;
                } else {
                    element.textContent = Math.floor(start) + suffix;
                }
            }
        }, 16);
    }
    
    // ========================================
    // Parallax Effect for Hero Section
    // ========================================
    function initParallax() {
        const heroImage = document.querySelector('.hero-image-placeholder');
        
        if (heroImage) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.3;
                
                if (scrolled <= window.innerHeight) {
                    heroImage.style.transform = `translateY(${rate}px)`;
                }
            });
        }
    }
    
    // Initialize parallax on desktop only
    if (window.innerWidth > 768) {
        initParallax();
    }
    
    // ========================================
    // Fade In Animation on Scroll (Fallback)
    // ========================================
    function fadeInOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }
    
    // Add CSS for fade-in class
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Initial check
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();
    
    // ========================================
    // Stagger Animation for Lists
    // ========================================
    function staggerAnimation(elements, delay = 100) {
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * delay}ms`;
        });
    }
    
    // Apply to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0) {
        staggerAnimation(featureCards, 150);
    }
    
    // ========================================
    // Hover Effect Enhancements
    // ========================================
    document.querySelectorAll('.feature-card, .product-card, .testimonial-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
    
    // ========================================
    // Performance Optimization
    // ========================================
    // Reduce animations on low-power devices
    if (navigator.hardwareConcurrency <= 4) {
        document.documentElement.style.setProperty('--transition-base', '200ms ease');
        document.documentElement.style.setProperty('--transition-slow', '300ms ease');
    }
    
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Disable AOS animations
        if (typeof AOS !== 'undefined') {
            AOS.init({
                disable: true
            });
        }
        
        // Remove transition classes
        document.querySelectorAll('[data-aos]').forEach(element => {
            element.removeAttribute('data-aos');
        });
    }
    
})();




