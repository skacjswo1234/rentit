const menuToggle = document.querySelector(".menu-toggle");
const sideNav = document.querySelector(".side-nav");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".side-nav a");
const header = document.querySelector(".header");
const topButton = document.querySelector(".fab--top");
const floatingActions = document.querySelector(".floating-actions");

const openMenu = () => {
  sideNav.classList.add("active");
  overlay.classList.add("active");
  sideNav.setAttribute("aria-hidden", "false");
};

const closeMenu = () => {
  sideNav.classList.remove("active");
  overlay.classList.remove("active");
  sideNav.setAttribute("aria-hidden", "true");
};

menuToggle?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", closeMenu);
overlay?.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const handleScroll = () => {
  if (header) {
    const isDesktop = window.innerWidth > 1024;
    if (isDesktop && window.scrollY > 20) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }

  if (topButton) {
    if (window.scrollY > 200) {
      topButton.classList.add("visible");
    } else {
      topButton.classList.remove("visible");
    }
  }

  if (floatingActions) {
    const isMobile = window.innerWidth <= 768;
    floatingActions.dataset.layout = isMobile ? "mobile" : "desktop";
  }
};

window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", handleScroll);
handleScroll();

topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

