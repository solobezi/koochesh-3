document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.country-card');

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const isOpen = card.classList.contains('open');

      // بستن همه کارت‌ها
      cards.forEach(c => c.classList.remove('open'));

      // اگه کارت بسته بود، بازش کن
      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });
});
