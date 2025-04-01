// Simple JavaScript to make the navigation links smooth scroll
document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links that point to sections
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  // Add click event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target element
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // Scroll smoothly to the target
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header
          behavior: "smooth",
        });
      }
    });
  });

  // Add active class to the current navigation item
  function highlightCurrentSection() {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav ul li a");

    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${currentSectionId}`) {
        item.classList.add("active");
      }
    });
  }

  // Call the function on scroll
  window.addEventListener("scroll", highlightCurrentSection);
});

// Egen JS
const dialog = document.querySelector("dialog");
const openBtn = document.querySelector("dialog + button");
const closeBtn = document.querySelector("dialog button");

openBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.classList.add("closing");
  setTimeout(() => {
    dialog.classList.remove("closing");
    dialog.close();
  }, 300);
});
