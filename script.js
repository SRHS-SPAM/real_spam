// Scroll Animation Observer with proper timing
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

// Hero Section - Initial animations only
document.addEventListener('DOMContentLoaded', () => {
  const heroElements = document.querySelectorAll(
    '.hero-subtitle, .hero-title, .hero-desc'
  );
  
  heroElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
  });
});

// Scroll-triggered animations for other sections
const scrollTriggeredElements = document.querySelectorAll(
  '.intro-title, .intro-text, .platform-container, .projects-title, .project-card, .advantage-item, .advantage-content, .tech-cta'
);

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      entry.target.classList.add('animated');
      
      // Intro Title Animation
      if (entry.target.classList.contains('intro-title')) {
        entry.target.style.animation = 'fadeInUp 1s ease-out 0.2s forwards';
        entry.target.style.opacity = '0';
      }
      
      // Intro Text Paragraphs Animation
      if (entry.target.classList.contains('intro-text')) {
        const paragraphs = entry.target.querySelectorAll('p');
        paragraphs.forEach((p, i) => {
          p.style.opacity = '0';
          p.style.animation = `fadeInUp 0.8s ease-out ${0.3 + i * 0.1}s forwards`;
        });
      }
      
      // Platform Container Animation
      if (entry.target.classList.contains('platform-container')) {
        const title = entry.target.querySelector('h2');
        const paragraphs = entry.target.querySelectorAll('p');
        
        if (title) {
          title.style.opacity = '0';
          title.style.animation = 'fadeInUp 1s ease-out 0.2s forwards';
        }
        
        paragraphs.forEach((p, i) => {
          p.style.opacity = '0';
          p.style.animation = `fadeInUp 0.8s ease-out ${0.3 + i * 0.1}s forwards`;
        });
      }
      
      // Projects Title Animation
      if (entry.target.classList.contains('projects-title')) {
        entry.target.style.opacity = '0';
        entry.target.style.animation = 'fadeInUp 1s ease-out 0.2s forwards';
      }
      
      // Project Cards Animation
      if (entry.target.classList.contains('project-card')) {
        const cardIndex = Array.from(document.querySelectorAll('.project-card')).indexOf(entry.target);
        entry.target.style.opacity = '0';
        entry.target.style.animation = `fadeInUp 0.8s ease-out ${0.2 + cardIndex * 0.1}s forwards`;
      }
      
      // Advantage Items Animation
      if (entry.target.classList.contains('advantage-item')) {
        entry.target.style.opacity = '0';
        const itemIndex = Array.from(document.querySelectorAll('.advantage-item')).indexOf(entry.target);
        entry.target.style.animation = `slideInLeft 0.8s ease-out ${0.2 + itemIndex * 0.15}s forwards`;
      }
      
      // Advantage Content Animation (for titles and paragraphs)
      if (entry.target.classList.contains('advantage-content')) {
        const title = entry.target.querySelector('h3');
        const paragraphs = entry.target.querySelectorAll('p');
        
        if (title) {
          title.style.opacity = '0';
          title.style.animation = 'fadeInUp 0.8s ease-out 0.2s forwards';
        }
        
        paragraphs.forEach((p, i) => {
          p.style.opacity = '0';
          p.style.animation = `fadeInUp 0.8s ease-out ${0.3 + i * 0.1}s forwards`;
        });
      }
      
      // Tech CTA Animation
      if (entry.target.classList.contains('tech-cta')) {
        entry.target.style.opacity = '0';
        entry.target.style.animation = 'fadeInUp 1s ease-out 0.3s forwards';
      }
    }
  });
}, observerOptions);

scrollTriggeredElements.forEach(el => scrollObserver.observe(el));

// Staggered project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});

// Staggered advantage items
const advantageItems = document.querySelectorAll('.advantage-item');
advantageItems.forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.15}s`;
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

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(13,13,13,0.8)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'none';
  }
});

// Parallax effect for hero section
const heroContent = document.querySelector('.hero-content');
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
  }
  if (scrollIndicator) {
    scrollIndicator.style.opacity = Math.max(0, 1 - scrollY / 500);
  }
});

// Project card hover effect enhancement
projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.zIndex = '10';
  });
  card.addEventListener('mouseleave', function() {
    this.style.zIndex = '1';
  });
});

// Button ripple effect
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  button.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
}

document.querySelectorAll('.sticky-cta, .cta-button').forEach(button => {
  button.addEventListener('click', createRipple);
});

// Navbar logo animation on scroll
const navLogo = document.querySelector('.nav-logo');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navLogo.style.transform = 'scale(1)';
  } else {
    navLogo.style.transform = 'scale(0.8)';
  }
});

// Smooth number counter for stats (if added in future)
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Scroll to top button functionality
const scrollToTopButton = document.querySelector('.sticky-cta');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.opacity = '1';
    scrollToTopButton.style.pointerEvents = 'auto';
  } else {
    scrollToTopButton.style.opacity = '0.7';
  }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close any open modals if added in future
  }
});

// Intersection Observer for lazy loading (if images added in future)
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));
