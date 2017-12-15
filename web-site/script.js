  var home = document.querySelector('#home');
  var about = document.querySelector('#about');
  var service = document.querySelector('#service');
  var contact = document.querySelector('#contact');


  home.addEventListener('click', function () {
    location.href = "/web-site/";
  });

  about.addEventListener('click', function () {
    location.href = "/web-site/about.html";
  });

  service.addEventListener('click', function () {
    location.href = "/web-site/service.html";
  });

  contact.addEventListener('click', function () {
    location.href = "/web-site/contact.html";
  });

