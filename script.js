// Glen Marso Studio
document.addEventListener('DOMContentLoaded', () => {
  const shards = document.querySelectorAll('.shard');
  
  shards.forEach(shard => {
    shard.addEventListener('mouseenter', () => {
      shard.style.zIndex = '20';
    });
    shard.addEventListener('mouseleave', () => {
      shard.style.zIndex = '';
    });
  });
});
