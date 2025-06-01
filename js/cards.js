document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.country-card');

  cards.forEach(card => {
    const details = card.querySelector('.country-details');

    card.addEventListener('click', function () {
      // بستن تمام کارت‌ها به جز کارت کلیک‌شده
      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove('open');
          const otherDetails = c.querySelector('.country-details');
          otherDetails.style.maxHeight = null;
          otherDetails.style.padding = "0 1rem";
        }
      });

      // باز یا بسته کردن کارت کلیک‌شده
      const isOpen = card.classList.contains('open');
      if (isOpen) {
        details.style.maxHeight = null;
        details.style.padding = "0 1rem";
        card.classList.remove('open');
      } else {
        details.style.maxHeight = details.scrollHeight + "px";
        details.style.padding = "1rem";
        card.classList.add('open');
      }
    });
  });
});
