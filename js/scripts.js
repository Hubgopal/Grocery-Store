// ************ Smooth scroll product section *************
const shopNavLinks = document.querySelectorAll(".shop-nav-link");

shopNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    const section = document.querySelector(href);

    section.scrollIntoView({ behavior: "smooth" });
  });
});

// ****************** End Smooth scroll section ************************
