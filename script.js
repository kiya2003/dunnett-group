// Mobile nav toggle
document.addEventListener('click', function (e) {
  var toggle = e.target.closest('.nav-toggle');
  if (toggle) {
    var links = document.querySelector('.nav-links');
    if (links) links.classList.toggle('open');
  }
});

// Contact form: front-end only. Replace the form `action` with a real
// endpoint (Formspree, Netlify Forms, etc.) to receive submissions.
var form = document.querySelector('#enquiry-form');
if (form && form.getAttribute('action') === '#') {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.querySelector('#form-msg');
    if (msg) {
      msg.style.display = 'block';
      msg.textContent = 'Thanks, this form needs connecting to an email service before it can send. For now please email info@dunnettgroup.com or call +44 (0)7947 678562.';
    }
  });
}
