// Glen Marso — subtle interactions

document.addEventListener('DOMContentLoaded', () => {
  // Параллакс лёгкий для осколков
  const shards = document.querySelectorAll('.shard');
  
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    shards.forEach((shard, i) => {
      const factor = (i + 1) * 0.3;
      shard.style.transform = `translate(${x * factor}px, ${y * factor}px) rotate(${shard.dataset.rot || 0}deg)`;
    });
  });

  // Сохраняем исходные повороты
  document.querySelectorAll('.shard').forEach((el, i) => {
    const styles = getComputedStyle(el);
    // просто оставляем CSS-повороты
  });

  // Hover-эффект на карточки с лёгким звуком намерения (визуально)
  const cards = document.querySelectorAll('.nav-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.zIndex = '10';
    });
    card.addEventListener('mouseleave', () => {
      card.style.zIndex = '';
    });
  });

  // Плавное появление уже через CSS, но можно добавить IntersectionObserver если нужно
});
