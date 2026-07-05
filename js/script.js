/* ARUNA Fabric & Boutique — site script */
document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  /* ---------- Highlight active nav link ---------- */
  var here = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    var target = link.getAttribute('href');
    if (target === here || (here === '' && target === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- Lightbox for gallery pages ---------- */
  var galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length) {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML =
      '<button class="lightbox-close" aria-label="Close preview">&times;</button>' +
      '<img src="" alt="">' +
      '<div class="lightbox-caption"></div>';
    document.body.appendChild(lightbox);

    var lbImg = lightbox.querySelector('img');
    var lbCaption = lightbox.querySelector('.lightbox-caption');
    var lbClose = lightbox.querySelector('.lightbox-close');

    function openLightbox(src, caption) {
      lbImg.setAttribute('src', src);
      lbImg.setAttribute('alt', caption);
      lbCaption.textContent = caption;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var img = item.querySelector('img');
        var caption = item.querySelector('figcaption');
        openLightbox(img.getAttribute('src'), caption ? caption.textContent : img.getAttribute('alt'));
      });
    });

    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /* ---------- Contact form validation ---------- */
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');

    function showError(fieldId, message) {
      var el = document.getElementById(fieldId + '-error');
      if (el) el.textContent = message || '';
    }

    function isValidEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var message = form.querySelector('#message');
      var valid = true;

      showError('name', ''); showError('email', ''); showError('message', '');

      if (!name.value.trim()) { showError('name', 'Please enter your name.'); valid = false; }
      if (!email.value.trim()) { showError('email', 'Please enter your email.'); valid = false; }
      else if (!isValidEmail(email.value.trim())) { showError('email', 'Please enter a valid email address.'); valid = false; }
      if (!message.value.trim()) { showError('message', 'Please enter a short message.'); valid = false; }

      if (!valid) {
        status.classList.remove('show');
        return;
      }

      /* No backend is wired up yet — this simply confirms receipt locally.
         Replace this block with a fetch() call to your email/service endpoint
         when you're ready to receive live enquiries. */
      status.textContent = 'Thank you, ' + name.value.trim() + '. Your message has been noted — we will get back to you shortly.';
      status.classList.add('show');
      form.reset();
    });
  }

});
