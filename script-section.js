document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.cat-btn');
  const cards = document.querySelectorAll('.work-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Active state
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
