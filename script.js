const headerHTML = `
<header class="main-header">
  <div class="header-container">
    <div class="logo">DEE <br> PLUS</div>
    <nav class="nav-links">
      <a href="index.html">Home</a>
      <a href="#">Therapy</a>
      <a href="about us.html">About Us</a>
      <a href="meditation.html">Meditation</a>
      <a href="contactus.html">Contact Us</a>
    </nav>
    <div class="icons">
      <img src="images/search_8143292.png" alt="search" class="icon">
      <img src="images/contact_9774942.png" alt="user" class="icon">
    </div>
  </div>
</header>
`;

const footerHTML = `
<footer class="footer">
  <div class="header-container">
    <div class="logo">DEE <br> PLUS</div>
    <ul>
      <li>Home</li>
      <li>Happiness week</li>
      <li>About Us</li>
      <li>Contact us</li>
      <li>Course</li>
      <li>Meditation</li>
    </ul>
    <ul>
      <li>Quick Links</li>
      <li>FAQS</li>
      <li>Terms & Conditions</li>
      <li>Help Centre</li>
      <li>Partnership</li>
    </ul>
    <ul>
      <li>Opening Time</li>
      <li>Monday-Sunday</li>
      <li>9.00AM to 9.00PM</li>
    </ul>
    <ul>
      <li><img src="images/left-right-arrows_12557430.png" class="icon" alt="icon">Contact</li>
      <li>6, Hentheran Road</li>
      <li>Kongu Nagar,</li>
      <li>Karur-26</li>
      <li><img src="images/phone_4855297.png" class="icon" alt="phone">+9532 3256</li>
      <li><img src="images/mail_4933342.png" class="icon" alt="mail">deepluswell@gmail.com</li>
    </ul>
  </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", function() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerHTML;
  }

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }
});
