// Scroll Animation Observer with proper timing
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

// Intersection Observer for smooth reveal animations
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  // Add reveal class to elements that should animate on scroll
  const elementsToAnimate = document.querySelectorAll(
    '.intro-title, .intro-text p, .platform-title, .platform-text p, ' +
    '.projects-title, .project-card, .advantage-title, .advantage-item, .tech-cta'
  );
  
  elementsToAnimate.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // Hero Section - Initial animations
  const heroElements = document.querySelectorAll(
    '.hero-subtitle, .hero-title, .hero-desc'
  );
  
  heroElements.forEach((el, index) => {
    el.style.opacity = '1';
    el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
  });
});

// Floating tech icons - enhanced animation with random offsets
const techIcons = document.querySelectorAll('.tech-icon');
techIcons.forEach((icon, i) => {
  const randomDelay = -(Math.random() * 6);
  const randomDuration = 5 + Math.random() * 4;
  icon.style.animationDelay = `${randomDelay}s`;
  icon.style.animationDuration = `${randomDuration}s`;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Unified Hero Section scroll animation
const heroContent = document.querySelector('.hero-content');
const scrollIndicator = document.querySelector('.scroll-indicator');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroHeight = window.innerHeight;
  const scrollProgress = Math.min(scrollY / (heroHeight * 0.5), 1);
  
  const translateY = scrollY * 0.8;
  
  if (heroContent) {
    heroContent.style.transform = `translateY(-${translateY}px)`;
    heroContent.style.opacity = Math.max(0, 1 - scrollProgress);
  }
  
  if (navbar) {
    navbar.style.transform = `translateY(-${translateY}px)`;
    navbar.style.opacity = Math.max(0, 1 - scrollProgress);
  }
  
  if (scrollIndicator) {
    scrollIndicator.style.transform = `translateY(-${translateY}px)`;
    scrollIndicator.style.opacity = Math.max(0, 1 - scrollProgress);
  }
});

// Sticky CTA Button logic
const scrollToTopButton = document.querySelector('.sticky-cta');
const ctaSection = document.querySelector('.tech-cta');

window.addEventListener('scroll', () => {
  if (!scrollToTopButton || !ctaSection) return;
  
  const ctaRect = ctaSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  if (ctaRect.top < windowHeight) {
    scrollToTopButton.style.opacity = '0';
    scrollToTopButton.style.pointerEvents = 'none';
  } else if (window.scrollY > 300) {
    scrollToTopButton.style.opacity = '1';
    scrollToTopButton.style.pointerEvents = 'auto';
  } else {
    scrollToTopButton.style.opacity = '0.7';
    scrollToTopButton.style.pointerEvents = 'auto';
  }
});