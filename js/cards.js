document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.country-card');

  cards.forEach(card => {
    const details = card.querySelector('.country-details');

    card.addEventListener('click', function () {
      // بستن همه کارت‌ها به جز کارت فعلی
      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove('open');
          const otherDetails = c.querySelector('.country-details');
          otherDetails.style.maxHeight = null;
          otherDetails.style.padding = "0 1rem";
        }
      });

      // وضعیت فعلی کارت کلیک‌شده
      const isOpen = card.classList.contains('open');

      if (isOpen) {
        // اگه باز بود، ببندش
        details.style.maxHeight = null;
        details.style.padding = "0 1rem";
        card.classList.remove('open');
      } else {
        // اگه بسته بود، بازش کن
        details.style.maxHeight = details.scrollHeight + "px";
        details.style.padding = "1rem";
        card.classList.add('open');
      }
    });
  });
});
