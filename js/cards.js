// فایل: js/cards.js

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.country-card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('open'); // از 'open' استفاده کن، نه 'expanded'
    });
  });
});
