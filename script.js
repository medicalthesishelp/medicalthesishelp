// Mobile navigation toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
})();

// Nav highlight for current section on scroll
(function () {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = [];
  
  navLinks.forEach(function (link) {
    const id = link.getAttribute('href').slice(1);
    if (id && document.getElementById(id)) {
      sections.push({ id: id, link: link });
    }
  });

  function setActive() {
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight * 0.4;
    let current = null;
    
    sections.forEach(function ({ id, link }) {
      const el = document.getElementById(id);
      if (!el) return;
      
      const top = el.getBoundingClientRect().top + scrollY;
      const height = el.offsetHeight;
      
      if (scrollY >= top - innerHeight && scrollY < top + height - innerHeight) {
        current = link;
      }
    });
    
    if (!current && sections.length) {
      current = sections[0].link;
    }
    
    navLinks.forEach(function (link) {
      link.classList.toggle('nav-link--active', link === current);
    });
  }

  window.addEventListener('scroll', setActive);
  window.addEventListener('load', setActive);
})();