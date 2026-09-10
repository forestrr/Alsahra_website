import gsap from 'gsap';

export function initWebsiteAnimations() {
  if (typeof window === 'undefined') return;

  // 1. Header scroll blur & shadow
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-md', 'backdrop-blur-md', 'bg-cream/90');
      } else {
        header.classList.remove('shadow-md', 'backdrop-blur-md', 'bg-cream/90');
      }
    }, { passive: true });
  }

  // 2. IntersectionObserver for scroll reveals
  const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseFloat(el.getAttribute('data-reveal-delay') || '0');
          const type = el.getAttribute('data-reveal') || 'fade-up';

          if (type === 'fade-up') {
            gsap.fromTo(el, 
              { opacity: 0, y: 35 }, 
              { opacity: 1, y: 0, duration: 0.85, delay, ease: 'power3.out' }
            );
          } else if (type === 'fade-in') {
            gsap.fromTo(el, 
              { opacity: 0 }, 
              { opacity: 1, duration: 0.8, delay, ease: 'power2.out' }
            );
          } else if (type === 'scale-up') {
            gsap.fromTo(el, 
              { opacity: 0, scale: 0.94 }, 
              { opacity: 1, scale: 1, duration: 0.85, delay, ease: 'back.out(1.4)' }
            );
          }

          observer.unobserve(el);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if no IntersectionObserver
    revealElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // 3. Stats Counter Animation
  const statNumbers = document.querySelectorAll<HTMLElement>('[data-counter-target]');
  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.getAttribute('data-counter-target') || '0', 10);
          const suffix = el.getAttribute('data-counter-suffix') || '';
          
          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: target,
            duration: 2.2,
            ease: 'power3.out',
            onUpdate: () => {
              el.innerText = `${Math.floor(counterObj.val)}${suffix}`;
            }
          });

          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(el => counterObserver.observe(el));
  }

  // 4. Hero 3D interactive subtle card tilt
  const heroCard = document.querySelector<HTMLElement>('#hero-showcase-card');
  if (heroCard && window.innerWidth >= 1024) {
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotX = (y / (rect.height / 2)) * -6;
      const rotY = (x / (rect.width / 2)) * 6;

      gsap.to(heroCard, {
        rotationX: rotX,
        rotationY: rotY,
        transformPerspective: 1000,
        ease: 'power1.out',
        duration: 0.5
      });
    });

    heroCard.addEventListener('mouseleave', () => {
      gsap.to(heroCard, {
        rotationX: 0,
        rotationY: 0,
        ease: 'power2.out',
        duration: 0.8
      });
    });
  }
}
