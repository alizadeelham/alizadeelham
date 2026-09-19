// Keep the copyright current. Navigation and project details work without JS.
document.getElementById('year').textContent = new Date().getFullYear();

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
