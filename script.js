// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Typing effect for the hero section
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typing", {
    strings: [
      "Web Developer",
      "Full Stack Developer",
      "Software Engineer",
      "UI Designer",
    ],
    typeSpeed: 101,
    backSpeed: 60,
    loop: true,
    backDelay: 2000,
  });
});
