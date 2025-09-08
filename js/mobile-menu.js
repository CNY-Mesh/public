// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  const mobileMenuIcon = document.getElementById('mobile-menu-icon');
  
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = mainNav.classList.contains('mobile-nav-open');
      
      if (isOpen) {
        // Close menu
        mainNav.classList.remove('mobile-nav-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        if (mobileMenuIcon) {
          mobileMenuIcon.textContent = '☰';
        }
      } else {
        // Open menu
        mainNav.classList.add('mobile-nav-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        if (mobileMenuIcon) {
          mobileMenuIcon.textContent = '✕';
        }
      }
    });
    
    // Close menu when clicking on nav links
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mainNav.classList.remove('mobile-nav-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        if (mobileMenuIcon) {
          mobileMenuIcon.textContent = '☰';
        }
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenuBtn.contains(event.target) && !mainNav.contains(event.target)) {
        mainNav.classList.remove('mobile-nav-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        if (mobileMenuIcon) {
          mobileMenuIcon.textContent = '☰';
        }
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && mainNav.classList.contains('mobile-nav-open')) {
        mainNav.classList.remove('mobile-nav-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        if (mobileMenuIcon) {
          mobileMenuIcon.textContent = '☰';
        }
      }
    });
  }
});
