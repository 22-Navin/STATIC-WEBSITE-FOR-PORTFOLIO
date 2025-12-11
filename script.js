// Set year
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile Nav Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("site-nav");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const expanded = navMenu.getAttribute("aria-expanded") === "true";
      navMenu.setAttribute("aria-expanded", String(!expanded));
    });
  }

  // Project Modal
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalImg = document.getElementById("modal-image");
  const modalClose = document.getElementById("modal-close");

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.dataset.title;
      modalDesc.textContent = card.dataset.desc;
      modalImg.src = card.dataset.img;
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

});

// Contact Form Handler
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const output = document.getElementById("form-msg");

  if (!name || !email || !message) {
    output.textContent = "Please fill all fields.";
    output.style.color = "red";
    return false;
  }

  output.textContent = "Message sent successfully (demo).";
  output.style.color = "green";
  document.getElementById("contact-form").reset();

  return false;
}
