// ABHI TRAVELS — edit the settings below when your business contact details are ready.
const SITE_CONFIG = {
  // Add your WhatsApp number in international format, digits only.
  // Example format for India: 91 followed by the 10-digit mobile number.
  whatsappNumber: ""
};

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
dateInput.min = localToday;

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const pickup = String(data.get("pickup")).trim();
  const date = String(data.get("date"));
  const rentalType = String(data.get("rentalType"));
  const message = `Hello ABHI TRAVELS! I'd like to enquire about a rental. Pickup location: ${pickup}. Travel date: ${date}. Rental type: ${rentalType}. Please share availability and pricing.`;

  const status = document.getElementById("bookingMessage");
  if (SITE_CONFIG.whatsappNumber.trim()) {
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber.trim()}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    status.textContent = "Your enquiry is ready in WhatsApp. Please send the message there. Your booking is not confirmed yet.";
  } else {
    status.textContent = "Thanks! The form is working, but online submission is not connected yet. Add your WhatsApp number in script.js to receive enquiries through WhatsApp.";
  }
});
