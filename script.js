const bookingForm = document.querySelector("#bookingForm");
const formStatus = document.querySelector("#formStatus");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(bookingForm);
  const name = data.get("name").toString().trim();
  const phone = data.get("phone").toString().trim();
  const service = data.get("service").toString();
  const time = data.get("time").toString().trim();
  const message = `Hello Biilza Unisex Salon, I am ${name}. My phone number is ${phone}. I want to book ${service} around ${time}.`;
  const whatsappUrl = `https://wa.me/917709296659?text=${encodeURIComponent(message)}`;

  formStatus.textContent = "Opening WhatsApp with your appointment request.";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  bookingForm.reset();
});
