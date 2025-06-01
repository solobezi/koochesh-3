document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.country-card');

  cards.forEach(card => {
    const details = card.querySelector('.country-details');

    card.addEventListener('click', function () {
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
