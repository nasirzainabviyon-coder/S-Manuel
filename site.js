const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");
const header = document.querySelector(".site-header");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    }
  });
}

if (header) {
  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    },
    { passive: true },
  );
}

const stars = [...document.querySelectorAll(".star-button")];
if (stars.length) {
  let selectedRating = 5;
  const caption = document.querySelector("#rating-caption");

  const updateRating = () => {
    stars.forEach((star, index) => {
      star.style.opacity = index < selectedRating ? "1" : ".38";
      star.setAttribute("aria-checked", String(index + 1 === selectedRating));
    });
    if (caption) caption.textContent = `(${selectedRating} out of 5 stars)`;
  };

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      selectedRating = Number(star.dataset.rating);
      updateRating();
    });
  });
  updateRating();
}

const reviewForm = document.querySelector("#review-form");
if (reviewForm) {
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#review-status").textContent =
      "Thanks for your feedback. Review submission isn't connected in this preview yet.";
    reviewForm.reset();
  });
}

const subscribeForm = document.querySelector("#subscribe-form");
if (subscribeForm) {
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#subscribe-status").textContent =
      "Thanks for your interest. Subscriptions aren't connected in this preview yet.";
    subscribeForm.reset();
  });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#contact-status").textContent =
      "This preview doesn't send messages yet. Please email us directly using the details alongside this form.";
  });
}
