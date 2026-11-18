import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ===== Scroll Progress Bar =====
export function initScrollProgress(color = '#000') {
  const bar = document.querySelector('.scroll-progress-bar');
  if (!bar) return;

  bar.style.background = color;

  // Use manual scroll listener since ScrollTrigger scrub may not work
  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// ===== Navbar Hide/Show =====
export function initNavbar() {
  const navbar = document.querySelector('[data-navbar]');
  if (!navbar) return;

  let lastScrollY = 0;

  const updateNavbar = () => {
    const currentY = window.scrollY;
    if (currentY < lastScrollY || currentY < 100) {
      navbar.style.transform = 'translateY(0)';
    } else {
      navbar.style.transform = 'translateY(-100%)';
    }
    lastScrollY = currentY;
  };

  navbar.style.transition = 'transform 0.3s ease-out';
  window.addEventListener('scroll', updateNavbar, { passive: true });
}

// ===== Hero Parallax =====
export function initHeroParallax() {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;

  const bg = hero.querySelector('[data-hero-bg]');
  const content = hero.querySelector('[data-hero-content]');

  const updateParallax = () => {
    const rect = hero.getBoundingClientRect();
    const heroHeight = hero.offsetHeight;
    const progress = Math.max(0, Math.min(1, -rect.top / heroHeight));

    if (bg) {
      bg.style.transform = `translateY(${progress * 30}%) scale(${1 + progress * 0.1})`;
    }
    if (content) {
      content.style.transform = `translateY(${-progress * 100}px)`;
      content.style.opacity = String(1 - progress * 1.5);
    }
  };

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();
}

// ===== Hero Text Entrance =====
export function initHeroEntrance() {
  const heroContent = document.querySelector('[data-hero-content]');
  if (!heroContent) return;

  const heading = heroContent.querySelector('h1');
  const subtitle = heroContent.querySelector('p');
  const cta = heroContent.querySelector('[data-cta]');

  [heading, subtitle, cta].forEach((el) => {
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(60px)';
      el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    }
  });

  requestAnimationFrame(() => {
    setTimeout(() => {
      if (heading) { heading.style.opacity = '1'; heading.style.transform = 'translateY(0)'; }
    }, 200);
    setTimeout(() => {
      if (subtitle) { subtitle.style.opacity = '1'; subtitle.style.transform = 'translateY(0)'; }
    }, 500);
    setTimeout(() => {
      if (cta) { cta.style.opacity = '1'; cta.style.transform = 'translateY(0)'; }
    }, 800);
  });
}

// ===== Reveal Observer (replaces ScrollTrigger for reveals) =====
function createRevealObserver(elements, animateCallback, options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -5% 0px' } = options;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCallback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold, rootMargin });

  elements.forEach((el) => observer.observe(el));
  return observer;
}

// ===== Fade-In Animations =====
export function initFadeAnimations() {
  const elements = document.querySelectorAll('[data-animate]');

  elements.forEach((el) => {
    const type = el.getAttribute('data-animate');
    const delay = parseFloat(el.getAttribute('data-delay') || '0');
    const duration = parseFloat(el.getAttribute('data-duration') || '1');

    // Set initial hidden state
    el.style.opacity = '0';
    switch (type) {
      case 'fade-up':
        el.style.transform = 'translateY(60px)';
        break;
      case 'fade-left':
        el.style.transform = 'translateX(-60px)';
        break;
      case 'fade-right':
        el.style.transform = 'translateX(60px)';
        break;
      case 'scale-up':
        el.style.transform = 'scale(0.9)';
        break;
      default:
        el.style.transform = 'translateY(40px)';
    }
  });

  createRevealObserver(elements, (el) => {
    const delay = parseFloat(el.getAttribute('data-delay') || '0');
    const duration = parseFloat(el.getAttribute('data-duration') || '1');

    gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease: 'power3.out',
    });
  });
}

// ===== Staggered Cards =====
export function initStaggeredCards() {
  const containers = document.querySelectorAll('[data-stagger]');

  containers.forEach((container) => {
    const cards = Array.from(container.children);
    const staggerDelay = parseFloat(container.getAttribute('data-stagger') || '0.15');

    // Set initial hidden state
    cards.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px)';
    });

    // Observe the container
    createRevealObserver([container], () => {
      cards.forEach((card, i) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * staggerDelay,
          ease: 'power3.out',
        });
      });
    });
  });
}

// ===== Counter Animation =====
export function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');

  createRevealObserver(counters, (counter) => {
    const target = parseInt(counter.getAttribute('data-counter') || '0');
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefix = counter.getAttribute('data-prefix') || '';

    const obj = { value: 0 };

    gsap.to(obj, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        counter.textContent = prefix + Math.round(obj.value) + suffix;
      },
    });
  });
}

// ===== Horizontal Scroll (Pinned) =====
export function initHorizontalScroll() {
  const section = document.querySelector('[data-horizontal-scroll]');
  if (!section) return;

  const wrapper = section.querySelector('[data-horizontal-wrapper]');
  if (!wrapper) return;

  const totalWidth = wrapper.scrollWidth - window.innerWidth;

  gsap.to(wrapper, {
    x: -totalWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${totalWidth}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
}

// ===== Text Highlight on Scroll =====
export function initTextHighlight() {
  const elements = document.querySelectorAll('[data-highlight]');

  elements.forEach((el) => {
    const words = el.textContent.split(' ');
    el.innerHTML = words.map((word) => `<span class="inline-block">${word}</span>`).join(' ');

    const spans = el.querySelectorAll('span');
    spans.forEach((span) => {
      span.style.color = 'rgba(0,0,0,0.2)';
    });

    createRevealObserver([el], () => {
      gsap.to(spans, {
        color: 'rgba(0,0,0,1)',
        stagger: 0.05,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, { rootMargin: '0px 0px -20% 0px' });
  });
}

// ===== Initialize All =====
export function initAllAnimations(options = {}) {
  const { primaryColor = '#000' } = options;

  initScrollProgress(primaryColor);
  initNavbar();
  initHeroParallax();
  initHeroEntrance();
  initFadeAnimations();
  initStaggeredCards();
  initCounters();
  initHorizontalScroll();
  initTextHighlight();
}
