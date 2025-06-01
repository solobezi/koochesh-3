// js/cards.js

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.country-card');

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const isOpen = this.classList.contains('open');

      // بستن تمام کارت‌ها
      cards.forEach(c => c.classList.remove('open'));

      // اگر قبلاً باز نبود، بازش کن
      if (!isOpen) {
        this.classList.add('open');
      }
    });
  });
});
