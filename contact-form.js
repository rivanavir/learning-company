document.write(`<form class="contact-form" id="contactForm" method="post" name="name">\
  <div class="form-group">\
    <label for="name">Name</label>\
    <input type="text" class="form-control" name="name" id="name" placeholder="Your name">\
  </div>\
  <div class="form-group">\
    <label for="email">Email</label>\
    <input type="email" class="form-control" name="email" id="email" placeholder="Email" required="required" oninvalid="this.setCustomValidity('Please enter a valid email address')">\
  </div>\
  <div class="form-group">\
    <label for="message">Message</label>\
    <textarea class="form-control" id="message" name="message" placeholder="Write your message here"></textarea>\
  </div>\
  <div class="captcha">\
    Captcha place\
  </div>\
  <button type="submit" id="submit" class="btn btn-contact">Click here to Finish</button>\
</form>`);
