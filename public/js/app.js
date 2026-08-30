/**
 * L'Univers des Merveilles - Scripts JavaScript principaux
 * Auteur: Marc Lompo | © août 2026, Ouaga BF
 */

/* ============================================================
   NAVIGATION MOBILE
   ============================================================ */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Fermer le menu au clic sur un lien
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ============================================================
   LIEN ACTIF DANS LA NAVIGATION
   ============================================================ */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ============================================================
   ANIMATIONS AU SCROLL (Intersection Observer)
   ============================================================ */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // On peut continuer à observer pour re-animer si besoin
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  observer.observe(el);
});

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
function showToast(message, type = 'success', duration = 3500) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div style="display:flex;align-items:center;gap:0.5rem;">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

/* ============================================================
   NEWSLETTER FORM
   ============================================================ */
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('.newsletter-input');
    const email = input.value.trim();

    if (!email || !email.includes('@')) {
      showToast('Veuillez entrer une adresse email valide.', 'error');
      return;
    }

    showToast('Merci ! Vous êtes bien inscrit(e) à notre newsletter. ✨', 'success');
    input.value = '';
  });
}

/* ============================================================
   LOGO ANIMATION AU SURVOL (toggle)
   ============================================================ */
const navLogo = document.querySelector('.nav-logo');
if (navLogo) {
  let animated = false;
  navLogo.addEventListener('mouseenter', () => {
    if (!animated) {
      navLogo.style.transition = 'transform 0.6s ease';
      navLogo.style.transform = 'rotate(360deg)';
      animated = true;
      setTimeout(() => {
        navLogo.style.transform = '';
        animated = false;
      }, 650);
    }
  });
}

/* ============================================================
   ANIMATION D'OUVERTURE DU LOGO (rotation 160° + jaillissement d'étoiles)
   Se joue une fois au chargement de chaque page, sur le logo du menu
   et, sur l'accueil, sur le grand logo du hero.
   ============================================================ */
function faireJaillirEtoiles(el, nbEtoiles = 8) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const symboles = ['⭐', '✨', '🌟'];

  for (let i = 0; i < nbEtoiles; i++) {
    const star = document.createElement('span');
    star.className = 'logo-star';
    star.textContent = symboles[i % symboles.length];

    const angle = (360 / nbEtoiles) * i + (Math.random() * 20 - 10);
    const distance = 55 + Math.random() * 35;
    const rad = (angle * Math.PI) / 180;
    const tx = Math.cos(rad) * distance;
    const ty = Math.sin(rad) * distance;

    star.style.left = `${centerX}px`;
    star.style.top = `${centerY}px`;
    star.style.setProperty('--tx', `${tx}px`);
    star.style.setProperty('--ty', `${ty}px`);
    star.style.animationDelay = `${i * 0.03}s`;

    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1200);
  }
}

function animerLogoIntro(selecteur, nbEtoiles) {
  const logo = document.querySelector(selecteur);
  if (!logo) return;

  const declencher = () => {
    logo.classList.add('logo-intro-spin');
    setTimeout(() => faireJaillirEtoiles(logo, nbEtoiles), 1100);
    logo.addEventListener('animationend', () => {
      logo.classList.remove('logo-intro-spin');
    }, { once: true });
  };

  // S'assurer que l'image (et sa taille réelle) est chargée avant de calculer la position
  if (logo.complete) {
    declencher();
  } else {
    logo.addEventListener('load', declencher, { once: true });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  animerLogoIntro('.nav-logo', 6);
  animerLogoIntro('.hero-logo', 10);
});
