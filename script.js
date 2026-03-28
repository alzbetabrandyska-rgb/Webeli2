/* ==========================================================================
   Webeli – JavaScript
   Interaktivita: hamburger menu, smooth scroll, accordion, fade-in, scroll spy
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Hamburger menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu-link');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Zavření menu po kliknutí na odkaz
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }


  /* ---------- Header scroll efekt ---------- */
  const header = document.getElementById('header');

  if (header) {
    const onScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  /* ---------- Scroll spy – aktivní položka v menu ---------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (navLinks.length && sections.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }


  /* ---------- Fade-in animace (IntersectionObserver) ---------- */
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    fadeElements.forEach(el => fadeObserver.observe(el));
  }


  /* ---------- FAQ Accordion ---------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Zavření všech ostatních
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-question');
            const otherAnswer = other.querySelector('.faq-answer');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
          }
        });

        // Toggle aktuálního
        item.classList.toggle('active');
        questionBtn.setAttribute('aria-expanded', !isOpen);

        if (!isOpen) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = null;
        }
      });
    }
  });


  /* ---------- Kontaktní formulář – Formspree ---------- */
  const form = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (form && formSuccess) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          form.style.display = 'none';
          formSuccess.style.display = 'block';
          form.reset();
        } else {
          alert('Omlouváme se, zprávu se nepodařilo odeslat. Zkuste to prosím znovu nebo napište přímo na eli@webeli.cz.');
        }
      } catch (error) {
        alert('Omlouváme se, došlo k chybě. Zkuste to prosím znovu nebo napište přímo na eli@webeli.cz.');
      }
    });
  }

  /* ---------- Záložky – Služby ---------- */
  const tabBtns = document.querySelectorAll('.services-tab-btn');
  const tabPanels = document.querySelectorAll('.services-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => {
        p.hidden = true;
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      document.getElementById(targetId).hidden = false;
    });
  });

  /* ---------- Testimonial expand ---------- */
  document.querySelectorAll('.testimonial-card').forEach(card => {
    const btn = card.querySelector('.testimonial-expand');
    const extras = card.querySelectorAll('.testimonial-extra');
    if (!btn || !extras.length) return;

    btn.addEventListener('click', () => {
      const expanded = btn.classList.toggle('expanded');
      extras.forEach(el => { el.hidden = !expanded; });
      btn.querySelector('svg').nextSibling.textContent = expanded ? ' Méně' : ' Číst více';
    });
  });

});
