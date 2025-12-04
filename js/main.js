/**
 * Duurzame Vlaggen Blog - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initCategoryFilter();
    initReadingProgress();
    initTableOfContents();
    initNextPostPreview();
    initSmoothScroll();
});

/**
 * Mobile Navigation
 */
function initMobileNav() {
    const toggle = document.querySelector('.header__mobile-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.mobile-nav__close');

    if (!toggle || !mobileNav) return;

    toggle.addEventListener('click', () => {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/**
 * Category Filter
 */
function initCategoryFilter() {
    const buttons = document.querySelectorAll('.category-btn');
    const cards = document.querySelectorAll('.blog-card');

    if (!buttons.length || !cards.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            // Update active button
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards
            cards.forEach(card => {
                const cardCategory = card.dataset.category;

                if (category === 'all' || cardCategory === category) {
                    card.style.display = '';
                    card.style.animation = 'fadeInUp 0.4s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Reading Progress Bar (for article pages)
 */
function initReadingProgress() {
    const progressBar = document.querySelector('.reading-progress');
    const article = document.querySelector('.article-content');

    if (!progressBar || !article) return;

    function updateProgress() {
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        const start = articleTop - windowHeight;
        const end = articleTop + articleHeight - windowHeight;
        const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);

        progressBar.style.width = `${progress * 100}%`;
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
}

/**
 * Table of Contents - Active Link Highlighting
 */
function initTableOfContents() {
    const toc = document.querySelector('.toc');
    const tocLinks = document.querySelectorAll('.toc__link');
    const headings = document.querySelectorAll('.article-content h2[id]');

    if (!toc || !tocLinks.length || !headings.length) return;

    function updateActiveLink() {
        const scrollY = window.scrollY;
        let currentId = '';

        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 150) {
                currentId = heading.id;
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
}

/**
 * Sticky Next Post Preview
 */
function initNextPostPreview() {
    const preview = document.querySelector('.next-post-preview');
    const article = document.querySelector('.article-content');

    if (!preview || !article) return;

    function checkVisibility() {
        const articleBottom = article.offsetTop + article.offsetHeight;
        const scrollBottom = window.scrollY + window.innerHeight;
        const showThreshold = articleBottom - 200;

        if (scrollBottom > showThreshold) {
            preview.classList.add('visible');
        } else {
            preview.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility, { passive: true });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update URL without scrolling
            history.pushState(null, '', targetId);
        });
    });
}

/**
 * Auto-generate Table of Contents
 */
function generateTOC() {
    const article = document.querySelector('.article-content');
    const tocContainer = document.querySelector('.toc__list');

    if (!article || !tocContainer) return;

    const headings = article.querySelectorAll('h2');

    headings.forEach((heading, index) => {
        // Add ID if not exists
        if (!heading.id) {
            heading.id = `section-${index + 1}`;
        }

        const li = document.createElement('li');
        li.className = 'toc__item';

        const a = document.createElement('a');
        a.className = 'toc__link';
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;

        li.appendChild(a);
        tocContainer.appendChild(li);
    });
}

// Call TOC generation
document.addEventListener('DOMContentLoaded', generateTOC);

/**
 * Keyboard Navigation for Post Navigation
 */
document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const prevLink = document.querySelector('.post-nav--prev a');
    const nextLink = document.querySelector('.post-nav--next a');

    if (e.key === 'ArrowLeft' && prevLink) {
        window.location.href = prevLink.href;
    } else if (e.key === 'ArrowRight' && nextLink) {
        window.location.href = nextLink.href;
    }
});

/**
 * Lazy Loading Images
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    }, { rootMargin: '100px' });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * Newsletter Form Handler
 */
document.querySelectorAll('.newsletter-box form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;

        // Simulate form submission
        const button = this.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Verzonden!';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            this.reset();
        }, 2000);
    });
});
