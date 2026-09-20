const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const setHeaderState = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  mobileMenu.hidden = true;
  document.body.classList.remove('menu-open');
};

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  menuToggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
  mobileMenu.hidden = open;
  document.body.classList.toggle('menu-open', !open);
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) closeMenu();
});

const revealItems = document.querySelectorAll('.reveal, .reveal-image');
if (reduceMotion.matches || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  revealItems.forEach((item) => observer.observe(item));
}

const statue = document.querySelector('[data-parallax]');
let parallaxFrame = null;
const updateParallax = () => {
  const hero = document.querySelector('.hero-visual');
  const rect = hero.getBoundingClientRect();
  if (rect.bottom > 0 && rect.top < window.innerHeight) {
    const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    statue.style.setProperty('--parallax-y', `${Math.max(-8, Math.min(16, progress * 18))}px`);
  }
  parallaxFrame = null;
};

if (!reduceMotion.matches) {
  window.addEventListener('scroll', () => {
    if (!parallaxFrame) parallaxFrame = requestAnimationFrame(updateParallax);
  }, { passive: true });
  updateParallax();
}

const form = document.querySelector('[data-contact-form]');
const formStatus = document.querySelector('[data-form-status]');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nome = String(data.get('nome') || '').trim();
  const telefone = String(data.get('telefone') || '').trim();
  const servico = String(data.get('servico') || '').trim();

  if (!nome || !telefone || !servico) {
    formStatus.textContent = 'Preencha nome, WhatsApp e serviço de interesse.';
    const firstInvalid = [...form.elements].find((field) => field.required && !field.value.trim());
    firstInvalid?.focus();
    return;
  }

  formStatus.textContent = '';
  const message = [
    'Olá! Vim pelo site da ERCON e gostaria de agendar uma consultoria.',
    '',
    `Nome: ${nome}`,
    `WhatsApp: ${telefone}`,
    `Empresa/atividade: ${String(data.get('empresa') || '').trim() || 'Não informado'}`,
    `Serviço: ${servico}`,
    `Mensagem: ${String(data.get('mensagem') || '').trim() || 'Não informada'}`,
  ].join('\n');

  window.open(`https://wa.me/5588997619647?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();
