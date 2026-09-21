// Keep language changes on the section the visitor is currently reading.
const languageLinks = document.querySelectorAll('.language-switch a');
languageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.getAttribute('aria-current') === 'page') { event.preventDefault(); return; }
    const readingLine = document.querySelector('.site-header').getBoundingClientRect().bottom + 140;
    let sectionId = 'home';
    document.querySelectorAll('main section[id]').forEach((section) => {
      if (section.getBoundingClientRect().top <= readingLine) sectionId = section.id;
    });
    const target = new URL(link.href);
    target.hash = sectionId;
    link.href = target.href;
  });
});
