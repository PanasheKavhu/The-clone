/**
 * POS Cloud - Forms JavaScript
 * Handles form validation and submission
 */

(function() {
    'use strict';
    
    // ========================================
    // Contact Form Handling
    // ========================================
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Validate form
            if (validateContactForm(data)) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual API call)
                setTimeout(function() {
                    // Success
                    showFormMessage('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                    
                    // Track conversion (if analytics is set up)
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'form_submission', {
                            'event_category': 'Contact',
                            'event_label': 'Contact Form'
                        });
                    }
                }, 1500);
                
                // For production, use actual API call:
                /*
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        showFormMessage('success', 'Thank you! Your message has been sent successfully.');
                        contactForm.reset();
                    } else {
                        showFormMessage('error', 'Something went wrong. Please try again.');
                    }
                })
                .catch(error => {
                    showFormMessage('error', 'Network error. Please check your connection and try again.');
                })
                .finally(() => {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
                */
            }
        });
    }
    
    // ========================================
    // Form Validation
    // ========================================
    function validateContactForm(data) {
        // Clear previous errors
        clearFormErrors();
        
        let isValid = true;
        const errors = [];
        
        // Validate first name
        if (!data.firstName || data.firstName.trim().length < 2) {
            errors.push('Please enter a valid first name');
            markFieldAsInvalid('firstName');
            isValid = false;
        }
        
        // Validate last name
        if (!data.lastName || data.lastName.trim().length < 2) {
            errors.push('Please enter a valid last name');
            markFieldAsInvalid('lastName');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            errors.push('Please enter a valid email address');
            markFieldAsInvalid('email');
            isValid = false;
        }
        
        // Validate message
        if (!data.message || data.message.trim().length < 10) {
            errors.push('Please enter a message (at least 10 characters)');
            markFieldAsInvalid('message');
            isValid = false;
        }
        
        // Show errors if any
        if (!isValid) {
            showFormMessage('error', errors.join('<br>'));
        }
        
        return isValid;
    }
    
    // ========================================
    // Form Error Handling
    // ========================================
    function markFieldAsInvalid(fieldId) {
        const field = document.getElementById(fieldId);
        if (field) {
            field.style.borderColor = '#ef4444';
            field.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';
            
            // Reset on focus
            field.addEventListener('focus', function() {
                this.style.borderColor = '';
                this.style.backgroundColor = '';
            }, { once: true });
        }
    }
    
    function clearFormErrors() {
        const fields = contactForm.querySelectorAll('input, textarea, select');
        fields.forEach(field => {
            field.style.borderColor = '';
            field.style.backgroundColor = '';
        });
    }
    
    function showFormMessage(type, message) {
        if (formMessage) {
            formMessage.className = 'form-message ' + type;
            formMessage.innerHTML = message;
            
            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Auto-hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(function() {
                    formMessage.style.display = 'none';
                }, 5000);
            }
        }
    }
    
    // ========================================
    // Real-time Validation
    // ========================================
    function setupRealtimeValidation() {
        const emailField = document.getElementById('email');
        const phoneField = document.getElementById('phone');
        
        // Email validation
        if (emailField) {
            emailField.addEventListener('blur', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value && !emailRegex.test(this.value)) {
                    this.style.borderColor = '#ef4444';
                    showInlineError(this, 'Please enter a valid email address');
                } else {
                    this.style.borderColor = '';
                    removeInlineError(this);
                }
            });
        }
        
        // Phone validation (optional field)
        if (phoneField) {
            phoneField.addEventListener('input', function() {
                // Remove non-numeric characters except + and spaces
                this.value = this.value.replace(/[^\d+\s()-]/g, '');
            });
        }
    }
    
    function showInlineError(field, message) {
        removeInlineError(field);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'inline-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem;';
        
        field.parentNode.appendChild(errorDiv);
    }
    
    function removeInlineError(field) {
        const existingError = field.parentNode.querySelector('.inline-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    // Initialize real-time validation
    if (contactForm) {
        setupRealtimeValidation();
    }
    
    // ========================================
    // Character Counter for Textarea
    // ========================================
    const messageField = document.getElementById('message');
    if (messageField) {
        const maxLength = 500;
        const counterDiv = document.createElement('div');
        counterDiv.className = 'char-counter';
        counterDiv.style.cssText = 'text-align: right; font-size: 0.875rem; color: var(--text-light); margin-top: 0.25rem;';
        
        messageField.setAttribute('maxlength', maxLength);
        messageField.parentNode.appendChild(counterDiv);
        
        function updateCounter() {
            const remaining = maxLength - messageField.value.length;
            counterDiv.textContent = `${remaining} characters remaining`;
            
            if (remaining < 50) {
                counterDiv.style.color = '#ef4444';
            } else {
                counterDiv.style.color = 'var(--text-light)';
            }
        }
        
        messageField.addEventListener('input', updateCounter);
        updateCounter();
    }
    
    // ========================================
    // Auto-save Form Data (localStorage)
    // ========================================
    function setupAutoSave() {
        if (!contactForm) return;
        
        const formFields = contactForm.querySelectorAll('input, textarea, select');
        const storageKey = 'poscloud_contact_form';
        
        // Load saved data
        const savedData = localStorage.getItem(storageKey);
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                Object.keys(data).forEach(key => {
                    const field = document.getElementById(key);
                    if (field && field.type !== 'submit') {
                        field.value = data[key];
                    }
                });
            } catch (e) {
                console.error('Error loading saved form data:', e);
            }
        }
        
        // Save data on input
        formFields.forEach(field => {
            field.addEventListener('input', function() {
                const data = {};
                formFields.forEach(f => {
                    if (f.type !== 'submit') {
                        data[f.id] = f.value;
                    }
                });
                localStorage.setItem(storageKey, JSON.stringify(data));
            });
        });
        
        // Clear saved data on successful submission
        contactForm.addEventListener('submit', function() {
            setTimeout(function() {
                if (formMessage && formMessage.classList.contains('success')) {
                    localStorage.removeItem(storageKey);
                }
            }, 2000);
        });
    }
    
    // Initialize auto-save
    setupAutoSave();
    
    // ========================================
    // Spam Protection (Honeypot)
    // ========================================
    function addHoneypot() {
        if (!contactForm) return;
        
        const honeypot = document.createElement('input');
        honeypot.type = 'text';
        honeypot.name = 'website';
        honeypot.style.cssText = 'position: absolute; left: -9999px; width: 1px; height: 1px;';
        honeypot.tabIndex = -1;
        honeypot.setAttribute('autocomplete', 'off');
        
        contactForm.appendChild(honeypot);
        
        // Check honeypot on submit
        contactForm.addEventListener('submit', function(e) {
            if (honeypot.value !== '') {
                e.preventDefault();
                console.warn('Potential spam detected');
                return false;
            }
        });
    }
    
    // Add honeypot field
    addHoneypot();
    
    // ========================================
    // Accessibility Enhancements
    // ========================================
    function setupAccessibility() {
        // Add ARIA labels to form fields without labels
        const fields = contactForm.querySelectorAll('input, textarea, select');
        fields.forEach(field => {
            if (!field.getAttribute('aria-label')) {
                const label = field.parentNode.querySelector('label');
                if (label) {
                    field.setAttribute('aria-label', label.textContent);
                }
            }
        });
        
        // Mark required fields
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.setAttribute('aria-required', 'true');
        });
    }
    
    if (contactForm) {
        setupAccessibility();
    }
    
})();




