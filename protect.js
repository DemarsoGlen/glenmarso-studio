/**
 * Glen Marso Studio — базовая защита контента
 */
(function () {
  'use strict';

  // Запрет правой кнопки мыши
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Запрет выделения текста (на страницах с классом .protect-content)
  document.addEventListener('selectstart', function (e) {
    if (document.body.classList.contains('protect-content') || 
        e.target.closest('.protect-content, .work-text, .manifesto-content')) {
      e.preventDefault();
    }
  });

  // Блокировка горячих клавиш
  document.addEventListener('keydown', function (e) {
    // Ctrl/Cmd + C, S, U, A, P
    if ((e.ctrlKey || e.metaKey) && 
        ['c', 'C', 's', 'S', 'u', 'U', 'a', 'A', 'p', 'P'].includes(e.key)) {
      e.preventDefault();
      return false;
    }

    // F12 (DevTools) — частично
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
  });

  // Защита изображений от перетаскивания
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

  // Дополнительно: запрет копирования через буфер
  document.addEventListener('copy', function (e) {
    if (document.body.classList.contains('protect-content') || 
        window.getSelection().toString().length > 0) {
      e.clipboardData.setData('text/plain', '© Glen Marso Studio');
      e.preventDefault();
    }
  });

})();
