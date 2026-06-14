// ==================== Mobile Menu Toggle ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Navbar Scroll Effect ====================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==================== Scroll Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .project-card, .education-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ==================== Active Nav Link on Scroll ====================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ==================== Typing Effect for Hero Title (Optional Enhancement) ====================
// Uncomment if you want a typing effect
/*
const heroTitle = document.querySelector('.hero-title span');
const text = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});
*/

// ==================== Copy Email to Clipboard ====================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.href.replace('mailto:', '');
        
        // Try to copy to clipboard
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
                // Optional: Show a tooltip or notification
                console.log('Email copied to clipboard:', email);
            }).catch(err => {
                console.log('Could not copy email:', err);
            });
        }
    });
});

// ==================== Print Friendly ====================
// Add print styles support
if (window.matchMedia) {
    const mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener((mql) => {
        if (mql.matches) {
            // Before print
            document.body.classList.add('printing');
        } else {
            // After print
            document.body.classList.remove('printing');
        }
    });
}

// ==================== Lazy Loading Images (if you add profile photo) ====================
// Uncomment when you add a real profile image
/*
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}
*/

// ==================== Project Image Gallery ====================
const galleries = {
    aws: [
        'assets/doc-img/aws/CloudProject_DataPipeline_AWS_01.jpg',
        'assets/doc-img/aws/CloudProject_DataPipeline_AWS_02.jpg'
    ],
    bwa: [
        'assets/doc-img/bwa/Airflow_ss_01.png',
        'assets/doc-img/bwa/Airflow_ss_02.png',
        'assets/doc-img/bwa/BWA-Poster.JPG'
    ],
    mlops: [
        'assets/doc-img/mlops/1_homepage.png',
        'assets/doc-img/mlops/2_Experiments.png',
        'assets/doc-img/mlops/3_Runs.png',
        'assets/doc-img/mlops/4_Model_registry_01.png',
        'assets/doc-img/mlops/5_Model_registry_02.png',
        'assets/doc-img/mlops/6_Model_registry_03.png',
        'assets/doc-img/mlops/7_Model_overview.png',
        'assets/doc-img/mlops/8_Tags_&_Schema.png',
        'assets/doc-img/mlops/9_Model_artifacts.png'
    ]
};

let currentGallery = [];
let currentIndex = 0;

function openGallery(name) {
    currentGallery = galleries[name];
    currentIndex = 0;
    updateGalleryImage();
    document.getElementById('galleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    document.getElementById('galleryModal').classList.remove('active');
    document.body.style.overflow = '';
}

function updateGalleryImage() {
    document.getElementById('galleryImg').src = currentGallery[currentIndex];
    document.getElementById('galleryCounter').textContent = `${currentIndex + 1} / ${currentGallery.length}`;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    updateGalleryImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    updateGalleryImage();
}

document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryModal');
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
});

// ==================== Console Easter Egg ====================
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cLooking for a Data Scientist or ML Engineer?', 'font-size: 14px; color: #64748b;');
console.log('%cLet\'s connect: axrimal1@shockers.wichita.edu', 'font-size: 12px; color: #94a3b8;');
