import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// ===== Gallery Swiper =====
export function initGallerySwiper() {
  const el = document.querySelector('[data-swiper="gallery"]');
  if (!el) return;

  return new Swiper(el, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

// ===== Testimonials Swiper =====
export function initTestimonialsSwiper() {
  const el = document.querySelector('[data-swiper="testimonials"]');
  if (!el) return;

  return new Swiper(el, {
    modules: [Pagination, Autoplay, EffectFade],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

// ===== Initialize All Swipers =====
export function initAllSwipers() {
  initGallerySwiper();
  initTestimonialsSwiper();
}
