document.addEventListener("DOMContentLoaded", () => {

  const services = ["Medication", "Counseling", "CBRS"];

  const header = document.querySelector(".header");
  const btnMobileNav = document.querySelector(".btn-mobile-nav");
  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  // --- Mobile Nav Toggle ---
  if (btnMobileNav) {
    btnMobileNav.addEventListener("click", () => {
      header.classList.toggle("nav-open");
      if (!header.classList.contains("nav-open")) {
        dropdown.classList.remove("open");
      }
    });
  }

  // --- Dropdown Click Toggle ---
  if (dropdownToggle) {
    dropdownToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      dropdown.classList.toggle("open");
    });
  }

  // --- Click anywhere else on the page to close the dropdown ---
  document.addEventListener("click", () => {
    if (dropdown.classList.contains("open")) {
      dropdown.classList.remove("open");
    }
  });

  // --- FAQ Accordion ---
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle("active");
    });
  });

  // --- Form Submission ---
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }
});