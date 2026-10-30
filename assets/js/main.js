/**
 * Main Interactive Script for Phùng Trung Nguyên CV Website
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const savedTheme = localStorage.getItem('ptn_theme') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ptn_theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>`;
        themeToggleBtn.setAttribute('title', 'Chuyển sang chế độ Tối');
      } else {
        themeIcon.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>`;
        themeToggleBtn.setAttribute('title', 'Chuyển sang chế độ Sáng');
      }
    }
  }

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // 3. Navbar scroll effect & ScrollSpy
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Navbar glass elevation
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy active link detection
    let currentSection = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentSection}`) {
        item.classList.add('active');
      }
    });
  });

  // 4. Hero Subtitle Typing Effect - strictly using original phrases
  const typedSpan = document.getElementById('typedText');
  const titles = [
    'SINH VIÊN KỸ THUẬT Ô TÔ',
    'ĐẠI HỌC LẠC HỒNG',
    'VÒNG CHUNG KẾT ROBOCON 2024',
    'HỘI THI TAY NGHỀ 2026'
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingDelay = 70;
  const erasingDelay = 35;
  const newTextDelay = 1800;

  function typeEffect() {
    if (!typedSpan) return;
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typedSpan.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedSpan.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(typeEffect, newTextDelay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(typeEffect, 300);
    } else {
      setTimeout(typeEffect, isDeleting ? erasingDelay : typingDelay);
    }
  }

  typeEffect();

  // 5. Interactive Lightbox Modal for images
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  let currentIndex = 0;

  function showLightboxIndex(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentIndex = index;

    const item = galleryItems[currentIndex];
    const img = item.querySelector('img');
    const caption = item.getAttribute('data-caption') || img.getAttribute('alt') || '';

    lightboxImg.src = img.src;
    lightboxCaption.textContent = caption;
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      showLightboxIndex(idx);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (lightboxPrev) lightboxPrev.style.display = 'flex';
      if (lightboxNext) lightboxNext.style.display = 'flex';
    });
  });

  // Direct trigger items (e.g. cv preview button)
  document.querySelectorAll('[data-lightbox-src]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const src = trigger.getAttribute('data-lightbox-src');
      const caption = trigger.getAttribute('data-lightbox-caption') || '';
      lightboxImg.src = src;
      lightboxCaption.textContent = caption;
      if (lightboxPrev) lightboxPrev.style.display = 'none';
      if (lightboxNext) lightboxNext.style.display = 'none';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxIndex(currentIndex - 1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxIndex(currentIndex + 1);
    });
  }

  // Keyboard navigation for Lightbox
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && lightboxPrev && lightboxPrev.style.display !== 'none') showLightboxIndex(currentIndex - 1);
    if (e.key === 'ArrowRight' && lightboxNext && lightboxNext.style.display !== 'none') showLightboxIndex(currentIndex + 1);
  });

  // 6. Toast Notification Utility
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // 7. Quick Copy to Clipboard Buttons
  function copyFallback(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const copyVal = btn.getAttribute('data-copy');
      if (copyVal) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(copyVal).then(() => {
            showToast(`Đã sao chép: "${copyVal}"`);
          }).catch(() => {
            copyFallback(copyVal);
            showToast(`Đã sao chép: "${copyVal}"`);
          });
        } else {
          copyFallback(copyVal);
          showToast(`Đã sao chép: "${copyVal}"`);
        }
      }
    });
  });

  // 8. Print CV Trigger
  document.querySelectorAll('.btn-print-cv').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });

  // 9. Smooth Scroll for Anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 10. Cover Letter Language Switcher & Copy (Giống Mẫu Ảnh)
  const langBtnVi = document.getElementById('langBtnVi');
  const langBtnEn = document.getElementById('langBtnEn');
  const coverLetterVi = document.getElementById('coverLetterVi');
  const coverLetterEn = document.getElementById('coverLetterEn');
  const copyCoverLetterBtn = document.getElementById('copyCoverLetterBtn');

  if (langBtnVi && langBtnEn && coverLetterVi && coverLetterEn) {
    langBtnVi.addEventListener('click', () => {
      langBtnVi.classList.add('active');
      langBtnEn.classList.remove('active');
      coverLetterVi.style.display = 'block';
      coverLetterEn.style.display = 'none';
    });

    langBtnEn.addEventListener('click', () => {
      langBtnEn.classList.add('active');
      langBtnVi.classList.remove('active');
      coverLetterVi.style.display = 'none';
      coverLetterEn.style.display = 'block';
    });
  }

  if (copyCoverLetterBtn) {
    copyCoverLetterBtn.addEventListener('click', () => {
      const isVi = langBtnVi && langBtnVi.classList.contains('active');
      const activeEl = isVi ? coverLetterVi : coverLetterEn;
      if (activeEl) {
        const textToCopy = activeEl.innerText || activeEl.textContent;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            showToast('Đã sao chép nội dung thư ứng tuyển vào bộ nhớ tạm!');
          }).catch(() => {
            copyFallback(textToCopy);
            showToast('Đã sao chép nội dung thư ứng tuyển!');
          });
        } else {
          copyFallback(textToCopy);
          showToast('Đã sao chép nội dung thư ứng tuyển!');
        }
      }
    });
  }
});
