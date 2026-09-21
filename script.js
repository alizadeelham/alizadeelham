// Keep the copyright current. Navigation and project details work without JS.
document.getElementById('year').textContent = new Date().getFullYear();

document.documentElement.classList.add('js');

// A compact mobile menu with native keyboard controls and explicit state.
const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
menuButton.hidden = false;
function closeMenu() {
  mainNav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
mainNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});

// The original email and LinkedIn links remain usable without JavaScript.
const email = 'Elhamalizadeh.tula@Gmail.com';
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = 'آدرس ایمیل کپی شد.';
    } catch {
      copyStatus.textContent = 'برای کپی، آدرس ایمیل بالا را انتخاب کنید یا از دکمهٔ «ارسال ایمیل» استفاده کنید.';
    }
  });
}

// GitHub Pages has no form backend: prepare an email, never claim it was sent.
const inquiryForm = document.getElementById('inquiry-form');
inquiryForm.hidden = false;
inquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!inquiryForm.reportValidity()) return;
  const data = new FormData(inquiryForm);
  const name = String(data.get('name')).trim();
  const replyTo = String(data.get('email')).trim();
  const message = String(data.get('message')).trim();
  if (!name || !message) {
    document.getElementById('form-status').textContent = 'لطفاً نام و پیام کوتاهی وارد کنید.';
    return;
  }
  const subject = `درخواست همکاری در مدیریت محصول — ${name}`;
  const body = `سلام،\n\n${message}\n\n${name}\n${replyTo}`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('form-status').textContent = 'پیش‌نویس باید در برنامهٔ ایمیل شما باز شود. اگر باز نشد، از آدرس ایمیل یا لینک لینکدین کنار فرم استفاده کنید.';
});

// Open only one project story at a time to keep the page easy to scan.
const projectDetails = [...document.querySelectorAll('.project details')];
projectDetails.forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      projectDetails.forEach((other) => {
        if (other !== detail) other.open = false;
      });
    }
  });
});

// Localize native validation feedback, regardless of the browser UI language.
inquiryForm.querySelectorAll('input, textarea').forEach((field) => {
  field.addEventListener('input', () => field.setCustomValidity(''));
  field.addEventListener('invalid', () => {
    if (field.validity.valueMissing) field.setCustomValidity('لطفاً این قسمت را تکمیل کنید.');
    else if (field.validity.typeMismatch) field.setCustomValidity('لطفاً یک آدرس ایمیل معتبر وارد کنید.');
  });
});
