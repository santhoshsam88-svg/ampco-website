// ==========================================
// AMPCO MANUFACTURERS - SHARED JAVASCRIPT
// ==========================================

// Navigation scroll effect
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
        
        // Set initial state
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        }
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        fadeObserver.observe(el);
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message (in production, this would send to server)
            alert('Thank you for your inquiry! We will contact you within 24 hours.');
            contactForm.reset();
        });
    }

    // Counter animation for stats
    const animateCounters = () => {
        const counters = document.querySelectorAll('[data-counter]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.counter);
            const suffix = counter.dataset.suffix || '';
            const duration = 1500;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + suffix;
                }
            };
            
            updateCounter();
        });
    };

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
});

// Navigation HTML template
function getNavHTML(activePage = '') {
    return `
    <nav class="nav" id="nav">
        <div class="container">
            <div class="nav-inner">
                <a href="index.html" class="nav-logo" aria-label="Ampco Home">
                    <svg viewBox="0 0 140 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="70" cy="28" rx="67" ry="25" stroke="#1E3A5F" stroke-width="3" fill="none"/>
                        <ellipse cx="70" cy="28" rx="55" ry="19" fill="#1E3A5F"/>
                        <text x="70" y="35" text-anchor="middle" fill="white" font-family="Georgia, serif" font-size="24" font-style="italic">Ampco</text>
                    </svg>
                </a>
                
                <ul class="nav-links">
                    <li class="nav-dropdown">
                        <a href="products.html" class="nav-link nav-dropdown-toggle ${activePage === 'products' ? 'active' : ''}">
                            Products
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                        </a>
                        <div class="nav-dropdown-menu">
                            <a href="products/durable-graphics.html" class="nav-dropdown-item">Durable Graphics</a>
                            <a href="products/membrane-switches.html" class="nav-dropdown-item">Membrane Switches</a>
                            <a href="products/rubber-keypads.html" class="nav-dropdown-item">Rubber Keypads</a>
                            <a href="products/pcba-box-build.html" class="nav-dropdown-item">PCBA Box Build</a>
                            <a href="products/graphic-overlays.html" class="nav-dropdown-item">Graphic Overlays</a>
                            <a href="products/die-cut-components.html" class="nav-dropdown-item">Die Cut Components</a>
                        </div>
                    </li>
                    <li class="nav-dropdown">
                        <a href="industries.html" class="nav-link nav-dropdown-toggle ${activePage === 'industries' ? 'active' : ''}">
                            Industries
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                        </a>
                        <div class="nav-dropdown-menu">
                            <a href="industries/heavy-trucks.html" class="nav-dropdown-item">Heavy Trucks</a>
                            <a href="industries/construction.html" class="nav-dropdown-item">Construction</a>
                            <a href="industries/agriculture.html" class="nav-dropdown-item">Agriculture</a>
                            <a href="industries/industrial.html" class="nav-dropdown-item">Industrial</a>
                            <a href="industries/marine.html" class="nav-dropdown-item">Marine</a>
                        </div>
                    </li>
                    <li class="nav-dropdown">
                        <a href="company/about.html" class="nav-link nav-dropdown-toggle ${activePage === 'company' ? 'active' : ''}">
                            Company
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                        </a>
                        <div class="nav-dropdown-menu">
                            <a href="company/about.html" class="nav-dropdown-item">About Us</a>
                            <a href="company/certifications.html" class="nav-dropdown-item">Certifications</a>
                            <a href="company/quality.html" class="nav-dropdown-item">Quality Policy</a>
                            <a href="company/careers.html" class="nav-dropdown-item">Careers</a>
                            <a href="contact.html" class="nav-dropdown-item">Contact</a>
                        </div>
                    </li>
                </ul>
                
                <a href="contact.html" class="btn btn-primary nav-cta">Request Quote</a>
                
                <button class="mobile-menu-btn" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>
    `;
}

// Footer HTML template
function getFooterHTML() {
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <svg viewBox="0 0 140 56" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 44px; width: auto;">
                        <ellipse cx="70" cy="28" rx="67" ry="25" stroke="#1E3A5F" stroke-width="3" fill="none"/>
                        <ellipse cx="70" cy="28" rx="55" ry="19" fill="#1E3A5F"/>
                        <text x="70" y="35" text-anchor="middle" fill="white" font-family="Georgia, serif" font-size="24" font-style="italic">Ampco</text>
                    </svg>
                    <p>Precision graphics and interface solutions for OEM manufacturers since 1967.</p>
                    <div class="footer-location">Coquitlam, BC, Canada</div>
                </div>
                
                <div>
                    <h4 class="footer-heading">Products</h4>
                    <ul class="footer-links">
                        <li><a href="products/durable-graphics.html">Durable Graphics</a></li>
                        <li><a href="products/membrane-switches.html">Membrane Switches</a></li>
                        <li><a href="products/rubber-keypads.html">Rubber Keypads</a></li>
                        <li><a href="products/pcba-box-build.html">PCBA Box Build</a></li>
                        <li><a href="products/graphic-overlays.html">Graphic Overlays</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="footer-heading">Industries</h4>
                    <ul class="footer-links">
                        <li><a href="industries/heavy-trucks.html">Heavy Trucks</a></li>
                        <li><a href="industries/construction.html">Construction</a></li>
                        <li><a href="industries/agriculture.html">Agriculture</a></li>
                        <li><a href="industries/industrial.html">Industrial</a></li>
                        <li><a href="industries/marine.html">Marine</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="footer-heading">Company</h4>
                    <ul class="footer-links">
                        <li><a href="company/about.html">About Us</a></li>
                        <li><a href="company/certifications.html">Certifications</a></li>
                        <li><a href="company/quality.html">Quality Policy</a></li>
                        <li><a href="company/careers.html">Careers</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-copyright">© 2026 Ampco Manufacturers. All rights reserved.</div>
                <div class="footer-legal">
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="terms.html">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
    `;
}
