const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navActions = document.querySelector('.nav-actions');

if (menuToggle && mainNav && navActions) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));

    if (isOpen) {
      mainNav.style.display = 'none';
      navActions.style.display = 'none';
    } else {
      mainNav.style.display = 'flex';
      navActions.style.display = 'flex';
      mainNav.style.flexDirection = 'column';
      navActions.style.flexDirection = 'column';
      mainNav.style.position = 'absolute';
      mainNav.style.top = '84px';
      mainNav.style.left = '16px';
      mainNav.style.right = '16px';
      mainNav.style.background = 'rgba(255,255,255,0.95)';
      mainNav.style.border = '1px solid rgba(20, 33, 61, 0.08)';
      mainNav.style.borderRadius = '18px';
      mainNav.style.padding = '18px';
      navActions.style.position = 'absolute';
      navActions.style.top = 'calc(84px + 220px)';
      navActions.style.left = '16px';
      navActions.style.right = '16px';
      navActions.style.background = 'rgba(255,255,255,0.95)';
      navActions.style.border = '1px solid rgba(20, 33, 61, 0.08)';
      navActions.style.borderRadius = '18px';
      navActions.style.padding = '18px';
    }
  });
}

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');

  button.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    faqItems.forEach((faq) => {
      faq.classList.remove('active');
    });

    if (!isActive) {
      item.classList.add('active');
    }
  });
});

const orderForm = document.querySelector('.order-form');

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = orderForm.querySelector('button');
    const originalText = button.textContent;

    button.textContent = 'Заявка отправлена';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      orderForm.reset();
    }, 2000);
  });
}
