document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('contactsBtn');
  const panel = document.getElementById('contactsPanel');
  const closeBtn = document.getElementById('contactsClose');

  if (!btn || !panel) return;

  function openPanel() {
    panel.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    panel.hidden = true;
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', openPanel);
  closeBtn.addEventListener('click', closePanel);

  panel.addEventListener('click', (e) => {
    if (e.target === panel) closePanel();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) closePanel();
  });
});
