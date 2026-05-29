// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// Skill bars animation
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
      });
      skillObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillObs.observe(skillsSection);

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';
  sections.forEach(s => {
    const sectionTop = s.offsetTop - 120;
    const sectionBottom = sectionTop + s.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      current = s.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href').substring(1);
    if (href === current) {
      link.style.color = 'var(--red-light)';
    } else {
      link.style.color = '';
    }
  });
}

// Initial call and event listener for active nav
updateActiveNav();
window.addEventListener('scroll', updateActiveNav);

// Contact form send button functionality
const sendBtn = document.getElementById('sendMessageBtn');
if (sendBtn) {
  sendBtn.addEventListener('click', function() {
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const subject = document.getElementById('subject')?.value || '';
    const message = document.getElementById('message')?.value || '';
    
    if (name && email && message) {
      alert('✨ Thank you for your message, ' + name + '! I will get back to you soon.');
      // Optional: Clear form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    } else {
      alert('Please fill in your name, email, and message before sending.');
    }
  });
}