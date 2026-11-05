
/* =================================
   AQUAFLOW PLUMBING
   Website functionality
================================= */

// IMPORTANT:
// Replace this with the real business WhatsApp
// number before deploying a real client's website.
//
// South African format: 27821234567
// No + sign, spaces or brackets.

const WHATSAPP_NUMBER = "27821234567";

// Mobile navigation

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close mobile menu when a navigation link is selected

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";

  });

});

// Automatically update copyright year

document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// WhatsApp contact form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const name =
    document.getElementById("customerName").value.trim();

  const phone =
    document.getElementById("customerPhone").value.trim();

  const service =
    document.getElementById("serviceType").value;

  const message =
    document.getElementById("customerMessage").value.trim();

  // Basic validation

  if (!name || !phone || !service || !message) {

    alert("Please complete all fields.");

    return;

  }

  // Prevent accidental use of the demonstration number

  if (WHATSAPP_NUMBER === "27821234567") {

    alert(
      "This is a demonstration website. " +
      "Replace the WhatsApp number in script.js " +
      "with the actual business number."
    );

    return;

  }

  // Construct enquiry

  const whatsappMessage =

    `Hello AquaFlow Plumbing!

My name is ${name}.

My contact number is ${phone}.

Service required: ${service}

Additional information:
${message}

I would like to request a quotation.`;

  const encodedMessage =
    encodeURIComponent(whatsappMessage);

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // Open WhatsApp

  window.open(whatsappURL, "_blank", "noopener,noreferrer");

});
